const btn = document.getElementById("btn");
const form = document.getElementById("form");
const retryBtn = document.getElementById("retryBtn");
const txt = document.getElementById("txt");
const alertElement = document.getElementById("alert"); 
retryBtn.style.display = "none";
txt.style.display = "none";
alertElement.classList.add("hidden"); 

btn.addEventListener("click", () => {
  form.style.display = "none";
  const input1 = document.getElementById("khodam1").value;
  const input2 = document.getElementById("khodam2").value;
  let outputMessage = document.getElementById("output");
  let messageWin = document.getElementById("messageWin");
  messageWin.innerHTML = "";
  outputMessage.style.display = "block";

  if (input1 === "" || input2 === "") {
    if (input1 === "" && input2 === "") {
      alertElement.querySelector('p').textContent = "Mohon isi kedua input dengan khodammu!";
      alertElement.classList.remove("hidden");
    } else if (input1 !== "" && input2 === "") {
      alertElement.querySelector('p').textContent = "Mohon isi input kedua dengan khodammu!";
      alertElement.classList.remove("hidden");
    } else if (input1 === "" && input2 !== "") {
      alertElement.querySelector('p').textContent = "Mohon isi input pertama dengan khodammu!";
      alertElement.classList.remove("hidden");
    }
    setTimeout(() => {
      alertElement.classList.add("hidden");
    }, 3000);
    
    form.style.display = "block";
    outputMessage.style.display = "none";
    return;
  }

  alertElement.classList.add("hidden");

  setTimeout(() => {
    outputMessage.remove();

    function showResults() {
      const damage1 = Math.floor(Math.random() * 100) + 1;
      const damage2 = Math.floor(Math.random() * 100) + 1;

      const winner = Math.random() < 0.5 ? input1 : input2;
      const winnerDamage = winner === input1 ? damage1 : damage2;

      let resultMessage = document.createElement("p");
      resultMessage.textContent = `Pertempuran adu khodam dimenangkan oleh ${winner} dengan total kerusakan ${winnerDamage}%`;
      resultMessage.classList.add("text-center", "font-bold");
      messageWin.appendChild(resultMessage);
      retryBtn.style.display = "block";
      txt.style.display = "block";
      retryBtn.addEventListener("click", () => {
        location.reload();
      });
    }

    showResults();
  }, 5000);
});
