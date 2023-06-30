export function deleteDiv() {

    let btnDelete = document.querySelectorAll(".button-delete")

    btnDelete.forEach((btnD) => {
        btnD.onclick = () => {
            // console.log("delete")
            // console.log("localStorage: " + localStorage)
            // console.log("localStorage.getItem(btnD.parentElement.textContent): " + localStorage.getItem(btnD.parentElement.firstChild.firstChild.textContent))
            localStorage.removeItem(btnD.parentElement.firstChild.firstChild.textContent)
            // console.log("localStorage: " + localStorage)
            btnD.parentElement.remove();
        }
    })


}

document.addEventListener("DOMContentLoaded", () => {
    deleteDiv();
})

