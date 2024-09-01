import { Telegraf } from "telegraf";

import { markups } from "./markups_ua.js";

import { scenarios } from "./scenarios.js";

import { texts } from "./texts_ua.js";

import dotenv from 'dotenv';

dotenv.config();


const bot = new Telegraf(process.env.BOT_TOKEN, {});

// bot.on('new_chat_members', (ctx, next) => {
//     ctx.reply("Ласкаво просимо до нашого бота!\n Тут Ви можете подати заявку для послуги переїзду!", markups.startMenu);
    
//     next();
// });

bot.start((ctx, next) => {
    ctx.reply(texts.greeting(ctx), markups.startMenu);
    next();
});

bot.on('message', (ctx, next) => {
    const chatId = ctx.chat.id;
    if (ctx.message.text === "Подати заявку") {
        scenarios.newApplication(ctx, chatId, bot);
    }
    next();
});

bot.launch();

