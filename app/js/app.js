const button = document.querySelector(".forOpen");
const activeElements = document.querySelectorAll(".change");
const close = document.querySelector(".forClose");
close.addEventListener('click',function(){
    for(let i=0; i<activeElements.length; i++){
        activeElements[i].classList.remove('active')
    }
})
button.addEventListener('click', function(){
    for(let i=0; i<activeElements.length; i++){
        activeElements[i].classList.toggle('active')
    }
})