document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn")
  const recipeItems = document.querySelectorAll(".recipe-item")
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")
      const filterValue = button.getAttribute("data-filter")
      recipeItems.forEach((item) => {
        if (filterValue === "all") {
          item.style.display = "block"
          setTimeout(() => {
            item.style.opacity = "1"
            item.style.transform = "scale(1)"
          }, 10)
        } else {
          const category = item.getAttribute("data-category")
          if (category === filterValue) {
            item.style.display = "block"
            setTimeout(() => {
              item.style.opacity = "1"
              item.style.transform = "scale(1)"
            }, 10)
          } else {
            item.style.opacity = "0"
            item.style.transform = "scale(0.8)"
            setTimeout(() => {
              item.style.display = "none"
            }, 300)
          }
        }
      })
    })
  })
  const recipeButtons = document.querySelectorAll(".btn-recipe")
  recipeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const card = e.target.closest(".recipe-card")
      const title = card.querySelector("h3").textContent
      alert(`Recipe details for: ${title}\n\nThis would open a detailed recipe page with ingredients and instructions.`)
    })
  })
})
