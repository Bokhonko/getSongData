function getSongData(){
    const mus = []

    const srcs = document.querySelectorAll('.audio-player__wave')
    const names = document.querySelectorAll('.item-grid-card__title')
    for(let i=0; i<srcs.length; i++) {
        mus.push({
        name: names[i].innerText,
        src: srcs[i].childNodes[1].getAttribute('src') })
    } return mus
}