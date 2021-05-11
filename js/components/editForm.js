class editForm {
    constructor(params) {
        this.selector = params.selector;
        this.DOM = null;

        this.editName = null;
        this.editCarb = null;
        this.editProtein = null;
        this.editFat = null;
        this.editKcal = null;
        this.buttonCancelEdit = null;
        this.buttonEditEdit = null;

    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }

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