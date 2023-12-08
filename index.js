

const buttons = document.querySelectorAll("button");
let show = false

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        const paragraphText = document.getElementById(`p${button.id}`);
        show = !show;
        if(show){

            paragraphText.style.display = "block"
            button.style.backgroundImage = "url('./assets/images/icon-minus.svg')";
        }
        else{
            paragraphText.style.display = "none";
            button.style.backgroundImage = "url('./assets/images/icon-plus.svg')"
        }
    })
})