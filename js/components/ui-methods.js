// let sortType = "";

function showMeals() {

    let html = "";
    const meals = diary;
    if (meals.length) {
        meals.forEach(function(meal) {

            html += `
            <div class="col-4 col-sm-6 col-xs-12">
                <div class="block">
                     <h3>${meal.name} </h3>
                    <p> ${meal.carb} g. </p>
                    <p> ${meal.protein} g. </p>
                    <p> ${meal.fat} g. </p>
                    <p> ${meal.kcal} kcal. </p>
                
                    <button class="btn-red" type="button" onclick="editMeal('${meal.insertDate}')">Edit</button>
                <button class="btn-red" type="button" onclick="deleteMeal('${meal.insertDate}')">Delete</button>
                </div>
            </div>`;
        });
    } else {
        html = '<div class="col-12">No pizzas</div>';
    }
    document.getElementById("meal-diary").innerHTML = html;
};


function clearAddForm() {
    document.getElementById("new-name").value = "";
    document.getElementById("new-carb").value = "";
    document.getElementById("new-protein").value = "";
    document.getElementById("new-fat").value = "";
    document.getElementById("new-kcal").value = "";
}

function addMeal() {
    const params = {
        name: document.getElementById("new-name").value,
        carb: document.getElementById("new-carb").value,
        protein: document.getElementById("new-protein").value,
        fat: document.getElementById("new-fat").value,
        kcal: document.getElementById("new-kcal").value,
    };

    diary.addMeal({
        name: params.name,
        carb: params.carb,
        protein: params.protein,
        fat: params.fat,
        kcal: params.kcal,

    });
    clearAddForm();
    showMeals();

}