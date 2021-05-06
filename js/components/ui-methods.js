// let sortType = "";

function showMeals() {


    let html = "";
    const meals = diary.meals;
    if (meals.length) {
        meals.forEach(function(meal) {

            html += `
            <div class="col-4 col-sm-6 col-xs-12 list  ">
                <div class="block item ">
                    <h3>${meal.name} </h3>
                     <p> ${meal.carb} g. </p>
                    <p> ${meal.protein} g. </p>
                    <p> ${meal.fat} g. </p>
                    <p> ${meal.kcal} kcal. </p>
                    <div class="actions ">
                        <button class="btn small edit" type="button" onclick="editMeal('${meal.insertDate}')">Edit</button>
                        <button id="obuolys" class="btn small remove" type="button" onclick="deleteMeal('${meal.insertDate}')">Delete</button>
                    </div>
                </div>
            </div>`;
        });
    } else {
        html = '<div class="col-12">No meals</div>';
    }
    document.getElementById("meal-diary").innerHTML = html;
    document.getElementById("total-carbs").innerText = diary.totalCarbs();
    document.getElementById("total-protein").innerText = diary.totalProtein();
    document.getElementById("total-fat").innerText = diary.totalFat();
    document.getElementById("total-kcal").innerText = diary.totalKcal();

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
        carb: +params.carb, //https://stackoverflow.com/a/221565
        protein: +params.protein,
        fat: +params.fat,
        kcal: +params.kcal,

    });
    clearAddForm();
    showMeals();
}

function deleteMeal(insertDate) {
    if (!confirm("Are you sure?")) return false;
    diary.deleteMeal(insertDate);

    showMeals();
}

function editMeal(insertDate) {

    diary.editMeal(insertDate);
    const lightbox = document.querySelector('.lightbox');
    lightbox.classList.add('edit');

    showMeals();
}

function addFormShow(insertDate) {

    // diary.editMeal(insertDate);
    const lightbox = document.querySelector('.lightbox');
    lightbox.classList.add('edit');

    showMeals();
}