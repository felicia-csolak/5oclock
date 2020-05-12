//Random Drink API
const getDrink = async () => {
const drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
// const
  try {
    const response = await axios.get(drinkURL)
    console.log(response)
    const drinkList = Object(response.data)
    console.log(drinkList)
  }
  catch (error) {
  console.log(`${error}`)
  }
}

getDrink()


//Alcohol type API
async function drinkInfo(alcohol) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcohol}`
try {
  const response = await axios.get(url)
  // const alcoholSelected = response
  console.log(response)
} catch (error) {
  console.log(`${error}`)
  }
}

// drinkInfo(Gin)
//random button










//dynamic drink display








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

