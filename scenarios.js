import { markups } from "./markups_ua.js";
const newApplication = (ctx, chatId, bot) => {
    bot.telegram.sendMessage(chatId, "Будь ласка оберіть послугу", markups.typeOfService);
}

export const scenarios = {
    newApplication
}