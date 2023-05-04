function mudarCor1(){
    document.querySelector("#b_esq").style.backgroundColor = '#2f3136'
    document.querySelector("#b_centro").style.backgroundColor = '#FFB6C1'
    document.querySelector("#b_baixo").style.backgroundColor = '#202225'
    document.querySelector("#b_dir").style.backgroundColor = '#2f3136'

    var chat = document.getElementsByClassName("b_chat")

        for (let contador = 0; contador < chat.length; contador++){
        chat[contador].style.backgroundColor = "#FFF"
        }
}

function mudarCor2(){
    document.querySelector("#b_esq").style.backgroundColor = '#023020'
    document.querySelector("#b_centro").style.backgroundColor = '#088F8F'
    document.querySelector("#b_baixo").style.backgroundColor = '#097969'
    document.querySelector("#b_dir").style.backgroundColor = '#023020'

    var chat = document.getElementsByClassName("b_chat")

        for (let contador = 0; contador < chat.length; contador++){
        chat[contador].style.backgroundColor = "#48D1CC"
        }
}

function mudarCor3(){
    document.querySelector("#b_esq").style.backgroundColor = '#FFBF00'
    document.querySelector("#b_centro").style.backgroundColor ='#FF7009'
    document.querySelector("#b_baixo").style.backgroundColor = '#E49B0F'
    document.querySelector("#b_dir").style.backgroundColor = '#FFBF00'

    var chat = document.getElementsByClassName("b_chat")

        for (let contador = 0; contador < chat.length; contador++){
        chat[contador].style.backgroundColor = "#F0E68C"
        }
}

function mudarCor4(){
    document.querySelector("#b_esq").style.backgroundColor = '#4A0404'
    document.querySelector("#b_centro").style.backgroundColor = '#DC143C'
    document.querySelector("#b_baixo").style.backgroundColor = '#811331'
    document.querySelector("#b_dir").style.backgroundColor = '#4A0404'
    document.querySelector("#b_dir").style.backgroundColor = '#4A0404'
    var chat = document.getElementsByClassName("b_chat")

        for (let contador = 0; contador < chat.length; contador++){
        chat[contador].style.backgroundColor = "#FF6347"
        }
}

// function mudarChat(){
//     var chat = document.getElementsByClassName("b_chat")

//     for (let contador = 0; contador < chat.length; contador++){
//         chat[contador].style.backgroundColor = "red"
//     }
// }