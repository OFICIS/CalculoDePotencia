
//cuando existe mas de una capacidad de bateria
/* function potencias3(V, A, P, NB, C, NB2, C2, NB3, C3) {

    const result = V*A/1000;
    const result2 = 
    (V*(((P*NB*C)/100)+((P*NB2*C2)/100)+((P*NB3*C3)/100)))/1000;
    const resultA = result2.toFixed(3);
    const result3 = `potenciaRect ${result} potenciaBat ${resultA}`;  
    return result3;
} */

function potencias3() {
    const V = Number(document.getElementById('voltaje').value);
    const A = Number(document.getElementById('amperaje').value);
    const NB = Number(document.getElementById('baterias1').value);
    const C = Number(document.getElementById('capacidad1').value);
    const NB2 = Number(document.getElementById('capacidad2').value);
    const C2 = Number(document.getElementById('capacidad2').value);
    const NB3 = Number(document.getElementById('capacidad3').value);
    const C3 = Number(document.getElementById('capacidad3').value);
    const result = V*A/1000;
    texto.innerHTML = `potenciaRect ${result.toFixed(3)}` + '<br>';
    for (let i = 10; i >= 4; i--) {
        const result2 = 
        (V*(((i*NB*C)/100)+((i*NB2*C2)/100)+((i*NB3*C3)/100)))/1000;
        const result3 = `${i}% potenciaBat ${result2.toFixed(3)}`;
        texto.innerHTML += result3 + '<br>';
        console.log(result3)
    };
}; 


/* function potencias2(V, A, P, NB, C, NB2, C2) {

    const result = V*A/1000;
    const result2 = 
    (V*(((P*NB*C)/100)+((P*NB2*C2)/100)))/1000;
    const resultA = result2.toFixed(3);
    const result3 = `potenciaRect ${result} potenciaBat ${resultA}`;  
    return result3;
} */

function potencias2() {
    const V = Number(document.getElementById('voltaje').value);
    const A = Number(document.getElementById('amperaje').value);
    const NB = Number(document.getElementById('baterias1').value);
    const C = Number(document.getElementById('capacidad1').value);
    const NB2 = Number(document.getElementById('capacidad2').value);
    const C2 = Number(document.getElementById('capacidad2').value);
    const result = V*A/1000;
    texto.innerHTML = `potenciaRect ${result.toFixed(3)}` + '<br>';
    for (let i = 10; i >= 4; i--) {
        const result2 = 
        (V*(((i*NB*C)/100)+((i*NB2*C2)/100)))/1000;
        const result3 = `${i}% potenciaBat ${result2.toFixed(3)}`;
        texto.innerHTML += result3 + '<br>';
        console.log(result3)
    };
};

/* function potencias1(V, A, P, NB, C) {

    const result = V*A/1000;
    for(i = 0; i < P; i++) {

    }
    const result2 = 
    (V*((P*NB*C)/100))/1000;
    const resultA = result2.toFixed(3);
    const result3 = `potenciaRect ${result} potenciaBat ${resultA}`;  
    return result3;
} */
function createNodeInput (numberCreate) {
     let sectionContainer = document.getElementById('section-container');
     const texto = document.getElementById('texto');
     texto.innerHTML = '';
     if (numberCreate === 1 || numberCreate === 2 || numberCreate === 3 ) {
         for (let i = 1; i <= numberCreate; i++) {
             const div1 = document.createElement('div');
             const input = document.createElement('input');
             const label = document.createElement('label');
             label.setAttribute('for', `baterias${i}`);
             label.classList.add('label');
             input.setAttribute('id', `baterias${i}`);
             input.setAttribute('type', 'number');
             const textLabel1 = document.createTextNode(`# Baterias`);
             label.appendChild(textLabel1);
             div1.appendChild(input);
             div1.appendChild(label);
             sectionContainer.appendChild(div1);
             const div2 = document.createElement('div');
             const input2 = document.createElement('input');
             const label2 = document.createElement('label');
             label2.setAttribute('for', `capacidad${i}`);
             label2.classList.add('label');
             input2.setAttribute('id', `capacidad${i}`);
             input2.setAttribute('type', 'number');
             const textLabel2 = document.createTextNode(`Capacidad de Bateria`);
             label2.appendChild(textLabel2);
             div2.appendChild(input2);
             div2.appendChild(label2);
             sectionContainer.appendChild(div2);
         };
         const button = document.createElement('button');
         const buttonText = document.createTextNode('enviar');
         button.appendChild(buttonText);
         sectionContainer.appendChild(button);
         button.setAttribute('type', 'button');
     
         if (numberCreate === 1) {
             button.addEventListener('click', potencias1);
         } else if (numberCreate === 2) {
             button.addEventListener('click', potencias2);
         } else if (numberCreate === 3) {
             button.addEventListener('click', potencias3);
        } else {
        texto.innerHTML = 'ingresa una cantidad en el rango de 1 a 3';
        }  
    }
};

function createNodeMain() {
    const variedadDeCanpacidades = Number(document.getElementById('variedadCapacidades').value);
    let sectionContainer = document.getElementById('section-container');
    sectionContainer.innerHTML = ''; 
    const texto = document.getElementById('texto');
    texto.innerHTML = '';
    const h2 = document.createElement('h2-title');
    const textH2 = document.createTextNode(`Potencia de Baterias #${variedadDeCanpacidades}`);
    const divTitle = document.createElement('div');
    divTitle.classList.add('titulo');
    h2.appendChild(textH2);
    divTitle.appendChild(h2);
    sectionContainer.appendChild(divTitle);
    const div1 = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    label.setAttribute('for', `voltaje`);
    label.classList.add('label');
    input.setAttribute('id', `voltaje`);
    input.setAttribute('type', 'number');
    const textLabel1 = document.createTextNode(`voltaje`);
    label.appendChild(textLabel1);
    div1.appendChild(input);
    div1.appendChild(label);
    sectionContainer.appendChild(div1);
    const div2 = document.createElement('div');
    const input2 = document.createElement('input');
    const label2 = document.createElement('label');
    label2.setAttribute('for', `amperaje`);
    label2.classList.add('label');
    input2.setAttribute('id', `amperaje`);
    input2.setAttribute('type', 'number');
    const textLabel2 = document.createTextNode(`amperaje`);
    label2.appendChild(textLabel2);
    div2.appendChild(input2);
    div2.appendChild(label2);
    sectionContainer.appendChild(div2);

    createNodeInput (variedadDeCanpacidades);
};

function potencias1() {

    const V = Number(document.getElementById('voltaje').value);
    const A = Number(document.getElementById('amperaje').value);
    const NB = Number(document.getElementById('baterias1').value);
    const C = Number(document.getElementById('capacidad1').value);
    const texto = document.getElementById('texto');
    const result = V*A/1000;
    texto.innerHTML = `potenciaRect ${result.toFixed(3)}` + '<br>';
    for (let i = 10; i >= 1; i--) {
        const result2 = 
        (V*((i*NB*C)/100))/1000;
        const result3 = `${i}% potenciaBat ${result2.toFixed(3)}`;
        texto.innerHTML += result3 + '<br>';
        console.log(result3)
    };
};



//V= voltaje de el TG (220, 380)  I= 1 aire de 5tn 15amp --ingresar el total de amperaje, 3tn = 10;
function potenciaAAtri(V, I) {
    const result = (1.73 * V * I * 0.85) / 1000;
    const resultText = `La potencia AA tri es ${result}`;
    return resultText;
}

function potenciaAAmon(V, I) {
    const result = (V * I) / 1000;
    const resultText = `La potencia AA mono es ${result}`;
    return resultText;
}

function conversorBtuKw(btu) {
    
}

function potenciaRect(V, A) {
    const result = (V * A) / 1000;
    const resultText = `La potencia del Rect es ${result}`;
    return resultText;
}

function formulaDeModulo(NB, CB, CF, V) {
    const result = ((((NB*CB)*10)/100 + CF)*V);
    return result;
}