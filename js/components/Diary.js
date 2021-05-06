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

    deleteMeal(insertDate) {
        const index = this.meals.findIndex(meal => meal.insertDate === insertDate);
        this.meals.splice(index, 1); //trina pizza is arejaus.
        this.saveMeals();
    };

    editMeal(insertDate) {
        const index = this.meals.findIndex(meal => meal.insertDate === insertDate);
        // this.meals.splice(index, 1); //trina pizza is arejaus.
        // this.saveMeals();
        console.log('Ar kas nors veikia???')
    };



    totalCarbs() {
        return this.meals.reduce((currentTotal, currentMeal) => currentTotal + currentMeal.carb, 0);
    };
    totalProtein() {
        return this.meals.reduce((currentTotal, currentMeal) => currentTotal + currentMeal.protein, 0);
    }
    totalFat() {
        return this.meals.reduce((currentTotal, currentMeal) => currentTotal + currentMeal.fat, 0);
    }
    totalKcal() {
        return this.meals.reduce((currentTotal, currentMeal) => currentTotal + currentMeal.kcal, 0);
    }




    initMealEditing(mealDiary) {
        console.log('Inicijuojamas MEAL redagavimas');
    }


}