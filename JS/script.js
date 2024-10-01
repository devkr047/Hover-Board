const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const BOX = 500

for (var i = 0; i < BOX; i++) {

    const box = document.createElement('div')
    box.classList.add('box')
    container.appendChild(box);
    box.addEventListener('mouseover', function () {
        addColor(box);
    })
    box.addEventListener('mouseout', function () {
        remColor(box);
    })
}

function addColor(element) {
    const color = randomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function remColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000'
}

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
} 