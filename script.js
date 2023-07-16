let altura = document.getElementById('altura')
let peso = document.getElementById('kilos')
let resultado = document.getElementById('res')



function calcular(){
   if (altura.value.length == 0 || peso.value.length == 0 ){
    window.alert('Preencha todos os dados')
   }else{
    let A = Number(altura.value)
    let P = Number(peso.value)
    let imc = (P / (A * A))
    
    resultado.innerHTML= (` Resultado:${imc.toFixed(1)}`)
   }
}
function apagar(){
   altura.value = ''
   peso.value = ''
}



