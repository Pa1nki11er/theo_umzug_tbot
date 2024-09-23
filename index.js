import { Telegraf } from "telegraf";

import { markups } from "./templates/markups/markups_ua.js";

import { scenarios } from "./scenarios.js";

import { messages } from "./templates/texts/messages.js";

import dotenv from 'dotenv';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN, {});

// bot.on('new_chat_members', (ctx, next) => {
//     ctx.reply("Ласкаво просимо до нашого бота!\n Тут Ви можете подати заявку для послуги переїзду!", markups.startMenu);
    
//     next();
// });

bot.start((ctx, next) => {
    ctx.reply(messages.greeting(ctx),  {
        reply_markup: markups.startMenu,
        parse_mode: 'HTML'
      });
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
        scenarios.contacts(ctx, chatId, bot);
    }
    if (ctx.message.text === "❓") {
        scenarios.qa(ctx, chatId, bot);
    }
    if (ctx.message.text === "Головне меню") {
        scenarios.newApplication(ctx, chatId, bot);
    }
    if (ctx.message.text === "Ціни") {
        scenarios.prices(ctx, chatId, bot);
    }
    
    next();
});

bot.launch();

