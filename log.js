/*!
 * grammyLog
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
  ctx.config = {
    logChannel: process.env.CHANNEL_ID,
  };

  const from = ctx.from;
  const name =
    from.last_name === undefined
      ? from.first_name
      : `${from.first_name} ${from.last_name}`;
  console.log(
    `From: ${name} (@${from.username}) ID: ${from.id}\nMessage: ${ctx.message.text}`
  );

  // Log

  if (
    ctx.message &&
    typeof ctx.message.text !== "undefined" &&
    !ctx.message.text.includes("/")
  ) {
    await bot.api.sendMessage(
      ctx.config.logChannel,
      `<b>From: ${ctx.from.first_name} (@${from.username}) ID: <code>${from.id}</code></b>`,
      { parse_mode: "HTML" }
    );

    await ctx.api.forwardMessage(
      ctx.config.logChannel,
      ctx.chat.id,
      ctx.message.message_id
    );
  }

  await next();
}
