const menu = (() => {

    const addtag = (select, tag, text) => {
        var h = document.createElement(tag);
        var t = document.createTextNode(text); 
        h.appendChild(t); 
        document.querySelector(select).appendChild(h);
    };

    const addimg = (select, url) => {
        var h = document.createElement("IMG");
        h.setAttribute("src", url); 
        h.setAttribute("width", "80%");
        h.setAttribute("height", "80%");
        h.setAttribute("text-align", "center");
        h.setAttribute("alt", "sea");
        document.querySelector(select).appendChild(h);
    }

    const render = () => {
    addtag("#menu-title", "H1", "私たちのメニュー");
    addimg("#dish1", "./images/dish1.jpeg")
    addtag("#dish1", "P", "Sushi arrangement 45$")
    addimg("#dish2", "./images/dish1.jpeg")
    addtag("#dish2", "P", "Sushi arrangement 45$")
    addimg("#dish3", "./images/dish1.jpeg")
    addtag("#dish3", "P", "Sushi arrangement 45$")
    addimg("#dish4", "./images/dish1.jpeg")
    addtag("#dish4", "P", "Sushi arrangement 45$")
    }

    return{render};

})();

export default menu;