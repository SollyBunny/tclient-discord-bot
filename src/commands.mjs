const commands = {};

commands["ddnet"] = {
	embeds: [{
		color: 0xFFAA00,
		title: "DDNet Affiliation",
		description: `First and foremost: TClient and DDNet are not affiliated
TClient aims to give a better experience but will never add anything deemed to be a hack by the DDNet team
You can join their discord here <https://discord.gg/RYHn79jm7e>`,
	}],
};

commands["kog"] = {
	embeds: [{
		color: 0xFFAA00,
		title: "KoG Affiliation",
		description: `First and foremost: Neither TClient nor DDNet are affiliated with KoG
You can join their discord [here](<https://discord.gg/NrPcJwbcEQ>)`,
	}],
};

commands["configdir"] = {
	embeds: [{
		color: 0xFFAA00,
		title: "Config Directories",
		description: `Never put config in your install directory, this may lead to bugs
### On Windows
Old: \`%appdata%\\Teeworlds\`
New: \`%appdata%\\DDNet\`
### On Linux:
Old: \`~/.teeworlds\`
New: \`~/.local/share/ddnet\`
### On MacOS:
Old: \`~/Library/Application Support/Teeworlds\`
New: \`~/Library/Application Support/DDNet\``
	}],
};

commands["help"] = {
	embeds: [{
		color: 0xFFAA00,
		title: "Command List",
		description: ["ddnet", "kog", "configdir", "help"].map(i => `**\$${i}**`).join(", ")
	}]
}

export default commands;
