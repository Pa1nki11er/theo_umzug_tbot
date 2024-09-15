import { Telegraf } from "telegraf";

import { markups } from "./templates/markups/markups_ua.js";

import { scenarios } from "./scenarios.js";

import { texts } from "./templates/texts/texts_ua.js";

import dotenv from 'dotenv';

dotenv.config();

//vlad
const bot = new Telegraf(process.env.BOT_TOKEN, {});

// bot.on('new_chat_members', (ctx, next) => {
//     ctx.reply("Ласкаво просимо до нашого бота!\n Тут Ви можете подати заявку для послуги переїзду!", markups.startMenu);
    
//     next();
// });

bot.start((ctx, next) => {
    ctx.reply(texts.greeting(ctx), markups.startMenu);
    console.log(markups.startMenu.reply_markup.keyboard[0][0].callback_data);
    next();
});

bot.on('message', (ctx, next) => {
    const chatId = ctx.chat.id;
    if (ctx.message.text === "Подати заявку") {
        scenarios.newApplication(ctx, chatId, bot);
    }
    if (ctx.message.text === "Калькулятор") {
        scenarios.newApplication(ctx, chatId, bot);
    }
    if (ctx.message.text === "Контакти") {
        scenarios.newApplication(ctx, chatId, bot);
    }
    
    next();
});

bot.launch();

