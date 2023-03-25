/* 

    GrammYLog Template

*/

require("dotenv").config();
const { Bot } = require("grammy");

// Bot

const bot = new Bot(process.env.BOT_TOKEN);

// Log [Plugin]

async function log(ctx, next) {
  let message = ctx.message?.text || ctx.channelPost?.text || undefined;

  // Console

  const from = ctx.from || ctx.chat;
  const name =
    `${from.first_name || ""} ${from.last_name || ""}`.trim() || ctx.chat.title;

  console.log(
    `From: ${name} (@${from.username}) ID: ${from.id}\nMessage: ${message}`
  );

  // Channel

  if (
    ctx.message &&
    !ctx.message.text.includes("/") &&
    process.env.LOG_CHANNEL
  ) {
    await bot.api.sendMessage(
      process.env.LOG_CHANNEL,
      `<b>From: ${ctx.from.first_name} (@${from.username}) ID: <code>${from.id}</code></b>`,
      { parse_mode: "HTML" }
    );

    await ctx.api.forwardMessage(
      process.env.LOG_CHANNEL,
      ctx.chat.id,
      ctx.message.message_id
    );
  }

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
