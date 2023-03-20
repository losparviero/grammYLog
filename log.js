/*!
 * grammyLog
 * Copyright(c) 2023
 *
 * @author Zubin
 * @username (GitHub) losparviero
 * @license MIT
 */

// Log

/*
      PLUGIN CODE

*/

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
