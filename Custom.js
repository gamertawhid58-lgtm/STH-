
/* =========================================
   STH EMPIRE
   COMPLETE MAIN JAVASCRIPT
   File: js/script.js
========================================= */

(() => {
    "use strict";

    /* =====================================
       1. MOBILE NAVIGATION
    ===================================== */

    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {

        const openMenu = () => {
            mobileMenu.classList.add("active");

            menuBtn.textContent = "✕";
            menuBtn.setAttribute("aria-expanded", "true");
            menuBtn.setAttribute("aria-label", "Close navigation menu");
        };

        const closeMenu = () => {
            mobileMenu.classList.remove("active");

            menuBtn.textContent = "☰";
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Open navigation menu");
        };

        menuBtn.addEventListener("click", () => {
            const isOpen = mobileMenu.classList.contains("active");

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Close menu after clicking a link
        mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        // Close menu with Escape
        document.addEventListener("keydown", event => {
            if (event.key === "Escape") {
                closeMenu();
            }
        });

        // Close menu when clicking outside
        document.addEventListener("click", event => {
            const clickedInside =
                menuBtn.contains(event.target) ||
                mobileMenu.contains(event.target);

            if (!clickedInside) {
                closeMenu();
            }
        });

        // Reset menu on desktop
        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        });
    }


    /* =====================================
       2. AUTOMATIC COPYRIGHT YEAR
    ===================================== */

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* =====================================
       3. WHATSAPP CONFIGURATION
    ===================================== */

    // Use an approved business contact number.
    // Format: country code + number, without + or spaces.

    const whatsappNumber = "8801XXXXXXXXX";

    const whatsappLink = document.getElementById("contact-whatsapp");

    if (whatsappLink && /^\d{10,15}$/.test(whatsappNumber)) {
        whatsappLink.href = `https://wa.me/${whatsappNumber}`;
        whatsappLink.target = "_blank";
        whatsappLink.rel = "noopener noreferrer";
    }


    /* =====================================
       4. PREMIUM LOADER
    ===================================== */

    const loader = document.getElementById("loader");
    const progressBar = document.querySelector(".loader-line span");

    if (loader) {

        let loaderFinished = false;

        // Disable the old infinite CSS animation
        if (progressBar) {
            progressBar.style.animation = "none";
            progressBar.style.transition = "width 0.5s ease";
            progressBar.style.width = "0%";
        }

        // Start the loading progress
        requestAnimationFrame(() => {
            if (progressBar) {
                progressBar.style.width = "90%";
            }
        });

        const finishLoader = () => {

            if (loaderFinished) return;

            loaderFinished = true;

            // Complete the progress bar
            if (progressBar) {
                progressBar.style.width = "100%";
            }

            // Hide loader after the bar finishes
            setTimeout(() => {
                loader.classList.add("fade-out");

                // Remove it from the page after fading
                setTimeout(() => {
                    loader.style.display = "none";
                }, 750);

            }, 550);
        };

        // Finish when all page resources are loaded
        if (document.readyState === "complete") {
            finishLoader();
        } else {
            window.addEventListener("load", finishLoader, {
                once: true
            });
        }

        // Safety fallback: never keep the loader forever
        setTimeout(finishLoader, 12000);
    }


    /* =====================================
       5. SMOOTH INTERNAL NAVIGATION
    ===================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    /* =====================================
       6. EXTERNAL LINKS SECURITY
    ===================================== */

    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.setAttribute("rel", "noopener noreferrer");
    });


    /* =====================================
       7. CONSOLE MESSAGE
    ===================================== */

    console.log(
        "%cSTH EMPIRE",
        "font-size: 24px; font-weight: bold; color: #6366f1;"
    );

    console.log("Building Digital Excellence.");

})();
