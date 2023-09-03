

export class MealsDisplay {
    constructor() {

    }


    displaySearchInputs() {
        $('#loading').fadeIn(300);
        $('#search').removeClass('d-none')
        $('#home').addClass('d-none')
        $('#loading').fadeOut(300);
    }

    displayMealsCategories(response) {
        let blackBox = "";
        for (let i = 0; i < response.length; i++) {

            blackBox += `<div class="col-md-3 cards">
          <div class="position-relative img-container overflow-hidden pointer rounded-3">
              <img src="${response[i].strCategoryThumb}" class="img-fluid " alt="">
              <div class="meal-overlay position-absolute p-2 text-center">
                  <h3 id="category-name">${response[i].strCategory}</h3>
                  <p>${response[i].strCategoryDescription.split(" ").slice(0, 20).join(" ")}</p>
              </div>
          </div>
      </div>`
        }
        $('#allElements').html(blackBox)
    }

    displayAreas(response) {
        let blackBox = "";
        for (let i = 0; i < response.length; i++) {
            blackBox += `<div class="col-md-3 text-center areas">
          <div class="position-relative img-container overflow-hidden pointer rounded-3">
          <i class="fa-solid fa-house-laptop fa-4x"></i>
                  <h3>${response[i].strArea}</h3>
              </div>
          </div>
      </div>`
        }
        $('#allElements').html(blackBox)
    }

    displayIngredients(response) {
        let blackBox = "";
        for (let i = 0; i < response.length; i++) {
            blackBox += `<div class="col-md-3 text-center ingredients">
          <div class="position-relative img-container overflow-hidden pointer rounded-3">
          <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                  <h3>${response[i].strIngredient}</h3>
                  <p>${response[i].strDescription.split(" ").slice(0, 20).join(" ")}</p>
              </div>
          </div>
      </div>`
        }
        $('#allElements').html(blackBox)
    }


    displayMeals(response) {
        let blackBox = "";
        for (let i = 0; i < response.length; i++) {
            blackBox += `<div class="col-md-3 meals" id="${response[i].idMeal}">
          <div class="position-relative img-container overflow-hidden pointer rounded-3">
              <img src="${response[i].strMealThumb}" class="img-fluid " alt="">
              <div class="meal-overlay position-absolute p-2 d-flex align-items-center">
                  <h3>${response[i].strMeal}</h3>
              </div>
          </div>
      </div>`
        }
        $('#allElements').html(blackBox)
    }


    displayContactUs() {
        $('#loading').fadeIn(300);
        let blackBox = `<div class="min-vh-100 d-flex align-items-center justify-content-center"><div class="container w-75 text-center ">
    <div class="row g-4">
        <div class="col-md-6">
            <input id="name-val" type="text" class="form-control" placeholder="Enter Your Name">
            <div id="name-alert" class="alert alert-danger w-100 mt-2 d-none">Special characters and numbers not allowed</div>
        </div>
        <div class="col-md-6">
            <input id="email-val" type="email" class="form-control" placeholder="Enter Your Email">
            <div id="email-alert" class="alert alert-danger w-100 mt-2 d-none">Email not valid * example@yyy.zzz</div>
        </div>
        <div class="col-md-6">
            <input id="phone-val" type="text" class="form-control" placeholder="Enter Your Phone">
            <div id="phone-alert" class="alert alert-danger w-100 mt-2 d-none">Enter Valid Phone Number</div>
        </div>
        <div class="col-md-6">
            <input id="age-val" type="number" class="form-control" placeholder="Enter Your Age">
            <div id="age-alert" class="alert alert-danger w-100 mt-2 d-none">Enter Valid Age</div>
        </div>
        <div class="col-md-6">
            <input id="password-val" type="password" class="form-control" placeholder="Enter Your Password">
            <div id="pass-alert" class="alert alert-danger w-100 mt-2 d-none">Enter Valid Password *minimum eight characters , at least one number</div>
        </div>
        <div class="col-md-6">
            <input id="repassword-val" type="password" class="form-control" placeholder="Repassword">
            <div id="repass-alert" class="alert alert-danger w-100 mt-2 d-none">Enter valid password</div>
        </div>
    </div>
    <button disabled class="btn btn-outline-danger px-2 mt-3" id="submit-btn">Submit</button>
</div> </div> `
        $('#allElements').html(blackBox)
        $('#loading').fadeOut(300);
    }

}