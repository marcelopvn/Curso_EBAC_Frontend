function calcular(){
let a = document.getElementById('num-a')
let b = document.getElementById('num-b')
let vla = Number(a.value)
let vlb = Number(b.value)
let rep = document.getElementById('sucess-msg')
    if(a.value < b.value){
        document.querySelector('.sucess-msg').style.display = 'block'
    }else if (a.value > b.value){
    document.querySelector('.error-msg').style.display = 'block'
    }if (a.value == b.value){
        document.querySelector('.error2-msg').style.display = 'block'
    }
}
