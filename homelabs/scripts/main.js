const burger = document.querySelector(".burger"),
      nav = document.querySelector("nav");

burger.addEventListener('click', ()=>{
    console.log("hello")
    nav.classList.toggle("active");
});