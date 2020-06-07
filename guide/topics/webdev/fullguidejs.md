---
title: Full Guide | JS
---
[Full Guide Return](fullguide.md)

## Start Here

Let's get started shall we?

Our First Page here will be all about making your first document and setting up a file structure for multiple pages of HTML.

First things first we need to start our project, Just make a folder and open it up in the code editor of your choice!

Ok first things first, We need to set up our file structure. HTML files are just indexed with the .html suffix, So our first page being **index.html**. Next up let's create another folder. This folder is going to be called **pages**. As I said we are making multiple pages inside of our webpage in this guide. So in this pages folder we are only going to make one page named **page1.html**. Now we have no code inside either of these pages yet, but we will get there in the next section, Enjoy the guide!

[Code](https://github.com/MelodicAlbuild/webdevguide/tree/master/Guides/Beginnings)

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

[Code](https://github.com/MelodicAlbuild/webdevguide/tree/master/Guides/Initial%20Code)

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

[Code](https://github.com/MelodicAlbuild/webdevguide/tree/master/Guides/Headings%20and%20Lists)

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

Links are super easy to do, and now you have your own page to link to! Next up is CSS, Sounds like fun right!

[Code](https://github.com/MelodicAlbuild/webdevguide/tree/master/Guides/Links)