import { Telegraf } from "telegraf";

import { markups } from "./templates/markups/markups_ua.js";

import { scenarios } from "./scenarios.js";

import { texts } from "./templates/texts/texts.js";


import dotenv from 'dotenv';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN, {});

let lastClickedOption = "";

// bot.on('new_chat_members', (ctx, next) => {
//     ctx.reply("Ласкаво просимо до нашого бота!\n Тут Ви можете подати заявку для послуги переїзду!", markups.startMenu);
    
//     next();
// });

bot.start((ctx, next) => {
    ctx.reply(texts.greetingText(ctx.from.first_name), markups.startMenu);
    next();
});

bot.on('message', (ctx, next) => {
    const chatId = ctx.chat.id;
    const text = ctx.message.text;

    const commandMap = {
        "Подати заявку": () => scenarios.artOfInvoice(ctx, chatId, bot),
        "Калькулятор": () => scenarios.newApplication(ctx, chatId, bot),
        "Контакти": () => scenarios.contacts(ctx, chatId, bot),
        "❓": () => scenarios.qa(ctx, chatId, bot),
        "Головне меню": () => scenarios.mainMenu(ctx, chatId, bot),
        "Ціни": () => scenarios.prices(ctx, chatId, bot),
        "Umzughilfe": () => scenarios.transportHelp(ctx, chatId, bot),
        "Самойстійно": () => scenarios.independentApplication(ctx, chatId, bot)
    };

    if (commandMap[text]) {
        commandMap[text]();
    }
    console.log(ctx.message.location);

    next();
});


bot.launch();

