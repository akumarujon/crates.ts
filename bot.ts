import { Bot } from "https://deno.land/x/grammy/mod.ts";
import find  from "./helper.ts"
import 'https://deno.land/x/dotenv@v3.2.0/load.ts';

const bot = new Bot(Deno.env.get("TOKEN"));

bot.command("start", ctx => ctx.reply("Welcome to the bot."));

bot.on("inline_query", async(ctx) => {
    if(ctx.update.inline_query){
        let query = ctx.update.inline_query;
        let result = await find(query.query);
        
        ctx.answerInlineQuery(result,{ cache_time: 30 * 24 * 3600 });
    }else{
        ctx.answerInlineQuery([{type:'article',id:Math.floor(Math.random()*10),message_text:"Type something to search.",title:"Search."}])
    }
});

bot.start();