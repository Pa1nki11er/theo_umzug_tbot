/**
 * @module texts
 * @description Module with all texts that are used in messages of the bot
 * @exports {Object} texts - Object with all texts
 * @exports {String} texts.greetingText - Text of greeting message
 * @exports {String} texts.prices - Text of message about prices of the service
 * @exports {String} texts.selectService - Text of message with request to select service
 */
import dotenv from 'dotenv';

dotenv.config();

//using in index.js
const greetingText = (first_name) => 
`Вітаю <b>${first_name}!</b> 😊 
Ласкаво просимо до нашого бота! 👍 
Тут Ви можете подати заявку для послуги перевезення 🚚`;

//using in scenarios.js
const prices = `
Ціни:
  💶 50 євро за першу годину, 35 євро за кожну наступну
  👷‍♂️ Додатковий помічник: 40 євро за першу годину, 25 євро за кожну наступну
  🚚 Транспорт до 50 км — безкоштовний
`;

const descriptionWarning = `
Ось короткий опис наших послуг:
`;

//using in scenarios.js
const selectService =`
🙏 Дякуємо, що обираєте TheoUmzug!

У нас є декілька варіантів послуг, тому ми пропонуємо:
  ✅ Ви обираєте самостійно
  🛠️ Ми допомогаємо вам з вибором 

🚚 TheoUmzug — ваш надійний помічник у переїздах!
`;

const transportSupport = `
1. Umzughilfe (Повна допомога при переїзді)

 👷‍♂️ Команда професійних вантажників (включаючи водія)
 🚛 Надання відповідного транспортного засобу
 🛠️ Кваліфікована допомога: розбирання меблів, пакування речей, надійне завантаження
 📋 Ретельна підготовка та планування переїзду

<b>Ця послуга ідеально підходить для великих переїздів або коли вам потрібна повна підтримка на всіх етапах.</b>
`;

const transportTaxi = `
2. Umzug Taxi (Переїзне таксі)

 👷‍♂️ Один вантажник (який також є водієм)
 📦 Базова допомога при завантаженні та розвантаженні
 🏠 Підходить для невеликих об'ємів перевезень

<b>Ця послуга є економічним варіантом для тих, хто має менше речей або потребує мінімальної допомоги при переїзді.</b>
`;


//using in scenarios.js
const telNum = "Номери телефону підтримки: " + process.env.tel_number;

const durationWarnning = "";

const questionsWarning = "Будь ласка відповідайте на наступні питання, це потрібно щоб організувати замовлення";

const locationFrom = "Будь ласка відправте локацію звідки потрібно забрати вантаж";

const locationTo = "Будь ласка відправте локацію куди потрібно відправити вантаж";

const floorFrom = "Зазначте поверх із якого буде відправка";

const floorTo = "Зазначте поверх на який потрібно занести вантаж";

const roomCount = "Будь ласка відмітьте скільки кімнат у вашому домі?";

const thingsToMove = `
 Опишіть, будь ласка, всі габаритні предмети 
 що потрібно перевезти, та кількість коробок. 
 Зверніть увагу, якщо необхідно розібрати меблі 
 для транспортування вкажіть це поряд із назвою.
 На приклад: Шафа, Ліжко(Р)...
 `;

const probablyDateAndTime = "Будь ласка, відмітьте орієнтовну дату та час на яку ви плануєте переїзд"

export const texts = {
    greetingText,
    prices,
    selectService,
    telNum,
    questionsWarning,
    locationFrom,
    locationTo,
    floorFrom,
    floorTo,
    roomCount,
    thingsToMove,
    probablyDateAndTime,
    transportSupport,
    transportTaxi, 
    descriptionWarning,
}

