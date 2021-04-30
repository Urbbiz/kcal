class Meal {
    constructor(params) {
        this.name = params.name || '';
        this.carb = params.carb || 0;
        this.protein = params.protein || 0;
        this.fat = params.fat || 0;
        this.kcal = params.kcal || 0;
        this.insertDate = new Date().toISOString(); // identifikatorius pagal data.
    };

};