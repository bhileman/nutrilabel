'use strict'

/////////////////////////////////////////////// 8/29 everything is working as far as I can tell, need to test more ////////


//Canvas Parameters
let canvas = document.getElementsByTagName('canvas')[0];
let cWidth = canvas.width;
let cHeight = canvas.height;


//Disclosure Supplement Globals
let dvActive = false;
let noDvActive = false;


//Canvas Input Object

// [inputvalue, units, dailyvalue, title,[font, indent]]

let canvasValues = {

    servingPerCont : { 

        supActive: true,
        active: true,
        value: 8,
        font: '9pt Arial',
        label: 'Servings Per Container',

    },

    servingSize: {

        supActive: true,
        active: true,
        value: '2/3',
        font: 'Bold 11pt Arial',
        label: 'Serving Size Quantity',
        type: "text"

    },

    servingSizeUnit : {

        supActive: false,
        active: true,
        value: 'cups',
        font: 'Bold 11pt Arial',
        label: 'Serving Size Unit',
        type: "text"

    },

    servingSizeCalc: {

        supActive: false,
        active: true,
        value: 100,
        units: 'g',
        font: 'Bold 11pt Arial',
        label: 'Serving Size Quantity',

    },

    cal: {

        supActive: false,
        active: true,
        value: 230,
        font: 'Bold 18pt Arial',
        label: 'Calories',
        units: 'none',

    },

    calFat: {

        supActive: false,
        suponly: true,
        active: false,
        value: 200,
        font: 'Bold 9pt Arial',
        label: 'Calories From Saturated Fat',
        indent: '0',
        units: 'none',

    },

    totalFat : {

        supActive: false,
        active: true,
        value: 8,
        label: 'Total Fat',
        units: 'g',
        font: 'Bold 9pt Arial',
        indent: '0',
        dv: 78,     

    },

    satFat : {

        supActive: false,
        active: true,
        value: 1,
        label: 'Saturated Fat',
        units: 'g',
        font: '9pt Arial',
        indent: '1',
        dv: 20,      

    },

    transFat : {

        supActive: false,
        active: true,
        value: 0,
        formLabel: 'Trans Fat',
        label: 'Trans Fat',
        units: 'g',
        font: '9pt Arial',
        indent: '1',      

    },

    polyFat : {

        supActive: false,
        active: false,
        value: 0,
        label: 'Polysaturated Fat',
        units: 'g',
        font: '9pt Arial',
        indent: '1',      

    },

    monoFat : {

        supActive: false,
        active: false,
        value: 0,
        label: 'Monosaturated Fat',
        units: 'g',
        font: '9pt Arial',
        indent: '1',      

    },

    cholest : {

        supActive: false,
        active: true,
        value: 0,
        label: 'Cholesterol',
        units: 'mg',
        font: 'Bold 9pt Arial',
        indent: '0',
        dv: 300,      

    },

    sodium : {

        supActive: false,
        active: true,
        value: 160,
        label: 'Sodium',
        units: 'mg',
        font: 'Bold 9pt Arial',
        indent: '0',
        dv: 2300,      

    },

    totalCarbs : {

        supActive: false,
        active: true,
        value: 37,
        label: 'Total Carbohydrates',
        units: 'g',
        font: 'Bold 9pt Arial',
        indent: '0',
        dv: 275,      

    },

    fiber: {

        supActive: false,
        active: true,
        value: 4,
        label: 'Dietary Fiber',
        units: 'g',
        font: '9pt Arial',
        indent: '1',
        dv: 28,      

    },

    sugar: {

        supActive: false,
        active: true,
        value: 12,
        label: 'Total Sugars',
        units: 'g',
        font: '9pt Arial',
        indent: '1',     

    },

    addSugar: {

        supActive: false,
        active: true,
        value: 10,
        formLabel: 'Total Added Sugars',
        otherNames : [

            'ADDED SUGARS',
            'ADDED SUGAR',

        ],

        label: 'Includes Added Sugars',
        units: 'g',
        font: '9pt Arial',
        indent: '2', 
        dv: 50,    

    },

    sugarAlc: {

        supActive: false,
        active: false,
        value: 5,
        formLabel: 'Sugar Alcohol',
        label: 'Sugar Alcohol',
        units: 'g',
        font: '9pt Arial',
        indent: '1',    

    },

    protein: {

        supActive: false,
        active: true,
        value: 3,
        label: 'Protein',
        units: 'g',
        font: '9pt Arial',
        postfont: '9pt Arial',
        indent: '0', 
        dv: 50,    

    },


    vitD : {

        supActive: false,
        active: true,
        value: 2,
        label: 'Vitamin D',
        units: 'mcg',
        font: '9pt Arial',
        indent: '0', 
        dv: 20, 
        break: 7,

    },

    calcium : {

        supActive: false,
        active: true,
        value: 260,
        label: 'Calcium',
        units: 'mg',
        font: '9pt Arial',
        indent: '0', 
        dv: 1300, 

    },

    iron : {

        supActive: false,
        active: true,
        value: 8,
        label: 'Iron',
        units: 'mg',
        font: '9pt Arial',
        indent: '0', 
        dv: 18, 

    },

    pota : {

        supActive: false,
        active: true,
        value: 235,
        label: 'Potassium',
        units: 'mg',
        font: '9pt Arial',
        indent: '0', 
        dv: 4700, 

    },

    vitA : {

        supActive: false,
        active: false,
        value: 900,
        label: 'Vitamin A',
        units: 'mcg',
        font: '9pt Arial',
        indent: '0', 
        dv: 900,
        section: 'add',

    },

    vitC : {

        supActive: false,
        active: false,
        value: 90,
        label: 'Vitamin C',
        otherNames : [

            'Vitamin C (ascorbic acid)',

        ],
        units: 'mg',
        font: '9pt Arial',
        indent: '0', 
        dv: 90,
        section: 'add', 

    },

    vitE : {

        supActive: false,
        active: false,
        value: 15,
        label: 'Vitamin E',
        units: 'mcg',
        font: '9pt Arial',
        indent: '0', 
        dv: 15,
        section: 'add', 

    },

    vitK : {

        supActive: false,
        active: false,
        value: 120,
        label: 'Vitamin K',
        units: 'mcg',
        font: '9pt Arial',
        indent: '0', 
        dv: 120,
        section: 'add', 

    },

    thiamin : {

        supActive: false,
        active: false,
        value: 1.2,
        label: 'Thiamin',
        otherNames : [

            'Thiamin (vitamin B1)',

        ],
        units: 'mg',
        font: '9pt Arial',
        indent: '0', 
        dv: 1.2,
        section: 'add', 

    },

    riboflavin : {

        supActive: false,
        active: false,
        value: 1.3,
        label: 'Riboflavin',
        otherNames : [

            'Riboflavin (vitamin B2)',

        ],
        units: 'mg',
        font: '9pt Arial',
        indent: '0', 
        dv: 1.3,
        section: 'add', 

    },

    niacin : {

        supActive: false,
        active: false,
        value: 16,
        label: 'Niacin',
        units: 'mg',
        font: '9pt Arial',
        indent: '0', 
        dv: 16,
        section: 'add', 

    },

    vitB6 : {

        supActive: false,
        active: false,
        value: 1.7,
        label: 'Vitamin B6',
        units: 'mg',
        font: '9pt Arial',
        indent: '0', 
        dv: 1.7,
        section: 'add', 

    },

    folate : {

        supActive: false,
        active: false,
        value: 400,
        label: 'Folate',
        units: 'mcg',
        font: '9pt Arial',
        indent: '0', 
        dv: 400,
        section: 'add', 

    },

    vitB12 : {

        supActive: false,
        active: false,
        value: 2.4,
        label: 'Vitamin B12',
        units: 'mcg',
        font: '9pt Arial',
        indent: '0', 
        dv: 2.4,
        section: 'add', 

    },

    biotin : {

        supActive: false,
        active: false,
        value: 30,
        label: 'Biotin',
        units: 'mcg',
        font: '9pt Arial',
        indent: '0', 
        dv: 30,
        section: 'add', 

    },

    pantoAcid : {

        supActive: false,
        active: false,
        value: 5,
        label: 'Pantothenic Acid',
        units: 'mg',
        font: '9pt Arial',
        indent: '0', 
        dv: 5,
        section: 'add', 

    },

    choline : {

        supActive: false,
        active: false,
        value: 550,
        label: 'Choline',
        units: 'mg',
        font: '9pt Arial',
        indent: '0', 
        dv: 550,
        section: 'add', 

    },

    phosph : {

        supActive: false,
        active: false,
        value: 1250,
        label: 'Phosphorus',
        units: 'mg',
        font: '9pt Arial',
        indent: '0', 
        dv: 1250,
        section: 'add', 

    },

    iodine : {

        supActive: false,
        active: false,
        value: 150,
        label: 'Iodine',
        units: 'mcg',
        font: '9pt Arial',
        indent: '0', 
        dv: 150,
        section: 'add', 

    },

    magnesium : {

        supActive: false,
        active: false,
        value: 420,
        label: 'Magnesium',
        units: 'mg',
        font: '9pt Arial',
        indent: '0', 
        dv: 420,
        section: 'add', 

    },

    zinc : {

        supActive: false,
        active: false,
        value: 11,
        label: 'Zinc',
        units: 'mg',
        font: '9pt Arial',
        indent: '0', 
        dv: 11,
        section: 'add', 

    },

    selenium : {

        supActive: false,
        active: false,
        value: 55,
        label: 'Selenium',
        units: 'mcg',
        font: '9pt Arial',
        indent: '0', 
        dv: 55,
        section: 'add',

    },

    copper : {

        supActive: false,
        active: false,
        value: 0.9,
        label: 'Copper',
        units: 'mg',
        font: '9pt Arial',
        indent: '0', 
        dv: 0.9,
        section: 'add', 

    },

    manganese : {

        supActive: false,
        active: false,
        value: 2.3,
        label: 'Manganese',
        units: 'mg',
        font: '9pt Arial',
        indent: '0', 
        dv: 2.3,
        section: 'add', 

    },

    chromium : {

        supActive: false,
        active: false,
        value: 35,
        label: 'Chromium',
        units: 'mg',
        font: '9pt Arial',
        indent: '0', 
        dv: 35,
        section: 'add', 

    },

    molybd : {

        supActive: false,
        active: false,
        value: 45,
        label: 'Molybdenum',
        units: 'mcg',
        font: '9pt Arial',
        indent: '0', 
        dv: 45,
        section: 'add', 

    },

    chloride : {

        supActive: false,
        active: false,
        value: 2300,
        label: 'Chloride',
        units: 'mg',
        font: '9pt Arial',
        indent: '0', 
        dv: 2300,
        section: 'add', 

    },

    fluoride : {

        supActive: false,
        active: false,
        value: 0,
        label: 'Fluoride',
        units: 'mg',
        font: '9pt Arial',
        indent: '0',
        section: 'add', 

    }

 };


function createForm() {

    let form = document.getElementById('inputForm');
    let standardTemplate = document.getElementById("inputTemplate");
    let optionalTemplate = document.getElementById("optionalInputTemplate");
    let canvasKeys = Object.keys(canvasValues);
    for (let i=0; i < canvasKeys.length ; i++) {
        
        let key = canvasKeys[i];
        let active = canvasValues[key]["active"];

            if (active && canvasValues[key]["suponly"] == null) {
             createStandardInput(form, key, standardTemplate);
            } else if (canvasValues[key]["suponly"] == null) {
                createOptionalInput (form, key, optionalTemplate);
            }
    }
};



function createStandardInput (form, key, template) {

    let value = canvasValues[key]["value"];
    let units = canvasValues[key]["units"];
    let text = canvasValues[key]["label"];

    let newDiv = template.cloneNode(true);

    let label = newDiv.querySelector('label');
    label.for = key;
    if (!units) {
        label.innerText = text;
    } else {
        label.innerText = text + ' (' + units + ')';
    }
    
    let input = newDiv.querySelector('input');
    input.name = key;
    input.value = value;

    newDiv.classList.remove("hideForm");

    if (canvasValues[key]["break"]) {
        newDiv.classList.add("formdivider");
    }

    form.appendChild(newDiv);
};

function createOptionalInput (form, key, template) {

    let value = canvasValues[key]["value"];
    let units = canvasValues[key]["units"];
    let text = canvasValues[key]["label"];

    let newDiv = template.cloneNode(true);

    let label = newDiv.querySelector('label');
    label.for = key;
    if (!units) {
        label.innerText = text;
    } else {
        label.innerText = text + ' (' + units + ')';
    }
    
    let input = newDiv.querySelector('input');
    input.name = key;
    input.value = value;

    newDiv.classList.remove("hideForm");

    form.appendChild(newDiv);
};

function createCustomInput (form, template) {

    let newDiv = template.cloneNode(true);
    newDiv.classList.remove("hideForm");
    form.appendChild(newDiv);

};


function setEventHandler() {

    let table = document.getElementById('inputForm');
    let inputs = table.getElementsByTagName('input' || 'select');
    let formType = document.getElementById('inputForm').name;
    if (formType == 'nutrition') {
        
        for (let input of inputs) {
            input.onchange = setNewValue;
        }

    } else {

        for (let input of inputs) {
            input.onchange = setNewValueSup;
        }

    }

}

function setDatalist() {

    let datalist = document.getElementById('dvlist');
    let list = '';
    let canvasKeys = Object.keys(canvasValues);
    for (var i = 4; i < canvasKeys.length; i++) {

        let key = canvasKeys[i];

        if (canvasValues[key]["label"]) {

            let label = canvasValues[key]["label"];
            list += '<option value="'+label+'" />' 
        }  

        if (canvasValues[key]["otherNames"]) {

            let othernames = canvasValues[key]["otherNames"];

            for (var j = 0; j < othernames.length; j++) {

                let name = toTitleCase(othernames[j]);
                list += '<option value="'+name+'" />' 

            }
        }
    
    }

    datalist.innerHTML = list;

}

var toTitleCase = function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
};

function setNewValue(event) {

    let canvasKeys = Object.keys(canvasValues);
    
    for (let i=0; i < canvasKeys.length ; i++) {
        let key = canvasKeys[i];
        if ( key == event.target.name ) {
            canvasValues[key]["value"] = event.target.value;
        };
    };

   redraw();   
};

function setNewValueSup(event) {

    if (event.target.name == "servingPerCont" || event.target.name == "servingSize") {

        let canvasKeys = Object.keys(canvasValues);
        for (let i=0; i < canvasKeys.length ; i++) {
            let key = canvasKeys[i];
            if ( key == event.target.name ) {
                canvasValues[key]["value"] = event.target.value;
            };
        };

    } else {

        let canvasKeys = Object.keys(canvasValues);
        let inputDiv = event.path[2];
        let customInputs = inputDiv.querySelectorAll("input");
        let customTitle = customInputs[0];
        let customValue = customInputs[1];
        let customUnits = customInputs[2];
        let matchFound = false;

        // if title was added/changed search and see if it is has a DVI value
        for (let i=0; i < canvasKeys.length ; i++) {
            
            let key = canvasKeys[i];
            let othernames = [];

            //check to see if the canvas value has other names defined
            if (canvasValues[key]["otherNames"]) {
                
                othernames = canvasValues[key]["otherNames"];

            } 

            //if input value matches an item with DVI
            if ( canvasValues[key]["label"].toUpperCase() == customTitle.value.toUpperCase() 
                || othernames.includes( customTitle.value.toUpperCase() ) ) {

                matchFound = true;

                if (canvasValues[key]["dv"] || canvasValues[key]["units"] == 'none') {

                    customUnits.value = canvasValues[key]["units"];

                } 
                else {

                    canvasValues[key]["units"] = customUnits.value;

                }
                canvasValues[key]["supActive"] = true;
                canvasValues[key]["value"] = customValue.value;

                break;
            
            } 

        };
     
        if (!matchFound) {

            canvasValues[customTitle.value] = {

                supActive: true,
                active: false,
                value: customValue.value,
                label: customTitle.value,
                units: customUnits.value,
                font: '9pt Arial',
                indent: '0', 
                section: 'add', 

            };

        }

    }

   redraw();   
};


function unitAlert(unit) {

    alert("Units must match the FDA established DVI/RDI units in order to calculate percentage: " + unit);

}

function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

document.getElementById('download').addEventListener('click', function() {
    let filename = makeFilename();


    //google event tracking
    gtag('event', 'download', {

        'event_callback': function() {
        console.log("event recieved");

        }

    });

    downloadCanvas(this, 'canvas', 'lblmaker_'+ filename + '.png');
    
}, false);

document.getElementById('download_printready').addEventListener('click', function() {

    //google event tracking
    gtag('event', 'download_printready', {

        'event_callback': function() {
        console.log("event recieved");

        }

    });

    alert("Feature Coming Soon! Check back soon.")
    
}, false);


function makeFilename() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};




function setCanvasDim(label) {

    if (label == "sup") {
        
        cWidth = 240;
        cHeight  = 127;

        let canvasKeys = Object.keys(canvasValues);
        for (var i = 4; i < canvasKeys.length; i++) {
            let key = canvasKeys[i];
            if (canvasValues[key]["supActive"]) {

                cHeight += 17;

            }

        }

        
        if (dvActive && noDvActive) { 

            cHeight += 12;

        }
        

    } else {

        cWidth = 226;
        cHeight  = 190;

        let canvasKeys = Object.keys(canvasValues);
        for (var i = 5; i < canvasKeys.length; i++) {
            let key = canvasKeys[i];
            if (canvasValues[key]["active"]) {

                cHeight += 17;

            }

        }
    }



    canvas.style.width = cWidth.toString();
    canvas.style.height = cHeight.toString();
}



function deleteItem(elem) {

    let formGroup = elem.closest('.form-group');
    let inputDiv = elem.closest('div');
    let inputName = inputDiv.querySelector('input').name;
    canvasValues[inputName]["active"] = false;
    formGroup.classList.remove("activeitem");
    formGroup.classList.add("inactiveitem");
    redraw();

};

function deleteCustomItem(elem) {

    let formGroup = elem.closest('.form-group');
    let inputName = formGroup.querySelector('.customtitle').value;
    
    let canvasKeys = Object.keys(canvasValues);
    
    for (let i=0; i < canvasKeys.length ; i++) {
        let key = canvasKeys[i];
        if ( canvasValues[key]["label"] == inputName) {
            canvasValues[key]["supActive"] = false;
            break; 
        } else if (canvasValues[key]["otherNames"]) {
            if (canvasValues[key]["otherNames"].includes(inputName.toUpperCase())) {

                canvasValues[key]["supActive"] = false;
                break; 

            }
        }
    };

    formGroup.classList.remove("activeitem");
    formGroup.classList.add("inactiveitem");
    formGroup.classList.add("hideForm");
    redraw();

};

function addItem(elem) {

    let formGroup = elem.closest('.form-group');
    let inputDiv = elem.closest('div');
    let inputName = inputDiv.querySelector('input').name;
    canvasValues[inputName]["active"] = true;
    formGroup.classList.remove("inactiveitem");
    formGroup.classList.add("activeitem");
    redraw();

};

function addCustomItem(elem) {


    let form = document.getElementById('inputForm');
    let customTemplate = document.getElementById("customInputTemplate");
    let titleInput = customTemplate.querySelector('.customtitle')
    
    createCustomInput (form, customTemplate);
    setEventHandler();

};


function drawActive(ctx, yPos) {

    let canvasKeys = Object.keys(canvasValues);

    for (var i = 5; i < canvasKeys.length; i++) {

        let key = canvasKeys[i];
        let indent = 6;

        if (canvasValues[key]["active"] && canvasValues[key]["suponly"] == null) {

            let item = canvasValues[key];

            if (item["indent"] == 0) {

                indent = 6;

            } else if (item["indent"] == 1) {

                indent = 20;

            } else if (item["indent"] == 2) {

                indent = 35;

            } else {

                let indent = 6;
                console.log("indent not recognized");

            };


            if (item["break"]) {

                let lineWidth = item["break"]
                ctx.beginPath();
                ctx.moveTo(indent, yPos += lineWidth + 1);
                ctx.lineWidth = lineWidth;
                ctx.lineTo((cWidth - 6), yPos);
                ctx.stroke();
                yPos += 3;

            } else {

                ctx.beginPath();
                ctx.moveTo(indent, yPos += 4);
                ctx.lineWidth = 1;
                ctx.lineTo((cWidth - 6), yPos);
                ctx.stroke();

            }


            ctx.textAlign = "start";
            ctx.font = item["font"];

            if (key == "transFat") {

                ctx.font='italic 9pt Arial';
                ctx.fillText('Trans', indent, yPos += 13);
                ctx.font = item["font"];
                ctx.fillText('Fat ' + item["value"] + item["units"], 53, yPos);

            } else if (key == "addSugar") {

                ctx.fillText('Includes', indent, yPos += 13);
                ctx.fillText( item["value"] + 'g Added Sugars', 83, yPos);

            } else {

                ctx.fillText(item["label"] + " " + item["value"] + item["units"], indent, yPos += 13);               

            }


            //percentage
            if (item["dv"]) {

                let calPerc = calculatePerc(item["value"],item["dv"]);

                if (item["section"] == "add") {

                    ctx.textAlign="right";
                    ctx.font='9pt Arial';
                    ctx.fillText( calPerc , (cWidth - 6), yPos);

                } else {

                    ctx.textAlign="right";
                    ctx.font='Bold 9pt Arial';
                    ctx.fillText( calPerc , (cWidth - 6), yPos);

                }
            }
        }
    }
    
    return yPos;

}

function drawSupActive(ctx, yPos) {

    let canvasKeys = Object.keys(canvasValues);

    for (var i = 4; i < canvasKeys.length; i++) {

        let key = canvasKeys[i];
        let indent = 6;

        if (canvasValues[key]["supActive"]) {

            let item = canvasValues[key];

            if (item["indent"] == 0) {

                indent = 6;

            } else if (item["indent"] == 1) {

                indent = 20;

            } else if (item["indent"] == 2) {

                indent = 35;

            } else {

                let indent = 6;
                console.log("indent not recognized");

            };


        if (item["break"]) {

                let lineWidth = item["break"]
                ctx.beginPath();
                ctx.moveTo(indent, yPos += lineWidth + 1);
                ctx.lineWidth = lineWidth;
                ctx.lineTo((cWidth - 6), yPos);
                ctx.stroke();
                yPos += 3;

            } else {

                ctx.beginPath();
                ctx.moveTo(indent, yPos += 4);
                ctx.lineWidth = 1;
                ctx.lineTo((cWidth - 6), yPos);
                ctx.stroke();

        }


        ctx.textAlign = "start";
        ctx.font = '9pt Arial';
        console.log(canvasValues[key].units);

        if (key == "transFat") {

                ctx.font='italic 9pt Arial';
                ctx.fillText('Trans', indent, yPos += 13);
                ctx.font = '9pt Arial';
                ctx.fillText('Fat ' + item["value"] + item["units"], 53, yPos);

        } else if (key == "addSugar") {

                ctx.fillText('Includes', indent, yPos += 13);
                ctx.fillText( item["value"] + 'g Added Sugars', 83, yPos);

        } else if ( item["units"] == 'none') {

                ctx.fillText(item["label"] + " " + item["value"], indent, yPos += 13);
                console.log(item["units"]);

        } else {

                ctx.fillText(item["label"] + " " + item["value"] + item["units"], indent, yPos += 13);               

            }


            //percentage
            if (item["dv"]) {

                let calPerc = calculatePerc(item["value"],item["dv"]);
                dvActive = true;

                if (item["section"] == "add") {

                    ctx.textAlign="right";
                    ctx.font='9pt Arial';
                    ctx.fillText( calPerc , (cWidth - 6), yPos);

                } else {

                    ctx.textAlign="right";
                    ctx.font='9pt Arial';
                    ctx.fillText( calPerc , (cWidth - 6), yPos);

                }

            } else if ( key == 'cal' || key == 'calFat' ) {

                ctx.textAlign="right";
                ctx.font='9pt Arial';
                ctx.fillText( " " , (cWidth - 6), yPos);

            }

            else {

                noDvActive = true;

                ctx.textAlign="right";
                ctx.font='10pt Arial';
                ctx.fillText( '\u271D' , (cWidth - 6), yPos);

            }
        }
    }
    
    return yPos;

}


function calculatePerc(inputAmount, dailyValue) {

    let formType = document.getElementById('inputForm').name;
    if (formType == 'supplement') {

        let inputAmountConv = parseFloat(inputAmount, 10);
        let percentage = (inputAmountConv / dailyValue) * 100;
        let percentageRound = Math.ceil(percentage);
        let percentageString = percentageRound.toString();
        
        if (isNaN(percentageString)) {
            return( "0%*");
        } else if ( percentage <= .5) {
            return("<1%*");
        } else {
            return(percentageString + "%*");
        }

    } else {

        let inputAmountConv = parseFloat(inputAmount, 10);
        let percentage = Math.floor( (inputAmountConv / dailyValue) * 100 );
        let percentageString = percentage.toString();
        if (isNaN(percentageString)) {
            return( "0%");
        } else {
            return(percentageString + "%");
        }

    }
}



function drawSup() {
    
    if (canvas.getContext) {

        let ctx = canvas.getContext('2d');
        setCanvasDim("sup");
        ctx.canvas.width  = cWidth;
        ctx.canvas.height = cHeight;

        let yPos = 0;
        
        //Outside Border
        ctx.lineWidth = 2;
        ctx.strokeRect(0, 0, cWidth, cHeight);
        
        //Supplement Fact Heading
        ctx.textAlign="start";
        ctx.font='800 19.8pt Arial';
        ctx.fillText('Supplement Facts', 6, yPos += 29);
        
        //Servings Size 
        ctx.font='9pt Arial';
        ctx.fillText('Serving size' + " " + canvasValues["servingSize"]["value"], 6, yPos += 19);

        //Servings Per Container
        ctx.font='9pt Arial';
        ctx.fillText('Servings Per Container' + " " + canvasValues["servingPerCont"]["value"], 6, yPos += 13);
             
        //7 pt seperator line
        ctx.beginPath();
        ctx.moveTo(6, yPos += 10); 
        ctx.lineWidth = 7;
        ctx.lineTo((cWidth - 6), yPos);
        ctx.stroke();
        
        //Amount Per Serving Title
        ctx.textAlign="left"; 
        ctx.font='Bold 8pt Arial';
        ctx.fillText('Amount per serving', 6, yPos += 18); 
        
        
        //% Daily Value
        ctx.textAlign="center"; 
        ctx.font='Bold 8pt Arial';
        ctx.fillText('% Daily Value', (cWidth - 41), yPos); 
        
        //3 pt seperator line
        ctx.beginPath();
        ctx.moveTo(6, yPos += 6);
        ctx.lineWidth = 3;
        ctx.lineTo((cWidth - 6), yPos);
        ctx.stroke();
        
        //Additional
        yPos -= 2;
        let lastypos = drawSupActive(ctx, yPos);

        //7 pt seperator line
        ctx.beginPath();
        ctx.moveTo(6, lastypos += 10); 
        ctx.lineWidth = 7;
        ctx.lineTo((cWidth - 6), lastypos);
        ctx.stroke();

        //Disclosure Section 
        ctx.textAlign="start";
        ctx.font='6.2pt Arial';

        if (dvActive) {

            ctx.fillText('* Percent Daily Values are based on a 2,000 calorie diet', 6, lastypos += 15);

        }

        if (noDvActive) {

            ctx.fillText('\u271D Daily Value (DV) not established', 6, lastypos += 13);            

        }
    }
}



function draw() {
    
    if (canvas.getContext) {

        let ctx = canvas.getContext('2d');
        setCanvasDim("nutri");
        ctx.canvas.width  = cWidth;
        ctx.canvas.height = cHeight;

        let yPos = 0;
        
        //Outside Border
        ctx.lineWidth = 2;
        ctx.strokeRect(0, 0, cWidth, cHeight);
        
        //Nutrition Fact Heading
        ctx.font='bold 22.7pt Arial';
        ctx.fillText('Nutrition Facts', 6, yPos += 29);
        
        //1/4 pt seperator line
        ctx.beginPath();
        ctx.moveTo(6, yPos += 5);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), yPos); //34
        ctx.stroke();
        
        //Servings per container
        ctx.font='10pt Arial';
        ctx.fillText(canvasValues["servingPerCont"]["value"] + ' Servings per container', 6, yPos += 14);
        
        //Servings Size title
        ctx.font='Bold 11pt Arial';
        ctx.fillText('Serving size', 6, yPos += 16);       
        ctx.font='Bold 11pt Arial';
        ctx.textAlign="right"; 
        ctx.fillText(canvasValues["servingSize"]["value"] + ' ' + canvasValues["servingSizeUnit"]["value"] + 
            ' (' + canvasValues["servingSizeCalc"]["value"] + 'g)'
            , (cWidth - 6), yPos);
        
        //7 pt seperator line
        ctx.beginPath();
        ctx.moveTo(6, yPos += 10); 
        ctx.lineWidth = 7;
        ctx.lineTo((cWidth - 6), yPos);
        ctx.stroke();
        
        //Amount Per Serving Title
        ctx.textAlign="start"; 
        ctx.font='Bold 8pt Arial';
        ctx.fillText('Amount per serving', 6, yPos += 17); 
        
        //Calories Title
        ctx.font='Bold 18pt Arial';
        ctx.fillText('Calories', 6, yPos += 21);
        
        //Calories Value
        ctx.textAlign="right";
        ctx.font='Bold 25pt Arial';
        ctx.fillText(canvasValues["cal"]["value"], (cWidth - 6), yPos);
        
        //4 pt seperator line
        ctx.beginPath();
        ctx.moveTo(6, yPos += 8); 
        ctx.lineWidth = 4;
        ctx.lineTo((cWidth - 6), yPos); 
        ctx.stroke();
        
        //% Daily Value
        ctx.font='Bold 8pt Arial';
        ctx.fillText('% Daily Value*', (cWidth - 6), yPos += 15);

        let lastypos = drawActive(ctx, yPos);


        //1/4 pt seperator line
        ctx.beginPath();
        ctx.moveTo(6, lastypos += 5);
        ctx.lineWidth = 1;
        ctx.lineTo((cWidth - 6), lastypos);
        ctx.stroke();

        //Disclosure Section   eventually build out with wrap function
        ctx.textAlign="start";
        ctx.font='6.2pt Arial';
        ctx.fillText('* The % Daily Value (DV) tells you how much a nutrient in', 6, lastypos += 13); 
        ctx.fillText('a serving of food contributes to a daily diet. 2,000 calories', 6, lastypos += 10);
        ctx.fillText('a day is used for general nutrition advice.', 6, lastypos += 10);

        }
}

function redraw() {
    console.log("redrawing");
    let canvas = document.getElementById('canvas');
    canvas.width = canvas.width
    let formType = document.getElementById('inputForm').name;
    if (formType == 'nutrition') {
        draw();
    } else if (formType == 'supplement') {
        drawSup();
    } else {
        console.log("unknown form");
    }
}

// setEventHandler();
function initiate() {
    let formType = document.getElementById('inputForm').name;
    if (formType == 'nutrition') {
        createForm();
        setEventHandler();
        draw();
    } else if (formType == 'supplement') {
        canvasValues["servingSize"]["value"] = "1 packet";
        setDatalist();
        setEventHandler();
        drawSup();
    } else {
        console.log("unknown form");
    }
}

initiate();