//modal-map
const mapButtonContent = document.querySelector(".contacts__connection");
const popupMap = document.querySelector(".modal__map");
const popupButtonClose = popupMap.querySelector(".modal__close");
const mapButton = mapButtonContent.querySelector(".contacts__image");

/*for(var i = 0; i<popup.length; i++){
    var obqectpopup = popup[i];
    
}
console.log(obqectpopup);*/

mapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal__chow");
});

popupButtonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal__chow");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    popupMap.classList.remove("modal__chow");
  }
});

//modal-login
const LoginButtonContent = document.querySelector(".contacts__connection");
const popupLogin = document.querySelector(".modal__login");
const popupButtonLogin = popupLogin.querySelector(".modal__close");
const LoginButton = LoginButtonContent.querySelector(".contacts__link");
const login = popupLogin.querySelector("[name=name-user]");
const email = popupLogin.querySelector("[name=email-user]");
const letter = popupLogin.querySelector("[name=letter-user]");
const popupLoginSubmit = popupLogin.querySelector(".modal__send");
const storage = "";
const storageSupport = true;

LoginButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupLogin.classList.add("modal__chow");
  popupLogin.classList.add("modal__animation-open");
  if (storage) {
    login.value = storage;
    email.focus;
  } else {
    login.focus();
  }
});

popupButtonLogin.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupLogin.classList.remove("modal__chow");
  popupLogin.classList.remove("modal__animation-open");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    popupLogin.classList.remove("modal__chow");
  }
});

popupLoginSubmit.addEventListener("click", function (evt) {
  if (!login.value || !email.value || !letter.value) {
    evt.preventDefault();
    console.log("yt");
  } else {
    if (storageSupport) {
      localStorage("login", login.value);
    }
  }
});

//slider main page

const slider = document.querySelector(".offers__slider");
const itemSlider = slider.querySelector(".offers__item");
const targetArrowsUp = slider.querySelector(".offers__link-up");
const targetArrowsBack = slider.querySelector(".offers__link-back");
const linkArrowDisabled = slider.querySelector(".offers__link-disabled");
const linkBreadcrumbs1 = slider.querySelector(".offers__breadcrumbs-item1");
const linkBreadcrumbs2 = slider.querySelector(".offers__breadcrumbs-item2");
const sliderContentPunchers = slider.querySelector(
  ".offers__item-content-punchers"
);
const sliderContentDrills = slider.querySelector(
  ".offers__item-content-drills"
);
//offers__breadcrumbs-item--active
console.log(targetArrowsUp.disabled);

targetArrowsUp.addEventListener("click", function (evt) {
  evt.preventDefault();
  targetArrowsUp.classList.add("offers__link-disabled");
  targetArrowsUp.disabled = true;
  targetArrowsBack.disabled = false;
  linkBreadcrumbs1.classList.add("offers__breadcrumbs-item--active");
  linkBreadcrumbs2.classList.remove("offers__breadcrumbs-item--active");
  targetArrowsBack.classList.remove("offers__link-disabled");
  sliderContentPunchers.classList.add("offers__item-content--hidden");
  sliderContentDrills.classList.remove("offers__item-content--hidden");
  itemSlider.classList.add("offers__item-drills");
  itemSlider.classList.remove("offers__item-punchers");
});

targetArrowsBack.addEventListener("click", function (evt) {
  evt.preventDefault();
  targetArrowsBack.classList.add("offers__link-disabled");
  targetArrowsUp.classList.remove("offers__link-disabled");
  targetArrowsBack.disabled = true;
  targetArrowsUp.disabled = false;
  linkBreadcrumbs1.classList.remove("offers__breadcrumbs-item--active");
  linkBreadcrumbs2.classList.add("offers__breadcrumbs-item--active");
  sliderContentPunchers.classList.remove("offers__item-content--hidden");
  sliderContentDrills.classList.add("offers__item-content--hidden");
  itemSlider.classList.remove("offers__item-drills");
  itemSlider.classList.add("offers__item-punchers");
});

linkBreadcrumbs1.addEventListener("click", function (evt) {
  evt.preventDefault();
  targetArrowsUp.classList.add("offers__link-disabled");
  targetArrowsBack.classList.remove("offers__link-disabled");
  targetArrowsUp.disabled = true;
  targetArrowsBack.disabled = false;
  linkBreadcrumbs1.classList.add("offers__breadcrumbs-item--active");
  linkBreadcrumbs2.classList.remove("offers__breadcrumbs-item--active");
  sliderContentPunchers.classList.add("offers__item-content--hidden");
  sliderContentDrills.classList.remove("offers__item-content--hidden");
  itemSlider.classList.add("offers__item-drills");
  itemSlider.classList.remove("offers__item-punchers");
});

linkBreadcrumbs2.addEventListener("click", function (evt) {
  evt.preventDefault();
  targetArrowsBack.classList.add("offers__link-disabled");
  targetArrowsUp.classList.remove("offers__link-disabled");
  targetArrowsBack.disabled = true;
  targetArrowsUp.disabled = false;
  linkBreadcrumbs1.classList.remove("offers__breadcrumbs-item--active");
  linkBreadcrumbs2.classList.add("offers__breadcrumbs-item--active");
  sliderContentPunchers.classList.remove("offers__item-content--hidden");
  sliderContentDrills.classList.add("offers__item-content--hidden");
  itemSlider.classList.remove("offers__item-drills");
  itemSlider.classList.add("offers__item-punchers");
});
// purchase window modal-buy
const mainproduct = document.querySelector(".product-main__list");
var productButton = mainproduct.querySelectorAll(".product__link-bookmarks");
const modalBuy = document.querySelector(".modal__buy");
const modalBuyClose = modalBuy.querySelector(".modal__close");
for (var i = 0; i < productButton.length; i++) {
  var obqectpopup = productButton[i];
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

/*if (mainproduct) {
  const modalBuy = document.querySelector(".modal__buy");
  const mainproduct = document.querySelector(".product-main__list");
  var productButton = mainproduct.querySelectorAll(".product__link-bookmarks");
  console.log(productButton);
  for (var i = 0; i < productButton.length; i++) {
    var obqectpopup = productButton[i];
    obqectpopup.addEventListener("click", function (evt) {
      evt.preventDefault();
      modalBuy.classList.add("modal__chow");
    });
  }
} else {
  console.log("t");
} */
