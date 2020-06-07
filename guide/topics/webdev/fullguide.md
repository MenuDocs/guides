---
title: Full Guide
---
<img src="/images/html.png" alt="HTML5" width="150"/>
<img src="/images/css.svg" alt="CSS3" width="107"/> &nbsp; &nbsp; &nbsp;
<img src="/images/js.png" alt="JS" width="107"/>

Here is your start to Web Development, If you would like a video guide, I built one on the MenuDocs Channel at this [link](https://www.youtube.com/playlist?list=PLWnw41ah3I4ZWMIAVEEMg97i6aOwwqFxF). Our Video Series is much slower than the guide you see here. I will be packing more information into each page, that way you can get more and more complex with your websites. I will also be including some code that didn't make it into the plans for the Video Series. All the code for each page will be put on the bottom of the page, you can find the whole repository [here](https://github.com/MelodicAlbuild/webdevguide).

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
To start let's crack open that **index.html** and get to work! Starting off we need our [HTML Doctype Declaration](/topics/webdev/reference.html#html-doctype-declaration), This is done super simply with ```<!DOCTYPE html>```. Next up is the [html](/topics/webdev/reference.html#html) tag. Everything will go in here! We will also add in a [head](/topics/webdev/reference.html#head) tag. This head tag, for now, will just contain our [title](/topics/webdev/reference.html#title) tag. Our total code looks like this,
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
To do this we need 2 new tags, the first is our [body](/topics/webdev/reference.html#body), all of the code that appears on the screen goes here, so images, text, tables, forms, buttons, etc. Will be in our body element. To make some text appear we will use the [paragraph](/topics/webdev/reference.html#paragraph) tag. Our code now looks like this,
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
Ok Headings, There are 6 types of headings heading 1-6, each of them are shown in [headings](/topics/webdev/reference.html#headings). Adding in headings takes our website to having titles and prettier looking addons! With the addition of headings our code looks like this,
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
Now, Lists. There are 2 types of lists, [Ordered](/topics/webdev/reference.html#ordered-lists) and [Unordered](/topics/webdev/reference.html#unordered-lists)