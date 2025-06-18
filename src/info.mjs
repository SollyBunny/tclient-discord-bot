import { getChannel } from "./bot.mjs";

const info = {};

info["Information/faq"] = [
	{
		content: "# FAQ\n"
			+ `также см. это <#${(await getChannel("Information/русский-чаво")).id}>\n\u200E\n` + Object.entries({
			"Does the client contain cheats?":
				"No, anything deemed by DDNet as a cheat will never be added.",
			"When are you adding {certain feature}? Will you add {certain feature}?":
				`I prioritize adding features that are the most useful for how much effort they take to implement. Multiple people asking in <#${(await getChannel("Text Channels/feature-request")).id}> will increase the chance it is added.`,
			"When is the next update?":
				"When new features are done, or DDNet updates.",
			"How do I copy a tclient conflig, or transfer a tclient config file to my game?":
				"Open the client, go to tclient settings, press the \"Info\" tab and press the \"TClient Settings\" button, this will open the file",
			"Why TClient isn't openeing and just shows in task manager?":
				"The legacy config for bindwheel is currently broken, delete lines starting with bindwheel in settings_tclient.cfg",
			"I don't like animated emote wheel and bind wheel, how do i turn it off?":
				"`tc_animate_wheel_time 0`",
			"My conditionals aren't working in nightly":
				"This was an experiemntal feature and was changed for ease of parsing, use `{var}` instead of `$(var)` now",
		}).map(([q, a]) => `## Q: ${q}\nA: ${a}`).join("\n\u200E\n"),
	},
];

info["Information/русский-чаво"] = [
	{
		content: `# русский-чаво\nSee also English <#${(await getChannel("Information/faq")).id}>\nTranslation by <@623924391356399616>\n\u200E\n` + Object.entries({
			"Есть ли в клиенте читы?":
				"Нет, anything deemed by DDNet as a cheat will never be added.",
			"Когда вы добавите {определенную функцию}? Добавите ли вы {определенную функцию}?":
				`Создатель сам решит какие функции добавить в клиент, которые наиболее полезны с точки зрения усилий, необходимых для их реализации. Если несколько человек отправят запрос в <#${(await getChannel("Text Channels/feature-request")).id}> это увеличит вероятность того, что он будет добавлен.`,
			"Когда выйдет следующее обновление?":
				"Когда доделают все функции, или-же при обновлении DDNet'а.",
			"Как скопировать конфигурацию TClient'a или перенести файл конфигурации TClient'a в мою игру?":
				"Откройте клиент, перейдите в настройки TClient'a, нажмите вкладку \"Информация\" и нажмите кнопку \"Настройки TClient\", это откроет файл",
			"Почему TClient не открывается и просто отображается в диспетчере задач?":
				"Ответ: Устаревшая конфигурация для `bindwheel` в настоящее время сломана, удалите строки, начинающиеся с bindwheel в `settings_tclient.cfg`",
			"Мне не нравятся анимированные колесо эмоций и колеса биндов, как мне их отключить?":
				"`tc_animate_wheel_time 0`",
			"My conditionals aren't working in nightly":
				"This was an experiemntal feature and was changed for ease of parsing, use `{var}` instead of `$(var)` now",
		}).map(([q, a]) => `## Вопрос: ${q}\nОтвет: ${a}`).join("\n\u200E\n"),
		allowedMentions: { parse: [] },
	},
];

export default info;
