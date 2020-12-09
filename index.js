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
const finishRef = document.querySelector('[data-action="stop"]');

let timerId;

function colorSwitcher() {
    timerId = setInterval(() => {
        bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
        startRef.disabled = true;
        finishRef.disabled = false;
    }, 1000);
};

startRef.addEventListener('click', colorSwitcher);
finishRef.addEventListener('click', () => {
    clearInterval(timerId);
    startRef.disabled = false;
    finishRef.disabled = true;
});


