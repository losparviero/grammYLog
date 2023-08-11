/*!
 * grammYLog
 * Copyright(c) 2023 to present
 *
 * @author Zubin
 * @username (GitHub) losparviero
 * @license MIT
 */

/*
      PLUGIN CODE

*/

// Console

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

// Channel (Might be unstable)

async function log(ctx, next) {
  let message = ctx.message?.text || ctx.channelPost?.text || undefined;
  const from = ctx.from || ctx.chat;
  const name =
    `${from.first_name || ""} ${from.last_name || ""}`.trim() || ctx.chat.title;

  // Console

  console.log(
    `From: ${name} (@${from.username}) ID: ${from.id}\nMessage: ${message}`
  );

  // Channel

  if (
    ctx.message &&
    (ctx.message.text === undefined || ctx.message.text === null) &&
    !ctx.message?.text?.includes("/") &&
    process.env.LOG_CHANNEL
  ) {
    await bot.api.sendMessage(
      process.env.LOG_CHANNEL,
      `<b>From: ${name} (@${from.username}) ID: <code>${from.id}</code></b>`,
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
