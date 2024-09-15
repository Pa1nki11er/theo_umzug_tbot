import { markups } from "./templates/markups/markups_ua.js";
const newApplication = (ctx, chatId, bot) => {
    bot.telegram.sendMessage(chatId, "Будь ласка оберіть послугу", markups.typeOfService);
}

const contacts = (ctx, chatId, bot) => {
    bot.telegram.sendMessage(chatId, "Номери телефону підтримки: ");
}

export const scenarios = {
    newApplication,
    contacts
}