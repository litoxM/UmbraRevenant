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
    text-align: center;
    font-family: 'Arial', sans-serif;
    transition: background-color 0.5s ease;
}

#mist {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('mist.gif') no-repeat center center;
    background-size: cover;
    opacity: 1;
    transition: opacity 3s ease-in-out;
}

#secret-message {
    font-size: 24px;
    font-weight: bold;
    opacity: 0;
    transition: opacity 2s ease-in-out;
    margin-top: 50px;
}

#scythe {
    width: 120px;
    height: 120px;
    background: url('scythe.png') no-repeat center center;
    background-size: contain;
    display: inline-block;
    cursor: pointer;
    margin-top: 50px;
}

.glow {
    filter: drop-shadow(0px 0px 10px red);
        }
