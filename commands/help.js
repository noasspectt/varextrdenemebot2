const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'yardım',
    description: 'Botun komutlarını gösterir.',
    execute(message) {
        // Embed mesajını oluşturuyoruz
        const helpEmbed = new EmbedBuilder()
            .setColor('#0099ff') // Embed'in rengini ayarla
            .setTitle('Yardım Menüsü') // Başlık
            .setDescription('Burada botun mevcut komutlarını bulabilirsiniz.') // Açıklama
            .addFields(
                { name: '!ban', value: 'Bir kullanıcıyı sunucudan banlar.', inline: true },
                { name: '!forceban', value: 'Bir kullanıcıyı sunucuda bulunmasa bile banlar.', inline: true },
                { name: '!kick', value: 'Bir kullanıcıyı sunucudan atar.', inline: true },
                { name: '!capslock-engel', value: 'Capslock engelleme sistemini açar veya kapatır.', inline: true },
                { name: '!küfür-engel', value: 'Küfür engelleme sistemini açar veya kapatır.', inline: true },
                { name: '!reklam-engel', value: 'Reklam engelleme sistemini açar veya kapatır.', inline: true },
                { name: '!slowmode', value: 'Bir kanalda yavaş mod ayarlar. ', inline: true },
                { name: '!timeout', value: 'Bir kullanıcıya belirtilen süre kadar timeout atar.', inline: true },
                { name: '!untimeout ', value: 'Bir kullanıcının timeoutunu kaldırır.', inline: true },
                { name: '!log-channel', value: 'Log kanalı ayarlar.', inline: true },
                { name: '!ban-list', value: 'Sunucudaki banlı kullanıcıları listeler.', inline: true },
                { name: '!add-role', value: 'Belirtilen kullanıcıya belirtilen rolü verir.', inline: true },
                { name: '!remove-role', value: 'Belirtilen kullanıcıdan belirtilen rolü alır.', inline: true },
                { name: '!unban', value: 'Belirtilen kullanıcının banını kaldırır.', inline: true },
                { name: '!sil', value: 'Belirtilen sayıda mesajı siler (100\'den fazla olamaz).', inline: true },
                { name: '!snipe', value: 'Chatte son silinen mesajı tekrarlar.', inline: true },
                { name: '!server-info', value: 'Sunucu ile alakalı infoları verir.', inline: true },
                { name: '!user-info', value: 'Belirtilen kullanıcı hakkındaki infoları verir.', inline: true },
                { name: '!ship', value: 'Belirtilen iki kullanıcıyı shipler.', inline: true },
                { name: '!afk', value: 'Kullanıcıyı afk durumuna geçirir', inline: true },
                { name: '!avatar', value: 'Kullanıcının avatarını gösterir', inline: true },
                { name: '!istatistik', value: 'Botun istatistiklerini verir.', inline: true },
                { name: '!get-emoji', value: 'Belirtilen emoji hakkında bilgi verir.', inline: true },
                { name: '!kanal-kilitle', value: 'Kanal kilitleyip açar.', inline: true },
                { name: 'Destek Sunucusu', value: '[Destek Sunucumuza Katılın](https://discord.gg/4V8Fr5MM7M)', inline: false } // Destek sunucusu linki
            )
            .setImage('https://cdn.discordapp.com/attachments/1042439195450429452/1360374307158491176/standard.gif?ex=67fae2cd&is=67f9914d&hm=72692dd063663e62ae73ac11416dd13c6705c3d6a7f367adc55ad178415b2dd7&') // Altında gösterilecek GIF
            .setFooter({ text: 'Bot Yardımı', iconURL: 'https://imgur.com/a/zy5FNnZ' }); // Footer alanı

        // Kullanıcıya embed mesajını gönder
        message.channel.send({ embeds: [helpEmbed] });
    },
};