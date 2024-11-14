// Write your JavaScipt code below this line. 
const mainTitle = document.getElementById("main-title")
mainTitle.textContent = "Welcome to Our Cat Adoption Center Zuri!"

const description = document.getElementById("description")
description.textContent = "Find your purrfect companion!"

const cat1Button = document.getElementById("cat-1-button")
cat1Button.addEventListener("click", () => {
    const WhiskersCard = document.getElementById("cat-1")
    WhiskersCard.remove()
    alert("Congrats on adopting your new friend Whiskers!")
})

const cat2Button = document.getElementById("cat-2-button")
cat2Button.addEventListener("click", () => {
    const DaiysCard = document.getElementById("cat-2")
    DaiysCard.remove()
    alert("Congrats on adopting your new friend Daisy!")
})

const cat3Button = document.getElementById("cat-3-button")
cat3Button.addEventListener("click", () => {
    const TerrysCard = document.getElementById("cat-3")
    TerrysCard.remove()
    alert("Congrats on adopting your new friend Terry!")
})



