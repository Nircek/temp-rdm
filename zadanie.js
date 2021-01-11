const zadanie = {
    "type": "EqEx",
    "name": "Pociągi 2",
    "content": {
        "main": "Z miast A i B odległych o \\( d=300 \\mathrm{km} \\) wyruszają jednocześnie dwa pociągi z prędkościami \\( v_a=50 \\mathrm{\\frac{m}{s}} \\) oraz \\( v_b=67 \\mathrm{\\frac{m}{s}} \\). W jakiej odległości \\( x \\) od miasta A spotkają się te pociągi? Po jakim czasie \\( t \\) się to stanie?",
        "imgs": ["img/back.png", "img/start.png", "https://bulma.io/images/css-book/css-in-44-minutes-book-cover.png"],
        "unknowns": [
            ["x", "km"],
            ["t", "s"]
        ]
    }
};
var unknowns = [];

function setData() {
    unknowns = [];
    const title = document.getElementById("title");
    const desc = document.getElementById("description");
    if(screenSize == "mobile") {
        title.classList.replace("is-1", "is-3");
        title.classList.replace("mb-2", "my-2");
        title.style.paddingLeft = ".3rem";
        title.style.paddingRight = ".3rem";

        desc.classList.add("is-6");
        desc.classList.replace("m-4", "m-2");
        desc.classList.replace("mb-6", "mb-4");
    }
    title.innerHTML = zadanie.name;
    desc.innerHTML = zadanie.content.main;
    const image_container = document.getElementById("image_container");
    for (var i = 0; i < zadanie.content.imgs.length; i++)
        image_container.appendChild(createImage(zadanie.content.imgs[i]));
    createUnknowns(zadanie.content.unknowns);

    //Converting LaTeX
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, 'math-panel'], [function() {
        //Disabling focus
        const elementList = document.querySelectorAll(".MathJax_CHTML");
        for (var i = 0; i < elementList.length; i++) {
            elementList[i].tabIndex = -1;
        }
    }]);
}

/**
 * @param {string[][]} list
 */
function createUnknowns(list) {
    for (var i = 0; i < list.length; i++) {
        const input = createElement("input", ["input", "is-primary"]);
        setValueChecking(input);
        const warning = createElement("p", ["help", "is-warning"], [], "Wymagana liczba");
        hide(warning);
        const unknown = {
            "name": list[i][0],
            "unit": list[i][1],
            "input": input,
            "warning": warning
        };
        unknowns.push(unknown);
    }
    for (let i = 0; i < unknowns.length; i++) {
        const unknown = unknowns[i];

        const name = createElement("div", ["subtitle", "full-height", "is-flex", "is-align-items-center", "is-justify-content-right"], [], "\\( " + unknown.name + " = \\)");
        name.style.minWidth = "2em";
        const unit = createElement("div", ["subtitle", "full-height", "is-flex", "is-align-items-center"], [], "\\(\\mathrm{" + unknown.unit + "} \\)");
        unit.style.minWidth = "2em";
        const dummyLabel = createElement("p", ["help"]);

        const nameColumn = createElement("div", ["column", "is-narrow", "pb-2rem"], [name]);
        const inputColumn = createElement("div", ["column", "px-0"], [unknown.input, unknown.warning]);
        const unitColumn = createElement("div", ["column", "is-narrow", "pb-2rem"], [unit]);

        const columns = createElement("div", ["columns", "is-mobile"], [nameColumn, inputColumn, unitColumn]);
        const tile = createElement("div", ["tile", "column", "is-flex", "is-justify-content-center"], [columns]);
        tile.style.paddingTop = 0;
        tile.style.paddingBottom = ".5rem";
        document.getElementById("unknowns").appendChild(tile);
    }
}

/**
 * @param {string} path
 */
function createImage(path) {
    const img = createElement("img");
    img.src = path;
    const box = createElement("div", ["box", "full-height-box", "is-flex", "is-justify-content-center", "is-align-items-center"], [img]);
    const center = createElement("center", ["full-height"], [box]);
    const figure = createElement("figure", ["column"], [center]);
    return figure;
}

/**
 * @param {HTMLElement} textbox
 */
function setValueChecking(textbox) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
        textbox.addEventListener(event, function() {
            const regex = /^[+-]?\d*[,\.]?\d*$/;
            if (!regex.test(textbox.value)) {
                if (!textbox.classList.contains("is-warning")) {
                    textbox.classList.remove("is-primary");
                    textbox.classList.add("is-warning");

                    const i = getUnknownIndex(textbox);
                    if (i != -1)
                        show(unknowns[i].warning);
                }
            } else {
                if (!textbox.classList.contains("is-primary")) {
                    textbox.classList.remove("is-warning");
                    textbox.classList.add("is-primary");

                    const i = getUnknownIndex(textbox);
                    if (i != -1)
                        hide(unknowns[i].warning);
                }
            }
        });
    });
}

/**
 * Returns index of element in unknowns or -1 when element is not found
 * @param {HTMLElement} textbox
 */
function getUnknownIndex(textbox) {
    var i = -1
    unknowns.forEach(unknown => {
        if (unknown.input == textbox) {
            i = unknowns.indexOf(unknown);
            return;
        }
    });
    return i;
}

function checkInputValues() {
    const regex = /^[+-]?\d*[,\.]?\d+$/;
    for (let i = 0; i < unknowns.length; i++) {
        const value = unknowns[i].input.value
        if (!regex.test(value))
            return false;
    }
    return true;
}

function onSubmitClick() {
    const button = document.getElementById("submitButton");
    button.classList.add("is-loading");
    setTimeout(() => {
        button.classList.remove("is-loading")
    }, 1000);

    if (checkInputValues()) {
        const response = {}
        for (let i = 0; i < unknowns.length; i++) {
            const unknown = unknowns[i];
            response[unknown.name] = parseFloat(unknown.input.value.replace(",", "."));
        }
        console.log(response);
    }
}