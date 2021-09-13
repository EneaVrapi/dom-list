let ul = document.getElementsByTagName('ul')[0]
let inputPune = document.getElementById('pune-e-re')
let buttonShto = document.getElementsByTagName('button')[0]//butoni i pare 
let buttonFshi = document.createElement('button')
buttonFshi.innerText = 'delete'
ul.appendChild(buttonFshi)

/*ky funksion do krijoj pune */
function shtoPun ( ) {
    let li = document.createElement('li') 
    let teksti = document.createElement('label')
teksti.innerText = inputPune.value
    li.appendChild(teksti)
    inputPune.value = ''
    console.log(teksti)
    ul.appendChild(li)     
} 
 
buttonShto.addEventListener(
    'click' , shtoPun 
)


buttonFshi.addEventListener('click',() => {
  //  ul.removeChild('li')
    console.log(ul.childNodes)

})