const startMenu =
{
    reply_markup: {
        keyboard:
        [
            [
                {
                    text: "Подати заявку",
                }
            ],
            [
                {
                    text: "Калькулятор",
                }
            ],
            [
                {
                    text: "Контакти",
                }
            ],
            [
                {
                    text: "❓",
                }
            ]
        ]
    }
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
                    text: "❓",
                }
            ]
        ]
    }
}

export const markups = {
    startMenu,
    typeOfService
}