// let divScroll = document.querySelector('.scroll')

// let clicarSubida = () => {
//     window.scrollTo({
//         top: 100,
//         behavior: 'smooth'
//       })
// }

// divScroll.addEventListener('click', clicarSubida)

 

//  document.addEventListener('scroll', function(){

//     let dispara = window.scrollY
//     console.log(dispara)
    
//     if (dispara < 600){
//         divScroll.classList.add('none')
//     }else{
//         divScroll.classList.remove('none')
//     }
    
//  })
























let SubirScroll = document.querySelector('.scroll')

clicarSubida =()=>{
    window.scrollTo({
        top:100,
        behavior:'smooth'   
    })
}



 SubirScroll.addEventListener('click', clicarSubida)