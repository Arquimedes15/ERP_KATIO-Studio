class reder_HTML extends HTMLElement {
    constructor() {
        super();

        this.part;
    }

    connectedCallback() {
        //this.part = this.getAttribute("part");
        /*rec.on(this.canal / 2, (e) => {
            this.innerHTML = ""
            let st = `<style>${e}</style>`
            this.innerHTML += st;

        })*/
            //this.innerHTML = ""
        console.log("hola mundo")
    }
}

window.customElements.define("katio-draw", reder_HTML)


class Gui_katio extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback() {
        this.gui_mod = this.getAttribute("type")
        this.db = this.getAttribute("db");

        this.innerHTML = this.gui_mod;
    }
}

window.customElements.define("katio-gui", Gui_katio);