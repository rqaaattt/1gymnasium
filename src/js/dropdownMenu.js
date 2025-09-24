
          
          function recalcMenuHeight(menu) {
          menu.style.maxHeight = menu.scrollHeight + "px";}
          
          
          const dropdownBtn = document.getElementById("dropdownBtn");
          const dropdownMenu = document.getElementById("dropdownMenu");
          const dropdownArrow = document.getElementById("dropdownArrow");
          dropdownBtn.classList.toggle("bg-white");
          // Переключение по клику
          dropdownBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // чтобы клик по кнопке не срабатывал на document
            dropdownBtn.classList.toggle("bg-white");
            dropdownBtn.classList.toggle("text-white")
            dropdownMenu.classList.toggle("hidden");
            dropdownArrow.classList.toggle("rotate-90");
            menu.classList.toggle("overflow-hidden")

            // Пересчёт высоты меню
            const menu1 = document.getElementById("menu"); 
            recalcMenuHeight(menu1);
        });

          // Клик вне dropdown -> закрыть
          document.addEventListener("click", (e) => {
            if (!dropdownMenu.classList.contains("hidden")) {
              if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.add("hidden");
                dropdownArrow.classList.remove("rotate-180");
              }
            }
          });
        
          burger.addEventListener("click", () => {
            dropdownMenu.classList.add("hidden");
            dropdownArrow.classList.remove("rotate-180");
          });
