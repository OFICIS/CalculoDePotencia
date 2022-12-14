let sectionContainer2 = document.getElementById('section-container2');
let primerDiv = document.getElementById('primerInput');
let header = document.getElementById('header');
let boleano = true;

/*<label for="VoltajeGeneral" class="label" id="label">Escoje el tipo de Voltaje</label>
<input list="tipoVoltaje" id="VoltajeGeneral"/>
<datalist id="tipoVoltaje">
    <option value="220"></option>
    <option value="380"></option>
</datalist>*/

function createInput(textLabel, forLabelIdInput) {
    const label0 = document.createElement('label'); 
    const textLabel0 = document.createTextNode(`${textLabel}`);
    label0.setAttribute('for', `${forLabelIdInput}`);
    label0.classList.add('label');
    label0.appendChild(textLabel0);
    primerDiv.appendChild(label0);
    const input0 = document.createElement('input');
    input0.setAttribute('id', `${forLabelIdInput}`);
    primerDiv.appendChild(input0);
    header.appendChild(primerDiv);   
}

function createDataList(textLabel, forLabelIdInput, listName, texOption1, texOption2){
    const label0 = document.createElement('label'); 
    const textLabel0 = document.createTextNode(`${textLabel}`);
    label0.setAttribute('for', `${forLabelIdInput}`);
    label0.classList.add('label');
    label0.appendChild(textLabel0);
    primerDiv.appendChild(label0);
    const input0 = document.createElement('input');
    const datalist = document.createElement('datalist');
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    input0.setAttribute('id', `${forLabelIdInput}`);
    input0.setAttribute('list', `${listName}`);
    datalist.setAttribute('id', `${listName}`);
    const textOption1 = document.createTextNode(`${texOption1}`);
    const textOption2 = document.createTextNode(`${texOption2}`);
    option1.appendChild(textOption1);
    option2.appendChild(textOption2);
    datalist.appendChild(option1);
    datalist.appendChild(option2);
    primerDiv.appendChild(input0);
    primerDiv.appendChild(datalist);
    header.appendChild(primerDiv);   
}

function createNodePreviw() {
    let potenciaAA = document.getElementById('potenciaAA');
    let nodeDiv = document.getElementById('segundoDiv');
    console.log(potenciaAA.value)
    if (boleano) {
        if (potenciaAA.value === 'INDOOR') {
            createDataList(
                '??Que tipo es el site?', 
                'tipoCable', 
                'monTri', 
                'Monofasico', 
                'Trifasico'
            )
            createDataList(
                'Escoje el Voltaje del site', 
                'VoltajeGeneral',
                'tipoVoltaje',
                '220',
                '380'
            );
            
            createDataList(
                'Escoje el tonelaje del AA', 
                'tonelaje', 
                'tipoTonelaje', 
                '5TN', 
                '3TN'
            );
            
            let input = document.getElementById('tonelaje');
            input.addEventListener('input', () => {
                createInput(
                    '??Cual es la cantidad de AA?',
                    'cantAA'
                )
                let inputAA = document.getElementById('cantAA');
                inputAA.setAttribute('type', 'number');
                const button = document.createElement('button');
                const buttonText = document.createTextNode('enviar');
                button.appendChild(buttonText);
                primerDiv.appendChild(button);
                button.setAttribute('type', 'button');
                button.addEventListener('click', createNodeMain);
            })

 
        } else {
            const button = document.createElement('button');
            const buttonText = document.createTextNode('enviar');
            button.appendChild(buttonText);
            primerDiv.appendChild(button);
            button.setAttribute('type', 'button');
            button.addEventListener('click', createNodeMain);
        }
    }
    boleano = false;
}

function createNodeMain() {
    const variedadDeCanpacidades = Number(document.getElementById('variedadCapacidades').value);
    
    if (variedadDeCanpacidades === 1 || variedadDeCanpacidades === 2 || variedadDeCanpacidades === 3 ) {
        let sectionContainer = document.getElementById('section-container');
        sectionContainer.innerHTML = ''; 
        const texto2 = document.getElementById('texto2');
        texto2.innerHTML = '';
        const texto = document.getElementById('texto'); 
        texto.innerHTML = '';
        const h2 = document.createElement('h2');
        const textH2 = document.createTextNode(`Potencia de Baterias #${variedadDeCanpacidades}`);
        const divTitle = document.createElement('div');
        divTitle.classList.add('titulo');
        h2.appendChild(textH2);
        divTitle.appendChild(h2);
        sectionContainer.appendChild(divTitle);
        const div0 = document.createElement('div');
        const input0 = document.createElement('input');
        const label0 = document.createElement('label');
        label0.setAttribute('for', `cF`);
        label0.classList.add('label');
        input0.setAttribute('id', `cF`);
        input0.setAttribute('type', 'number');
        const textLabel0 = document.createTextNode(`Carga Final Proyectada`);
        label0.appendChild(textLabel0);
        div0.appendChild(input0);
        div0.appendChild(label0);
        sectionContainer.appendChild(div0);
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
    } else {
    texto.innerHTML = 'ingresa una cantidad en el rango de 1 a 3';
    }
};

function createNodeInput (numberCreate) {
     let sectionContainer = document.getElementById('section-container');
     const texto = document.getElementById('texto');
     texto.innerHTML = '';
     
         for (let i = 1; i <= numberCreate; i++) {
             const div1 = document.createElement('div');
             const input = document.createElement('input');
             const label = document.createElement('label');
             label.setAttribute('for', `baterias${i}`);
             label.classList.add('label');
             input.setAttribute('id', `baterias${i}`);
             input.setAttribute('type', 'number');
             const textLabel1 = document.createTextNode(`#B. Baterias`);
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
         } 
         if (numberCreate === 2) {
             button.addEventListener('click', potencias2);
         } 
         if (numberCreate === 3) {
             button.addEventListener('click', potencias3);
        }

};



function potencias1() {
    let potenciaAA = document.getElementById('potenciaAA');
    sectionContainer2.classList.remove('inactive');
    const tipoSite = document.getElementById('tipoCable');
    const texto2 = document.getElementById('texto2');
    const V = Number(document.getElementById('voltaje').value);
    const A = Number(document.getElementById('amperaje').value);
    const NB = Number(document.getElementById('baterias1').value);
    const C = Number(document.getElementById('capacidad1').value);
    const CF = Number(document.getElementById('cF').value);
    const porcentajeArr = [];
    const potBB = [];
    const suma1 = [];
    const suma2 = [];
    const suma3 = [];
    const sumaIndoor = [];
    const sumaIndoorMono = [];

    //calculo aireAcondicionado
    if(potenciaAA.value === 'INDOOR') {
        const voltajeSite = Number(document.getElementById('VoltajeGeneral').value);
        let tipoTN = document.getElementById('tonelaje');
        const cantidadAA = Number(document.getElementById('cantAA').value);
        if (tipoTN.value === '5TN') {
            tipoTN = 15;
        } else if (tipoTN.value === '3TN') {
            tipoTN = 10
        };
        let tipoTNtotal = tipoTN * cantidadAA;
        var indoor = (1.73 * voltajeSite * tipoTNtotal * 0.85) / 1000;
        
        //calculo aire Acondicionado monofasico
        var indoorMono = (voltajeSite * tipoTNtotal) / 1000;
    }

    //modulos capacidad 
    const result0 = (((NB*C)*10)/100 + CF)*V / 1000;
    texto2.innerHTML = `La Potencia de modulos es ${result0.toFixed(3)}` + '<br>';

    //potencia rectificador
    const potRect = V*A/1000;
    const outDoor = 1.3;
    const UnidadExtractora = 1.1; 
    //potencia de bateria
    for (let i = 10; i >= 4; i--) {
        const porcentaje = `${i}%`
        porcentajeArr.push(porcentaje);

        const result2 = 
        (V*((i*NB*C)/100))/1000;
        const result3 = result2;
        potBB.push(result3);
        const sumaRectBat = (potRect + result3);
        suma1.push(sumaRectBat); 
        const sumaTotal = outDoor + sumaRectBat;
        suma2.push(sumaTotal);
        if (potenciaAA.value === 'INDOOR') {
            const sumaTotal2 = indoor + sumaRectBat;
            sumaIndoor.push(sumaTotal2);
            const sumaTotal3 = indoorMono + sumaRectBat;
            sumaIndoorMono.push(sumaTotal3);
            console.log(sumaTotal3);
        } else if (potenciaAA.value === 'UNIDAD EXTRACTORA') {
            const sumaTotal = UnidadExtractora + sumaRectBat;
            suma3.push(sumaTotal);
        } else {
            const sumaTotal = outDoor + sumaRectBat;
            suma2.push(sumaTotal);
        }
    };
    console.log(suma3);
    //creando los nodos de 6x7
    for (let j = 0; j < 7; j++) {
        for (let i = 0; i < 6; i++) {
            const div = document.createElement('div');
            const p = document.createElement('p');
            p.classList.add(`p${i}`);
            div.classList.add('div10');
            div.appendChild(p)
            sectionContainer2.appendChild(div);
            /* console.log(p.classList.contains("p1")) */
            if (p.matches('.p0')) {
                const pText = document.createTextNode(porcentajeArr[j]);
                p.appendChild(pText);
            }
            if (p.matches('.p1')) {
                const pText = document.createTextNode(potBB[j].toFixed(3));
                p.appendChild(pText);
            }
            if (p.matches('.p2')) {
                const pText = document.createTextNode(potRect.toFixed(3));
                p.appendChild(pText);
            } 
             if (p.matches('.p3')) {
                const pText = document.createTextNode(suma1[j].toFixed(3));
                p.appendChild(pText);
            } 
             if (p.matches('.p4')) {
                if (potenciaAA.value === 'INDOOR') {
                    if (tipoSite.value === 'Trifasico') {
                        const pText = document.createTextNode(indoor.toFixed(3));
                        p.appendChild(pText);
                    } else {
                        const pText = document.createTextNode(indoorMono.toFixed(3));
                        p.appendChild(pText);
                    }
                    
                } else if (potenciaAA.value === 'UNIDAD EXTRACTORA'){
                    const pText = document.createTextNode(UnidadExtractora);
                    p.appendChild(pText);
                } else {
                    const pText = document.createTextNode(outDoor);
                    p.appendChild(pText);
                }
            } 
            if (p.matches('.p5')) {
                if (potenciaAA.value === 'INDOOR') {
                    if (tipoSite.value === 'Trifasico') {
                        const pText = document.createTextNode(sumaIndoor[j].toFixed(3));
                        p.appendChild(pText);
                    } else {
                        const pText = document.createTextNode(sumaIndoorMono[j].toFixed(3));
                    p.appendChild(pText);
                    }
                    
                } else if (potenciaAA.value === 'UNIDAD EXTRACTORA'){
                    const pText = document.createTextNode(suma3[j].toFixed(3));
                    p.appendChild(pText);
                } else {
                    const pText = document.createTextNode(suma2[j].toFixed(3));
                    p.appendChild(pText);
                }
            }    
        }
        
    }
    
};

function potencias2() {
    let potenciaAA = document.getElementById('potenciaAA');
    sectionContainer2.classList.remove('inactive');
    const tipoSite = document.getElementById('tipoCable');
    const texto = document.getElementById('texto');
    const V = Number(document.getElementById('voltaje').value);
    const A = Number(document.getElementById('amperaje').value);
    const NB = Number(document.getElementById('baterias1').value);
    const C = Number(document.getElementById('capacidad1').value);
    const NB2 = Number(document.getElementById('baterias2').value);
    const C2 = Number(document.getElementById('capacidad2').value);
    const CF = Number(document.getElementById('cF').value);
    

    const porcentajeArr = [];
    const potBB = [];
    const suma1 = [];
    const suma2 = [];
    const suma3 = [];
    const sumaIndoor = [];
    const sumaIndoorMono = [];

    const result0 = (((NB*C)*10)/100 + CF)*V / 1000;
    texto.innerHTML = `La Potencia de modulos es ${result0.toFixed(3)}` + '<br>';

    //calculo aireAcondicionado
    if(potenciaAA.value === 'INDOOR') {
        const voltajeSite = Number(document.getElementById('VoltajeGeneral').value);
        let tipoTN = document.getElementById('tonelaje');
        const cantidadAA = Number(document.getElementById('cantAA').value);
        if (tipoTN.value === '5TN') {
            tipoTN = 15;
        } else if (tipoTN.value === '3TN') {
            tipoTN = 10
        };
        let tipoTNtotal = tipoTN * cantidadAA;
        var indoor = (1.73 * voltajeSite * tipoTNtotal * 0.85) / 1000;

        //calculo aire Acondicionado monofasico
        var indoorMono = (voltajeSite * tipoTNtotal) / 1000;
    }
    

    //potencia rectificador
    const potRect = V*A/1000;
    const outDoor = 1.3;
    const UnidadExtractora = 1.1;
    //potencia de bateria
    for (let i = 10; i >= 4; i--) {
        const porcentaje = `${i}%`
        porcentajeArr.push(porcentaje);

        const result2 = 
        (V*(((i*NB*C)/100)+((i*NB2*C2)/100)))/1000;;
        const result3 = result2;
        potBB.push(result3);
        const sumaRectBat = (potRect + result3);
        suma1.push(sumaRectBat); 
        const sumaTotal = outDoor + sumaRectBat;
        suma2.push(sumaTotal);
        if (potenciaAA.value === 'INDOOR') {
            const sumaTotal2 = indoor + sumaRectBat;
            sumaIndoor.push(sumaTotal2);
            const sumaTotal3 = indoorMono + sumaRectBat;
            sumaIndoorMono.push(sumaTotal3);
            console.log(sumaTotal3);
        } else if (potenciaAA.value === 'UNIDAD EXTRACTORA') {
            const sumaTotal = UnidadExtractora + sumaRectBat;
            suma3.push(sumaTotal);
        } else {
            const sumaTotal = outDoor + sumaRectBat;
            suma2.push(sumaTotal);
        }
    };
    //creando los nodos de 6x7
    for (let j = 0; j < 7; j++) {
        for (let i = 0; i < 6; i++) {
            const div = document.createElement('div');
            const p = document.createElement('p');
            p.classList.add(`p${i}`);
            div.classList.add('div10');
            div.appendChild(p)
            sectionContainer2.appendChild(div);
            /* console.log(p.classList.contains("p1")) */
            if (p.matches('.p0')) {
                const pText = document.createTextNode(porcentajeArr[j]);
                p.appendChild(pText);
            }
            if (p.matches('.p1')) {
                const pText = document.createTextNode(potBB[j].toFixed(3));
                p.appendChild(pText);
            }
            if (p.matches('.p2')) {
                const pText = document.createTextNode(potRect.toFixed(3));
                p.appendChild(pText);
            } 
             if (p.matches('.p3')) {
                const pText = document.createTextNode(suma1[j].toFixed(3));
                p.appendChild(pText);
            } 
            if (p.matches('.p4')) {
                if (potenciaAA.value === 'INDOOR') {
                    if (tipoSite.value === 'Trifasico') {
                        const pText = document.createTextNode(indoor.toFixed(3));
                        p.appendChild(pText);
                    } else {
                        const pText = document.createTextNode(indoorMono.toFixed(3));
                        p.appendChild(pText);
                    }
                    
                } else if (potenciaAA.value === 'UNIDAD EXTRACTORA'){
                    const pText = document.createTextNode(UnidadExtractora);
                    p.appendChild(pText);
                } else {
                    const pText = document.createTextNode(outDoor);
                    p.appendChild(pText);
                }
            } 
            if (p.matches('.p5')) {
                if (potenciaAA.value === 'INDOOR') {
                    if (tipoSite.value === 'Trifasico') {
                        const pText = document.createTextNode(sumaIndoor[j].toFixed(3));
                        p.appendChild(pText);
                    } else {
                        const pText = document.createTextNode(sumaIndoorMono[j].toFixed(3));
                    p.appendChild(pText);
                    }
                    
                } else if (potenciaAA.value === 'UNIDAD EXTRACTORA'){
                    const pText = document.createTextNode(suma3[j].toFixed(3));
                    p.appendChild(pText);
                } else {
                    const pText = document.createTextNode(suma2[j].toFixed(3));
                    p.appendChild(pText);
                }
            }      
        }
    }
    
};


function potencias3() {
    let potenciaAA = document.getElementById('potenciaAA');
    sectionContainer2.classList.remove('inactive');
    const tipoSite = document.getElementById('tipoCable');
    const texto = document.getElementById('texto');
    const V = Number(document.getElementById('voltaje').value);
    const A = Number(document.getElementById('amperaje').value);
    const NB = Number(document.getElementById('baterias1').value);
    const C = Number(document.getElementById('capacidad1').value);
    const NB2 = Number(document.getElementById('baterias2').value);
    const C2 = Number(document.getElementById('capacidad2').value);
    const NB3 = Number(document.getElementById('baterias3').value);
    const C3 = Number(document.getElementById('capacidad3').value);
    const CF = Number(document.getElementById('cF').value);
    
    const porcentajeArr = [];
    const potBB = [];
    const suma1 = [];
    const suma2 = [];
    const suma3 = [];
    const sumaIndoor = [];
    const sumaIndoorMono = [];

    const result0 = (((NB*C)*10)/100 + CF)*V / 1000;
    texto.innerHTML = `La Potencia de modulos es ${result0.toFixed(3)}` + '<br>';

    //calculo aireAcondicionado
    if(potenciaAA.value === 'INDOOR') {
        const voltajeSite = Number(document.getElementById('VoltajeGeneral').value);
        let tipoTN = document.getElementById('tonelaje');
        const cantidadAA = Number(document.getElementById('cantAA').value);
        if (tipoTN.value === '5TN') {
            tipoTN = 15;
        } else if (tipoTN.value === '3TN') {
            tipoTN = 10
        };
        let tipoTNtotal = tipoTN * cantidadAA;
        var indoor = (1.73 * voltajeSite * tipoTNtotal * 0.85) / 1000;

        //calculo aire Acondicionado monofasico
        var indoorMono = (voltajeSite * tipoTNtotal) / 1000;
    }

    //potencia rectificador
    const potRect = V*A/1000;
    const outDoor = 1.3;
    const UnidadExtractora = 1.1;
    //potencia de bateria
    for (let i = 10; i >= 4; i--) {
        const porcentaje = `${i}%`
        porcentajeArr.push(porcentaje);

        const result2 = 
        (V*(((i*NB*C)/100)+((i*NB2*C2)/100)+((i*NB3*C3)/100)))/1000;
        const result3 = result2;
        potBB.push(result3);
        const sumaRectBat = (potRect + result3);
        suma1.push(sumaRectBat); 
        
        if (potenciaAA.value === 'INDOOR') {
            const sumaTotal2 = indoor + sumaRectBat;
            sumaIndoor.push(sumaTotal2);
            const sumaTotal3 = indoorMono + sumaRectBat;
            sumaIndoorMono.push(sumaTotal3);
            console.log(sumaTotal3);
        } else if (potenciaAA.value === 'UNIDAD EXTRACTORA') {
            const sumaTotal = UnidadExtractora + sumaRectBat;
            suma3.push(sumaTotal);
        } else {
            const sumaTotal = outDoor + sumaRectBat;
            suma2.push(sumaTotal);
        }
    };
    //creando los nodos de 6x7
    for (let j = 0; j < 7; j++) {
        for (let i = 0; i < 6; i++) {
            const div = document.createElement('div');
            const p = document.createElement('p');
            p.classList.add(`p${i}`);
            div.classList.add('div10');
            div.appendChild(p)
            sectionContainer2.appendChild(div);
            /* console.log(p.classList.contains("p1")) */
            if (p.matches('.p0')) {
                const pText = document.createTextNode(porcentajeArr[j]);
                p.appendChild(pText);
            }
            if (p.matches('.p1')) {
                const pText = document.createTextNode(potBB[j].toFixed(3));
                p.appendChild(pText);
            }
            if (p.matches('.p2')) {
                const pText = document.createTextNode(potRect.toFixed(3));
                p.appendChild(pText);
            } 
             if (p.matches('.p3')) {
                const pText = document.createTextNode(suma1[j].toFixed(3));
                p.appendChild(pText);
            } 
            if (p.matches('.p4')) {
                if (potenciaAA.value === 'INDOOR') {
                    if (tipoSite.value === 'Trifasico') {
                        const pText = document.createTextNode(indoor.toFixed(3));
                        p.appendChild(pText);
                    } else {
                        const pText = document.createTextNode(indoorMono.toFixed(3));
                        p.appendChild(pText);
                    }
                    
                } else if (potenciaAA.value === 'UNIDAD EXTRACTORA'){
                    const pText = document.createTextNode(UnidadExtractora);
                    p.appendChild(pText);
                } else {
                    const pText = document.createTextNode(outDoor);
                    p.appendChild(pText);
                }
            } 
            if (p.matches('.p5')) {
                if (potenciaAA.value === 'INDOOR') {
                    if (tipoSite.value === 'Trifasico') {
                        const pText = document.createTextNode(sumaIndoor[j].toFixed(3));
                        p.appendChild(pText);
                    } else {
                        const pText = document.createTextNode(sumaIndoorMono[j].toFixed(3));
                    p.appendChild(pText);
                    }
                    
                } else if (potenciaAA.value === 'UNIDAD EXTRACTORA'){
                    const pText = document.createTextNode(suma3[j].toFixed(3));
                    p.appendChild(pText);
                } else {
                    const pText = document.createTextNode(suma2[j].toFixed(3));
                    p.appendChild(pText);
                }
            }      
        }
        
    }
   
}; 

function formulaDeModulo(NB, CB, CF, V) {
    const texto = document.getElementById('texto');

    const result0 = (((NB*C)*10)/100 + CF)*V / 1000;
    texto.innerHTML = `La Potencia de modulos es ${result0.toFixed(3)}` + '<br>';
    console.log(result0)
}

//V= voltaje de el TG (220, 380)  I= 1 aire de 5tn 15 Amp --ingresar el total de amperaje, 3tn = 10 Amp;
function potenciaAAtri(V, I) {
    const texto2 = document.getElementById('texto2');
    const result = (1.73 * V * I * 0.85) / 1000;
    texto2.innerHTML = `La potencia AA tri es ${result.toFixed(3)}` + '<br>';
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

//cuando existe mas de una capacidad de bateria
/* function potencias3(V, A, P, NB, C, NB2, C2, NB3, C3) {

    const result = V*A/1000;
    const result2 = 
    (V*(((P*NB*C)/100)+((P*NB2*C2)/100)+((P*NB3*C3)/100)))/1000;
    const resultA = result2.toFixed(3);
    const result3 = `potenciaRect ${result} potenciaBat ${resultA}`;  
    return result3;
} */




/* function potencias2(V, A, P, NB, C, NB2, C2) {

    const result = V*A/1000;
    const result2 = 
    (V*(((P*NB*C)/100)+((P*NB2*C2)/100)))/1000;
    const resultA = result2.toFixed(3);
    const result3 = `potenciaRect ${result} potenciaBat ${resultA}`;  
    return result3;
} */



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