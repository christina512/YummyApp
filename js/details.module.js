export class Details {
    constructor() {

    }
    async getDetails(mealId) {
        $('#loading').fadeIn(300);
        const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const res = await httpReq.json();
        const mealDetails = res.meals;
        $('#loading').fadeOut(300);
        this.displayDetails(mealDetails)
    }


    displayDetails(details) {

        let allIngredients = '';
        for (let i = 0; i <= 20; i++) {
            if (details[0][`strIngredient${i}`]) {
                allIngredients += `<li class="alert alert-info m-2 p-1">${details[0][`strMeasure${i}`]} ${details[0][`strIngredient${i}`]}</li>`
            }
        }


        let tags = details[0].strTags;
        let allTags = [];
        if (tags) {
            allTags = tags.split(",");
        }
        let tagsss = '';
        for (let i = 0; i < allTags.length; i++) {
            tagsss += `<li class="m-2 p-1 alert-danger alert">${allTags[i]}</li>`;
        }
        

        let blackBox = `<div class="col-md-4">
            <img src="${details[0].strMealThumb}" class="w-100 rounded-3" alt="">
            <h2>${details[0].strMeal}</h2>
            </div>
            <div class="col-md-8">
            <h2>Instructions</h2>
            <p>${details[0].strInstructions}</p>
            <h3>Area : <span>${details[0].strArea}</span></h3>
            <h3>Category : <span>${details[0].strCategory}</span></h3>
            <h3>Recipes : </h3>
            <ul class="list-unstyled d-flex flex-wrap g-3">
                ${allIngredients}
            </ul>
            <h3>Tags : </h3>
            <ul class="list-unstyled d-flex flex-wrap g-3">
                ${tagsss}
            </ul>
            <a target="_blank" class="btn btn-success" href="${details[0].strSource}">Source</a>
            <a target="_blank" class="btn btn-danger" href="${details[0].strYoutube}">Youtube</a>
            </div>`;

            $('#allElements').html(blackBox)


    }
}