/* eslint-env browser */
/* eslint no-unused-vars: [1, {"argsIgnorePattern": "evt"}] */

const about = (() => {
  const addtag = (select, tag, text) => {
    const h = document.createElement(tag);
    const t = document.createTextNode(text);
    h.appendChild(t);
    document.querySelector(select).appendChild(h);
  };

  const addimg = (select, url) => {
    const h = document.createElement('IMG');
    h.setAttribute('src', url);
    h.setAttribute('width', '40%');
    h.setAttribute('height', '80%');
    h.setAttribute('text-align', 'center');
    h.setAttribute('alt', 'sea');
    document.querySelector(select).appendChild(h);
  };

  const render = () => {
    document.getElementById('content').innerHTML = '';
    addtag('#content', 'H1', 'レストラン');
    addimg('#content', './images/header.png');
    addtag('#content', 'P', 'Our food is salty, sweet, sour, slightly bitter and full of umami flavors, and equal emphasis is placed on our beautiful presentations.');
    addtag('#content', 'P', '私たちの食べ物は、塩辛く、甘く、酸っぱく、わずかに苦く、うま味がいっぱいです。美しいプレゼンテーションにも同様に重点が置かれています。');
  };

  return { render };
})();

export default about;
