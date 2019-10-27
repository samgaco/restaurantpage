const about = (() => {

    const addtag = (select, text) => {
        var h = document.createElement("H1");
        var t = document.createTextNode(text); 
        h.appendChild(t); 
        document.querySelector(select).appendChild(h);
    };

    const addimg = (select, url) => {
        var h = document.createElement("IMG");
        h.setAttribute("src", url);
        h.setAttribute("width", "100%");
        h.setAttribute("height", "100%");
        h.setAttribute("alt", "sea");
        document.querySelector(select).appendChild(h);
    }
    return{addtag, addimg};

})();

export default about;



