let maxScrollValue;
const progressBar = document.querySelector('.progress-bar'); // 변경해야될 값 선택
function resizeHandler(){
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
    //전체 스크롤 할 수 있는 범위 계산 = 바디 전체 높이 - 윈도우 현재 창의 높이
}
window.addEventListener('scroll',function(){
    console.log(progressBar);
    progressBar.style.width = (window.scrollY / maxScrollValue)*100 + '%';
    console.log((window.scrollY / maxScrollValue)*100);
    // console.log(window.pageXOffset);    //deprecated
    // console.log(window.scrollY);
    // console.log(document.body.offsetHeight);
    // console.log(window.innerHeight);
});
window.addEventListener('resize',resizeHandler);
resizeHandler();
// navigation click event
const nav = document.querySelector('nav');
let currentNav;
function navHandler(event) {
    if(currentNav) {
        currentNav.style.backgroundColor = 'transparent';
        currentNav.style.color = 'black';
    }
    if(event.target !== event.currentTarget) {
        console.log(event.target);
        event.target.style.backgroundColor = 'black';
        event.target.style.color = 'white';
        currentNav = event.target;
    }
}
nav.addEventListener('click', navHandler);
// mouse wheel event
// 휠 누를 때마다 넘어갈 구역이 필요함
const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
let currentSection = section1;  // 현재 페이지가 section1일 때
window.addEventListener('wheel', function(event){
    // console.log(event);
    if(event.deltaY > 0) {  // 100 휠을 아래로 내린 경우
        if(currentSection === section1){
            window.scrollTo({top: section2.offsetTop, behavior:'smooth'});
            currentSection = section2;
        } else if(currentSection === section2) {
            window.scrollTo({top: section3.offsetTop, behavior:'smooth'});
            currentSection = section3;
        }
    } else {    //-100 휠을 위로 올린 경우
        if(currentSection === section3){
            window.scrollTo({top: section2.offsetTop, behavior:'smooth'});
            currentSection = section2;
        } else if(currentSection === section2) {
            window.scrollTo({top: section1.offsetTop, behavior:'smooth'});
            currentSection = section1;
    }
}
});

//scroll - animation 살짝
window.addEventListener('scroll', function(){
       if(section2.getBoundingClientRect().top===0){
        section2.children[0].classList.add('text-animation');
       }else {
        section2.children[0].classList.remove('text-animation');
       }
});









