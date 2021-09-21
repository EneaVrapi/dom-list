let ul = document.getElementsByTagName('ul')[0]
let inputPune = document.getElementById('pune-e-re')
let buttonShto = document.getElementsByTagName('button')[0]//butoni i pare 
buttonShto.setAttribute('class','btn btn-primary')

/*ky funksion do krijoj pune */
function shtoPun () {
 
if(inputPune.value){
    let li = document.createElement('li') 
    let teksti = document.createElement('label')
teksti.innerText = inputPune.value 
li.appendChild(teksti)
    inputPune.value = ''
    console.log(teksti)
    ul.appendChild(li) 
    let buttonFshi = document.createElement('button')
buttonFshi.innerText = 'Delete'
li.appendChild(buttonFshi)    
buttonFshi.setAttribute('class', 'btn btnHiq btn-outline-danger')

//update button

let deleteBtn = li.querySelector('.btnHiq')

deleteBtn.addEventListener('click' , fshiLi)

let buttonOk = document.createElement('button')
buttonOk.innerText = 'E Bere'
li.appendChild(buttonOk)
buttonOk.setAttribute('class','btn btn-primary')
/* detyre , 
shto buton me emer(ok, e bere ose perfundo), dhe kete buton do e vendosesh po brenda <li>,
ky button kur te klikohet do e bej label.innterText me vije ne mes
*/
buttonOk.addEventListener('click',mbaro)
}else{
    let mesazh = document.createElement('h4')
    mesazh.innerText = 'Plotesohe kutine'
    let trupi = document.querySelector('.trupi')
    trupi.appendChild(mesazh)
    
    function treSekonda(){
        mesazh.style.display = 'none'
    }
   let koha = setTimeout(treSekonda,3000)
  
   
    

}

    }
   


//Funsion per fshirje 

function fshiLi(event){
    console.log('fshi' ,event.currentTarget)
    
// event.currentTarget gjen cilin element po klikojme
//event.currentTarget.parentNode kjo gjen prindin e atij elementi 

let target = event.currentTarget.parentNode 

target.parentNode.removeChild(target)//kjo eshte ul dhe po heq li
}

function mbaro(event){
    console.log(event.currentTarget.parentNode.children)
    let tekstLi = event.currentTarget.parentNode.children[0]
    let buton = event.currentTarget.parentNode.children[2]
    if (tekstLi.className){
        buton.innerText = 'E bere'
        tekstLi.className = ''
    }else{
        buton.innerText = 'E pabere'
        tekstLi.className = 'ok'
    }
    
}
  


window.addEventListener("load", () => {
    buttonShto.addEventListener('click' , shtoPun)


});



