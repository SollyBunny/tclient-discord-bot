import "dotenv/config";

import { client, getChannel, awaitReady } from "./bot.mjs";

import filters from "./filters.mjs";
import commands from "./commands.mjs";

const CHANNEL_ERROR = "Secret/bot-errors";
const CHANNEL_LOGS = "Secret/bot-logs";

client.on("messageCreate", async (message) => {
	if (message.author.bot) return;

	const content = message.content.toLowerCase();

	if (message.guild && message.member) {
		for (const [name, {description, match, action}] of Object.entries(filters)) {
			if (match(content)) {
				action(message);
				(await getChannel(CHANNEL_LOGS)).send({
					embeds: [{
						color: 0xFFAA00,
						title: `${name} Filter`,
						description: `Author: <@${message.author.id}>\nContent: \`\`\`\n${message.content.replaceAll("```", "`\U200B``")}\n\`\`\``,
					}],
				});
				return;
			}
		}
	}

	if (content.includes("$")) {
		for (const { name, message } of Object.entries(commands)) {
			if(content.includes("$" + name)) {
				message.reply(message);
				return;
			}
		}
	}
});

client.login(process.env.TOKEN);
await awaitReady();

console.log(`Logged in as ${client.user.tag}!`);

const { default: info } = await import("./info.mjs");
console.log(info)
const sleep = t => new Promise(resolve => setTimeout(resolve, t));
for (const [name, messages] of Object.entries(info)) {
	const channel = await getChannel(name);
	if (!channel)
		throw new Error(`No channel named ${channel}`);
	for (const [_, message] of await channel.messages.fetch({ limit: 100 }))
		if (message.author.id 
			=== client.user.id)
			await message.delete();
	for (const message of messages)
		await channel.send(message);
	await sleep(100);
}

async function error(e) {
	console.error(e);
	console.error(e.stack);
	if (!client)
		return;
	const channel = await getChannel(CHANNEL_ERROR);
	if (!channel) {
		console.error(`${CHANNEL_ERROR} not found`);
		return;
	}
	channel.send({
		embeds: [{
			color: 0xFFAA00,
			title: "Error",
			description: `\`\`\`js\n${e.message}\n${e.stack}\n\`\`\``,
		}],
	});
}

process.on("uncaughtException", error);
process.on("unhandledRejection", error);
