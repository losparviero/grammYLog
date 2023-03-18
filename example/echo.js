// Minimal Echo Bot

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
  console.log(
    `From: ${name} (@${from.username}) ID: ${from.id}\nMessage: ${ctx.message.text}`
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
