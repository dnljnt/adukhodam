const btn = document.getElementById("btn");
const form = document.getElementById("form");
const retryBtn = document.getElementById("retryBtn");
retryBtn.style.display = "none";
btn.addEventListener("click", () => {
  form.style.display = "none";
  const input1 = document.getElementById("khodam1").value;
  const input2 = document.getElementById("khodam2").value;
  let arr = [
    "Menyiapkan arena",
    "FIGHT!!",
    `${input1} memulai menyerang dengan kekuatan roh jahatnya, memberikan kerusakan 70%`,
    `${input2} terhuyung setelah terkena damage dari ${input1}`,
    `${input1} mencoba menyerang namun telat karena ${input2} telah menyerang duluan`,
    `Pukulan keras dari ${input2} mengakibatkan ${input1} terjatuh`,
    "Pertarungan semakin sengit dan saling beradu kekuatan",
    "Membersihkan arena ...",
  ];
  let outputMessage = document.getElementById("output");
  outputMessage.innerHTML = "";
  let i = 0;
  function showNextMessage() {
    if (i < arr.length) {
      let message = document.createElement("p");
      message.classList.add("text-center", "text-lg", "font-semibold", "fade");
      message.textContent = arr[i];
      outputMessage.appendChild(message);

      setTimeout(() => {
        message.classList.add("fade-out");
        setTimeout(() => {
          message.remove();
          i++;
          showNextMessage();
        }, 1000); // Wait for fade out animation to complete
      }, 2000); // Display each message for 2 seconds
    } else {
      showResults();
    }
  }

  function showResults() {
    const damage1 = Math.floor(Math.random() * 100) + 1;
    const damage2 = Math.floor(Math.random() * 100) + 1;

    const winner = damage1 > damage2 ? input1 : input2;
    const winnerDamage = damage1 > damage2 ? damage1 : damage2;

    let resultMessage = document.createElement("p");
    resultMessage.textContent = `Pertempuran adu khodam ini dimenangkan oleh ${winner} dengan total kerusakan ${winnerDamage}%`;
    resultMessage.classList.add("text-center", "font-bold")
    outputMessage.appendChild(resultMessage);
    retryBtn.style.display = "block";
    retryBtn.addEventListener("click", ()=>{
      location.reload
    })
  }

  showNextMessage();
});
