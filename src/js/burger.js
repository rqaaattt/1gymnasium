const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const navbar1 = document.getElementById("section1");
const navbar2 = document.getElementById("section2");

  burger.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      menu.style.maxHeight = menu.scrollHeight + "px";      
      navbar1.classList.add("scrolled");
      navbar1.classList.add("dont-close");
      navbar2.classList.add("scrolled");
      navbar2.classList.add("dont-close");
      setTimeout(() => menu.classList.remove("overflow-hidden"), 900);
    } else {
      menu.style.maxHeight = "0";
      menu.classList.add("overflow-hidden")
      setTimeout(() => menu.classList.add("hidden"), 900);
      
      if (window.scrollY < 200) {
        navbar1.classList.remove("scrolled");
        navbar2.classList.remove("scrolled");
      }
      navbar1.classList.remove("dont-close");
      navbar2.classList.remove("dont-close");
    }
  });

  const header = document.querySelector("header");
  const target = document.querySelector("#section");

  

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      navbar1.classList.add("scrolled");
      navbar2.classList.add("scrolled");
    } else {
      if (!navbar1.classList.contains("dont-close")) {
        navbar1.classList.remove("scrolled");
        navbar2.classList.remove("scrolled");
      }
    }
  });