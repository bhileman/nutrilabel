'use strict'

/* 

7/5/18 -
Status: currently working and updating in real time from table to canvas. Only built out for first 4 entires
Next: 
DONE 1. Finish adding object items to canvas fields
DONE 2. Build out the rest of the table with required fields and change design to two column
DONE 3. Create calculations for percentages. add in recom. daily intake for each in new object? add function to object?

Initial Launch Feature Backlog:
- drop down for serving size units and calculated units, add in conversion logic
- dynamic canvas width and height
- Optional vitamin section with logic built-in logic to remove
- Download canvas options (png, svg, jpg?)
- Clean up app.js rather than using the two sendfiles, middleware?
- add styling, logo/header, footer+disc
- 

*/

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
    servingSizeCalcUnit : 'g',
    cal : '230',
    totalFat : '8',
    satFat : '1',
    transFat : '0',
    cholest : '0',
    sodium : '160',
    totalCarbs : '37',
    fiber : '4',
    sugar : '12',
    addSugar : '10',
    protein : '3',
    vitD : '2',
    calcium : '260',
    iron : '8',
    pota : '235',

};

let dailyValue = {

    totalFat : 78,
    satFat : 20,
    cholest : 300,
    totalCarbs : 275,
    sodium : 2300,
    fiber : 28,
    protein : 50,
    addSugar : 50,

};

let vitDailyValue = {

    vitA : 900,
    vitC : 90,
    calcium : 1300,
    iron : 18,
    vitD : 20,
    vitE : 15,
    vitK : 120,
    thiamin : 1.2,
    riboflavin : 1.3,
    niacin : 16,
    vitB6 : 1.7,
    folate : 400,
    vitB12 : 2.4,
    biotin : 30,
    pantoAcid : 5,
    phosph : 1250,
    iodine : 150,
    magnesium : 420,
    zinc : 11,
    selenium : 55,
    copper : 0.9,
    manganese : 2.3,
    chromium : 35,
    molybd : 45,
    chloride : 2300,
    pota : 4700,
    choline : 550,

};


//Canvas Parameters
let cWidth = 226;
let cHeight = 430;



/**
 * This is the function that will take care of image extracting and
 * setting proper filename for the download.
 * IMPORTANT: Call it from within a onclick event.
*/
function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

/** 
 * The event handler for the link's onclick event. We give THIS as a
 * parameter (=the link element), ID of the canvas and a filename.
*/
document.getElementById('download').addEventListener('click', function() {
    downloadCanvas(this, 'canvas', 'test.png');
}, false);


function calculatePerc(inputAmount, dailyValue) {
    if (inputAmount != 0) {
        let inputAmountConv = parseInt(inputAmount, 10);
        let percentage = Math.floor( (inputAmountConv / dailyValue) *100 );
        let percentageString = percentage.toString();
        return percentageString;
    } else return "0";
}

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
        ctx.fillText(canvasValues.servingPerCont + ' Servings per container', 6, 48);
        
        //Servings Size title
        ctx.font='900 11pt Helvetica';
        ctx.fillText('Serving size', 6, 64);
        
        //Servings Size qty
        
        //total string length calc
        /*
        let servingSizeLen = canvasValues.servingSize.length;
        let servingSizeUnitLen = canvasValues.servingSizeUnit.length;
        let servingSizeCalcLen = servingSizeCalc.length;
        let lengthServing = servingSizeLen + servingSizeUnitLen + servingSizeCalcLen;
        let lengthFactor = 11;
        let servingPlacement = lengthServing * lengthFactor;
        */
        
        ctx.font='900 11pt Helvetica';
        ctx.textAlign="right"; 
        ctx.fillText(canvasValues.servingSize + ' ' + canvasValues.servingSizeUnit + 
            ' (' + canvasValues.servingSizeCalc + canvasValues.servingSizeCalcUnit + ')'
            , (cWidth - 6), 64);
        
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
        ctx.fillText(canvasValues.totalFat + 'g', 62, 152);
        ctx.textAlign="right";
        ctx.font='900 9pt Helvetica';
        ctx.fillText( calculatePerc(canvasValues.totalFat , dailyValue.totalFat)  + '%', (cWidth - 6), 152);
        ctx.beginPath();
        ctx.moveTo(6, 156);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), 156);
        ctx.stroke();
        
        //Sat Fat
        ctx.textAlign="start"; 
        ctx.font='300 9pt Helvetica';
        ctx.fillText('Saturated Fat ' + canvasValues.satFat + 'g', 20, 169);
        ctx.textAlign="right";
        ctx.font='900 9pt Helvetica';
        ctx.fillText( calculatePerc(canvasValues.satFat , dailyValue.satFat) + '%', (cWidth - 6), 169);
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
        ctx.fillText('Fat  ' + canvasValues.transFat+ 'g', 53, 186);
        ctx.beginPath();
        ctx.moveTo(6, 190);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), 190);
        ctx.stroke();
        
        //Cholesterol
        ctx.font='900 9pt Helvetica';
        ctx.fillText('Cholesterol ', 6, 203);
        ctx.font='300 9pt Helvetica';
        ctx.fillText(canvasValues.cholest + 'mg', 78, 203);
        ctx.textAlign="right";
        ctx.font='900 9pt Helvetica';
        ctx.fillText( calculatePerc(canvasValues.cholest , dailyValue.cholest) + '%', (cWidth - 6), 203);
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
        ctx.fillText(canvasValues.sodium + 'mg', 53, 220);
        ctx.textAlign="right";
        ctx.font='900 9pt Helvetica';
        ctx.fillText( calculatePerc(canvasValues.sodium , dailyValue.sodium) + '%', (cWidth - 6), 220);
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
        ctx.fillText(canvasValues.totalCarbs + 'g', 120, 237);
        ctx.textAlign="right";
        ctx.font='900 9pt Helvetica';
        ctx.fillText( calculatePerc(canvasValues.totalCarbs , dailyValue.totalCarbs) + '%', (cWidth - 6), 237);
        ctx.beginPath();
        ctx.moveTo(6, 241);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), 241);
        ctx.stroke();
        
        //Total Fiber
        ctx.textAlign="start";
        ctx.font='300 9pt Helvetica';
        ctx.fillText('Dietary Fiber  '+ canvasValues.fiber + 'g', 20, 254);
        ctx.textAlign="right";
        ctx.font='900 9pt Helvetica';
        ctx.fillText( calculatePerc(canvasValues.fiber , dailyValue.fiber)+ '%', (cWidth - 6), 254);
        ctx.beginPath();
        ctx.moveTo(6, 258);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), 258);
        ctx.stroke();
        
        //Total Sugars
        ctx.textAlign="start";
        ctx.font='300 9pt Helvetica';
        ctx.fillText('Total Sugars  ' + canvasValues.sugar + 'g', 20, 271);
        ctx.beginPath();
        ctx.moveTo(35, 275);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), 275);
        ctx.stroke();
        
        //Included Sugars
        ctx.font='300 9pt Helvetica';
        ctx.fillText('Includes', 35, 288);
        ctx.fillText( canvasValues.addSugar + 'g Added Sugars', 83, 288);
        ctx.textAlign="right";
        ctx.font='900 9pt Helvetica';
        ctx.fillText( calculatePerc(canvasValues.addSugar, dailyValue.addSugar) + '%', (cWidth - 6), 288);
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
        ctx.fillText(canvasValues.protein + 'g', 51, 304);
        
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
        ctx.fillText('Vitamin D  ' + canvasValues.vitD + 'mcg', 6, 329);
        ctx.textAlign="right";
        ctx.fillText( calculatePerc(canvasValues.vitD, vitDailyValue.vitD)  + '%', (cWidth - 6), 329);
        ctx.beginPath();
        ctx.moveTo(6, 333);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), 333);
        ctx.stroke();
        
        //Calcium
        ctx.textAlign="start";
        ctx.font='300 9pt Helvetica';
        ctx.fillText('Calcium  ' + canvasValues.calcium + 'mg', 6, 346);
        ctx.textAlign="right";
        ctx.fillText( calculatePerc(canvasValues.calcium, vitDailyValue.calcium)+ '%', (cWidth - 6), 346);
        ctx.beginPath();
        ctx.moveTo(6, 350);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), 350);
        ctx.stroke();
    
        //Iron
        ctx.textAlign="start";
        ctx.font='300 9pt Helvetica';
        ctx.fillText('Iron  ' + canvasValues.iron + 'mg', 6, 363);
        ctx.textAlign="right";
        ctx.fillText( calculatePerc(canvasValues.iron, vitDailyValue.iron) + '%', (cWidth - 6), 363);
        ctx.beginPath();
        ctx.moveTo(6, 367);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), 367);
        ctx.stroke();
        
        //Potassium
        ctx.textAlign="start";
        ctx.font='300 9pt Helvetica';
        ctx.fillText('Potassium  ' + canvasValues.pota + 'mg', 6, 380);
        ctx.textAlign="right";
        ctx.fillText( calculatePerc(canvasValues.pota, vitDailyValue.pota) + '%', (cWidth - 6), 380);
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