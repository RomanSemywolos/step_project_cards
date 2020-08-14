export class Modal {

    constructor(name, btnOpener, btnClose) {
        this.name = name
        this.btnOpener = btnOpener
        this.btnClose = btnClose
        console.log(this)
    }

    init() {
        const modal = document.getElementById(this.name)
        const btnOpener = document.getElementById(this.btnOpener)
        const btnClose = document.getElementsByClassName(this.btnClose)[0]
        const $this = this; // class Modal

        btnOpener.onclick = function () {
            $this.openModal(modal)
        }

        btnClose.onclick = function () {
            $this.closeModal(modal)
        }
        
        window.onclick = function (event) {
            if (event.target == modal) {
                $this.closeModal(modal)
            }
        }    
    }

    openModal(modal) {
        modal.style.display = "block"
    }

    closeModal(modal) {
        modal.style.display = "none"
    }
}