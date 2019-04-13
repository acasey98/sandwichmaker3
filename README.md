# Sandwich Maker

Adds selected ingredients, totals them up and prints selected ingredients.

## How to Run

In gitbash, navigate to directory, then input:
```
hs -o
```

## Functionality

sandwichbuilder.js imports key/value pairs from ingredient modules,
then declares two main functions:
```setValues();```
and
```totalUp();```


```setValues();``` runs on page load, and sets the value of a module property to the ingredient card value corresponding with the name of the card ingredient.


```totalUp();``` runs on clicking the 'Checkout' button at the bottom, and uses a for loop to iterate through all the checkboxes in the DOM, checking ```if (ingredient.checked===true)``` and if it is true, it passes the id and value to two separate arrays: ingredientNames, and ingredientValues, respectively. Then, it uses the ```array.reduce((a,b)=> a + b )``` method to add the contents of the ingredientValues array together, and prints the result along with the contents of the ingredientNames array.
## Screenshots
![](assets\sandwich1.JPG)
![](assets\sandwich2.JPG)