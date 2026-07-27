/* =====================================
   GameHub Pro JavaScript
===================================== */

// Wait for page load

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       Sticky Header
    =========================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 10px 25px rgba(0,0,0,.15)";

        } else {

            header.style.boxShadow =
                "0 5px 20px rgba(0,0,0,.08)";

        }

    });

    /* ===========================
       Smooth Scroll
    =========================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", function (e) {

                e.preventDefault();

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (target) {

                    target.scrollIntoView({

                        behavior: "smooth"

                    });

                }

            });

        });

    /* ===========================
       Fade Animation
    =========================== */

    const cards = document.querySelectorAll(

        ".feature-card, .category-card, .article-card, .blog-card, .why-card, .testimonial-card"

    );

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("fade-up");

                }

            });

        },

        {

            threshold: 0.2

        }

    );

    cards.forEach(card => {

        observer.observe(card);

    });

});/* =====================================
   Mobile Menu
===================================== */

const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".navbar");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        menuBtn.classList.toggle("active");

    });

}

/* =====================================
   FAQ Accordion
===================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector("h3");

    if (question) {

        question.addEventListener("click", () => {

            item.classList.toggle("active");

        });

    }

});

/* =====================================
   Back To Top Button
===================================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "back-to-top";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* =====================================
   Active Navigation
===================================== */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    if (link.href === window.location.href) {

        link.classList.add("active");

    }

});

/* =====================================
   Newsletter Form Validation
===================================== */

const newsletterForm = document.querySelector(".newsletter form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const email = newsletterForm.querySelector("input");

        if (!email.value.trim()) {

            alert("Please enter your email address.");

            return;

        }

        alert("Thank you for subscribing!");

        newsletterForm.reset();

    });

}

console.log("GameHub Pro Loaded Successfully");
