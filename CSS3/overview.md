

# An Overview of CSS3

CSS (Cascading Style Sheets) consist of a group of formatting rules that you use to control the layout and appearance of the content on a web page. One really great feature of CSS is that you can store all the CSS rules in one document and keep that document separate from the HTML content and link the two together. Then, when you make a change to the CSS that change is instantly and automatically updated on all the HTML files. Another great feature is that it "cleans up" the appearance of the code on web pages. In addition it will speed up browser loading times.

What CSS gives you is incredible control over the appearance of your page. You can control properties such as font sizes, bolding, italics, text shadows and color, link color and much more. And of course you can go far beyond that with page layout tools, boxes, formatting, positioning, etc. In CSS3, there are many options, a few which we'll look at here. These include animation, gradients, media queries, shadows, transitions, the font-face rule that allows you to embed fonts on a web page, and more.

## Animations

With this option you can add keyframe animations to HTML content. This CSS control gives you minute control over how HTML elments can be animated within a web page. With this approch you can move from one CSS style to another. There are two main components in a CSS animation: A style that describes the and the keyframes that control the animation.

 

There are three reasons for using CSS animations instead of animations run by scripts. These are:

 

1. These are easy to use and can be done without a knowledge of JavaScript.

2. They run well under a moderate system load.

3. By letting the browser control the animation, the browser can optimize the performance.


## Gradients

In CSS3, there's more support for gradients with the <image> tag. This property allow you to disply smooth transitions between two or more colors using the browser instead of images. This reduces download times. The browser supports two types of gradients: Linear and Radial. The linear gradient is defined with teh linear-gradient function, while radial is defined with the radial-gradient function.


## CSS3 Media Queries

Mobile devices have dramatically changed the way that people function. Not only that, but there are many different types of devices, such as smartphones, tablets and others. All have different dimensions and web designers are faced with the challenge of making sure that their websites display properly on each device.


Media queries are designed to handle this issue. Media queries build on the CSS2 property. They allow for mutltiple rule sets which are based on the capabilities of the browser. These include height and width controls, screen orientation and resolution. This gives you greater control over how your content is displayed and allows the designer to optimize the layout and design for different devices.


## CSS3 Shadows

With this property you can add shadows to HTML content. The box-shadow property allows you to add shadows to both the inner and outer box elements and the text-shadow property gives you control of text shadows.

Here are some of the options for the box shadow property: Color (of the shadow), Offset (referring to the position), Blur Radius, Spread Radius (which allows the shadow to scale to the size of the box object).

 
Here are the components of each shadow:

 • The first length is the horizontal offset (position)

• The second length controls the vertical offset (position)

• The third length controls the blur

• The fourth length controls the spread of the shadow

• The color controls the color of the shadow

• If the inset keyword is used, it changes the outer shadow to an inner shadow.


## CSS3 Transitions
 
With CSS3 Transitions you can animate CSS properties HTML elements. Some applications of this are: animated rollovers, fades, changing color from white to black, and more. Most importantly, JavaScript isn't necessary. One caveat is that while it's easier to use CSS3 Transitions, you don't have as much control as you would with CSS3 animations


## CSS3 Transforms

With CSS3 Transforms, you can use rotations, scales and skews to DOM elements. CSS3 Transforms can be sued with CSS3 Transitions, allowing you to create time controlled animations.

Two main properties control CSS3 Transforms. Thesee are: transform and transform-origin. transform covers the changes applied to the element, which happen one after the other. transform-orgin covers the origin position, usually the top left corner of the element, though this can be moved.

## @font-face


Like CSS Transitions, the @font-face technology is experimental and hasn't been stabilized so the syntax and behavior is subject to change in future browser revisions.


Having said that, this role allows to specify the online fonts to display text on your web pages. This eliminates the need to depend on the fonts that users have installed on their computers.

This article covers our brief overview of the new CSS3 rules. In future articles we'll explore these rules in greater depth.

### Font types