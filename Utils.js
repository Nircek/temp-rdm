/**
 * @param {string} type
 * @param {string[]} classes
 * @param {HTMLElement[]} children
 * @param {string} innerHTML
 * @returns {HTMLElement}
 */
function createElement(type, classes = [], children = [], innerHTML = "") {
    var element = document.createElement(type);
    for (var i = 0; i < classes.length; i++)
        element.classList.add(classes[i]);
    element.innerHTML = innerHTML;
    for (var i = 0; i < children.length; i++)
        element.appendChild(children[i]);
    return element;
}