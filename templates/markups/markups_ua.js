import { message } from "telegraf/filters";
import { keyboard } from "telegraf/markup";

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

const locationFromReq = {
    reply_markup: {
        keyboard: [
            [{ text: "Відправити свою геолокацію", request_location: true }],
            [{ text: "Відправити точку на карті", request_location: true }],
            [{ text: "Головне меню" }],
        ],
        
    }
}

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
    },
    parse_mode: 'HTML',
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

const artOfInvoiceMarkUp = {
    reply_markup: {
        keyboard:
        [
            [
                {
                    text: "Самойстійно",
                }
            ],
            [
                {
                    text: "З допомогою",
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
    qaQuestions, 
    locationFromReq,
    artOfInvoiceMarkUp
}