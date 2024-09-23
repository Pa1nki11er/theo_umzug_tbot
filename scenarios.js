import { markups } from "./templates/markups/markups_ua.js";
import { messages } from "./templates/texts/messages.js";
import { texts } from "./templates/texts/texts.js";
const newApplication = (ctx, chatId, bot) => {
    bot.telegram.sendMessage(chatId, messages.selectService, markups.typeOfService);
}

const contacts = (ctx, chatId, bot) => {
    bot.telegram.sendMessage(chatId, "Номери телефону підтримки: ");
}
const qa = (ctx, chatId, bot) => {
    bot.telegram.sendMessage(chatId, "Оберіть будь ласка питання", markups.qaQuestions);
}
const mainMenu = (ctx, chatId, bot) => {
    bot.telegram.sendMessage(chatId, "Оберіть будь ласка питання", markups.qaQuestions);
}
const prices = (ctx, chatId, bot) => {
    bot.telegram.sendMessage(chatId, texts.prices);
}

export const scenarios = {
    newApplication,
    contacts,
    qa,
    prices  
}