const asideIcon = document.querySelector("#aside-icon");

const aside = document.querySelector("#aside-icon");

const main = asideIcon.addEventListener("click", function () {
  //스타일 변경되는 부분 들어감
  aside.classList.toggle("aside-change");
});
