//Nav-bar---------------------------------------------------------------------------------------------------------------------------

const burger = document.querySelector(".burger"),
      nav = document.querySelector("nav");

burger.addEventListener('click', ()=>{
    console.log("hello")
    nav.classList.toggle("active");
});

//Classes buttons-------------------------------------------------------------------------------------------------------------------

const classButtons = document.querySelectorAll(".classes");
       
const filterClass = n =>{
    for(let classButton of classButtons){
        classButton.classList.remove("active");
    }
    classButtons[n].classList.add("active");
}

classButtons.forEach((item, index) =>{
    item.addEventListener("click", ()=>{
        let active = index;
        filterClass(active);
        if(classButtons[active].classList.contains("active")){
            classButtons[active].addEventListener("click", () =>{
                console.log("hello")
                classButtons[active].classList.toggle("active");
            });
        };
    })
})

