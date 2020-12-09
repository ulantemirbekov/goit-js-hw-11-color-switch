const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyRef = document.querySelector('body');
const startRef = document.querySelector('[data-action="start"]');
const stopRef = document.querySelector('[data-action="stop"]');

let timerId;

function colorSwitcher() {
    timerId = setInterval(() => {
        bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
        startRef.disabled = true;
        stopRef.disabled = false;
    }, 1000);
};

startRef.addEventListener('click', colorSwitcher);
stopRef.addEventListener('click', () => {
    clearInterval(timerId);
    startRef.disabled = false;
    stopRef.disabled = true;
});


