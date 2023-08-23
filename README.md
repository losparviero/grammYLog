# grammYLog

Logging plugin for the [grammY](https://github.com/grammyjs/grammy) framework!

### Features

1. Log messages received by your bot to console.
2. Log message content as well as first name, last name, username and Telegram ID of the sender.
3. Only text messages are supported.
4. For the future, db integrations are possible to implement persistent logs.

### Usage

Simply copy the plugin code from ```log.js``` and place it in your grammY project.

<details>

<summary>
If you want to try it out first:

</summary>

<br>

1. Firstly, clone this repo.
2. Then run ```npm i```.
3. Rename .env.example to .env and provide bot token.
4. Run the example with node example/echo

</details>

<br>

### Example

To use the example to see out how the plugin works:

```shell
node example/echo
```
### Template

A template has been included to get started right away.

To use the template:

```shell
node template/template
```

Modify it as per your needs.

### Contribute

If you'd like to contribute to the project, please read grammY's [guide to plugins](https://grammy.dev/plugins/guide.html).

### License

MIT  ©️ Zubin