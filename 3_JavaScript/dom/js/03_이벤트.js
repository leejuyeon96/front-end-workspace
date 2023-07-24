// window.addEventListener('DOMContentLoaded', function(){
//     const h1 = document.querySelector('h1');
//     console.log(h1);
// }); 


const h1 = document.querySelector('h1');

// h1.addEventListener('click', function(){
//     h1.style.backgroundColor = "skyblue";

// });


h1.addEventListener('mouseenter', function(){
    h1.style.backgroundColor = "skyblue";

});
const container = document.querySelector('.container');
// const img1 = document.querySelector('.container img:nth-child(1)');
// const img2 = document.querySelector('.container img:nth-child(2)');
// const img3 = document.querySelector('.container img:nth-child(3)');
// const img4 = document.querySelector('.container img:nth-child(4)');
// const img5 = document.querySelector('.container img:nth-child(5)');

// const imgList = document.querySelectorAll('.container img'); //위에꺼랑 똑같음

function removeHandler(event) {//이벤트 객체
    // console.log(event.target);
    // this.style.display = 'none';
    console.log(event.currentTarget);
    if(event.target!==event.currentTarget) {
        
    
    event.target.style.display='none';
}
}
container.addEventListener('click', removeHandler);
// for (let i=0; i<imgList.length; i++){
//     imgList[i].addEventListener('click',removeHandler);
    
// }
//  // 
// imgList[1].addEventListener('click', function(){
//     img1.style.visibility = 'hidden';
// });

 // img2.addEventListener('click', function(){
 //     img2.style.display = 'none';
 // });

 // img3.addEventListener('click', function(){
 //     img3.style.visibility = 'hidden';
 // });

 // img4.addEventListener('click', function(){
 //     img4.style.visibility = 'hidden';
 // });

 // img5.addEventListener('click', function(){
 //     img5.style.visibility = 'hidden';
 // });
