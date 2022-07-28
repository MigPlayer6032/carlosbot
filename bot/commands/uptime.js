const Discord = require("discord.js");

module.exports = {
	name: "uptime",
	description: "Veja à quanto tempo eu dormi pela última vez!",
	run: async (client, message, args) => {
		let totalSeconds = client.uptime / 1000;
		let days = Math.floor(totalSeconds / 86400);
		let hours = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;
		let minutes = Math.floor(totalSeconds / 60);
		let seconds = totalSeconds % 60;

		let uptime = `🗓️ ${days.toFixed()} dias\n🗓️ ${hours.toFixed()} horas\n🗓️ ${minutes.toFixed()} minutos\n🗓️ ${seconds.toFixed()} segundos`;

		const embed = new Discord.MessageEmbed()
			.setTitle("Tempo de atividade")
			.setThumbnail("https://imgur.com/WZMylbw.gif")
			.setColor("#FF0000")
			.setDescription(`Estou online há: **\n${uptime}**, sabia?`)

		message.channel.send("Desculpe pela inconveniência, mas agora este comando está disponível em `" + client.prefix + "botinfo`!");
	}
}