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

async function log(ctx, next) {
  const from = ctx.from;
  const name =
    from.last_name === undefined
      ? from.first_name
      : `${from.first_name} ${from.last_name}`;

  let message;

  if (ctx.message && ctx.message.text) {
    message = ctx.message.text;
  } else if (ctx.message) {
    message = "Non-text message.";
  } else if (ctx.inlineQuery && ctx.inlineQuery.query) {
    message = ctx.inlineQuery.query;
  } else if (ctx.inlineQuery) {
    message = "Empty inline message.";
  } else {
    message = "Unsupported message.";
  }

  console.log(
    `From: ${name} (@${from.username}) ID: ${from.id}\nMessage: ${message}`
  );
  await next();
}

bot.use(log);
