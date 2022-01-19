var number = document.getElementsByClassName("number")
var operators = document.getElementsByClassName("number_op")
var equal = document.getElementById("equal")
var input = document.getElementById("input")



function addNumber(num){

    input.innerHTML += num
}

function addOperator(op){

    if(input.innerHTML != ""){
        input.innerHTML += op
    }
}

function clearInput(){
    input.innerHTML = ""
}

function add(){
}

function calcular(){
    
    if(input){
        input.innerHTML = eval(input.innerHTML)
    
    }
}