let btn = document.querySelector("#submit")
let input = document.querySelector('input')
let h2 = document.createElement("h2");

btn.addEventListener("click", ()=> {
  if(input.value == "pink") {
    h2.innerText = "Correct answer"
    btn.after(h2)
  } else {
    h2.innerText = "Wrong Answer"
    btn.after(h2)
  }
})