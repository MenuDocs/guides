---
title: Creating your first command
authors:
- NorteX-dev
- MenuDocs
categories:
- Javascript
tags:
- Discord.js
- Bot Developement
- Basics
---

Disclaimer: this tutorial assumes you've followed the [Getting Started](gettingStarted.md) tutorial. It also uses the `stable` branch of Discord.js, so double check if you are using it, or anything older.

## Setup
In the previous tutorial ([Getting Started](gettingStarted.md)) you learned how to install Node with npm, your programming environment (IDE) and initialized the project.

Just to remind us, this is the code we had set up in the end:
```javascript
// Import the "[Client](https://discord.js.org/#/docs/main/stable/class/Client)" class from discord.js library
const { Client } = require("discord.js");
// Initialize the client and assign it to a constant variable "client"
const client = new Client();
// Listen to the "ready" event and print "I am ready!" whenever the bot is ready.
client.once("ready", () => console.log("I am ready!"));
// Authenticate the bot with your token from the Discord Developer Page
client.login("-- Your Token --");
```
This code tells the bot to listen to the "ready" event and print "I am ready!" whenever the bot is connected to the Discord API.

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
Let's break this code down. As with the `ready` event, we are accessing the `client` variable. Then, we are using `.on()` which is a method that creates an _event listener_ on our Discord bot client. Events are the Node.js way of launching code when a certain thing happens, for example in our case, the bot connects to the Discord API or a message gets sent. You can read more about events in the [Node.js Events Documentation](https://nodejs.org/api/events.html).

But wait! We can notice, that in the `ready` event, the method is `.once`, not `.on`!

The difference between these two, is `once` - as the name suggests - only invokes once per execution and cannot be run again. `on` on the other hand can execute however many times the event happens. For our `message` event, we want to use the `on` method, as the command is sent more than one time - unlike `ready`, which should only execute once.

Now with the `once` and `on` difference out of the way, we can look at the arguments - for both methods, it will always be two:
- Event name
- A callback function

The event name is obviously the name of the event that we want to listen to. There are many events, e.g. these which we have learnt already: `ready` and `message`, but also `guildCreate`, `guildMemberAdd`, `messageDelete`, `roleCreate` and many, many more. You can see all of them in this handy [Discord events cheatsheet by koad](https://gist.github.com/koad/316b265a91d933fd1b62dddfcc3ff584).

The second parameter is a callback. This will be executed once the event is triggered. Oftentimes, it takes in parameters specific for that type of event. Our `message` event, only returns 1 parameter: a message object which we will be able to utilize later in the guide.

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
  if(message.author.bot) return;
  if(!message.guild) return;
  
  message.channel.send(`Hello, ${message.author.username}!`);
});
```

To make sure that the bot will not fall in a loop responding to it's own messages, we have to add two `if` statements. First one is to check if the author is a bot. If so, `return` - stop - the code. That is to prevent any bots, including the one we are making, from (self-)firing commands. The second check (on line 3) sees if the guild is present in the message object, as we don't want to listen to DM messages. Now, that we are sure that the bot will not fall into a loop and that guild is present on the object, we can move on.  In the first bit of the last line, we are looking at `message` and then accessing the `channel` property of it. That returns the channel that the message was sent in. Channels have a method [`.send(content)`](https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=send) that sends a message to them - and it requires a parameter of what the content of that message should be.

With this code, we can `send` a message in `channel` that the original `message` was sent. Inside the `.send()` function, we can find a template string - indicated with backticks as opposed to the normal quotes. This allowes us to embed some code in the message: `${message.author.username}`. Here, again, we are looking at `message`, but this time not the `channel`, but instead the `author` of that message. That returns a user that sent that message. Then, we are getting the username from it. Easy!

With this, the bot should respond "Hello, [username]!", for example "Hello, NorteX!" if it sees any message on any channel.

## Making a command
In the first sentence of creating the event, I said that all commands are prefixed messages. So, let's try and make a very simple command handler.
```javascript
client.on("message", (message) => {
  if(message.author.bot) return;
  if(!message.guild) return;
  
  	// What do we split on?
	// We split on spaces. The text inside the slashes indicates it's a RegExp.
	// A RegExp is a way to match values in a string.
	// How this RegExp works, is that we match on " " (space).
	// Then the `+` indicates that we wish to match as many spaces in a row as possible.
	// That way the amount of spaces between your args doesn't matter.
	
	const [command, ...args] = message.content.split(/ +/g);
});
```

Before going any further, let's quickly discuss this code. Again, we are listening to the `message` event, nothing different here. In the next line, we are creating a variable named `split` which is assigned to the message content *split with spaces*.

Take this example for example:

The message content is: "!ban user reason", a very simple ban command.

So, in the code above, we're declaring 2 variables - command and args - from message.content.split(" ") via a "destructuring assignment". Each variable represents an index in the array. So const command = `message.content.split(" ")[0];` is the same as the command variable, and the args variable will be filled with the rest - meaning, it would equal to something like `message.content.split(" ").slice(1)`.

For more information on destructuring assignment, check out the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

Ok. Now, for example `user` or `reason` in our command are going to be stored in the `args` array, so we can access it later.

Ok, moving on with the code!
```javascript
client.on("message", (message) => {
	if(message.author.bot) return;
	if(!message.guild) return;
	
	const [command, ...args] = message.content.split(/ +/g);
	
	if(command.toLowerCase() === "!ping") {
		message.channel.send("Pong!");
	}
});
```

Now, a very straightforward `if` statement checks if the `command` string is equal to `!ping`. We make this comparison before sending the response to ensure the right command is ran. We also force it to lowercase to allow running commands without worrying about case sensitivity.

## Conclusion

This is the basics of how you can make your own commands. You can of course add much more code to your command. Be creative!

This is the final code that we made to add our simple "ping" command and set up code for further commands:

```javascript
const { Client } = require("discord.js");

const client = new Client();

client.once("ready", () => console.log("I am ready!"));
client.on("message", (message) => {
	if(message.author.bot) return;
	if(!message.guild) return;
	
	const [command, ...args] = message.content.split(/ +/g);
	
	if(command.toLowerCase() === "!ping") {
		message.channel.send("Pong!");
	}
});

client.login("-- Your Token --");
```
