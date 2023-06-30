
export function btnOperate () {
    let btn = document.querySelectorAll(".button-comm")


btn.forEach((btnOn) => {
    let ispress = false;
    btnOn.onclick = () => {
        let list = btnOn.nextElementSibling.nextElementSibling;
        let btnIMG = btnOn.firstElementChild;
        let art = btnOn.previousElementSibling;
        let codeContainer = btnOn.parentElement;
        if (ispress == false){
                    ispress = true;
                    
                    codeContainer.animate([
                        {height: "100px"},
                        {height:"400px"}
                    ],{
                        duration:260,
                        fill:"forwards"
                    })
            
                    list.animate([
                        {top: "-300px"},
                        {top: "50px"}
                    ], {
                        duration: 300,
                        fill: "forwards"
                    });
            
                    btnIMG.animate([
                        {rotate:"0deg"},{rotate:"-90deg"}
                    ],{
                        duration: 300,
                        fill: "forwards"
                    });
                    
                 
                }
                else {
            
                    codeContainer.animate([
                        {height: "400px"},
                        {height:"100px"}
                    ],{
                        duration:300,
                        fill:"forwards"
                    })
            
                    list.animate([
                        {top: "50px"},
                        {top: "-300px"}
                    ], {
                        duration: 300,
                        fill: "forwards"
                    });
            
                    btnIMG.animate([
                        {rotate:"-90deg"},{rotate:"0deg"}
                    ],{
                        duration: 300,
                        fill: "forwards"
                    });
            
                    ispress=false;
                }
    }
})

};

document.addEventListener("DOMContentLoaded", btnOperate())