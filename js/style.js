

let totarmone = 0
let cound2 =1
let com = 1
function on (){
 const cound = parseInt(document.getElementById('cound').innerText)

 
const n= cound2+cound


const coun = document.getElementById('cound')
const vv = coun.innerHTML=n
// nwd
 const couna = parseInt(document.getElementById('cc').innerText)

 
const nn=couna-com


const cou = document.getElementById('cc')
const v = cou.innerHTML=nn

// newt





}
const bb = document.querySelectorAll(".add")

for (let index = 0; index < bb.length; index++) {
    const element = bb[index];

    element.addEventListener('focus',function(e){

        e.target.style. backgroundColor= 'Lime'

        


    })
    element.addEventListener('click',function(e){

        const w = e.target.innerText
        
         const target = document.getElementById('p');
 
         const velu =document.createElement('p')
          velu.innerText=w
         
 
             target.appendChild(velu)
 
 
 
 
     })
  let f = 550

    element.addEventListener('click',function(e){
        const w = e.target.innerText
       
        const target = document.getElementById('prich');
        const y = parseFloat(target.innerText)
        const asd =document.createElement('h6')
         asd.innerText=f

             
        
         target.appendChild(asd).innerText




     

    })


    element.addEventListener('click',function(e){
        const w = e.target.innerText
       const ne = document.getElementById('Economoy')
       const n = document.createElement('p')
       const nq = ne.appendChild(n)
       const newContent = document.createTextNode('Economoy')
       const bn = n.appendChild(newContent)
       const nn= n.innerText
       nq.innerText=nn
       
       })


     
    element.addEventListener('click' , function (){

        const taka = parseFloat(document.getElementById('prich').innerText)
        
        totarmone+=taka
        
        
        document.getElementById('BDT').innerText=totarmone
    })

    element.addEventListener('click' , function (){

        const taka = parseFloat(document.getElementById('prich').innerText)
        
        total1+=taka
        
        
        document.getElementById('Grand').innerText=total1
        
    
        
        
        })


    
}

let total1=0






const button2=document.getElementById('button2');

button2.addEventListener('click',function(){

const body = document.querySelector('main');
body.classList.add('hidden')
const header = document.querySelector('header');
header.classList.add('hidden')

const nextpart = document.getElementById('nextpart');
nextpart.classList.remove('hidden')

})

document.addEventListener('click', function tigit(){
   
    const ss = document.getElementById('scorl');

    ss.scrollIntoView({
        behavior:'smooth'
    })
    
    
    })