export function addNoteFunc() {

    let btnAddNote = document.querySelectorAll(".button-add-command")

    btnAddNote.forEach((btnNote) => {
        btnNote.onclick = () => {
            let parentUl = btnNote.parentElement;
            let li = document.createElement("li");
            parentUl.appendChild(li);
            let input = document.createElement("input");
            input.className = "input-text-li"
            li.appendChild(input);


            input.onchange = () => {
                var array = localStorage.getItem(input.parentElement.parentElement.parentElement.querySelector("article").textContent);
                // console.log(input.parentElement.parentElement.parentElement.querySelector("article").textContent)
                let toEdit = JSON.parse(array);
                // console.log("despues del parse: " + toEdit)
                let text = input.value.toString()
                // console.log(text)
                toEdit.push(text)
                // console.log(" despues del push : " + toEdit)
                toEdit = JSON.stringify(toEdit);
                localStorage.setItem(input.parentElement.parentElement.parentElement.querySelector("article").textContent, toEdit)
                // console.log(localStorage)

                let textToLi = document.createTextNode(input.value);
                li.appendChild(textToLi)
                input.remove();
                let btnDelNote = document.createElement("button");
                btnDelNote.className = "button-delete-note";
                li.appendChild(btnDelNote);

                let btnDelNoteImg = document.createElement("img");
                btnDelNoteImg.className = "btn-del-img-note";
                btnDelNoteImg.src = "trash+icon-1320184116961576370.png"
                btnDelNote.appendChild(btnDelNoteImg);

                let btnDeleteNote = document.querySelectorAll(".button-delete-note")

                btnDeleteNote.forEach((btnDNote) => {
                    btnDNote.onclick = () => {
                        // console.log("delete")
                        var array = localStorage.getItem(btnDNote.parentElement.parentElement.parentElement.firstChild.firstChild.textContent);
                        // console.log("btnDNote.parentElement.parentElement.parentElement.textContent(div): " + btnDNote.parentElement.parentElement.parentElement.firstChild.firstChild.textContent)
                        let toDel = JSON.parse(array)
                        // console.log("toDel: " + toDel)
                        // console.log("btnDNote.parentElement.textContent (li): "+btnDNote.parentElement.textContent)
                        let index = toDel.indexOf(btnDNote.parentElement.textContent);
                        // console.log("btnDNote.parentElement.parentElement.parentElement.textContent(div): " + btnDNote.parentElement.parentElement.parentElement.firstChild.firstChild.textContent)
                        // console.log("index: " + index)
                        
                        toDel.splice(index, 1);
                        // console.log("toDel: " + toDel)
                        toDel = JSON.stringify(toDel);
                        localStorage.setItem(btnDNote.parentElement.parentElement.parentElement.firstChild.firstChild.textContent, toDel)
                        // console.log("localStorage: " + localStorage)
                        btnDNote.parentElement.remove();
                    }
                })
            }
        }
    })

}

document.addEventListener("DOMContentLoaded", () => {
    addNoteFunc();
})
