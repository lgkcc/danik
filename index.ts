import VkBot from 'node-vk-bot-api'
import dotenv from 'dotenv'

dotenv.config()

const bot = new VkBot({
    token:process.env.TOKEN || ''
});

const danikId = "@id223831975"

const daniks = ['даник', 'даня', 'данил', 'даниил', 'danik', 'danil', 'daniil', 'dranik', 'драник', 'даниэлла', 'лох', 'гей', 'программист']

bot.on((ctx) => {
    if(ctx.message.from_id === 223831975) {
        const random = Math.random() * 100
        if(random >= 45) {
            return
        }
        return ctx.reply('Да-да, Даня, ты прав');
    }
    if(daniks.includes(ctx.message.text?.toLowerCase() || '')) {
        return ctx.reply(`${danikId}(Лох)`);
    }
});

bot.startPolling((err) => {
    console.log('start')
    if (err) {
        console.error(err);
    }
    return {}
});
