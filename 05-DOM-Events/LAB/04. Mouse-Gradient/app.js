function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMouseMove);
    const output = document.getElementById('result');

    function onMouseMove(ev) {
        const box = ev.target;
        const offset = Math.floor(ev.offsetX / box.clientWidth * 100);

        output.textContent = `${offset}%`
    }
}