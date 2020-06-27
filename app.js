
function getAns(num)
{
    var answer = document.getElementById("ans");
    answer.value += num;
}


function result(){
    var answer = document.getElementById("ans");
    answer.value=eval(answer.value)
}

function clearAns(){
    var answer = document.getElementById("ans");
    answer.value = "";
}
