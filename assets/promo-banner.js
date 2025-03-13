document.addEventListener("DOMContentLoaded", function () {
    const banners = document.querySelectorAll(".promo-banner");

    banners.forEach(banner => {
        const countdownEl = banner.querySelector(".countdown-timer");
        const endDate = new Date(banner.dataset.endDate + "T23:59:59").getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            let timeLeft = endDate - now;

            if (timeLeft > 0) {
                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
                countdownEl.innerText = `${days}j ${hours}h ${minutes}m ${seconds}s`;
            } else {
                countdownEl.innerText = "Offre expirée";
            }
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);

        // Easter egg : Animation étoiles sur clic
        let clickCount = 0;
        banner.addEventListener("click", () => {
            clickCount++;
            if (clickCount === 3) {
                const starContainer = document.createElement("div");
                starContainer.classList.add("twinkle-stars");

                for (let i = 0; i < 10; i++) {
                    const star = document.createElement("span");
                    star.style.top = `${Math.random() * 100}%`;
                    star.style.left = `${Math.random() * 100}%`;
                    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
                    starContainer.appendChild(star);
                }

                banner.appendChild(starContainer);

                setTimeout(() => {
                    banner.removeChild(starContainer);
                }, 3000);
            }
        });
    });
});