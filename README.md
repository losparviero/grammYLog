# grammYLog

Logging plugin for the [grammY](https://github.com/grammyjs/grammy) framework!

<br>

### Features

Currently the functionality is basic. 

It is designed to log messages received limited to the text and captions of media messages to console.

Along with user details such as: first name + last name (if available), user ID, and username.

I'll be adding more functions such as admin management soon.

For the future, db integrations are possible to implement persistent logs.

<br>

### Usage

Simply copy the plugin code from ```log.js``` and place it in your grammY project.

<br>

If you want to try it out first:

Firstly, clone this repo.

Then run ```npm i```.

Rename example.env to .env and provide bot token.

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
node template
```

Modify it as per your needs.

<br>

### License

MIT  ©️ Zubin