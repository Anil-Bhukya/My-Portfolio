document.addEventListener("DOMContentLoaded", function () {
    const showMoreBtn = document.querySelector(".show-more-btn");
    const extraRow = document.querySelector(".extra");

    showMoreBtn.addEventListener("click", function () {
        if (extraRow.classList.contains("d-none")) {
            extraRow.classList.remove("d-none");
            extraRow.classList.add("d-flex");
            extraRow.classList.add("justify-content-center");
            showMoreBtn.textContent = "Show Less";
        }
        else {
            extraRow.classList.remove("d-flex");
            extraRow.classList.add("d-none");
            showMoreBtn.textContent = "Show More";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const showMoreBtn = document.querySelector(".show-more-btn2");
    const extraRow = document.querySelector(".extra1");

    showMoreBtn.addEventListener("click", function () {
        if (extraRow.classList.contains("d-none")) {
            extraRow.classList.remove("d-none");
            extraRow.classList.add("d-flex");
            extraRow.classList.add("justify-content-center");
            showMoreBtn.textContent = "Show Less";
        }
        else {
            extraRow.classList.remove("d-flex");
            extraRow.classList.add("d-none");
            showMoreBtn.textContent = "More";
        }
    });
});

// navbar.js

document.addEventListener('DOMContentLoaded', function () {
    // Get all the navbar links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
    // Add click event listener to each link
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        // Get the navbar toggler
        const navbarToggler = document.querySelector('.navbar-toggler');
  
        // Check if the navbar is open and close it if necessary
        if (navbarToggler && navbarToggler.getAttribute('aria-expanded') === 'true') {
          navbarToggler.click(); // Trigger click to close the navbar
        }
      });
    });
  });
  