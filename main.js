const jatekter = document.getElementById("game");

const ctx = jatekter.getContext("2d");

const menedzser = new GameManager();
setInterval(() => {
    menedzser.gameloop(ctx);
}, 1000 / 60);

document.body.addEventListener("keydown", (e) => {
    menedzser.settingKeyPressed(e.key);
});

document.body.addEventListener("keyup", (e) => {
    menedzser.settingKeyPressed(undefined)
});