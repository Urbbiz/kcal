class EditForm {
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
        this.findInnerElements();
        console.log(this);

    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    findInnerElements() {
        this.editName = document.getElementById('edit-name');
        this.editCarb = document.getElementById('edit-carb');
        this.editProtein = document.getElementById('edit-protein');
        this.editFat = document.getElementById('edit-fat');
        this.editKcal = document.getElementById('edit-kcal');
        this.buttonCancelEdit = document.getElementById('edit-cancel-btn');
        this.buttonEditEdit = document.getElementById('edit-edit-btn');
    }
}