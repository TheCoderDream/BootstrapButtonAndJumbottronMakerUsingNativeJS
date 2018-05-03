document.getElementById('bootstrap-button-form').addEventListener('submit',createBootstrapButton);

function createBootstrapButton(e){

    let buttonType = document.getElementById('select');
    let bsBtn = document.getElementById('bs-btn');
    let att = document.createAttribute('class');
    console.log(bsBtn.getAttribute('class'));
    if(bsBtn.getAttribute('class') == null){


        console.log(att);

        bsBtn.setAttributeNode(att);
        console.log(bsBtn.getAttribute('class'));
    }

    console.log(buttonType.value);
    if (buttonType.value === 'primary'){
        att.value = 'btn btn-primary';
        bsBtn.setAttributeNode(att);

    }else if (buttonType.value === 'warning') {

        att.value = 'btn btn-danger';
        bsBtn.setAttributeNode(att);
    }else if(buttonType.value === 'info'){
        att.value = 'btn btn-info';
        bsBtn.setAttributeNode(att);
    }

    e.preventDefault();

}

document.getElementById('jmb-form').addEventListener('submit',createJumbottron);
function createJumbottron(e){

    // get element from the form
    let heading = document.getElementById('heading');
    console.log(heading);
    let pText = document.getElementById('psText');
    console.log(pText);

    // create new div element and add it to jumbotroon class
    let div = document.createElement('DIV');
    console.log(div);
    let att = document.createAttribute('class');
    console.log(att);
    att.value = 'jumbotron';
    div.setAttributeNode(att);

    let h1 = document.createElement('H1');
    let ps = document.createElement('P');

    let headingText = document.createTextNode(heading.value);

    let psText = document.createTextNode(pText.value);
    h1.appendChild(headingText);
    ps.appendChild(psText);


    div.appendChild(h1);
    div.appendChild(ps);

    // get the nonStatic content

    let container = document.getElementById('nonStatic');
    container.appendChild(div);


    e.preventDefault();



}