import VkBot from 'node-vk-bot-api'
import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const bot = new VkBot({
    token:process.env.TOKEN || ''
});

const app = express();

app.set('port', (process.env.PORT || 5000));
app.get('/', function(request, response) {
    const result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
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
