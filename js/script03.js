let quiz = document.getElementById('quiz')
let midterm = document.getElementById('midterm')
let final = document.getElementById('final')


let btnCalSumGrade = document.getElementById('btn-calSumGrade')
let btnCancel = document.getElementById('btn-cancel')

let showSum = document.getElementById('show-sum')
let showGrade = document.getElementById('show-grade')




function calSum(){
    let sum = parseInt(quiz.value) + parseInt(midterm.value) + parseInt(final.value)
    return sum;
}

function calGrade(sum){
    if(sum > 80){
        showSum.innerHTML = '<strong> ได้คะแนนรวม ' + sum + ' คะแนน </strong>'
        showGrade.innerHTML = '<strong> ได้เกรด A </strong>'
    }else if(sum > 50){
        showSum.innerHTML = '<strong> ได้คะแนนรวม ' + sum + ' คะแนน </strong>'
        showGrade.innerHTML = '<strong> ได้เกรด B </strong>'
    }else{
        showSum.innerHTML = '<strong> ได้คะแนนรวม ' + sum + ' คะแนน </strong>'
        showGrade.innerHTML = '<strong> ได้เกรด C </strong>'
    }
}


btnCalSumGrade.addEventListener('click', ()=>{
    if(validateData()){
        calGrade(calSum())
    }
})

function validateData(){
    if(quiz.value.length == 0){
        alert('ป้อน quiz ด้วย..')
        return false
    }else if(isNaN(quiz.value)){
        alert('ป้อน quiz เป็นตัวเลขเท่านั้น')
        return false
    }else if(midterm.value.length == 0){
        alert('ป้อน midterm ด้วย')
    }else if(isNaN(midterm.value)){
        alert('ป้อน midterm เป็นตัวเลขเท่านั้น')
        return false
    }else if(final.value.length == 0){
        alert('ป้อน final ด้วย')
    }else if(isNaN(final.value)){
        alert('ป้อน final เป็นตัวเลขเท่านั้น')
        return false
    }
    return true
}


function validateInput(event){
    let inputValue = event.target.value

    event.target.value = inputValue.replace(/[^0-9]/g, '')

}

document.getElementById("midterm").addEventListener("input", validateInput)
document.getElementById("final").addEventListener("input", validateInput)
document.getElementById("quiz").addEventListener("input", validateInput)