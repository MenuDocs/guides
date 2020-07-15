---
title: Introduction to HTML
---
[Full Guide Return](fullguide.md)

## Start Here

Let's get started shall we?

### Welcome

Welcome to Section 1 of our MenuDocs HTML/CSS/JS Webguide. Section 1 is all about making our first HTML Code and this section is based 100% off of HTML Code. At the end of the section you can embark upon Section 2 and so on!

First things first we need to start our project, Just make a folder and open it up in the code editor of your choice!

Ok first things first, We need to set up our file structure. HTML files are just indexed with the .html suffix, So our first page being **index.html**. Next up let's create another folder. This folder is going to be called **pages**. As I said we are making multiple pages inside of our webpage in this guide. So in this pages folder we are only going to make one page named **page1.html**. Now we have no code inside either of these pages yet, but we will get there in the next section, Enjoy the guide!

[Code](https://github.com/MelodicAlbuild/menudocsguides/tree/master/Web%20Dev/Section%201/Beginnings)

## Initial Code

Now that we have a structure, We are actually going to code something! <br>
To clarify, I will show the completed code at the end of each section, if you would like to see each piece at a time, they are linked to their respective reference page.

### Starting Code
To start let's crack open that **index.html** and get to work! Starting off we need our [HTML Doctype Declaration](reference.html#html-doctype-declaration), This is done super simply with ```<!DOCTYPE html>```. Next up is the [html](reference.html#html) tag. Everything will go in here! We will also add in a [head](reference.html#head) tag. This head tag, for now, will just contain our [title](reference.html#title) tag. Our total code looks like this,
```html
    <!DOCTYPE html>
    <html>
        <head> 
            <title>Our Website</title>
        </head>
    </html>
```

### Paragraphs
Let's also add in a new paragraph so we have text on our website when we open it up! <br>
To do this we need 2 new tags, the first is our [body](reference.html#body), all of the code that appears on the screen goes here, so images, text, tables, forms, buttons, etc. Will be in our body element. To make some text appear we will use the [paragraph](reference.html#paragraph) tag. Our code now looks like this,
```html
    <!DOCTYPE html>
    <html>
        <head> 
            <title>Our Website</title>
        </head>

        <body>
            <p>Hello World</p>
        </body>
    </html>
```

Yes this is just a basic Hello World Website, But everyone has to start somewhere, As we continue with this guide you will build up more and more complex systems in your website!

[Code](https://github.com/MelodicAlbuild/menudocsguides/tree/master/Web%20Dev/Section%201/Initial%20Code)

## Headings and Lists

### Headings
With the super basics done, We can start getting cool with our website. Just keep in mind, this website won't look especially amazing sadly, but later on we will clean this all up so it looks pretty. <br>
Ok Headings, There are 6 types of headings heading 1-6, each of them are shown in [headings](reference.html#headings). Adding in headings takes our website to having titles and prettier looking addons! With the addition of headings our code looks like this,
```html
<!DOCTYPE html>
    <html>
        <head>
            <title>Our Website</title>
        </head>

        <body>
            <h1>Title</h1>
            <p>Hello World</p>
        </body>
    </html>
```
### Lists
Now, Lists. There are 2 types of lists, [Ordered](reference.html#ordered-lists) and [Unordered](reference.html#unordered-lists). Making Lists also require [List Items](reference.html#list-items). Combining these 2 parts results in this, 
<ul> 
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
or,
<ol> 
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>
after adding in this code our website code looks like this,

```html
<!DOCTYPE html>
    <html>
        <head>
            <title>Our Website</title>
        </head>

        <body>
            <h1>Title</h1>
            <p>Hello World</p>
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ol>
        </body>
    </html>
```

And that wraps up Headings and Lists! Next up is Links!

[Code](https://github.com/MelodicAlbuild/menudocsguides/tree/master/Web%20Dev/Section%201/Headings%20and%20Lists)

### Links

Links! To do links we are actually going to write up a second page *cough* our pages folder, [Links](reference.md#links) have a very unique property about them, but before we get into links, copy and paste the code below into your page1.html in the pages folder.

```html
<!DOCTYPE html>
    <html>
        <head>
            <title>About Page | First Webpage</title>
        </head>

        <body>
            <p>Hello World</p>
        </body>
    </html>
```

Now that we have a page to direct to let's form our link, using the [link](reference.md#links) tag, our code now looks like this,

```html 
    <!DOCTYPE html>
    <html>
        <head>
            <title>Our Website</title>
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

Links are super easy to do, and now you have your own page to link to! Next up is Buttons and Images, Sounds like fun right!

[Code](https://github.com/MelodicAlbuild/menudocsguides/tree/master/Web%20Dev/Section%201/Links)

## Buttons and Images

Buttons and Images are gonna be really easy, We will go deeper into buttons when we get into CSS.

### Buttons

Buttons are gonna be pretty easy, All we need is a [Form](reference.md#forms), and a [Button](reference.md#buttons). Our Form needs to Encompass our Button Tag because the form is controling the action, and the button is just the clickable item in the form. After *forming* our Button our code looks like this,

**page1.html** -
```html
<!DOCTYPE html>
<html>
<head>
    <title>About Page | First Webpage</title>
</head>

<body>
    <p>Hello World</p>
    <form action="#">
        <button>Our Button</button>
    </form>
</body>
</html>
```

Keep in mind, this is our Page 1 Document, Which means if you open up your `index.html` you need to hit your link we made above this. <br> Keep in mind that our button does nothing but reload the page right now, You can simply change the action to a link to make the button take you to another place such as a website or another page on your website.

### Images

Images can be external or local, For this guide we are using purely local. You can find the image I used [here](assets.md). Using the [Image](reference.md#images) tag you can add in a local image, Our code now looks like this,

**Page 1** -
```html
<!DOCTYPE html>
<html>
<head>
    <title>About Page | First Webpage</title>
</head>

<body>
    <p>Hello World</p>
    <img src="../img/MenuDocs.jpg" alt="MenuDocs" />
    <form action="#">
        <button>Our Button</button>
    </form>
</body>
</html>
```

All I added to the file structure was a folder named `img` that way all of our image assets are in one place! With that we can now move on to CSS! Since CSS is located on another page click the button below the code for this section to go to our Section 2 of our Guide!

[Code](https://github.com/MelodicAlbuild/menudocsguides/tree/master/Web%20Dev/Section%201/Buttons%20and%20Images)
