window.addEventListener('scroll', function(){
    console.log(window.pageYOffset); //deprecated
    console.log(window.scrollY);
    console.log(document.body.offsetHeight);
    console.log(window.innerHeight);
});