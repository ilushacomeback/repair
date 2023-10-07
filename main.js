(function () {
  const width = innerWidth;
  const getSwiper = (width) => {
    if (width < 768) {
      return new Swiper(".view", {
        slidesPerView: "auto",
        refresh: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  };
  getSwiper(width);

  const btnNextItems = document.querySelector(".next-items");
  const viewList = document.querySelector(".view-list");
  const btnNextItemsSpan = document.querySelector(".next-items > span");

  btnNextItems.addEventListener("click", function () {
    viewList.classList.toggle("view-list_toggle");
  });

  btnNextItems.addEventListener("click", function () {
    btnNextItems.classList.toggle("next-items_toggle");
  });

  btnNextItemsSpan.addEventListener("click", function () {
    btnNextItemsSpan.innerHTML =
      btnNextItemsSpan.innerHTML === "Показать всё"
        ? (btnNextItemsSpan.innerHTML = "Скрыть")
        : (btnNextItemsSpan.innerHTML = "Показать всё");
  });

})();
