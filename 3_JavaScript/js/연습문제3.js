const click = document.querySelector('.click');
const restart = document.querySelector('.restart');
const images = document.querySelectorAll('.main-image img');
const result = document.querySelector('.main-result');
const span = document.querySelector('.click span');
 
let count = 0;

// console.log(click);
// console.log(restart);

function clickHandler(){
    span.innerHTML = ++count;
    const random = [
        Math.floor(Math.random()*3)+1,
        Math.floor(Math.random()*3)+1,
        Math.floor(Math.random()*3)+1
    ];
    
    for(let i=0; i<images.length; i++){
        
        images[i].setAttribute("src", `../resources/spy${random[i]}.jpg`);
    }
    if(random[0] === random[1] && random[1] === random[2]) {
        console.log("FFFFFFFF");
        result.innerHTML = "Congratulation!! Press restart to play again";
        click.setAttribute("disabled", "disabled");
    }
}

function restartHandler(){
    for(let i=0; i<images.length; i++) {
        images[i].setAttribute("src", "../resources/spy1.jpg");
    }
    count = 0;
    span.innerHTML = "";
    result.innerHTML = "";
    click.removeAttribute("disabled");
}

click.addEventListener('click', clickHandler);
restart.addEventListener('click', restartHandler);


// console.log(Math.floor(Math.random()*3)s+1); // 1~3 랜덤 숫자!

// function getRandomImage() {
//     return imagePaths[Math.floor(Math.random() * 3)+1];
//   }



// const img1 = document.querySelector('img1');
// const img2 = document.querySelector('img2');
// const img3 = document.querySelector('img3');







