const jatekter = document.getElementById("game");

const ctx = jatekter.getContext("2d");

const menedzser = new GameManager();
setInterval(() => {
    menedzser.gameloop(ctx);
}, 1000 / 60);