const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn =document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "aaaa, i like you too!";
  gif.src =
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

document.addEventListener("DOMContentLoaded", () => {
  const bgm = document.getElementById("bgm");
  const btn = document.getElementById("musicBtn");
  const icon = document.getElementById("icon");
  const label = document.getElementById("label");

  btn.addEventListener("click", async () => {
    if (bgm.paused) {
      try {
        await bgm.play();
        btn.classList.add("playing");
        icon.textContent = "⏸";
        label.textContent = "Pause Music";
      } catch (err) {
        console.log("Play failed:", err);
      }
    } else {
      bgm.pause();
      btn.classList.remove("playing");
      icon.textContent = "▶";
      label.textContent = "Play Music";
    }
  });
});
