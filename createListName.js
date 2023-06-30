export function changeTitle () {
    let inputList = document.querySelectorAll(".input-text");
    inputList.forEach((inp) => {
    
        inp.onchange = () => {
            console.log("change")
            console.log(inputList)
            let parent = inp.parentElement;
            let h1 = document.createElement("h1");
            let textToH1 = document.createTextNode(inp.value);
            h1.appendChild(textToH1)
            inp.remove();
            parent.appendChild(h1);

            let array = [inp.value]
            localStorage.setItem(`${inp.value}`, JSON.stringify(array))
        }
    }) 
};

document.addEventListener("DOMContentLoaded", changeTitle())


