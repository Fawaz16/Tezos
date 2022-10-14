let minidiv=document.querySelector('.minidiv')
let hamburger= document.querySelector('.hamburger')
let closebtn= document.querySelector('.close')




hamburger.addEventListener("click", ()=>{
    minidiv.style.transform="translateX(0px)"
    if ( minidiv.style.transform="translateX(0px)") {
        closebtn.style.display="block"
        hamburger.style.display="none"
    }
   
})

closebtn.addEventListener("click", ()=>{
    minidiv.style.transform="translateX(-768px)"
    if ( minidiv.style.transform="translateX(-768px)") {
        closebtn.style.display="none"
        hamburger.style.display="block"
    }
   
})