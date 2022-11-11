// data for holding which page we are on
let pageNumber = 0

// content for pages
const pages = [
  { copy: "a Londoner", bgColor: "#edc7a9", circleColor: "#3e78ed"},
  { copy: "a foodie", bgColor: "#a1fffe", circleColor: "#e34a47"},
  { copy: "a JS developer", bgColor: "#d3c7f3", circleColor: "#f7fe00"},
  { copy: "looking for a job", bgColor: "#faffb8", circleColor: "#b472e6"},

]

const nextTag = document.querySelector("div img.is-next")
const prevTag = document.querySelector("div img.is-previous")
const outputTag = document.querySelector("p")
const circleTag = document.querySelector("div.slide_circle")
const bodyTag = document.querySelector("body")

// function to increase page number
const next = function () {
  pageNumber += 1

  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }

  updateSection()
}

// function to decrease page number
const previous = function () {
  pageNumber -= 1

  if (pageNumber < 0) {
    pageNumber = pages.length - 1
  }

  updateSection()
}

const updateSection = function () {
  outputTag.innerHTML = pages[pageNumber].copy
  circleTag.style.backgroundColor = pages[pageNumber].circleColor
  bodyTag.style.backgroundColor = pages[pageNumber].bgColor
}

// event listener for next tag for output to middle paragraph
nextTag.addEventListener("click", function () {
  next()
})

// event listener for previous tag for output to middle paragraph
prevTag.addEventListener("click", function () {
  previous()
})