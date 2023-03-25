# grammYLog

Logging plugin for the [grammY](https://github.com/grammyjs/grammy) framework!

<br>

### v1.1

Added log channel support.

This should be more convenient than console messages.

_Note:_ This feature is optional and will only work if you've supplied a log channel ID.

<br>

### Features

Currently the functionality is basic. 

It is designed to log messages received.

In the case of media messages, limited to the text/captions.

Along with user details such as: first name + last name (if available), user ID, and username.

I'll be adding more functions such as admin management as well as support for a log channel soon.

For the future, db integrations are possible to implement persistent logs.

<br>

### Usage

Simply copy the plugin code from ```log.js``` and place it in your grammY project.

<br>

<details>

<summary>
If you want to try it out first:

</summary>

<br>

1. Firstly, clone this repo.

2. Then run ```npm i```.

3. Rename .env.example to .env and provide bot token.

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

<br>

### Contribute

If you'd like to contribute to the project, please read grammY's [guide to plugins](https://grammy.dev/plugins/guide.html).

<br>

### License

MIT  ©️ Zubin