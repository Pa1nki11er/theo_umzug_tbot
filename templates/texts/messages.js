import { parse } from "dotenv";
import { texts } from "./texts.js";


const greeting = (ctx) => {
    return texts.greetingText(ctx.from.first_name);
} 


export const messages = {
    greeting
}