
let eyeImg = document.querySelector('.visibility');

let passInput=document.querySelector('#password');

passInput.addEventListener('keyup',function(){
    let passInputLength=passInput.value.length;
    if(passInputLength==0)
    eyeImg.style.display='none';
    else{
        eyeImg.style.display='inline-block'
    }
})

eyeImg.addEventListener('click', function(){

     let inputType = passInput.getAttribute('type');

    if(inputType == 'password'){
        passInput.setAttribute('type','text')
        eyeImg.setAttribute('src','images/invisible-eye.png')
     } else{
            passInput.setAttribute('type','password')
            eyeImg.setAttribute('src','images/visible-eye.png')
        }
    

});

