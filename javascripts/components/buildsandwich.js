import meat from './meat.js'
import veggies from './veggies.js'
import bread from './bread.js'
import sauce from './sauce.js'
import cheese from './cheese.js'
import print from '../helpers/util.js'

const setValues = () =>{
    const addMeat = meat.getMeat();
    const addVeggie = veggies.getVeggies();
    const addBread = bread.getBread();
    const addCheese = cheese.getCheese();
    const addSauces = sauce.getSauces();
document.getElementById('beef').value = addMeat.beef;
document.getElementById('ham').value = addMeat.ham;
document.getElementById('turkey').value = addMeat.turkey;

document.getElementById('cucumber').value = addVeggie.cucumber;
document.getElementById('tomato').value = addVeggie.tomato;
document.getElementById('lettuce').value = addVeggie.lettuce;

document.getElementById('asiago').value = addBread.asiago;
document.getElementById('wheat').value = addBread.wheat;
document.getElementById('white').value = addBread.white;

document.getElementById('cheddar').value = addCheese.cheddar;
document.getElementById('swiss').value = addCheese.swiss;
document.getElementById('provolone').value = addCheese.provolone;

document.getElementById('mayo').value = addSauces.mayo;
document.getElementById('mustard').value = addSauces.mustard;
document.getElementById('gourmaise').value = addSauces.gourmaise;

document.getElementById('checkout-btn').addEventListener('click', totalUp);
};

const ingredientValues = [];
const ingredientNames = [];

const totalUp = () =>{
    const ingredients = document.querySelectorAll('.ingredientBox');
    
    for (let i=0; i<ingredients.length; i++){
        if (ingredients[i].checked === true){
            ingredientValues.push(ingredients[i].value);
            ingredientNames.push(ingredients[i].id);
        } else{
            
        };
    };
    const printToDom = print.printToDom;
    const finalTotal = ingredientValues.reduce((a, b) => a*1 + b*1);
    printToDom('sandwich-total', finalTotal);
    printToDom('sandwich-order', ingredientNames);

};

export default { setValues, totalUp };