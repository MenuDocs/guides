---
title: Integrating CSS
---
## Start Here

Let's get started shall we?

## Welcome

Section 2! If you haven't followed section 1 click [here](section1.md). Once you catch up, Come back here!

### Beginnings

First things first we need to add a new folder to our project! Adding the `css` folder to our project will do!

Inside of our `css` folder we need to add one file `main.css`, we will do something with it in our next topic!

[Code](https://github.com/MelodicAlbuild/webdevguide/tree/master/Guides/Beginnings)

## Initial Code

Now that we have the structure, We are actually going to code something! <br>
To clarify, I will show the completed code at the end of each section, if you would like to see each piece at a time, they are linked to their respective reference page.

### Starting Code
To start let's crack open that `main.css` and get to work! Starting off we need to talk syntax. CSS Syntax is very similar to JSON, so if you know JSON formatting the rest of this will be super easy!

All we are going to do right now is set the background image and import the CSS into our HTML. For this we need the [background-image](reference.html#background-image) and the HTML [Link](reference.html#link) tag. Combining these tags makes our code look like this,

**index.html** -
```html
<!DOCTYPE html>
<html>
<head>
    <title>Our Website</title>
    <link href="./css/main.css" rel="stylesheet" />
</head>

<body>
    <h1>Title</h1>
    <p>Hello World</p>
    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ol>
    <a href="pages/page1.html">Page 1</a>
</body>
</html>
```

**main.css** -
```css
body {
    background-image: url("../img/mdwall.png");
}
```

If you open up this file you'll see that this image is repeating all over the place, let's fix that. To fix this we need two new tags, The first is [background-position](reference.html#background-position). We will use this to make the position in the center of the page but at the top using `center top`. Next up is [background-size](reference.html#background-size). We will set this to one of our Values `cover`. And finally we have [background-repeat](reference.html#background-repeat) which we will set to `no-repeat`. And with that our code in our CSS file now looks like this,

```css
body {
    background-image: url("../img/mdwall.png");
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
}
```

And with that we have our initial code! Our next section will be some buttons and text formatting!
[Code](https://github.com/MelodicAlbuild/menudocsguides/tree/master/Web%20Dev/Section%202/Initial%20Code)

## Buttons and Text Formatting

For those of you wondering, Our Javascript Portion of the tutorial is locked, this is because we aren't there on the video series yet! If you want to get access to this stuff early, go join our [patreon](https://www.patreon.com/menudocs)!

### Buttons

I'm not gonna lie to you, When I was making this I freaked out trying to find the button from our HTML section only to realize it's on Page 1, not the index. 

All of that aside, let's make a button pretty. First things first we need to learn CSS Classes, so let's hop into that.

#### Classes

Woah a super subclass! What is a CSS Class you ask? Simple! It's any CSS Element that starts with `.` most of the time its like `.myClass`. So what does this look like in code? 