clas editForm {
    constructor(params) {
        this.selector = params.selector;
    }

    init() {

    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            return false;
        }
        this.DOM = DOM;
        return true;
    }
}