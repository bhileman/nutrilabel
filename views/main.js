'use strict'

let table = document.getElementById('inputForm');
let inputs = table.getElementsByTagName('input');

for (let input of inputs) {
    input.onchange = changeEventHandler;
  };

function changeEventHandler(event) {
    // You can use “this” to refer to the selected element.
    for (let key in canvasValues) {
        if ( key == event.target.name) {
            canvasValues[key] = event.target.value;
            redraw();
            break;
        }
    };

    // if(!event.target.value) alert('Please Select One');
    // else alert('You like ' + event.target.value + ' ice cream.'); 
};

//Canvas Input Object

 let canvasValues = {

     servingPerCont : '8',
     servingSize : '2/3',
     servingSizeUnit : 'cups',
     servingSizeCalc : '100',
     cal : '230',
     totalFat : '8',
     totalFatPerc : '8',
     satFat : '1',
     satFatPerc : '5',
     transFat : '0',
     cholest : '0',
     cholestPerc : '0',
     sodium : '160',
     sodiumPerc : '7',
     totalCarbs : '37',
     totalCarbsPerc : '13',
     fiber : '4',
     fiberPerc : '14',
     sugar : '12',
     addSugar : '10',
     addSugarPerc : '20',
     protein : '3',

};


//Canvas Parameters (currently not used)
let cWidth = 226;
let cHeight = 430;

//Canvas input values
//let servingPerCont = canvasValues.servingPerCont;
//let servingSize = '2/3';
//let servingSizeUnit = 'cups';
let servingSizeCalc = '100';
//let cal = 230;
let totalFat = 8;
let totalFatPerc = 8;
let satFat = 1;
let satFatPerc = 5;
let transFat = 0;
let cholest = 0;
let cholestPerc = 0;
let sodium = 160;
let sodiumPerc = 7;
let totalCarbs = 37;
let totalCarbsPerc = 13;
let fiber = 4;
let fiberPerc = 14;
let sugar = 12;
let addSugar = 10;
let addSugarPerc = 20;
let protein = 3;

//vitamin values
let vitD = 2;
let vitDPerc = 10;
let calcium = 260
let calciumPerc = 20;
let iron = 8;
let ironPerc = 45;
let pota = 235;
let potaPerc = 6;

function redraw() {
    let canvas = document.getElementById('canvas');
    canvas.width = canvas.width;
    draw();
}


function draw() {
    let canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        
        //Outside Border
        ctx.lineWidth = 2;
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        
        //Nutrition Fact Heading
        ctx.font='800 22.7pt Helvetica';
        ctx.fillText('Nutrition Facts', 6, 29);
        
        //1/4 pt seperator line
        ctx.beginPath();
        ctx.moveTo(6, 34);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), 34);
        ctx.stroke();
        
        //Servings per container
        ctx.font='300 10pt Helvetica';
        ctx.fillText(canvasValues.servingPerCont + ' Servings Per Container', 6, 48);
        
        //Servings Size title
        ctx.font='900 11pt Helvetica';
        ctx.fillText('Serving size', 6, 64);
        
        //Servings Size qty
        
        //total string length calc
        let servingSizeLen = canvasValues.servingSize.length;
        let servingSizeUnitLen = canvasValues.servingSizeUnit.length;
        let servingSizeCalcLen = servingSizeCalc.length;
        let lengthServing = servingSizeLen + servingSizeUnitLen + servingSizeCalcLen;
        let lengthFactor = 11;
        let servingPlacement = lengthServing * lengthFactor;
        
        ctx.font='900 11pt Helvetica';
        ctx.textAlign="right"; 
        ctx.fillText(canvasValues.servingSize + ' ' + canvasValues.servingSizeUnit + ' (' + servingSizeCalc + 'g)', (cWidth - 6), 64);
        
        //7 pt seperator line
        ctx.beginPath();
        ctx.moveTo(6, 74);
        ctx.lineWidth = 7;
        ctx.lineTo((cWidth - 6), 74);
        ctx.stroke();
        
        //Amount Per Serving Title
        ctx.textAlign="start"; 
        ctx.font='900 8pt Helvetica';
        ctx.fillText('Amount per serving', 6, 91);
        
        //Calories Title
        ctx.font='900 18pt Helvetica';
        ctx.fillText('Calories', 6, 112);
        
        //Calories Value
        ctx.textAlign="right";
        ctx.font='900 25pt Helvetica';
        ctx.fillText(canvasValues.cal, (cWidth - 6), 112);
        /*
        if (cal >= 1000){
            ctx.fillText(cal, (cWidth - 79), 112);
        }else if (cal >= 100) {
            ctx.fillText(cal, (cWidth - 61), 112);
        }else {
            ctx.fillText(cal, (cWidth - 43), 112);
        }
        */
        
        //4 pt seperator line
        ctx.beginPath();
        ctx.moveTo(6, 120);
        ctx.lineWidth = 4;
        ctx.lineTo((cWidth - 6), 120);
        ctx.stroke();
        
        //% Daily Value
        ctx.font='900 8pt Helvetica';
        ctx.fillText('% Daily Value*', (cWidth - 6), 135);
        
        //1/4 pt seperator line
        ctx.beginPath();
        ctx.moveTo(6, 140);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), 140);
        ctx.stroke();
        
        //Total Fat
        ctx.textAlign="start"; 
        ctx.font='900 9pt Helvetica';
        ctx.fillText('Total Fat ', 6, 152);
        ctx.font='300 9pt Helvetica';
        ctx.fillText(totalFat + 'g', 62, 152);
        ctx.textAlign="right";
        ctx.font='900 9pt Helvetica';
        ctx.fillText(totalFatPerc + '%', (cWidth - 6), 152);
        ctx.beginPath();
        ctx.moveTo(6, 156);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), 156);
        ctx.stroke();
        
        //Sat Fat
        ctx.textAlign="start"; 
        ctx.font='300 9pt Helvetica';
        ctx.fillText('Saturated Fat  ' + satFat + 'g', 20, 169);
        ctx.textAlign="right";
        ctx.font='900 9pt Helvetica';
        ctx.fillText(satFatPerc + '%', (cWidth - 6), 169);
        ctx.beginPath();
        ctx.moveTo(6, 173);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), 173);
        ctx.stroke();
        
        //Trans Fat
        ctx.textAlign="start"; 
        ctx.font='300 italic 9pt Helvetica';
        ctx.fillText('Trans', 20, 186);
        ctx.font='300 9pt Helvetica';
        ctx.fillText('Fat  ' + transFat + 'g', 53, 186);
        ctx.beginPath();
        ctx.moveTo(6, 190);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), 190);
        ctx.stroke();
        
        //Cholesterol
        ctx.font='900 9pt Helvetica';
        ctx.fillText('Cholesterol ', 6, 203);
        ctx.font='300 9pt Helvetica';
        ctx.fillText(cholest + 'mg', 78, 203);
        ctx.textAlign="right";
        ctx.font='900 9pt Helvetica';
        ctx.fillText(cholestPerc + '%', (cWidth - 6), 203);
        ctx.beginPath();
        ctx.moveTo(6, 207);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), 207);
        ctx.stroke();
        
        //Sodium
        ctx.textAlign="start"; 
        ctx.font='900 9pt Helvetica';
        ctx.fillText('Sodium', 6, 220);
        ctx.font='300 9pt Helvetica';
        ctx.fillText(sodium + 'mg', 53, 220);
        ctx.textAlign="right";
        ctx.font='900 9pt Helvetica';
        ctx.fillText(sodiumPerc + '%', (cWidth - 6), 220);
        ctx.beginPath();
        ctx.moveTo(6, 224);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), 224);
        ctx.stroke();
        
        //Total Carbs
        ctx.textAlign="start"; 
        ctx.font='900 9pt Helvetica';
        ctx.fillText('Total Carbohydrate', 6, 237);
        ctx.font='300 9pt Helvetica';
        ctx.fillText(totalCarbs + 'g', 120, 237);
        ctx.textAlign="right";
        ctx.font='900 9pt Helvetica';
        ctx.fillText(totalCarbsPerc + '%', (cWidth - 6), 237);
        ctx.beginPath();
        ctx.moveTo(6, 241);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), 241);
        ctx.stroke();
        
        //Total Fiber
        ctx.textAlign="start";
        ctx.font='300 9pt Helvetica';
        ctx.fillText('Dietary Fiber  '+ fiber + 'g', 20, 254);
        ctx.textAlign="right";
        ctx.font='900 9pt Helvetica';
        ctx.fillText(fiberPerc + '%', (cWidth - 6), 254);
        ctx.beginPath();
        ctx.moveTo(6, 258);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), 258);
        ctx.stroke();
        
        //Total Sugars
        ctx.textAlign="start";
        ctx.font='300 9pt Helvetica';
        ctx.fillText('Total Sugars  ' + fiber + 'g', 20, 271);
        ctx.beginPath();
        ctx.moveTo(35, 275);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), 275);
        ctx.stroke();
        
        //Included Sugars
        ctx.font='300 9pt Helvetica';
        ctx.fillText('Includes', 35, 288);
        ctx.fillText(addSugar + 'g Added Sugars', 83, 288);
        ctx.textAlign="right";
        ctx.font='900 9pt Helvetica';
        ctx.fillText(addSugarPerc + '%', (cWidth - 6), 288);
        ctx.beginPath();
        ctx.moveTo(6, 291);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), 291);
        ctx.stroke();
        
        //Protein
        ctx.textAlign="start";
        ctx.font='900 9pt Helvetica';
        ctx.fillText('Protein', 6, 304);
        ctx.font='300 9pt Helvetica';
        ctx.fillText(protein + 'g', 51, 304);
        
        //7 pt seperator line
        ctx.beginPath();
        ctx.moveTo(6, 312);
        ctx.lineWidth = 7;
        ctx.lineTo((cWidth - 6), 312);
        ctx.stroke();
        
        
        ////Vitamin section//////
        //Vitamin D
        ctx.textAlign="start";
        ctx.font='300 9pt Helvetica';
        ctx.fillText('Vitamin D  ' + vitD + 'mcg', 6, 329);
        ctx.textAlign="right";
        ctx.fillText(vitDPerc + '%', (cWidth - 6), 329);
        ctx.beginPath();
        ctx.moveTo(6, 333);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), 333);
        ctx.stroke();
        
        //Calcium
        ctx.textAlign="start";
        ctx.font='300 9pt Helvetica';
        ctx.fillText('Calcium  ' + calcium + 'mg', 6, 346);
        ctx.textAlign="right";
        ctx.fillText(calciumPerc + '%', (cWidth - 6), 346);
        ctx.beginPath();
        ctx.moveTo(6, 350);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), 350);
        ctx.stroke();
    
        //Iron
        ctx.textAlign="start";
        ctx.font='300 9pt Helvetica';
        ctx.fillText('Iron  ' + iron + 'mg', 6, 363);
        ctx.textAlign="right";
        ctx.fillText(ironPerc + '%', (cWidth - 6), 363);
        ctx.beginPath();
        ctx.moveTo(6, 367);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), 367);
        ctx.stroke();
        
        //Potassium
        ctx.textAlign="start";
        ctx.font='300 9pt Helvetica';
        ctx.fillText('Potassium  ' + pota + 'mg', 6, 380);
        ctx.textAlign="right";
        ctx.fillText(potaPerc + '%', (cWidth - 6), 380);
        ctx.beginPath();
        ctx.moveTo(6, 386);
        ctx.lineWidth = 4;
        ctx.lineTo((cWidth - 6), 386);
        ctx.stroke();
        
        //Disclosure Section   eventually build out with wrap function
        ctx.textAlign="start";
        ctx.font='300 6.2pt Helvetica';
        ctx.fillText('* The % Daily Value (DV) tells you how much a nutrient in', 6, 400);
        ctx.fillText('a serving of food contributes to a daily diet. 2,000 calories', 6, 410);
        ctx.fillText('a day is used for general nutrition advice.', 6, 420);
                    
        }
}