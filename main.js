//Random Drink API
const getDrink = async () => {
  const drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  try {
    const response = await axios.get(drinkURL)
    const drinkList = Object(response.data)
    displayDrink(drinkList)
  }
  catch (error) {
    console.log(`${error}`)
  }
}
getDrink()

// Drink info rendering
function displayDrink(drink) {
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

    if(drink.drinks[0][`strIngredient${i}`] == null){
      break;
    }

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


// grabbing drop down menu value 
function optionValue(e) {
  let select = document.querySelector('.dropdown-content')
  let getValue = select.value
  console.log(getValue)
  getAlcohol(getValue)
}


// event listner for drop down menu
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  removeDrinks()
  optionValue()
})


// API call that retrieves alcohol name and alcohol ID
async function getAlcohol(alcohol) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcohol}`
  try {
    const response = await axios.get(url)
    for (let i = 0; i <= 2; i++) {
      const alcoholSelected = response.data.drinks[i].strDrink
      const alcoholID = response.data.drinks[i].idDrink
      drinkList(alcoholSelected)
      alcoholDetails(alcoholID)
    }
  }
  catch (error) {
    console.log(`${error}`)
  }
}


// create alcohol name list, append to DOM
function drinkList(alcohol) {
  let displayedDrink = document.createElement('h2')
  displayedDrink.innerHTML = alcohol
  let display = document.querySelector('.append-list')
  console.log(displayedDrink)
  display.appendChild(displayedDrink)
}

// API call that uses alcohol ID to retrieve directions
async function alcoholDetails(number) {
  const url = (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${number}`);
  try {
    const response = await axios.get(url)
    for (let i = 0; i <= 2; i++) {
      let alcoholInfoArray = []
      const alcoholInfo = response.data.drinks[i].strInstructions
        alcoholInfoArray.push(alcoholInfo);
        alcoholInfoArray.forEach(showAlcoholData)
    }
  } catch (error) {
    console.log(`${error}`)
  }
}

// append alcohol directions to DOM
function showAlcoholData(number) {
  let alcoholInfo = document.createElement('p')
  alcoholInfo.innerText = number
  let display = document.querySelector('.append-directions')
  console.log(alcoholInfo)
  display.appendChild(alcoholInfo)
}

// remove drink display from DOM
function removeDrinks() {
  const oldDrinkList = document.querySelector('.append-list')
  const oldRecipe = document.querySelector('.append-directions')
  while (oldDrinkList.lastChild){
    oldDrinkList.removeChild(oldDrinkList.lastChild)
  }
  while (oldRecipe.lastChild){
    oldRecipe.removeChild(oldRecipe.lastChild)
  }
}












//modal from w3schools.com
let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function () {
  modal.style.display = "block"
}
closeBtn.onclick = function () {
  modal.style.display = "none"
  document.location.reload();
}
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none"
  }
}
