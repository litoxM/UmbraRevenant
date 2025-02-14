document.addEventListener("DOMContentLoaded", function() {
    let bgMusic = document.getElementById("bg-music");
    let scythe = document.getElementById("scythe");
    let secretButton = document.getElementById("secret-button");

    // Play music after a few seconds
    setTimeout(() => {
        bgMusic.play();
    }, 2000);

    // Show Scythe after Mist Fades
    setTimeout(() => {
        scythe.style.opacity = "1";
    }, 5000);

    // Reveal Secret Button when Scythe is Clicked
    scythe.addEventListener("click", function() {
        secretButton.style.display = "block";
    });
});
