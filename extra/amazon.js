// ===============================
// HERO IMAGE SLIDER
// ===============================

const heroImages = document.querySelectorAll(".hero img");

let currentHero = 0;

function showHeroSlide(index) {
  heroImages.forEach((img, i) => {
    img.style.opacity = i === index ? "1" : "0";
  });
}

function nextHeroSlide() {
  currentHero++;
  
  if (currentHero >= heroImages.length) {
    currentHero = 0;
  }

  showHeroSlide(currentHero);
}

showHeroSlide(currentHero);

setInterval(nextHeroSlide, 3000);


// ===============================
// ADD TO CART FUNCTIONALITY
// ===============================

let cartCount = 0;

const cartElement = document.querySelector(".cart b");

const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;

    cartElement.textContent = `Cart (${cartCount})`;

    button.textContent = "Added ✓";

    button.style.background =
      "linear-gradient(180deg, #4caf50 0%, #2e7d32 100%)";

    setTimeout(() => {
      button.textContent = "Add to cart";

      button.style.background =
        "linear-gradient(180deg, #f7ca00 0%, #f08804 100%)";
    }, 1500);
  });
});


// ===============================
// SEARCH FUNCTIONALITY
// ===============================

const searchInput = document.querySelector(".search-bar input");

const shopCards = document.querySelectorAll(".shop-card");

searchInput.addEventListener("keyup", () => {
  const searchValue = searchInput.value.toLowerCase();

  shopCards.forEach((card) => {
    const text = card.innerText.toLowerCase();

    if (text.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});


// ===============================
// SIDEBAR CLOSE ON OUTSIDE CLICK
// ===============================

const menuToggle = document.getElementById("menu-toggle");

const overlay = document.querySelector(".overlay");

overlay.addEventListener("click", () => {
  menuToggle.checked = false;
});


// ===============================
// HORIZONTAL SLIDER SCROLL
// ===============================

const sliders = document.querySelectorAll(".recommend-slider");

sliders.forEach((slider) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;

    slider.classList.add("active");

    startX = e.pageX - slider.offsetLeft;

    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;

    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;

    const walk = (x - startX) * 2;

    slider.scrollLeft = scrollLeft - walk;
  });
});


// ===============================
// SMOOTH HOVER EFFECTS
// ===============================

const cards = document.querySelectorAll(".shop-card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});


// ===============================
// FAKE AMAZON LOADING EFFECT
// ===============================

window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

document.body.style.opacity = "0";
document.body.style.transition = "opacity 0.5s ease";


// ===============================
// BACK TO TOP BUTTON
// ===============================

const backToTop = document.querySelector(".back-to-top");

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


// ===============================
// LANGUAGE CHANGE DEMO
// ===============================

const languageSelect = document.querySelector(".lang");

languageSelect.addEventListener("change", () => {
  if (languageSelect.value === "हिंदी") {
    alert("हिंदी भाषा चुनी गई");
  } else {
    alert("English Selected");
  }
});


// ===============================
// PRODUCT IMAGE CLICK EFFECT
// ===============================

const recommendItems = document.querySelectorAll(".recommend-item img");

recommendItems.forEach((img) => {
  img.addEventListener("click", () => {
    img.style.transform = "scale(1.2)";

    setTimeout(() => {
      img.style.transform = "scale(1)";
    }, 300);
  });
});


// ===============================
// DYNAMIC CURRENT YEAR
// ===============================

const footerCopy = document.querySelector(".footer-copy p");

const year = new Date().getFullYear();

footerCopy.innerHTML = `
Conditions of Use & Sale | Privacy Notice | Interest-Based Ads
<br>
© 1996–${year}, Amazon.com, Inc. or its affiliates
`;


// ===============================
// SEARCH BUTTON CLICK
// ===============================

const searchButton = document.querySelector(".search-bar button");

searchButton.addEventListener("click", () => {
  const value = searchInput.value.trim();

  if (value === "") {
    alert("Please enter something to search");
  } else {
    alert(`Searching for "${value}"`);
  }
});


// ===============================
// ENTER KEY SEARCH
// ===============================

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchButton.click();
  }
});


// ===============================
// AUTO HIDE NAVBAR ON SCROLL
// ===============================

let lastScrollTop = 0;

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let scrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-100px";
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop;
});