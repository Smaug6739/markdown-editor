client.on('message', message => {

	if (!message.guild) return;

	if (message.member.hasPermission("ADMINISTRATOR"))

		if (message.content.startsWith('kick')) {

			const user = message.mentions.users.first();

			if (user) {

				const member = message.guild.member(user);

				if (member) {

					member
						.kick('Raison facultative qui s’affichera dans les journaux d’audit')
						.then(() => {

							message.reply(`Ce membre a été kick avec succès. ${user.tag}`);
						})
						.catch(err => {

							message.reply('Je n’ai pas été en mesure de kick ce membre.');
							console.error(err);
						});
				} else {
					message.reply("Cet utilisateur n’est pas dans cette guilde !");
				}
			} else {
				message.reply("Vous n’avez pas mentionné l’utilisateur à kick !");
			}
		}
});

client.on('message', message => {

	if (!message.guild) return;

	if (message.member.hasPermission("ADMINISTRATOR"))

		if (message.content.startsWith('ban')) {

			const user = message.mentions.users.first();

			if (user) {

				const member = message.guild.member(user);

				if (member) {

					member
						.ban({
							reason: 'Ce joueur a été banni.',
						})
						.then(() => {

							message.reply(`Banni avec succès ${user.tag}`);
						})
						.catch(err => {

							message.reply('Je n’ai pas pu bannir le membre.');

							console.error(err);
						});
				} else {

					message.reply("Cet utilisateur n’est pas dans cette guilde !");
				}
			} else {

				message.reply("Vous n’avez pas mentionné l’utilisateur à ban.");
			}
		} else if (message.content.startsWith('mute')) {
			let mention = message.mentions.members.first();

			if (mention == undefined) {
				message.reply(mention.displayName + "mute avec succès.");
			}
		}
});