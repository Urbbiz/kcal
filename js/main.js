/***************
EXECUTION
****************/

const diary = new Diary();
diary.loadMeals();

showMeals();
showTotalMacro();


document.getElementById("add-new-meal").addEventListener("click", addMeal);