import { btnBegin, convertDiagonalToZero } from "./RNA-Hopfield-Training.js"
const tBody = document.getElementById('tableBody')


//pattern recognition
const patternRecognition = (pattern)=>{
    let results = []
    let weightMatrix = convertDiagonalToZero()
    
    let weigth1 = weightMatrix[0][0]
    let weigth2 = weightMatrix[0][1]
    let weigth3 = weightMatrix[0][2]
    let weigth4 = weightMatrix[0][3]

    let Neuron1 = neuronCalc(pattern,weigth1)
    let Neuron2 = neuronCalc(pattern,weigth2)
    let Neuron3 = neuronCalc(pattern,weigth3)
    let Neuron4 = neuronCalc(pattern,weigth4)

    results.push(Neuron1)
    results.push(Neuron2)
    results.push(Neuron3)
    results.push(Neuron4)

    return results
}

const neuronCalc = (pattern, weigth)=>{
    let result = 0
    for (let i = 0; i < pattern.length; i++) {
        result += parseFloat(pattern[i])*parseFloat(weigth[i])
    }
    return result
}

const activationFunction = (pattern) =>{
    let neuronsResults = patternRecognition(pattern);
    let newNeuronsResults = neuronsResults.map(neuron => neuron > 0 ? 1 : -1);
    return newNeuronsResults;

}

const Main = (item1, item2, item3, item4) =>{
    let status = false;
    let pattern  = [item1,item2,item3,item4]
    let neurons = activationFunction(pattern)
    let contador = 0;
  

    while(!status){
        console.log(pattern)
        status = true
        contador++
        tBody.innerHTML +=`
        <tr>
            <td>${contador}</td>
            <td>${pattern}</td>
            <td>${neurons}</td>
        </tr>
    `
        if(pattern[0] != neurons[0]){
            pattern[0] = neurons[0]
            status = false;
        }
        if(pattern[1] != neurons[1]){
            pattern[1] = neurons[1]
            status = false;
        }
        if(pattern[2] != neurons[2]){
            pattern[2] = neurons[2]
            status = false;
        }
        if(pattern[3] != neurons[3]){
            pattern[3] = neurons[3]
            status = false;
        }
    }
    tBody.innerHTML +=""
    tBody.innerHTML +=`
        <div class="alert alert-primary" role="alert">
        Convergency at Iteration number: ${contador}
      </div>`
}

btnBegin.addEventListener('click',(e)=>{
    const alert = document.getElementById('alert')
    const item1 = parseFloat(document.getElementById('item1').value)
    const item2 = parseFloat(document.getElementById('item2').value)
    const item3 = parseFloat(document.getElementById('item3').value)
    const item4 = parseFloat(document.getElementById('item4').value)
   
   if(item1 == 0 || item2 ==0 || item3 ==0 || item4 ==0 ){
    alert.innerHTML = `
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>The four inputs can't be zero</strong>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`
   }else{
    Main(item1,item2,item3,item4)
   }
   
})








