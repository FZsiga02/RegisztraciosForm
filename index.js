
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

    if(document.getElementById('password').value.length < 8){
        alert('A jelszó legalább 8 karakter hosszú kell hogy legyen')
    }
   
    if(document.getElementById('password').value.search(^(?=.*[a-zA-Z])(?=.*[0-9])) === -1){
        alert('A jelszónak legalább 1 betűt és 1 számot tartalmaznia kell')
    }
    

function init(){
    document.getElementById('submit').addEventListener('click', submit)
}

document.addEventListener('DOMContentLoaded', init)
