---
title: Getting Started
---

## Creating a bot

Before you start programming a Discord bot you need to create a bot application first. If you would like to visually see this you can follow the video down below, but if you prefer reading you can look below for a quick and easy guide on making your bot.

<div
    style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;" >
    <iframe
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
        src="https://www.youtube.com/embed/b9KQxREfn4c"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    ></iframe>
</div>

TODO: show how to make a bot account

## Project setup

Now that you have your bot application you need to program and run it.

First you will need to download and install [Node.JS](https://nodejs.org/en/download/). You might notice two different versions, LTS and Current. LTS means Long Term Support, it'll be supported for as long as the developers can. Current is the most stable version. There is also nightly builds which are previews of whats to come, these shouldn't be used as there's no guarantee it will function normally.

Secondly you will need either a code editor or a IDE to edit the code. You can find some editors and IDEs [here](/topics/discordjs/#editors-and-ides). Some might require a add-on for syntax or linting support with JavaScript, if it does not it should prompt you to add it or you can search how to add it. Personally I use Visual Studio Code Insiders and **_will be throughout this guide_** but you're free to use any you like.

Once you have both installed you can start setting up the project files by creating a new folder or use a existing one for the bot files to reside, you can name it anything you like. Next is to open the folder in your editor, usually this can be done by right-clicking the folder and selecting `Open with <your editor>` or clicking `File` at the top left in the editor and selecting `Open Folder`.

After you have the editor open it's time to do the first step for any Node.JS project, creating a `package.json` and installing Node modules through the command line. If your editor has a integrated terminal you can open that, it does not or you prefer to use your OS terminal then you can open that. For Windows you can open the folder and click the path URL and write `cmd` and hit enter to open a Command Prompt. For Linux you usually can open the terminal from a dropdown button in the folder or right click in the empty space (TODO: improve this).

Once you have a terminal open you can run your first command.

```shell
npm init
```

What is `npm` though? NPM is **N**ode.JS **P**ackage **M**anager that you can use to manage your projects packages or "dependencies" as it's called when your project "depends" on another. Here we are using the main command `npm` with a sub-command `init` which will run through a few questions and create a `package.json` file once complete. This file will store some basic information and dependencies. When you get a question it will look like `package name: (discordjs-tutorial)`, for some it will show parentheses and some content inside them, that is the default answer if you do not give one. Some wont have parentheses such as `description:` because it does not have a default answer, it's optional and can be left blank. You can edit any of this in the `package.json` later on.

If you are curious about the other sub-commands you can look at [NPM's command line documentation](https://docs.npmjs.com/cli-documentation/cli) but we will only cover a few throughout this guide.

After that process is finished you can now install a package.

```shell
npm install discord.js
```

As said before we are using the main command `npm` with a sub-command `install` and a package to install which is `discord.js`. You'll see the terminal fly through some lines and a new folder called `node_modules`, this is where your dependencies are stored to be used in your code.

Next you can create a file named `index.js`, it must end in `.js` for two reasons, one for your editor to properly highlight the syntax, and two for Node.JS to know it's a JavaScript file.

Congratulations, you've completed the first steps to making a Discord bot!

## Writing your first program

Now that you have your project setup you can start coding. By being at this section you know at least the basics of [JavaScript and Node.JS](/topics/discordjs/#javascript-and-node-js), if not then I highly suggest you follow that hyperlink and read one of those resources. In this beginning part of this guide I will be explaining all the code I provide.

Copy and paste this into your editor.

```javascript
const { Client } = require("discord.js");

const client = new Client();

client.once("ready", () => console.log("I am ready!"));

client.login("token");
```

Replace `token` with your bot token found in the Discord Applications page when you created your bot and save the file. Next in your open terminal run this command.

```shell
node index.js
```

You should see the terminal show `I am ready!`. Congratulations, you just programmed your first Discord bot. But what does all of that do and what command is `node`?

First I'll explain what the `node` command is. Every application on your computer has a main command, for Node.JS it's `node`, running this command with a JavaScript file will execute the code inside of it. If you do not like typing the command every time you can do two things, one is use `node .` which will use the `entry point` set in the `package.json`, by default it is `index.js`, if you named your file something else or it is in a sub directory you can rename that value accordingly. The other thing you can do is press the up arrow on your keyboard, this usually scrolls through the terminal history, you can use it to quickly get the command back and run it. There are other options like using `nodemon` to restart your program every time a file is saved but we'll get to that later on.

Now what does all of that code do? If you know the basics of [JavaScript and Node.JS](/topics/discordjs/#javascript-and-node-js) you should understand some, if not most of it.

The first line requires the `discord.js` module and assigns the deconstructed value `Client` by its name as a constant. `require` is only available in Node.JS and it can import files, [directories](https://stackoverflow.com/a/5365577/13257043) or modules. A constant is a variable that cannot be re-declared and must have a value assigned to it. Deconstructing is taking a value by name from a object and using it by itself, an is example below.

```javascript
// Define a constant with a object as the value that has it's own property and value.
const foo = { bar: "bar" };

// Extract the foo variable and define it as its own.
const { bar } = foo;

// Print the variable to the terminal without doing "console.log(foo.bar)".
console.log(bar) // bar
```

I know that was big explanation so let's move to the second line. There you initiate the `Client` class and assign it to the `client` variable as a constant.

The third line is a bit special, since you have to know when the bot is ready you need an event listener, thats what this line does. The `Client` class extends `EventEmitter` and lets you listen to events using `on` and `once` methods. Here we listen to the `ready` event which is sent every time your bot becomes ready, but since we don't want our terminal being spammed with messages so we'll use `once` so it only runs `once`. The second parameter is an inline [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) that prints a message to the console letting us know the bot is ready.

The last line is a method that logins into the Discord WebSocket with your bot token to receive events and to make HTTP requests for sending message, adding roles, etc.

Now that you understand what that snippet of code we can dive into more.
