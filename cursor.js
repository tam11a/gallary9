const cursor = document.querySelector('.cursor');
const cursord = document.querySelector('.cursor-d');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;");
    cursord.setAttribute("style", "top: "+(e.pageY - 5)+"px; left: "+(e.pageX - 5)+"px;");
})

document.addEventListener('click', () => {
    notify();
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})


function playSound(url) {
    const audio = new Audio(url);
    audio.volume = 0.1;
    audio.play();
}


function notify(){
    //playSound("/audios/notification.mp3");
    playSound("https://www.fesliyanstudios.com/play-mp3/295");
}
