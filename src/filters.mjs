const filters = {};

filters["Big Pings"] = {
	description: "Messages with large pings aren't allowed",
	match: content => content.includes("@everyone") || content.includes("@here"),
	action: async message => {
		message.delete();
		message.member.timeout(60_000, "Messages with large pings aren't allowed");
	},
};

export default filters;
