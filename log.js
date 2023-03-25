/*!
 * grammYLog
 * Copyright(c) 2023
 *
 * @author Zubin
 * @username (GitHub) losparviero
 * @license MIT
 */

/*
      PLUGIN CODE

*/

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
