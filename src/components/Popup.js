export default class Popup {
    constructor(popup) {
        this._popup = popup;
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open(){
        this._popup.classList.add('popup_visible');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_visible');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(e){
        if (e.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners(){
        this._popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('form__close') || evt.target.classList.contains('overlay')) {
                this.close();
            }
        });
    }
}