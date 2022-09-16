const catalogproduct = document.querySelector(".catalog-content__list");
var productButtonCatalog = catalogproduct.querySelectorAll(
  ".product__link-bookmarks"
);
const modalBuy = document.querySelector(".modal__buy");
const modalBuyClose = modalBuy.querySelector(".modal__close");
for (var i = 0; i < productButtonCatalog.length; i++) {
  var obqectpopup = productButtonCatalog[i];
  obqectpopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalBuy.classList.add("modal__chow");
    modalBuy.classList.add("product__animation-bookmarks");
  });
}
modalBuyClose.addEventListener("click", function () {
  modalBuy.classList.remove("modal__chow");
  modalBuy.classList.remove("product__animation-bookmarks");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    modalBuy.classList.remove("modal__chow");
  }
});
