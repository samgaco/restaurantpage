const menu = (() => {

    const addtag = (select, tag, text) => {
        var h = document.createElement(tag);
        var t = document.createTextNode(text); 
        h.appendChild(t); 
        document.querySelector(select).appendChild(h);
    };

    const adddiv = (clase) => {
        var h = document.createElement("DIV");
        h.classList.add(clase);
        document.querySelector("#content").appendChild(h);
    };

    const addimg = (select, url) => {
        var h = document.createElement("IMG");
        h.setAttribute("src", url); 
        h.setAttribute("width", "45%");
        h.setAttribute("height", "45%");
        h.setAttribute("text-align", "center");
        h.setAttribute("alt", "sea");
        document.querySelector(select).appendChild(h);
    }

    const render = () => {
    document.getElementById("content").innerHTML = "";
    addtag("#content", "H1", "私たちのメニュー");
    adddiv("menu-row")

    adddiv("left-menu1")
    addimg(".left-menu1", "./images/dish1.jpeg")
    addtag(".left-menu1", "P", "Sushi arrangement 45$")
    adddiv("right-menu1")
    addimg(".right-menu1", "./images/dish1.jpeg")
    addtag(".right-menu1", "P", "Sushi arrangement 45$")

    adddiv("menu-row2")
    adddiv("left-menu2")
    addimg(".left-menu2", "./images/dish1.jpeg")
    addtag(".left-menu2", "P", "Sushi arrangement 45$")
    adddiv("right-menu2")
    addimg(".left-menu2", "./images/dish1.jpeg")
    addtag(".left-menu2", "P", "Sushi arrangement 45$")
    }

    return{render};

})();

export default menu;