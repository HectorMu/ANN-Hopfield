const btnStartTraining = document.getElementById('startTraining')
export const btnBegin = document.getElementById('Begin')
const weights = document.getElementById('Weights')

let x1 = [1,1,1,-1]
let x2 = [-1,-1,-1,1]

let x1Transpuesta = [1,1,1,-1]
let x2Transpuesta = [-1,-1,-1,1]

let C11_C14_X1 = []
let C21_C24_X1 = []
let C31_C34_X1 = []
let C41_C44_X1 = []

let C11_C14_X2 = []
let C21_C24_X2 = []
let C31_C34_X2 = []
let C41_C44_X2 = []

let x1TranspuestaResult = []
let x2TranspuestaResult = []

btnStartTraining.addEventListener('click',(e)=>{
    e.preventDefault()
    const weightMatrix = convertDiagonalToZero()
   
    weights.innerHTML +=`<h4 class="text-white">Sinaptics weights:</h4>`
    weights.innerHTML += `<li>${weightMatrix[0][0]}</li>`
    weights.innerHTML += `<li>${weightMatrix[0][1]}</li>`
    weights.innerHTML += `<li>${weightMatrix[0][2]}</li>`
    weights.innerHTML += `<li>${weightMatrix[0][3]}</li>`
    alert('ANN trained and waiting for pattern')

    btnBegin.classList.remove('btn-warning')
    btnBegin.classList.add('btn-success')
    btnBegin.disabled = false;
    btnStartTraining.disabled = true;

})

const getX1Result = (pos1,pos2,pos3,pos4) =>{
    for (let i = 0; i < x1Transpuesta.length; i++){   
        let c11Toc14 = x1[pos1]*x1Transpuesta[i]
        C11_C14_X1.push(c11Toc14)

        let c21Toc24 = x1[pos2]*x1Transpuesta[i]
        C21_C24_X1.push(c21Toc24)

        let c31Toc34 = x1[pos3]*x1Transpuesta[i]
        C31_C34_X1.push(c31Toc34)

        let c41Toc44 = x1[pos4]*x1Transpuesta[i]
        C41_C44_X1.push(c41Toc44)
        
    }
     
    x1TranspuestaResult.push(C11_C14_X1)
    x1TranspuestaResult.push(C21_C24_X1)
    x1TranspuestaResult.push(C31_C34_X1)
    x1TranspuestaResult.push(C41_C44_X1)

    return x1TranspuestaResult
}



const getX2Result = (pos1,pos2,pos3,pos4) =>{
    for (let i = 0; i < x2Transpuesta.length; i++){   
        let c11Toc14 = x2[pos1]*x2Transpuesta[i]
        C11_C14_X2.push(c11Toc14)

        let c21Toc24 = x2[pos2]*x2Transpuesta[i]
        C21_C24_X2.push(c21Toc24)

        let c31Toc34 = x2[pos3]*x2Transpuesta[i]
        C31_C34_X2.push(c31Toc34)

        let c41Toc44 = x2[pos4]*x2Transpuesta[i]
        C41_C44_X2.push(c41Toc44)
    }
     
    x2TranspuestaResult.push(C11_C14_X2)
    x2TranspuestaResult.push(C21_C24_X2)
    x2TranspuestaResult.push(C31_C34_X2)
    x2TranspuestaResult.push(C41_C44_X2)

    return x2TranspuestaResult
}

const getProductsSum = () =>{
      const x1Result = getX1Result(0,1,2,3)
      const x2Result = getX2Result(0,1,2,3)

      let AllSumResult = []
      let ResultsumX10_X20 = []
      let ResultsumX11_X21 = []
      let ResultsumX12_X22 = []
      let ResultsumX13_X23 = []
      for (let i = 0; i < 4; i++) {
          let sumX10_X20 = x1Result[0][i]+x2Result[0][i]
          ResultsumX10_X20.push(sumX10_X20)

          let sumX11_X21 = x1Result[1][i]+x2Result[1][i]
          ResultsumX11_X21.push(sumX11_X21)
          
          let sumX12_X22 = x1Result[2][i]+x2Result[2][i]
          ResultsumX12_X22.push(sumX12_X22)

          let sumX13_X23 = x1Result[3][i]+x2Result[3][i]
          ResultsumX13_X23.push(sumX13_X23)       
      }
      
      AllSumResult.push(ResultsumX10_X20)
      AllSumResult.push(ResultsumX11_X21)
      AllSumResult.push(ResultsumX12_X22)
      AllSumResult.push(ResultsumX13_X23)

      return AllSumResult;

}
// console.log(getProductsSum())

export const convertDiagonalToZero = () =>{
    const productsSum = getProductsSum()
    let diagonalToZero = []
    for (let i = 0; i < 4; i++) {
        productsSum[i][i]=0
    }
    diagonalToZero.push(productsSum)
    console.log("trained")
    return diagonalToZero
}
