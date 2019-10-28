/* eslint-env browser */
/* eslint no-unused-vars: [1, {"argsIgnorePattern": "evt"}] */

const contact = (() => {
  const addform = () => {
    const x = document.getElementById('content');
    const createform = document.createElement('form'); // Create New Element Form
    createform.setAttribute('action', ''); // Setting Action Attribute on Form
    createform.setAttribute('method', 'post'); // Setting Method Attribute on Form
    x.appendChild(createform);

    const heading = document.createElement('h2'); // Heading of Form
    heading.innerHTML = 'Contact Form ';
    createform.appendChild(heading);

    const line = document.createElement('hr'); // Giving Horizontal Row After Heading
    createform.appendChild(line);

    let linebreak = document.createElement('br');
    createform.appendChild(linebreak);

    let linebreak = document.createElement('br');
    createform.appendChild(linebreak);

    const emaillabel = document.createElement('label'); // Create Label for E-mail Field
    emaillabel.innerHTML = 'Your Email : ';
    createform.appendChild(emaillabel);

    const emailelement = document.createElement('input'); // Create Input Field for E-mail
    emailelement.setAttribute('type', 'text');
    emailelement.setAttribute('name', 'demail');
    createform.appendChild(emailelement);

    const emailbreak = document.createElement('br');
    createform.appendChild(emailbreak);

    const messagelabel = document.createElement('label'); // Append Textarea
    messagelabel.innerHTML = 'Your Message : ';
    createform.appendChild(messagelabel);

    const texareaelement = document.createElement('textarea');
    texareaelement.setAttribute('name', 'dmessage');
    createform.appendChild(texareaelement);

    const messagebreak = document.createElement('br');
    createform.appendChild(messagebreak);

    const submitelement = document.createElement('input'); // Append Submit Button
    submitelement.setAttribute('type', 'submit');
    submitelement.setAttribute('name', 'dsubmit');
    submitelement.setAttribute('value', 'Submit');
    createform.appendChild(submitelement);
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
    addform();
  };

  return { render };
})();

export default contact;
