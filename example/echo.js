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

  let message;

  if (ctx.chat.type === "private") {
    if (ctx.message && ctx.message.text) {
      message = ctx.message.text;
    } else if (ctx.message && ctx.message.caption) {
      message = ctx.message.caption;
    } else if (ctx.message && ctx.message.voice) {
      message = `Voice note (${ctx.message.voice.duration}s)`;
    } else if (ctx.inlineQuery && ctx.inlineQuery.query) {
      message = ctx.inlineQuery.query;
    } else if (ctx.inlineQuery) {
      message = "Empty query message.";
    } else {
      message = null;
    }
  } else {
    if (ctx.message.voice) {
      message = `Voice note (${ctx.message.voice.duration}s)`;
    }
  }

  if (message != null) {
    console.log(
      `From: ${name} (@${from.username}) ID: ${from.id}\nMessage: ${message}`
    );
  }

  await next();
}

bot.use(log);

// Messages

bot.on("message", async (ctx) => {
  await ctx.reply(`Here's what you said: ${ctx.message.text}`);
});

// Run

bot.start();
