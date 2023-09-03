import { MealsDisplay } from "./display.module.js";
import { Details } from "./details.module.js";
import { Validation } from "./validation.module.js";


export class Home {
    constructor() {

        this.element = "";

        this.searchByName= document.getElementById('search-by-name')
        this.searchByLetter = document.getElementById('search-by-letter')
        this.mealDetails = document.getElementById("details")

        this.display = new MealsDisplay()
        this.details = new Details()

        $(document).ready(() => {
            this.getSearchByNameMeal(this.element).then(() => {
                $('#loading').fadeOut(500);
                $('body').css('overflow', 'visible')
            })
        })

        $(this.searchByName).keyup(()=>{
            this.element= this.searchByName.value
            this.getSearchByNameMeal(this.element)
            $('#home').removeClass('d-none')
        })

        $(this.searchByLetter).keyup(()=>{
            this.letter= this.searchByLetter.value
            this.getSearchByLetter(this.letter)
            $('#home').removeClass('d-none')
        })


        $('.x-icon').click(() => {
            this.closeNavbar()
        })
        $('.bars-icon').click(() => {
            this.openNavbar()
        })
        $('.one').click(() => {
            this.display.displaySearchInputs()
            this.closeNavbar()
        })
        $('.two').click(() => {
            $('#search').addClass('d-none')
            $('#home').removeClass('d-none')
            this.getMealsCategories()
        })
        $('.three').click(() => {
            $('#search').addClass('d-none')
            $('#home').removeClass('d-none')
            this.getMealsAreas()
        })
        $('.four').click(() => {
            $('#search').addClass('d-none')
            $('#home').removeClass('d-none')
            this.getIngredients()
        })
        $('.five').click(() => {
            $('#home').removeClass('d-none')
            this.display.displayContactUs()
            this.closeNavbar()
            this.valid = new Validation()
        })
        

    }


    openNavbar() {
        $('.bars-icon').addClass('display-none');
        $('.x-icon').removeClass('display-none');
        $('#side-navbar').animate({ left: 0 }, 500);
        $('.one').animate({ top: 0 }, 500);
        $('.two').animate({ top: 0 }, 600);
        $('.three').animate({ top: 0 }, 700);
        $('.four').animate({ top: 0 }, 800);
        $('.five').animate({ top: 0 }, 900);

    }
        
        
    closeNavbar(){
        let leftWidth = $('.left-bar').outerWidth()
            $('.bars-icon').removeClass('display-none');
            $('.x-icon').addClass('display-none');
            $('#side-navbar').animate({ left: -leftWidth }, 500);
            $('.div-links li').animate({ top: 200 })

    }



    async getMealsCategories() {
        $('#loading').fadeIn(500);
        this.closeNavbar()
        const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        const res = await httpReq.json();
        let allCategories = res.categories;
        this.display.displayMealsCategories(allCategories);
        document.querySelectorAll('.cards').forEach(card => {
            card.addEventListener('click', () => {
                const categoryName = card.querySelector('h3').textContent;
                this.getCategoryMeals(categoryName)
            })
        })
        $('#loading').fadeOut(500);
    }



    async getMealsAreas() {
        $('#loading').fadeIn(300);
        this.closeNavbar()
        const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
        const res = await httpReq.json();
        let allAreas = res.meals;
        this.display.displayAreas(allAreas);
        document.querySelectorAll('.areas').forEach(area => {
            area.addEventListener('click', () => {
                const areaName = area.querySelector('h3').textContent;

                this.getAreaMeals(areaName)
            })
        })
        $('#loading').fadeOut(300);
    }



    async getIngredients() {
        $('#loading').fadeIn(300);
        this.closeNavbar()
        const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
        const res = await httpReq.json();
        let allIngredients = res.meals;
        this.display.displayIngredients(allIngredients.slice(0, 20))
        document.querySelectorAll('.ingredients').forEach(ingredient => {
            ingredient.addEventListener('click', () => {
                const ignName = ingredient.querySelector('h3').textContent;
                this.getIngredientMeals(ignName)
            })
        })
        $('#loading').fadeOut(300);
    }

    showMealDetails(meal){
        meal.addEventListener('click', () => {
            $('#search').addClass('d-none')
            let mealId = meal.getAttribute('id');
            $(this.mealDetails).removeClass('d-none')
            $(this.mealDetails).siblings().not('#loading').addClass("d-none")
            $('#loading').fadeIn(300);
            this.details.getDetails(mealId)
            this.closeNavbar()
            $('#loading').fadeOut(300);
        })
    }


    async getSearchByNameMeal(el) {
        $('#loading').fadeIn(300);
        const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${el}`);
        const res = await httpReq.json();
        let meals = res.meals;
        if (meals) {
            this.display.displayMeals(meals.slice(0, 20))
        } else {
            this.display.displayMeals([])
        }
        document.querySelectorAll('.meals').forEach(meal => {
            this.showMealDetails(meal)
        })
        $('#loading').fadeOut(300);
    }

    async getSearchByLetter(el) {
        $('#loading').fadeIn(300);
        if (el=="") {
            el="k"
        }
        const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${el}`);
        const res = await httpReq.json();
        let meals = res.meals;
        if (meals) {
            this.display.displayMeals(meals.slice(0, 20))
        } else {
            this.display.displayMeals([])
        }
        document.querySelectorAll('.meals').forEach(meal => {
            this.showMealDetails(meal)
        })
        $('#loading').fadeOut(300);
    }


    async getCategoryMeals(category) {
        this.closeNavbar()
        $('#loading').fadeIn(300);
        const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        const res = await httpReq.json();
        let meals = res.meals;
        this.display.displayMeals(meals.slice(0, 20))
        document.querySelectorAll('.meals').forEach(meal => {
           this.showMealDetails(meal)
        })

        $('#loading').fadeOut(300);
    }



    async getAreaMeals(area) {
        this.closeNavbar()
        $('#loading').fadeIn(300);
        const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
        const res = await httpReq.json();
        let meals = res.meals;
        this.display.displayMeals(meals.slice(0, 20))
        document.querySelectorAll('.meals').forEach(meal => {
            this.showMealDetails(meal)
        })
        $('#loading').fadeOut(300);
    }


    async getIngredientMeals(ingredient) {
        this.closeNavbar()
        $('#loading').fadeIn(300);
        const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const res = await httpReq.json();
        let meals = res.meals;
        this.display.displayMeals(meals.slice(0, 20))
        document.querySelectorAll('.meals').forEach(meal => {
            this.showMealDetails(meal)
        })
        $('#loading').fadeOut(300);
    }

}