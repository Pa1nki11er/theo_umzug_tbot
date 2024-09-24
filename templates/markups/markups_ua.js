import { message } from "telegraf/filters";

const startMenu = {
    reply_markup: {
        keyboard: [
            [{ text: "Подати заявку" }],
            [{ text: "Калькулятор" }],
            [{ text: "Контакти" }],
            [{ text: "Ціни" }],
            [{ text: "❓" }]
        ]
    },
    parse_mode: 'HTML',
    resize_keyboard: true 
};

const typeOfService = {
    reply_markup: {
        keyboard:
        [
            [
                {
                    text: "Umzughilfe",
                }
            ],
            [
                {
                    text: "Umzug Taxi",
                }
            ],
            [
                {
                    text: "Головне меню"
                }
            ],
            [
                {
                    text: "❓",
                }
            ]
        ]
    }
}

const qaQuestions = {
    reply_markup: {
        keyboard:
        [
            [
                {
                    text: "Питання 1",
                }
            ],
            [
                {
                    text: "Питання 3",
                }
            ],
            [
                {
                    text: "Питання 3",
                }
            ],
            [
                {
                    text: "Головне меню"
                }
            ]
        ]
    }
}

export const markups = {
    startMenu,
    typeOfService,
    qaQuestions
}