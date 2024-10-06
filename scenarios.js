/**
 * @module scenarios
 * @description all scenarios of the bot
 * @exports {Object} scenarios - Object with all texts
 * @exports {String} scenarios.newApplication - scenario for new application
 * @exports {String} scenarios.prices - scenario for prices
 * @exports {String} scenarios.selectService - scenario for select Service
 */

import { markups } from "./templates/markups/markups_ua.js";
import { texts } from "./templates/texts/texts.js";

const newApplication = (ctx, chatId, bot) => {
    bot.telegram.sendMessage(chatId, texts.selectService, markups.typeOfService);
}

const contacts = (ctx, chatId, bot) => {
    bot.telegram.sendMessage(chatId, texts.telNum);
}
const qa = (ctx, chatId, bot) => {
    bot.telegram.sendMessage(chatId, "Оберіть будь ласка питання", markups.qaQuestions);
}
const mainMenu = (ctx, chatId, bot) => {
    bot.telegram.sendMessage(chatId, "Головне меню", markups.startMenu);
}
const prices = (ctx, chatId, bot) => {
    bot.telegram.sendMessage(chatId, texts.prices);
}

const artOfInvoice = (ctx, chatId, bot) => {
    bot.telegram.sendMessage(chatId, texts.selectService, markups.artOfInvoiceMarkUp);
}

const independentApplication = (ctx, chatId, bot) => {
    setTimeout(() => {
        bot.telegram.sendMessage(chatId, texts.descriptionWarning);
    }, 100);

    setTimeout(() => {
        bot.telegram.sendMessage(chatId, texts.transportSupport, markups.typeOfService);
    }, 200);

    setTimeout(() => {
        bot.telegram.sendMessage(chatId, texts.transportTaxi, markups.typeOfService);
    }, 300);
    
}

const transportHelp = (ctx, chatId, bot)=>{
    setTimeout(() => {
        bot.telegram.sendMessage(chatId, texts.prices);
    }, 100);

    setTimeout(() => {
        bot.telegram.sendMessage(chatId, texts.questionsWarning);
    }, 200);

    setTimeout(() => {
        bot.telegram.sendMessage(chatId, texts.locationFrom, markups.locationFromReq);
    }, 300);
}

export const scenarios = {
    newApplication,
    contacts,
    qa,
    prices,
    mainMenu,
    transportHelp,
    artOfInvoice,
    independentApplication
}