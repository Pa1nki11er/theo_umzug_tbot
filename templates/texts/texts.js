/**
 * @module texts
 * @description Module with all texts that are used in messages of the bot
 * @exports {Object} texts - Object with all texts
 * @exports {String} texts.greetingText - Text of greeting message
 * @exports {String} texts.prices - Text of message about prices of the service
 * @exports {String} texts.selectService - Text of message with request to select service
 */
const greetingText = (first_name) => 
`Вітаю <b>${first_name}!</b> 😊 
Ласкаво просимо до нашого бота! 👍 
Тут Ви можете подати заявку для послуги перевезення 🚚`;

const prices = `
Наші послуги:
  💶 50 євро за першу годину, 35 євро за кожну наступну
  🛠️ Допоможемо з навантаженням і збиранням меблів
  👷‍♂️ Додатковий помічник: 40 євро за першу годину, 25 євро за кожну наступну
  🚚 Транспорт до 50 км — безкоштовний
`;

const selectService = "Дякую за те що ви обираєте TheoUmzug\!😊 \nБудь ласка оберіть послугу📝";

export const texts = {
    greetingText,
    prices,
    selectService
}

