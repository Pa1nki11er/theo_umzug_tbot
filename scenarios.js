import { markups } from "./templates/markups/markups_ua.js";
const newApplication = (ctx, chatId, bot) => {
    bot.telegram.sendMessage(chatId, "Дякую за те що ви обираєте TheoUmzug\!😊 \nБудь ласка оберіть послугу📝", markups.typeOfService);
}

const contacts = (ctx, chatId, bot) => {
    bot.telegram.sendMessage(chatId, "Номери телефону підтримки: ");
}
const qa = (ctx, chatId, bot) => {
    bot.telegram.sendMessage(chatId, "Оберіть будь ласка питання", markups.qaQuestions);
}

export const scenarios = {
    newApplication,
    contacts,
    qa
}