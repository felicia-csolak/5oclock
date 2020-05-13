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


function optionValue(e) {
  e.preventDefault()
  let select = document.querySelector('.dropdown-content')
  let getValue = select.value
  console.log(getValue)
  getAlcohol(getValue)
}

const form = document.querySelector('form')
form.addEventListener('submit', optionValue)


async function getAlcohol(alcohol) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcohol}`
  try {
    const response = await axios.get(url)
    for(let i=0; i <= 5; i++) {
    const alcoholSelected = response.data.drinks[i].strDrink
    const alcoholID = response.data.drinks[i].idDrink
    console.log(alcoholSelected)
    console.log(alcoholID)
    drinkList(alcoholSelected)
    showAlcoholData(alcoholID)
    }
  }
    catch (error) {
    console.log(`${error}`)
  }
}


// create drink list, append to DOM
function drinkList(alcohol) {
  let displayedDrink = document.createElement('p')
  displayedDrink.innerHTML = alcohol
  let display = document.querySelector('.append-list')
  console.log(displayedDrink)
  display.appendChild(displayedDrink)
}

// get alcohol details
async function alcoholDetails(number) {
  const url = (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${number}`);
  try {
    const response = await axios.get(url)
    for(let i=0; i <= 5; i++) {
    const alcoholInfo = response.data.drinks[i].strInstructions
    console.log(alcoholInfo)
    }
  } catch (error) {
    console.log(`${error}`)
  }
}

alcoholDetails(15675)

function showAlcoholData(number) {
  let alcoholInfo = document.createElement('p')
  alcoholInfo.innerHTML = number
  let display = document.querySelector('append-list')
  console.log(alcoholInfo)
  display.appendChild(alcoholInfo)
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

