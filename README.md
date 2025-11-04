
# LAB – Dynamic Shopping Cart

## Overview

This lab walks through building a  **dynamic shopping cart**  using plain JavaScript. The goal is to strengthen my DOM manipulation and event-handling skills by creating a small, interactive e-commerce feature. Users will be able to add products, adjust quantities, remove items, and see the total price update instantly.

----------

## Learning Objectives

By completing this lab, I learned how to:

-   Create and modify DOM elements dynamically with JavaScript.
    
-   Reflect user interactions (like quantity changes or deletions) directly in the UI.
    
-   Use event listeners to handle actions such as adding, updating, and removing items.
    
-   Apply efficient DOM manipulation patterns to keep your app responsive and performant.
    

----------

## Description

You’ll take on the role of a front-end developer implementing the shopping cart functionality for an online store.  
The cart should let users:

-   **Add new products**  dynamically.
    
-   **Display all items**  currently in the cart with their prices and quantities.
    
-   **Change quantities**  and see the total cost update in real time.
    
-   **Remove items**  from the cart entirely when needed.
    

This project mirrors how modern e-commerce sites handle cart updates without reloading the page, giving you a practical sense of how DOM scripting supports user-friendly web experiences.

----------

## Resources

Here are a few helpful references while working through the lab:

-   [MDN: DOM Manipulation Basics](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
    
-   [JavaScript.info: Working with the DOM](https://javascript.info/modifying-document)
    
-   [FreeCodeCamp: DOM Manipulation Guide](https://www.freecodecamp.org/news/dom-manipulation-in-javascript/)
    
-   MDN: Handling Events in JavaScript
    

----------

## Getting Started

### Requirements

-   A modern browser (Chrome, Firefox, Safari, or Edge)
    
-   **Node.js**  (optional, only needed if using npm scripts)
    
-   **Live Server**  extension for VS Code (or any similar local server)
    

### OS Compatibility

This lab can be completed on  **Windows**,  **macOS**, or  **Linux**.

----------

## Installation

1.  **Clone this repository**  to your computer:
    
    `git clone https://github.com/KaeTheDev/Dynamic-Shopping-Cart.git
    
2.  **Open the project folder**  in your code editor:
    
    `cd dynamic-shopping-cart` 
    
3.  **Preview your project**:
    
    -   Open  `index.html`  in VS Code.
        
    -   Right-click and select  **“Open with Live Server.”**

    ## REFLECTION
1. How did you dynamically create and append new elements to the DOM?

I created a separate createCartItem function that deals with creating the items, using createElement for the different
HTML Elements, for the cart and appending it to the cart unordered list.

2. What steps did you take to ensure accurate updates to the total price?

I added each functionality one by one and tested the total as I went. I made sure the total was updated when a new item was added and 
that it went back to 0 when the item was completely removed. I, then, made sure that the project could handle adding the same item while
properly updating the total. 

3. How did you handle invalid input for product name or price?
I did simple check for empty strings in the input field. And I checked to make sure that the price could not be NaN or less than 0 using
a conditional. 

4. What challenges did you face when implementing the remove functionality?

The only challenge I had initially was getting the total to update correct once the item was removed. But I figured out how to utilize
the function that was given to me. 
