AOS.init({
    offset :200,
    duration:1000,
    
});


var modalBtn = document.getElementById('cv')
var modalBg = document.querySelector('.modal-bg')
var modalClose = document.querySelector('.modal-close')


modalBtn.addEventListener('click', function (){
  modalBg.classList.add('bg-active');
})
modalClose.addEventListener('click', function () {
  modalBg.classList.remove('bg-active');
})





      window.addEventListener('scroll', function(){

          const header = document.querySelector('header');
          header.classList.toggle('sticky', window.scrollY > 0);
      });

      const navigation = document.querySelector('nav');

      document.querySelector('.toggle') .onclick = function(){
          this.classList.toggle('active');
          navigation.classList.toggle('active');
      }
      //logo designer
      const logo = document.querySelectorAll("#logo path");
     for(let i = 0; i<logo.length; i++){
         console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
     }
     
     //paragrafo #texto
  function typewrite(elemento){
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML='';
        textoArray.forEach((letra, i) =>{
            setTimeout(function(){
              elemento.innerHTML += letra;
            }, 75 * i)
            
        })
       
     }
     
     const texto = document.getElementById('texto');
     typewrite(texto)
     