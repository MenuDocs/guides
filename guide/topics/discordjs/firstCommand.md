---
title: Creating your first command
authors:
- NorteX
categories:
JavaScript
tags:
- Discord.js
- Bot Developement
- Basics
---

---
title: Introduction to Discord.js
authors:
- Solaris9
- MenuDocs
categories:
- Javascript
tags:
- Discord.js
- Bot Development
---
A guide for the basics to moderate level of making a discord.js discord bot.
<!-- more -->

Disclaimer: this tutorial assumes you've followed the [Getting Started](gettingStarted.md) tutorial.

## Setup
In the previous tutorial ([Getting Started](gettingStarted.md)) you learned how to install Node with npm, your programming environment (IDE) and initialized the project.

Just to remind us, this is the code we had set up in the end:
```javascript
// Import the "Client" class from discord.js library
const { Client } = require("discord.js");
// Initialize the client and assign it to a constant variable "client"
const client = new Client();
// Listen to the "ready" event and print "I am ready!" whenever the bot is ready.
client.once("ready", () => console.log("I am ready!"));
// Authenticate the bot with your token from the Discord Developer Page
client.login("-- Your Token --");
```
Upon running above code, the bot printed "I am ready!" in the console. Great!

Now, that we are up to date with the previous tutorial, we can start writing more code.

## Creating the event
First off, you have to understand that commands are in fact just messages with a specific prefix.
That being said, to create commands for your bot, you'll have to listen to the `message` event.

Listening to the `message` event is very similar to listening to the `ready` event and is as follows:
```javascript
client.on("message", (message) => {
  console.log("Hello!");
});
```
Let's brake this code down. As with the `ready` event, we are accessing the `client` variable. Then, we are using `.on()` which is a method that creates an _event listener_ on our Discord bot client.

But wait! We can notice, that in the `ready` event, the method is `.once`, not `.on`!

The difference between these two, is `once` - as the name suggests - only invokes once per execution and cannot be run again. `on` on the other hand can execute however many times the event happens. For our `message` event, we want to use the `on` method, as the command is sent more than one time - unlike `ready`, which should only execute once.

Now with the `once` and `on` difference out of the way, we can look at the arguments - for both methods, it will always be two:
- Event name
- A callback function

The event name is obviously the name of the event that we want to listen to. There are many events, e.g. these which we have learnt already: `ready` and `message`, but also `guildCreate`, `guildMemberAdd`, `messageDelete`, `roleCreate` and many, many more. You can see all of them in this [Discord events cheatsheet by koad](https://gist.github.com/koad/316b265a91d933fd1b62dddfcc3ff584).

The other parameter, a function, is the function that will be invoked when the event is fired. Oftentimes, it takes in parameters specific for that type of event. Our `message` event, only returns 1 parameter: a message object which we will be able to utilize in a second.

You can place the event anywhere between the client initialization and the logging in of the client. The best place for it, would be after the `ready` event to keep the code understandable and clean.

## Responding to the message
If you set up the code correctly, now, when the code is being run, and a message on any server with your bot is sent, a log should appear in our console.

Next up, we will discuss how we can use the `message` object returned from the event to send a response in the channel that the message has been sent.

`message` object has the following properties in it:
- author - returns the [User](https://discord.js.org/#/docs/main/stable/class/User) that has sent the message.
- channel - returns the [TextChannel](https://discord.js.org/#/docs/main/stable/class/TextChannel) that the message has been sent in.
- content - returns the content of the message
- guild - returns the [Guild](https://discord.js.org/#/docs/main/stable/class/Guild) (server) of where the message was sent in
- id - returns the ID of the message - this is especially useful when saving a reference to the message

And a few functions, too:
- delete() - deletes the message
- pin() - pins the message to the channel
- react(emoji) - reacts to the message with an emoji object

There are many more properties in the `message` class, however these are the most used ones. If you'd like to get to know each one of them, you can view it here: [Message Class on discord.js.org](https://discord.js.org/#/docs/main/stable/class/Message)

Having these in mind, we can construct the following code:
```javascript
client.on("message", (message) => {
  message.channel.send(`Hello, ${message.author.username}!`);
});
```

In the first bit, we are looking at `message` and then accessing the `channel` property of it. That returns the channel that the message was sent in. Channels have a method `.send(content)` that sends a message to them - and it requires a parameter of what the content of that message should be.

With this code, we can `send` a message in `channel` that the original `message` was sent. Inside the `.send()` function, we can find a template string - indicated with backticks as opposed to the normal quotes. This allowes us to embed some code in the message: `${message.author.username}`. Here, again, we are looking at `message`, but this time not the `channel`, but instead the `author` of that message. That returns a user that sent that message. Then, we are getting the username from it. Easy!

With this, the bot should respond "Hello, [username]!", for example "Hello, NorteX!" if it sees any message on any channel.

## Making a command
In the first sentence of creating the event, I said that all commands are prefixed messages. So, let's try and make a very simple command handler.
```javascript
client.on("message", (message) => {
  const split = message.content.split(" ");
  const command = split[0];
  const args = split.slice(1);
});
```

Before going any further, let's quickly discuss this code. Again, we are listening to the `message` event, nothing different here. In the next line, we are creating a variable named `split` which is assigned to the message content *split with spaces*.

Take this example for example:

The message content is: "!ban user reason", a very simple ban command.

We [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) it on each space - effectively creating an array of words, that would look like this `["!ban", "user", "reason"]`.

With that in mind, in the next line we declare `command` to `split[0]`, which is going to be our first element of the array - the command.
After that, we have args which is `split`, but with first element (our command) sliced, so we are left with only whatever comes _after_ the command, which are going to be from now on called arguments.

So, for example, `user` or `reason` in our command are going to be stored in the args array, so we can access it later.

Ok, moving on with the code!
```javascript
client.on("message", (message) => {
	const split = message.content.split(" ");
	const command = split[0];
	const args = split.slice(1);
	if(command.toLowerCase() === "!ping".toLowerCase()) {
		message.channel.send("Pong!");
	}
});
```

Now, a very straightforward `if` statement to check if the `command` part is equal to "!ping". Notice how when checking, after both `command` and the literal command string, and sending a response. Very easy.

## Conclusion

This is the basics of how you can make your own commands. You can of course add much more code to your command. Be creative!

This is the final code that we made to add our simple "ping" command and set up code for further commands:

```javascript
const { Client } = require("discord.js");

const client = new Client();

client.once("ready", () => console.log("I am ready!"));
client.on("message", (message) => {
  const split = message.content.split(" ");
  const command = split[0];
  const args = split.slice(1);
  if(command.toLowerCase() === "!ping".toLowerCase()) {
    message.channel.send("Pong!");
    // Add more code to a command here...
  }
})

client.login("-- Your Token --");
```

In the next tutorial we'll learn how to learn [todo next tutorial]
<!-- TODO : Add a link -->
