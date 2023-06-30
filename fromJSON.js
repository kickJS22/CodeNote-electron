import { btnOperate } from "./animations.js";
import { changeTitle } from "./createListName.js";
import { deleteDiv } from "./delete.js";
import { addNoteFunc } from "./addNote.js";


let cont = document.querySelector("#container")
function createFromJSON(title, notes) {
    let div = document.createElement("div");
    div.className = "comm-container";
    cont.appendChild(div);

    let article = document.createElement("article");
    article.className = "comm-container-art";
    div.appendChild(article);

    let h1 = document.createElement("h1");
    let textToH1 = document.createTextNode(title);
    h1.appendChild(textToH1)
    article.appendChild(h1)

    let btn = document.createElement("button");
    btn.className = "button-comm";
    div.appendChild(btn)

    let img = document.createElement("img");
    img.className = "btn-add-img";
    img.src = "left-arrow-icon-free-svg-file.png";
    btn.appendChild(img);

    let btnDel = document.createElement("button");
    btnDel.className = "button-delete";
    div.appendChild(btnDel)

    let imgDel = document.createElement("img");
    imgDel.className = "btn-del-img";
    imgDel.src = "trash+icon-1320184116961576370.png";
    btnDel.appendChild(imgDel);

    let ul = document.createElement("ul")
    ul.className = "list-container";
    div.appendChild(ul);

    let btnAddNote = document.createElement("button")
    btnAddNote.className = "button-add-command";
    let textTobtn = document.createTextNode("+")
    btnAddNote.appendChild(textTobtn);
    ul.appendChild(btnAddNote);
    
    notes.forEach(n => {
        let li = document.createElement("li");
        ul.appendChild(li)
        let textToLi = document.createTextNode(n);
        li.appendChild(textToLi)


        let btnDelNote = document.createElement("button");
        btnDelNote.className = "button-delete-note";
        li.appendChild(btnDelNote);

        let btnAddNote = document.createElement("button")
        btnAddNote.className = "button-add-command";
        let textTobtn = document.createTextNode("+")
        btnAddNote.appendChild(textTobtn);
        ul.appendChild(btnAddNote);

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
    })

    addNoteFunc();
    deleteDiv();
    btnOperate();
    changeTitle();
    
}

document.addEventListener("DOMContentLoaded", () => {
    /* console.log("Funca")
    console.log(JSON.stringify(localStorage))
    console.log("local length: " + localStorage.length) */

    /* console.log(item) */
    let i = 0;
    do {
        if(localStorage.length > 0){
            let newI = JSON.parse(localStorage.getItem(localStorage.key(i)));
            let obj = []
            obj.push(newI)
            createFromJSON(obj[0][0], obj[0].slice(1, obj[0].length))
            // console.log(obj[0].slice(1,obj[0].length))
            // console.log("i: " +  i)
            // console.log("newI: " + newI)
            i++;
            // console.log("item: "+ item)
        } else {
            break;
        }
    } while (i < localStorage.length)

})

