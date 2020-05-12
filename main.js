//Random Drink API
const getDrink = async () => {
const drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
// const
  try {
    const response = await axios.get(drinkURL)
    // console.log(response)
    const drinkList = Object(response.data)
    // console.log(drinkList)
    displayDrink(drinkList)
  }
  catch (error) {
  console.log(`${error}`)
  }
}
getDrink()

// Drink info rendering
function displayDrink(drink) {
  // console.log(drink.drinks[0].strDrink)
  let display = document.querySelector('.drink-display')

  let photo = document.createElement('img');
  photo.src = drink.drinks[0].strDrinkThumb
  display.appendChild(photo);

  let drinkName = document.createElement('h2')
  drinkName.innerHTML = drink.drinks[0].strDrink
  display.appendChild(drinkName)

  for (let i = 1; i <= 15; i++) {
  const ingredients = document.createElement('li')
  ingredients.innerHTML = drink.drinks[0][`strIngredient${i}`];

  const measurements = document.createElement('li')
  measurements.innerHTML = drink.drinks[0][`strMeasure${i}`];

  let ingMeasureDiv = document.createElement('div')
  ingMeasureDiv.appendChild(ingredients)
  ingMeasureDiv.appendChild(measurements)
  display.appendChild(ingMeasureDiv)
  }

  let directions = document.createElement('p')
  directions.innerHTML = drink.drinks[0].strInstructions;
  display.appendChild(directions);
}



//Alcohol type API
// async function drinkInfo(alcohol) {
//   const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcohol}`
// try {
//   const response = await axios.get(url)
//   // const alcoholSelected = response
//   console.log(response)
// } catch (error) {
//   console.log(`${error}`)
//   }
// }

// drinkInfo(Gin)





// drop down menu
function button() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

//modal
let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function(){
  modal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}

