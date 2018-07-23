'use strict'

//Canvas Parameters
let canvas = document.getElementsByTagName('canvas')[0];
let cWidth = canvas.width;
let cHeight = canvas.height;


function setEventHandler() {

    let table = document.getElementById('inputForm');
    let inputs = table.getElementsByTagName('input' || 'select');
    
    for (let input of inputs) {
        input.onchange = setNewValue;
    };
}

function setNewValue(event) {
    // You can use “this” to refer to the selected element.
    for (let key in canvasValues) {
        if ( key == event.target.name) {
            canvasValues[key] = event.target.value;
        } 
    };
    redraw();   
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
    polyFat : '0',
    monoFat : '0',
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
    vitA : '900',
    vitC : '90',
    vitE : '15',
    vitK : '120',
    thiamin : '1.2',
    riboflavin : '1.3',
    niacin : '16',
    vitB6 : '1.7',
    folate : '400',
    vitB12 : '2.4',
    biotin : '30',
    pantoAcid : '5',
    phosph : '1250',
    iodine : '150',
    magnesium : '420',
    zinc : '11',
    selenium : '55',
    copper : '0.9',
    manganese : "2.3",
    chromium : "35",
    molybd : "45",
    chloride : "2300",
    choline : "550",

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

    let vitUnit = {

        vitA : 'mcg',
        vitC : 'mg',
        calcium : 'mg',
        iron : 'mg',
        vitD : 'mg',
        vitE : 'mcg',
        vitK : 'mcg',
        thiamin : 'mg',
        riboflavin : 'mg',
        niacin : 'mg',
        vitB6 : 'mg',
        folate : 'mcg',
        vitB12 : 'mcg',
        biotin : 'mcg',
        pantoAcid : 'mg',
        phosph : 'mg',
        iodine : 'mcg',
        magnesium : 'mg',
        zinc : 'mg',
        selenium : 'mcg',
        copper : 'mg',
        manganese : 'mg',
        chromium : 'mg',
        molybd : 'mcg',
        chloride : 'mg',
        pota : 'mg',
        choline : 'mg',

    };

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
    ga('send', 'event', {
    eventCategory: 'download',
    eventAction: 'click',
    });
    let filename = makeFilename();
    downloadCanvas(this, 'canvas', 'lblmaker_'+ filename + '.png');
}, false);

//document.getElementsByName('addedName').addEventListener('')

function makeFilename() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function calculatePerc(inputAmount, dailyValue) {
    if (inputAmount != 0) {
        let inputAmountConv = parseFloat(inputAmount, 10);
        let percentage = Math.floor( (inputAmountConv / dailyValue) *100 );
        let percentageString = percentage.toString();
        return percentageString;
    } else return "0";
}

function setCanvasDim() {

    cWidth = 226;
    cHeight  = 430; //430 default

    let addedNamesMain = document.getElementsByClassName("activemain");
    let addedLengthMain = addedNamesMain.length;
    cHeight += addedLengthMain * 17;

    let addedNames = document.getElementsByClassName("activeitem");
    let addedLength = addedNames.length;
    cHeight += addedLength * 17;

    canvas.style.width = cWidth.toString();
    canvas.style.height = cHeight.toString();

}

///// Optional vitamins and minerals section ///////


function showOpt() {

    let optSection = document.getElementById("addsection").removeAttribute("class");
    let addBtn = document.getElementById("addbtn").setAttribute("class","hideForm");

}

function addItem(elem) {

    let formGroup = elem.closest('.form-group');
    formGroup.classList.remove("inactiveitem");
    formGroup.classList.add("activeitem");
    redraw();

}

function addItemMain(elem) {

    let formGroup = elem.closest('.form-group');
    formGroup.classList.remove("inactivemain");
    formGroup.classList.add("activemain");
    redraw();

}


function deleteItem(elem) {

    let formGroup = elem.closest('.form-group');
    formGroup.classList.remove("activeitem");
    formGroup.classList.add("inactiveitem");
    redraw();

};

function deleteItemMain(elem) {

    let formGroup = elem.closest('.form-group');
    formGroup.classList.remove("activemain");
    formGroup.classList.add("inactivemain");
    redraw();

};

function drawAddedMain(ctx, yPos) {

    let addedItems = document.querySelectorAll("div.activemain");

    for (var i = 0; i < addedItems.length; i++) {
        ctx.textAlign="start";
        ctx.font='300 9pt Helvetica';

        let addedTitle = addedItems[i].querySelector("label").querySelector("span").innerText;
        let addedName = addedItems[i].querySelector("input").name;
        let addedUnit = vitUnit[addedName];
        let addedValue = addedItems[i].querySelector("input").value;

        ctx.fillText(addedTitle + "  " + addedValue + 'g', 20, yPos += 13);
        
        ctx.beginPath();
        ctx.moveTo(6, yPos += 4);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), yPos);
        ctx.stroke();
    }
    return yPos;
}

function drawAdded(ctx, yPos) {

    let addedItems = document.querySelectorAll("div.activeitem");

    for (var i = 0; i < addedItems.length; i++) {
        ctx.textAlign="start";
        ctx.font='300 9pt Helvetica';
        let addedTitle = addedItems[i].querySelector("label").querySelector("span").innerText;
        let addedName = addedItems[i].querySelector("input").name;
        let addedUnit = vitUnit[addedName];
        let addedValue = addedItems[i].querySelector("input").value;

        ctx.fillText(addedTitle + "  " + addedValue + addedUnit, 6, yPos += 13);
        
        ctx.textAlign="right";    
        ctx.fillText( calculatePerc(addedValue , vitDailyValue[addedName])  + '%', (cWidth - 6), yPos);
        if (i == (addedItems.length-1)) {
            ctx.beginPath();
            ctx.moveTo(6, yPos += 6);
            ctx.lineWidth = 3;
            ctx.lineTo((cWidth - 6), yPos);
            ctx.stroke();
        } else {
            ctx.beginPath();
            ctx.moveTo(6, yPos += 4);
            ctx.lineWidth = 1;
            ctx.lineTo((cWidth - 6), yPos);
            ctx.stroke();
        };
    }
    return yPos;
}


function redraw() {
    console.log("redrawing");
    let canvas = document.getElementById('canvas');
    canvas.width = canvas.width
    setEventHandler();
    draw();
}


function draw() {
    
    if (canvas.getContext) {

        let ctx = canvas.getContext('2d');
        setCanvasDim();
        ctx.canvas.width  = cWidth;
        ctx.canvas.height = cHeight;

        let yPos = 0;
        
        //Outside Border
        ctx.lineWidth = 2;
        ctx.strokeRect(0, 0, cWidth, cHeight);
        
        //Nutrition Fact Heading
        ctx.font='800 22.7pt Helvetica';
        ctx.fillText('Nutrition Facts', 6, yPos += 29);
        
        //1/4 pt seperator line
        ctx.beginPath();
        ctx.moveTo(6, yPos += 5);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), yPos); //34
        ctx.stroke();
        
        //Servings per container
        ctx.font='300 10pt Helvetica';
        ctx.fillText(canvasValues.servingPerCont + ' Servings per container', 6, yPos += 14); //48
        
        //Servings Size title
        ctx.font='900 11pt Helvetica';
        ctx.fillText('Serving size', 6, yPos += 16); //64        
        ctx.font='900 11pt Helvetica';
        ctx.textAlign="right"; 
        ctx.fillText(canvasValues.servingSize + ' ' + canvasValues.servingSizeUnit + 
            ' (' + canvasValues.servingSizeCalc + canvasValues.servingSizeCalcUnit + ')'
            , (cWidth - 6), yPos);
        
        //7 pt seperator line
        ctx.beginPath();
        ctx.moveTo(6, yPos += 10); //74
        ctx.lineWidth = 7;
        ctx.lineTo((cWidth - 6), yPos);
        ctx.stroke();
        
        //Amount Per Serving Title
        ctx.textAlign="start"; 
        ctx.font='900 8pt Helvetica';
        ctx.fillText('Amount per serving', 6, yPos += 17); //91
        
        //Calories Title
        ctx.font='900 18pt Helvetica';
        ctx.fillText('Calories', 6, yPos += 21); //112
        
        //Calories Value
        ctx.textAlign="right";
        ctx.font='900 25pt Helvetica';
        ctx.fillText(canvasValues.cal, (cWidth - 6), yPos);
        
        //4 pt seperator line
        ctx.beginPath();
        ctx.moveTo(6, yPos += 8); //120
        ctx.lineWidth = 4;
        ctx.lineTo((cWidth - 6), yPos); 
        ctx.stroke();
        
        //% Daily Value
        ctx.font='900 8pt Helvetica';
        ctx.fillText('% Daily Value*', (cWidth - 6), yPos += 15); //135
        
        //1/4 pt seperator line
        ctx.beginPath();
        ctx.moveTo(6, yPos += 5); //140
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), yPos);
        ctx.stroke();
        
        //Total Fat
        ctx.textAlign="start"; 
        ctx.font='900 9pt Helvetica';
        ctx.fillText('Total Fat ', 6, yPos += 12); //152
        ctx.font='300 9pt Helvetica';
        ctx.fillText(canvasValues.totalFat + 'g', 62, yPos);
        ctx.textAlign="right";
        ctx.font='900 9pt Helvetica';
        ctx.fillText( calculatePerc(canvasValues.totalFat , dailyValue.totalFat)  + '%', (cWidth - 6), yPos);
        ctx.beginPath();
        ctx.moveTo(6, yPos += 4); //156
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), yPos);
        ctx.stroke();
        
        //Sat Fat
        ctx.textAlign="start"; 
        ctx.font='300 9pt Helvetica';
        ctx.fillText('Saturated Fat ' + canvasValues.satFat + 'g', 20, yPos += 13); //169
        ctx.textAlign="right";
        ctx.font='900 9pt Helvetica';
        ctx.fillText( calculatePerc(canvasValues.satFat , dailyValue.satFat) + '%', (cWidth - 6), yPos);
        ctx.beginPath();
        ctx.moveTo(6, yPos += 4); //173
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), yPos);
        ctx.stroke();
        
        //Trans Fat
        ctx.textAlign="start"; 
        ctx.font='300 italic 9pt Helvetica';
        ctx.fillText('Trans', 20, yPos += 13); //186
        ctx.font='300 9pt Helvetica';
        ctx.fillText('Fat  ' + canvasValues.transFat+ 'g', 53, yPos);
        ctx.beginPath();
        ctx.moveTo(6, yPos += 4); //190
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), yPos);
        ctx.stroke();

        //Additional Fats
        yPos = drawAddedMain(ctx, yPos);

        //Cholesterol
        ctx.font='900 9pt Helvetica';
        ctx.fillText('Cholesterol ', 6, yPos += 13); //203
        ctx.font='300 9pt Helvetica';
        ctx.fillText(canvasValues.cholest + 'mg', 78, yPos);
        ctx.textAlign="right";
        ctx.font='900 9pt Helvetica';
        ctx.fillText( calculatePerc(canvasValues.cholest , dailyValue.cholest) + '%', (cWidth - 6), yPos);
        ctx.beginPath();
        ctx.moveTo(6, yPos += 4); //207
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), yPos);
        ctx.stroke();
        
        //Sodium
        ctx.textAlign="start"; 
        ctx.font='900 9pt Helvetica';
        ctx.fillText('Sodium', 6, yPos += 13); //220
        ctx.font='300 9pt Helvetica';
        ctx.fillText(canvasValues.sodium + 'mg', 53, yPos);
        ctx.textAlign="right";
        ctx.font='900 9pt Helvetica';
        ctx.fillText( calculatePerc(canvasValues.sodium , dailyValue.sodium) + '%', (cWidth - 6), yPos);
        ctx.beginPath();
        ctx.moveTo(6, yPos += 4); //224
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), yPos);
        ctx.stroke();
        
        //Total Carbs
        ctx.textAlign="start"; 
        ctx.font='900 9pt Helvetica';
        ctx.fillText('Total Carbohydrate', 6, yPos += 13); //237
        ctx.font='300 9pt Helvetica';
        ctx.fillText(canvasValues.totalCarbs + 'g', 120, yPos);
        ctx.textAlign="right";
        ctx.font='900 9pt Helvetica';
        ctx.fillText( calculatePerc(canvasValues.totalCarbs , dailyValue.totalCarbs) + '%', (cWidth - 6), yPos);
        ctx.beginPath();
        ctx.moveTo(6, yPos += 4); //241
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), yPos);
        ctx.stroke();
        
        //Total Fiber
        ctx.textAlign="start";
        ctx.font='300 9pt Helvetica';
        ctx.fillText('Dietary Fiber  '+ canvasValues.fiber + 'g', 20, yPos += 13); //254
        ctx.textAlign="right";
        ctx.font='900 9pt Helvetica';
        ctx.fillText( calculatePerc(canvasValues.fiber , dailyValue.fiber)+ '%', (cWidth - 6), yPos);
        ctx.beginPath();
        ctx.moveTo(6, yPos += 4); //258
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), yPos);
        ctx.stroke();
        
        //Total Sugars
        ctx.textAlign="start";
        ctx.font='300 9pt Helvetica';
        ctx.fillText('Total Sugars  ' + canvasValues.sugar + 'g', 20, yPos += 13); //271
        ctx.beginPath();
        ctx.moveTo(35, yPos += 4); //275
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), yPos);
        ctx.stroke();
        
        //Included Sugars
        ctx.font='300 9pt Helvetica';
        ctx.fillText('Includes', 35, yPos += 13); //288
        ctx.fillText( canvasValues.addSugar + 'g Added Sugars', 83, yPos);
        ctx.textAlign="right";
        ctx.font='900 9pt Helvetica';
        ctx.fillText( calculatePerc(canvasValues.addSugar, dailyValue.addSugar) + '%', (cWidth - 6), yPos);
        ctx.beginPath();
        ctx.moveTo(6, yPos += 4); //291
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), yPos);
        ctx.stroke();
        
        //Protein
        ctx.textAlign="start";
        ctx.font='900 9pt Helvetica';
        ctx.fillText('Protein', 6, yPos += 13); //304
        ctx.font='300 9pt Helvetica';
        ctx.fillText(canvasValues.protein + 'g', 51, yPos);
        
        //7 pt seperator line
        ctx.beginPath();
        ctx.moveTo(6, yPos += 8); //312
        ctx.lineWidth = 7;
        ctx.lineTo((cWidth - 6), yPos);
        ctx.stroke();
        
        
        ////Vitamin section//////
        //Vitamin D
        ctx.textAlign="start";
        ctx.font='300 9pt Helvetica';
        ctx.fillText('Vitamin D  ' + canvasValues.vitD + 'mcg', 6, yPos += 17); //329
        ctx.textAlign="right";
        ctx.fillText( calculatePerc(canvasValues.vitD, vitDailyValue.vitD)  + '%', (cWidth - 6), yPos);
        ctx.beginPath();
        ctx.moveTo(6, yPos += 4); //333
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), yPos);
        ctx.stroke();
        
        //Calcium
        ctx.textAlign="start";
        ctx.font='300 9pt Helvetica';
        ctx.fillText('Calcium  ' + canvasValues.calcium + 'mg', 6, yPos += 13); //346
        ctx.textAlign="right";
        ctx.fillText( calculatePerc(canvasValues.calcium, vitDailyValue.calcium)+ '%', (cWidth - 6), yPos);
        ctx.beginPath();
        ctx.moveTo(6, yPos += 4); //350
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), yPos);
        ctx.stroke();
    
        //Iron
        ctx.textAlign="start";
        ctx.font='300 9pt Helvetica';
        ctx.fillText('Iron  ' + canvasValues.iron + 'mg', 6, yPos += 13); //363
        ctx.textAlign="right";
        ctx.fillText( calculatePerc(canvasValues.iron, vitDailyValue.iron) + '%', (cWidth - 6), yPos);
        ctx.beginPath();
        ctx.moveTo(6, yPos += 4); //367
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), yPos);
        ctx.stroke();
        
        //Potassium
        ctx.textAlign="start";
        ctx.font='300 9pt Helvetica';
        ctx.fillText('Potassium  ' + canvasValues.pota + 'mg', 6, yPos += 13); //380
        ctx.textAlign="right";
        ctx.fillText( calculatePerc(canvasValues.pota, vitDailyValue.pota) + '%', (cWidth - 6), yPos);
        
        let addedItems = document.querySelectorAll("div.activeitem");
        if (addedItems === undefined || addedItems.length == 0) {
            ctx.beginPath();
            ctx.moveTo(6, yPos += 6); 
            ctx.lineWidth = 4;
            ctx.lineTo((cWidth - 6), yPos);
            ctx.stroke();
        } else {
            ctx.beginPath();
            ctx.moveTo(6, yPos += 4); 
            ctx.lineWidth = 1;
            ctx.lineTo((cWidth - 6), yPos);
            ctx.stroke();
        }

        //Additional vitamins
        let lastypos = drawAdded(ctx, yPos);
        
        //Disclosure Section   eventually build out with wrap function
        ctx.textAlign="start";
        ctx.font='300 6.2pt Helvetica';
        ctx.fillText('* The % Daily Value (DV) tells you how much a nutrient in', 6, lastypos += 13); 
        ctx.fillText('a serving of food contributes to a daily diet. 2,000 calories', 6, lastypos += 10);
        ctx.fillText('a day is used for general nutrition advice.', 6, lastypos += 10);

        }
}

setEventHandler();
draw();