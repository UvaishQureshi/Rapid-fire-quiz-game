function changePage(one, two, three, four) {
  let nextPageShow = document.getElementById(one);
  nextPageShow.style.display = (two);
  let backPage = document.getElementById(three);
  backPage.style.display = (four);
  if (one === "resultPage") {
  document.getElementById("marks").innerText = score;
}
  attachOptionListeners();
}

function restart() {
  location.reload();
}

let score = 0;

function attachOptionListeners() {
  let buttons = document.querySelectorAll(".option:not(.attached)");
   buttons.forEach(button => {
    button.classList.add("attached");
    
    button.addEventListener("click", function() {
      let isCorrect = this.dataset.answer.trim() === "correct";
      let allButtons = this.closest(".shade").querySelectorAll(".option");
      
      allButtons.forEach(btn => {
        btn.classList.add("disabled");
        btn.disabled = true;
      });
      
      if (isCorrect) {
        score += 2
        this.classList.add("correct");
      } else {
        score -= 1
        this.classList.add("wrong");
        allButtons.forEach(btn => {
          if (btn.dataset.answer.trim() === "correct") {
            btn.classList.add("correct");
          }
        });
      }
    });
  });
}
attachOptionListeners();
