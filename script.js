window.addEventListener('keydown', playHandler);
function playHandler(e) {
    //playMusic
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
    //dom Style
    const dom = document.querySelector(`div[data-key='${e.keyCode}']`);
    if (dom) {
        dom.classList.add('playing');
    }
    //每個key做完動畫可以remove class，要監聽全部key上的動畫
    document.querySelectorAll('.key').forEach(function (key) {
        key.addEventListener('transitionend', transitionendHandler);
    });
    function transitionendHandler(e) {
        if (e.propertyName === 'transform') {
            e.currentTarget.classList.remove('playing');
        }
    }
}
