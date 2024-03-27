import {} from "../lib/class_prod.js";

const menu = document.querySelectorAll("#func");
const katio_gen = document.querySelector("#gen-katio");

menu.forEach(e =>{
    const type_func = e.getAttribute("func");
    e.addEventListener("click", ()=>{
        katio_gen.innerHTML = `<katio-gui type="${type_func}" db="1"/>`;
    });
});