let scrollTop = window.pageYOffset;

window.onscroll = () => {
  let scrollTopcurrent = window.pageYOffset;

  if (scrollTop > scrollTopcurrent) {
    document.querySelector('header').style.top = '0';
    document.querySelector('.menu-bar').style.top = '6.3rem';
  } else {
    document.querySelector('header').style.top = '-7rem';
    document.querySelector('.menu-bar').style.top = '-1.8rem';
  }

  scrollTop = scrollTopcurrent;
}


//menus secundarios
let menusMore = document.getElementsByClassName('link-nav-arrow')[0];
let listSecondary = document.querySelector('.list-nav-secondary');

let menuBurguer = document.querySelector('#check');
let menuBar = document.querySelector('.menu-bar');

let body = document.querySelector('.container');
let content = document.querySelector('.content');

let iconListSecondary = document.querySelector('.fa-arrow-alt-circle-right')

menusMore.addEventListener('click', () => {
     listSecondary.classList.toggle('hide');
     iconListSecondary.classList.toggle('arrow')
});

menuBurguer.addEventListener('click', () => {
  menuBar.classList.toggle('menu-move');
  content.classList.toggle('content-for-right ');

  let result = body.classList.toggle('body-red');
  if(result){
    document.body.style.background = 'rgb(16,16,16,0.5)';
  }else {
    document.body.style.background = '';
  }


  
})
