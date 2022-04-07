function addChild(parent, child) {
    var parentElement = document.createElement(parent)
    var childElement = document.createElement(child)
    document.getElementById("ID").appendChild(parentElement).appendChild(childElement);
}