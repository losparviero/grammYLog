/*

    Minimal Echo Bot

*/

require("dotenv").config();
const { Bot } = require("grammy");

// Bot

if (!process.env.BOT_TOKEN) {
  throw new Error("BOT_TOKEN not found. Please set env variable BOT_TOKEN.");
}
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

// Messages

bot.on("message", async (ctx) => {
  await ctx.reply(`Here's what you said: ${ctx.message.text}`);
});

// Run

bot.start();
