# Portfolio Page

## About

This is my personal portfolio page.  It is a single page front end app utilizing basic HTML, CSS, and vanilla Javascript without using any frameworks.  The goal of this was to showcase my ability to work with core programming principles utilizing DOM manipulation, CSS animations, CSS responsive design, and flexbox.  I wanted to ensure I could explain how everything on the page works without relying on any external code.  

## Key features

### Star Background

The star background is a background image that is animated to slowly move acroos the screen.  Throughout the screen there are numerous stars that "twinkle" by increasing then decreasing opacity and scale.  Both of these features are created using CSS animations.

### Section Changes

The different sections of the page all live in the same space on the main page.  When navigating from section to section the page changes by adjusting the visibility of the current section and requested section.  The sections transition in and out by changing the opacity.  This is accomplished with DOM manipulation.

### Responsive Design

As the page is resized the layout of certain sections changes to accomodate. This is done through a combination of CSS media queries and DOM manipulation.  For smaller screens, the navigation is turned into a hamburger menu.  On both the projects page and the contact page the flex direction is changed from row to column.  The about me text box resizes to the full width of the page to fit the text. There is an event listener on the window to make the changes if the user resizes the window manually as well.

## Technologies Used

### Javascript
### HTML
### CSS