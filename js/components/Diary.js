class Diary {

    constructor() {
        this.meals = [];
        this.sessionStorageKey = 'meals';
    };

    saveMeals() {
        sessionStorage.setItem(this.sessionStorageKey, JSON.stringify(this.meals));
    }

    addMeal(params) {
        const newMeal = new Meal(params);
        this.meals.push(newMeal);
        this.saveMeals();
    };


}