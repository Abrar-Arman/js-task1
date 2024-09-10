

function increaseFont(){
 document.querySelector('div').setAttribute('class', 'font-large')
}
function decreaseFont(){
    document.querySelector('div').setAttribute('class', 'font-small')
}
document.querySelector(".font-increase").onclick= increaseFont
document.querySelector(".font-decrease").onclick= decreaseFont