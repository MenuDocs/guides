---
title: Full Guide | Section 2
---
[Full Guide Return](fullguide.md)

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

If you open up this file you'll see that this image is repeating all over the place, let's fix that. The Image I used is in our [assets](assets.md). To fix this we need two new tags, The first is [background-position](reference.html#background-position)