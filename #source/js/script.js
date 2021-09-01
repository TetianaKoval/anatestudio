//@prepros-append jq-start.js
//@prepros-append jq-end.js






// ширина і висота екрана в фулскрін картинки

// function sizeBgStart(){
//   let mainSliderBodyS = document.querySelector('.main-slider-body');
//   let hS = document.body.clientHeight;
//   let wS = document.body.clientWidth;
//   mainSliderBodyS.style.width = wS + 'px';
//   mainSliderBodyS.style.height = hS + 'px';
// };
// sizeBgStart();

//  window.addEventListener('resize', function sizeBg(){
//   let mainSliderBody = document.querySelector('.main-slider-body');
//   let h = document.body.clientHeight;
//   let w = document.body.clientWidth;
//   mainSliderBody.style.width = w + 'px';
//   mainSliderBody.style.height = h + 'px';
// });



  //для бургера в меню (додає клас active)


  let menuIcon = document.querySelector('.header-menu__icon');
  let headerBody = document.querySelector('.header-body');
  let header = document.querySelector('.header');
  function active(){
    menuIcon.classList.toggle('active');
    headerBody.classList.toggle('active');
    header.classList.toggle('changeBg');
  }
  menuIcon.addEventListener('click', active);






// вставка картинки фоном///////////////
function ibg(){

  let ibg=document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
  if(ibg[i].querySelector('img')){
  ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
  }
  }
  }
  
  ibg();
  ////////////////////////////////////////


    // Slider

    //заміна слайдів

      let rightArrow = document.querySelector('.arrow-right');
      let leftArrow = document.querySelector('.arrow-left');
      let mainSliderBody = document.querySelector('.main-slider-body');
      let slide = document.querySelector('.main-slider__slide');
      let count = mainSliderBody.getAttribute('count');
      let blackScreen = document.querySelector('.black-screen');
      let bsGo = document.querySelector('.go');
      let timer;
      autoSlider();


      

      rightArrow.addEventListener('click', clickRight);
      leftArrow.addEventListener('click', clickLeft);
      rightArrow.addEventListener('mouseover', stopSlider);
      rightArrow.addEventListener('mouseout', autoSlider);
      leftArrow.addEventListener('mouseover', stopSlider);
      leftArrow.addEventListener('mouseout', autoSlider);


      function removeGo(){
        blackScreen.classList.remove('go');
      }
      function clickRight(){
        blackScreen.classList.add('go');
        setTimeout(removeGo, 100);
        let src = slide.getAttribute('src');
        if (src[12] == count){
          slide.setAttribute('src', 'img/slider/0' + 1 + '.jpg');
        } else {
          slide.setAttribute('src', 'img/slider/0' + (+src[12] + 1) + '.jpg');
        };
        ibg();
        stopSlider();
        console.log(slide);
      };
      function slideRight(){
        blackScreen.classList.add('go');
        setTimeout(removeGo, 100);
        let src = slide.getAttribute('src');
        if (src[12] == count){
          slide.setAttribute('src', 'img/slider/0' + 1 + '.jpg');
        } else {
          slide.setAttribute('src', 'img/slider/0' + (+src[12] + 1) + '.jpg');
        };
        ibg();
        console.log(slide);
        autoSlider();
      };

      function clickLeft(){
        blackScreen.classList.add('go');
        setTimeout(removeGo, 100);
        let src = slide.getAttribute('src');
        if (src[12] == 1){
          slide.setAttribute('src', 'img/slider/0' + 4 + '.jpg');
        } else {
          slide.setAttribute('src', 'img/slider/0' + (+src[12] - 1) + '.jpg');
        }
        ibg();
        stopSlider();
        console.log(slide);
      }
     function autoSlider(){
       timer = setTimeout(slideRight, 3000);
     }
     function stopSlider(){
      clearTimeout(timer);
    }
























//     let mainSliderBody = document.querySelector('.main-slider-body');
//     let slide = document.querySelector('.main-slider__slide');

//       let count = mainSliderBody.getAttribute('count');
//       let i = 2;

//       function changeSlide(){
//         slide.setAttribute('src', 'img/slider/0' + i + '.jpg');
//         ibg();
//         if (i == count){
//           i = 0;
//         }
//         i++;
//       }
//       let timer = setInterval(changeSlide,2000);


//       // клік по стрілкам
//       let leftArrow = document.querySelector('.arrow-left');
//       let rightArrow = document.querySelector('.arrow-right');


// function clickRight(){
//   let slide = document.querySelector('.main-slider__slide');
//   let num = slide.getAttribute('src');
//   if(num[12] < count){
//     slide.setAttribute('src', 'img/slider/0' + (+num[12] + 1) + '.jpg');
//     ibg();
//   } else{
//     let i = 1;
//     slide.setAttribute('src', 'img/slider/0' + i + '.jpg');
//     ibg();
//     i++;
//   }
//   console.log(slide);
// }


//       // leftArrow.addEventListener('click',);
//       rightArrow.addEventListener('click', clickRight);











