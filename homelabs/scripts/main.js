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
        disciplineSelector(active);
        if(classButtons[active].classList.contains("active")){
            classButtons[active].addEventListener("click", () =>{
                classButtons[active].classList.toggle("active");
                disciplineSelector(active);
            });
        };
    })
})

//disciplines buttons------------------------------------------------
const disciplines = document.querySelectorAll(".discipline");
const alertModal = document.querySelector(".alert-block");

const disciplineSelector = n =>{
        if(classButtons[n].classList.contains("active")){
            for(let discipline of disciplines){
                discipline.classList.add("active");
            }
        }else{
            for(let discipline of disciplines){
                discipline.classList.remove("active");
            }
        }
}
disciplines.forEach((item,index)=>{
    let active = index;
    item.addEventListener("mouseover",()=>{
        if(disciplines[active].classList.contains("active")){
            console.log("hello");
        }else{
            alertModal.classList.add("active");
        }
    });
});
