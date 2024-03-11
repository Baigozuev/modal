const btn=document.querySelectorAll("button") 
console.log(btn); 
const block=document.querySelector(".block") 
const btn1 = document.querySelector(".btn1") 
 
btn1.addEventListener("click",()=> { 
    block.style.display ="block" 
}) 
 const btn2=document.querySelector(".btn2") 
 console.log(btn2); 
 
 btn2.addEventListener("click",()=>{ 
    block.style.display="none" 
 }) 
   
 const icons=document.querySelector(".icons") 
 console.log(icons); 
 icons.addEventListener("click",()=>{ 
block.style.display="none" 
})