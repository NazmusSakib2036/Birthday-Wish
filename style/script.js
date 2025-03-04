        const btn = document.getElementById("crazyBtn");
        const sound = document.getElementById("funnySound");
        const headline = document.getElementById("headline");
        const leftImg = document.getElementById("leftImg");
        const rightImg = document.getElementById("rightImg");

        btn.addEventListener("click", () => {
            // Play sound
            sound.play();

            // Change text randomly
            const funnyTexts = ["😂 LOL!", "🤣 Hahaha!", "🤯 OMG!", "😵 Mind Blown!", "💃 Dance Party!"];
            headline.innerText = funnyTexts[Math.floor(Math.random() * funnyTexts.length)];

            // Show both images
            leftImg.style.display = "block";
            rightImg.style.display = "block";

            // Create falling emojis
            for (let i = 0; i < 10; i++) {
                let emoji = document.createElement("div");
                emoji.innerText = ["😂", "🤣", "🤪", "😆", "🥳", "🙃", "🎉", "💥", "🔥"][Math.floor(Math.random() * 9)];
                emoji.classList.add("emoji");
                emoji.style.left = Math.random() * window.innerWidth + "px";
                emoji.style.top = "-50px";
                document.body.appendChild(emoji);

                setTimeout(() => { emoji.remove(); }, 2000);
            }
        });
