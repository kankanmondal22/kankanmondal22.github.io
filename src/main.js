import "./style.css";

// Tab functionality
function opentab(event, tabname) {
    // Get all tab links and contents
    const tablinks = document.querySelectorAll(".tab-links");
    const tabcontents = document.querySelectorAll(".tab-contents");

    // Remove active class from all tab links
    tablinks.forEach(function (tablink) {
        tablink.classList.remove("active-link");
    });

    // Hide all tab contents
    tabcontents.forEach(function (tabcontent) {
        tabcontent.classList.remove("active-contents");
    });

    // Add active class to clicked tab
    event.currentTarget.classList.add("active-link");

    // Show the selected tab content
    const targetTab = document.getElementById(tabname);
    if (targetTab) {
        targetTab.classList.add("active-contents");
    }
}

// Make function globally available
window.opentab = opentab;

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("hidden");
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        // Close mobile menu if open
        document.getElementById("mobileMenu").classList.add("hidden");
    });
});

// Add scroll effect to navigation
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 100) {
        nav.classList.add("shadow-lg");
    } else {
        nav.classList.remove("shadow-lg");
    }
});

// Form submission
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
});
