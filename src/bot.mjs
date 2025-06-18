import { Client, GatewayIntentBits, Partials } from "discord.js";

export const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.MessageContent,
	],
	partials: [
		Partials.Channel
	],
});

let awaitReadyResolve, awaitReadyReject;
const awaitReadyPromise = new Promise((resolve, reject) => {
	awaitReadyResolve = resolve;
	awaitReadyReject = reject;
});
export function awaitReady() { return awaitReadyPromise; }
client.once("ready", () => awaitReadyResolve());

export async function getChannel(p) {
	const [group, name] = p.split("/").map(i => i || undefined);
	if (client.guilds.cache.size === 0)
		await client.guilds.fetch();
	const guild = client.guilds.cache.first();
	if (!guild) return undefined;

	const channels = await guild.channels.fetch();
	if (!channels) return undefined;

	return channels.find(
		(ch) =>
			ch.name === name &&
			(ch.parent?.name || undefined) === group
	);
}
