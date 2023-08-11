/* 

    GrammYLog Template

*/

require("dotenv").config();
const { Bot } = require("grammy");

// Bot

const bot = new Bot(process.env.BOT_TOKEN);

// Log [Plugin]

async function log(ctx, next) {
  const from = ctx.from;
  const name =
    from.last_name === undefined
      ? from.first_name
      : `${from.first_name} ${from.last_name}`;
  const message = (ctx.message && ctx.message.text) || ctx.inlineQuery.query;
  console.log(
    `From: ${name} (@${from.username}) ID: ${from.id}\nMessage: ${message}`
  );

  await next();
}

bot.use(log);

// Commands

bot.command("start", async (ctx) => {

/*
        YOUR CODE GOES HERE

*/

});

// Messages

bot.on("message", async (ctx) => {

/*    
        YOUR CODE GOES HERE

*/

});

// Run

bot.start();
