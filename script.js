document.getElementById("enter-btn").addEventListener("click", function() {
    this.innerText = "Loading...";
    this.disabled = true;

    // Start music
    let music = document.getElementById("bg-music");
    music.play().catch(error => console.log("Autoplay blocked"));

    setTimeout(() => {
        window.location.href = "main.html"; // Redirect to the main page (to be created)
    }, 2000);
});
body {
    background-color: #121212;
    color: white;
    text
