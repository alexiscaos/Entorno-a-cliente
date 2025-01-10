    const valor = document.querySelector('#value');
    let numero = 0;
    document.querySelector('.btn.reset').addEventListener('click', reset)
    document.querySelector('.btn.increase').addEventListener('click', agregar)
    document.querySelector('.btn.decrease').addEventListener('click', restar)

    function agregar() {
        numero++;
        valor.textContent=numero;
        if(numero>0){
            valor.style.color = 'green';
        }   
    }   

    function restar(){
        numero--;
        valor.textContent=numero;
        if(numero<0){
            valor.style.color = 'red';
        }   
    }

    function reset(){
        numero=0;
        valor.textContent=numero;

        valor.style.color = 'black';
    }
    
// const buttons = document.querySelectorAll('.btn');
// const valueElement = document.getElementById('value');

// let count = 0;

// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     if (button.classList.contains('decrease')) {
//       count--; 
//     } else if (button.classList.contains('increase')) {
//       count++; 
      
//     } else if (button.classList.contains('reset')) {
//       count = 0; 
//     }

//     valueElement.textContent = count;

//     if (count > 0) {
//       valueElement.style.color = 'green';
//     } else if (count < 0) {
//       valueElement.style.color = 'red';
//     } else {
//       valueElement.style.color = 'black';
//     }
//   });
// });
