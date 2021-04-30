class Diary {

    constructor() {
        this.meals = [];
        this.sessionStorageKey = 'meals';
    }

    loadMeals() {
        this.meals = JSON.parse(sessionStorage.getItem(this.sessionStorageKey)) || [];
    };

    saveMeals() {
        sessionStorage.setItem(this.sessionStorageKey, JSON.stringify(this.meals));
    };

    addMeal(params) {
        const newMeal = new Meal(params);
        this.meals.push(newMeal);
        this.saveMeals();
    };


}