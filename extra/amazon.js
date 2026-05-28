document.addEventListener("DOMContentLoaded", () => {

  // 1. BACKDROP IMAGE ROTATION TRANSITIONS
  const backdropImages = document.querySelectorAll(".hero img");
  let runningBackdropIndex = 0;

  if (backdropImages.length > 0) {
    function rotateBackdrop() {
      backdropImages.forEach((image, i) => {
        image.style.opacity = i === runningBackdropIndex ? "1" : "0";
      });
      runningBackdropIndex = (runningBackdropIndex + 1) % backdropImages.length;
    }
    rotateBackdrop();
    setInterval(rotateBackdrop, 5000);
  }

  // 2. TRANSACTION RETAIL ITEM METRIC REGISTER
  let activeCartTotal = 0;
  const numericCartTarget = document.getElementById("cart-count");
  const interfacePurchaseButtons = document.querySelectorAll(".add-to-cart-btn");

  interfacePurchaseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeCartTotal++;
      if (numericCartTarget) {
        numericCartTarget.textContent = activeCartTotal;
      }

      button.textContent = "Added to Cart ✓";
      button.style.backgroundColor = "#73c2fb";
      button.style.borderColor = "#5ca7db";

      setTimeout(() => {
        button.textContent = "Add to Cart";
        button.style.backgroundColor = "#ffd814";
        button.style.borderColor = "#fcd200";
      }, 1500);
    });
  });

  // 3. HEADER INPUT FILTER SELECTION SEARCH
  const searchInputNode = document.querySelector(".search-input");
  const searchCardsArray = document.querySelectorAll(".shop-card");

  if (searchInputNode) {
    searchInputNode.addEventListener("input", () => {
      const sanitizedTerm = searchInputNode.value.toLowerCase().trim();

      searchCardsArray.forEach((card) => {
        const structuralText = card.innerText.toLowerCase();
        if (structuralText.includes(sanitizedTerm)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

  // 4. VERTICAL SCROLL ANCHOR NAVIGATION TRIGGER
  const executionScrollBtn = document.getElementById("scroll-top-btn");
  if (executionScrollBtn) {
    executionScrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // 5. INJECT LEGAL STAMP DATE STAMP
  const targetCopyrightElement = document.getElementById("copyright-notice");
  if (targetCopyrightElement) {
    const calculatedYear = new Date().getFullYear();
    targetCopyrightElement.innerHTML = `© 1996–${calculatedYear}, Amazon.com, Inc. or its affiliates`;
  }
});
document.addEventListener("DOMContentLoaded", () => {
  
// 1. LIVE SEARCH FILTER (FIXED LAYOUT WRAPPER)
  const searchInput = document.querySelector(".search-input");
  const productCards = document.querySelectorAll(".shop-card");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase().trim();

      productCards.forEach((card) => {
        const cardText = card.innerText.toLowerCase();
        
        if (cardText.includes(searchTerm)) {
          // Re-apply the exact default styles so the image wrappers don't squash
          card.style.display = "flex";
          card.style.visibility = "visible";
          card.style.opacity = "1";
        } else {
          // Hide it cleanly without breaking the grid template mapping
          card.style.display = "none";
        }
      });
    });
  }

  // 2. DYNAMIC CART INCREMENTOR
  // Updates the counter in the navbar basket when "Add to Cart" is clicked
  let internalCartCount = 0;
  const cartBadge = document.getElementById("cart-count");
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      internalCartCount++;
      if (cartBadge) {
        cartBadge.textContent = internalCartCount;
      }

      // Visual feedback on the button itself
      button.textContent = "Added ✓";
      button.style.background = "#73c2fb"; // Temporary blue confirmation highlight
      button.style.borderColor = "#5ca7db";

      // Reset the button look after 1.2 seconds
      setTimeout(() => {
        button.textContent = "Add to Cart";
        button.style.background = "#ffd814";
        button.style.borderColor = "#fcd200";
      }, 1200);
    });
  });

  // 3. SEARCH CATEGORY DROPDOWN UPDATER
  // Changes the invisible native select dropdown text handler safely
  const dropdownSelect = document.querySelector(".search-dropdown");
  const dropdownBox = document.querySelector(".search-dropdown-box");

  if (dropdownSelect && dropdownBox) {
    // Inject a label container inside the box if it doesn't exist
    const labelSpan = document.createElement("span");
    labelSpan.textContent = dropdownSelect.value;
    dropdownBox.insertBefore(labelSpan, dropdownBox.firstChild);

    dropdownSelect.addEventListener("change", (e) => {
      labelSpan.textContent = e.target.value;
    });
  }
});