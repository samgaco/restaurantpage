const menu = (() => {

    const addtag = (select, tag, text) => {
        let h = document.createElement(tag);
        let t = document.createTextNode(text);
        h.appendChild(t);
        document.querySelector(select).appendChild(h);
    };

    const adddiv = (clase, add_to, boot) => {
        let h = document.createElement("DIV");
        h.classList.add(clase);
        h.classList.add(boot);
        document.querySelector(add_to).appendChild(h);
    };

    const addimg = (select, url) => {
        let h = document.createElement("IMG");
        h.setAttribute("src", url);
        h.setAttribute("width", "100%");
        h.setAttribute("height", "100%");
        h.setAttribute("text-align", "center");
        h.setAttribute("alt", "sea");
        document.querySelector(select).appendChild(h);
    }

    const render = () => {
        document.getElementById("content").innerHTML = "";
        adddiv("menu-row", "#content")
        adddiv("left-menu1", ".menu-row", "card")
        addimg(".left-menu1", "./images/dish1.jpeg")
        addtag(".left-menu1", "P", "Sushi arrangement 45$")
        adddiv("right-menu1", ".menu-row", "card")
        addimg(".right-menu1", "./images/dish2.jpg")
        addtag(".right-menu1", "P", "Sashimi arrangement 65$")

        adddiv("left-menu2", ".menu-row", "card")
        addimg(".left-menu2", "./images/dish3.jpg")
        addtag(".left-menu2", "P", "Authentic kobe beef 215$")
        adddiv("right-menu2", ".menu-row", "card")
        addimg(".right-menu2", "./images/dish4.jpg")
        addtag(".right-menu2", "P", "Ramen bowl 30$")
    }

    return { render };

})();

export default menu;