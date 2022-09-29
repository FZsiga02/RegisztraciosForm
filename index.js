
function submit(){
    var character
    for(let i = 0; i < document.getElementById('username').value.length; i++){
        character = document.getElementById('username').value.charAt(i)
        if(character == character.toUpperCase()){
            alert ('A felhasználónév csak kisbetűs lehet')
            break
        }else if(document.getElementById('username').value.length < 3){
            alert ('A felhasználónév legalább 3 karakter hosszú kell hogy legyen')
            break
        }
    }
}

function init(){
    document.getElementById('submit').addEventListener('click', submit)
}

document.addEventListener('DOMContentLoaded', init)
