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
        // lightbox.classList.remove('show'); // sitas nuima show css ir todel dingsta add meal forma
    };

    deleteMeal(insertDate) {
        const index = this.meals.findIndex(meal => meal.insertDate === insertDate);
        this.meals.splice(index, 1); //trina pizza is arejaus.
        this.saveMeals();
    };


    // ATIDARO EDIT FORMA 
    editMeal(insertDate) {
        const index = this.meals.findIndex(meal => meal.insertDate === insertDate);
        const meal = this.meals[index]; // susiradau ta objekta is kurio galesiu istraukti visas kitas jo sudedamasias:


        //susirandu elementus, kuriuos noresiu atvaizduoti
        const editName = document.getElementById('edit-name');

        // editInput.value = "labas rytas";
        editName.value = meal.name;
        console.log(insertDate);
        console.log(meal);

        console.log('EDIT MYGTUKAS ANT MEALS???')

        lightbox.classList.add('show');
        lightbox.dataset.form = 'edit'; // sita eilute nukreipia butent i edit forma, o ne i add

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