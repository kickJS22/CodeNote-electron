import { btnOperate } from "./animations.js";
import { changeTitle } from "./createListName.js";
import { deleteDiv } from "./delete.js";
import { addNoteFunc } from "./addNote.js";

let btnAdd = document.querySelector("#btn-add")
let cont = document.querySelector("#container")
btnAdd.onclick = () => {
    let div = document.createElement("div");
    div.className = "comm-container";
    cont.appendChild(div);

    let article = document.createElement("article");
    article.className = "comm-container-art";
    div.appendChild(article);

    let input = document.createElement("input");
    input.type = "text";
    input.className = "input-text";
    input.autofocus = "true";
    article.appendChild(input);

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

    addNoteFunc()
    deleteDiv();
    btnOperate();
    changeTitle();
    
    // console.log(localStorage)
}