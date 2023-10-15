const sineWaveCanvs = document.getElementById("sineWave");
if (sineWaveCanvs) {
    const widthCanvas = sineWaveCanvs.width;
    const heightCanvas = sineWaveCanvs.height;
    const sineCtx = sineWaveCanvs.getContext('2d');
    sineCtx.beginPath();
    sineCtx.lineWidth = 5;
    sineCtx.strokeStyle = 'orange';
    sineCtx.moveTo(0, heightCanvas / 2);
    sineCtx.lineTo(widthCanvas, heightCanvas / 2);
    sineCtx.lineTo(widthCanvas - 10, heightCanvas / 2 - 10);
    sineCtx.moveTo(widthCanvas, heightCanvas / 2);
    sineCtx.lineTo(widthCanvas - 10, heightCanvas / 2 + 10);
    sineCtx.stroke();

    sineCtx.beginPath();
    sineCtx.strokeStyle = 'yellow';
    const start = { x: 0, y: heightCanvas / 2 };
    let k = 2;
    let end1 = { x: widthCanvas / 2.5, y: heightCanvas / 2 };
    let cp1 = { x: widthCanvas / (3 * k), y: - heightCanvas };
    let cp2 = { x: widthCanvas / (2 * k), y: 2 * heightCanvas };

    //drawing the first sine-wave
    sineCtx.moveTo(start.x, start.y);
    sineCtx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end1.x, end1.y);

    //drawing the second sine-wave
    cp1.x = end1.x + widthCanvas / (4.5 * k);
    cp2.x = end1.x + widthCanvas / (3 * k);
    cp1.y += 0.5 * heightCanvas;
    cp2.y -= 0.5 * heightCanvas;
    end1.x *= 1.7;
    sineCtx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end1.x, end1.y);

    //drawing the last sine-wave
    cp1.x = end1.x + widthCanvas / (6 * k);
    cp2.x = end1.x + widthCanvas / (4 * k);
    cp1.y += 0.25 * heightCanvas;
    cp2.y -= 0.25 * heightCanvas;
    end1.x *= 1.3;
    end1.y += heightCanvas / 10;
    sineCtx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end1.x, end1.y);

    sineCtx.stroke();

} else {
    // courseName = document.getElementById('courseName');
    // courseName.textContent += 'This browser doesn't support CANVAS';
}

const triangleCanvs = document.getElementById('triangle');
if (triangleCanvs) {
    const triCtx = triangleCanvs.getContext('2d');
    const widthCanvas = triangleCanvs.width;
    const heightCanvas = triangleCanvs.height;
    const pointA = { x: widthCanvas / 8, y: 0 };
    const pointB = { x: widthCanvas / 8, y: heightCanvas * 3 / 4 };
    const pointC = { x: widthCanvas, y: heightCanvas * 3 / 4 };

    triCtx.beginPath();
    triCtx.lineStyle = 'white';
    triCtx.moveTo(pointA.x, pointA.y);
    triCtx.lineTo(pointB.x, pointB.y);
    triCtx.lineTo(pointC.x, pointC.y);
    triCtx.closePath();
    triCtx.stroke();

    triCtx.font = '2rem Times New Roman';
    triCtx.fillText('a', widthCanvas * 0.03, heightCanvas / 3);
    triCtx.fillText('b', widthCanvas / 2, heightCanvas * 73 / 100);
    triCtx.fillText('c', 0.65 * widthCanvas, heightCanvas * 0.4);
    triCtx.fillText('c  = a  + b', widthCanvas * 0.25, heightCanvas * 0.95);

    triCtx.font = '1rem Times New Roman';
    triCtx.fillText('2', widthCanvas * 0.29, heightCanvas * 0.9);
    triCtx.fillText('2', widthCanvas * 0.43, heightCanvas * 0.9);
    triCtx.fillText('2', widthCanvas * 0.57, heightCanvas * 0.9);
} else {
    // courseName = document.getElementById('courseName');
    // courseName.textContent += 'This browser doesn't support CANVAS';
}

const circleCanv = document.getElementById('circle');
if (circleCanv) {
    const cirCtx = circleCanv.getContext('2d');
    const widthCanvas = circleCanv.width;
    const heightCanvas = circleCanv.height;
    cirCtx.fillStyle = 'aquamarine';
    cirCtx.lineStyle = 'aqua';
    cirCtx.beginPath();

    cirCtx.arc(widthCanvas / 2, heightCanvas / 2, widthCanvas / 2, 0, 2 * Math.PI);
    cirCtx.stroke();
    cirCtx.fill();
} else {
    // courseName = document.getElementById('courseName');
    // courseName.textContent += 'This browser doesn't support CANVAS';
}

// const subBtn = document.getElementById('subBtn');
// subBtn.onclick =
//     () => setTimeout(() => {
//         document.getElementById('type_inName').value = '';
//         window.location.reload();
//     }, 3000);
const courseDescription = document.querySelector('.courseDescription ul');
const delaySpeed = 50;
const conclusion = document.querySelector('#conclusion');
let description = ['Do you want to',
    'Understand Math thoroughly and deeply ?',
    'Excel in every single Math examination?',
    'Be the winner of Math contests ?'];
let characters = [];
description.forEach(line => {
    const listItem = document.createElement('li');
    courseDescription.appendChild(listItem);
    line.split('').forEach((character, index) => {
        const _inside = document.createElement('span');
        _inside.textContent = character;
        characters.push(_inside);
        listItem.appendChild(_inside);
    })
});
function revealOneChar(characters) {
    let cur = characters.splice(0, 1)[0];
    cur.classList.add('revealed');
    if (characters.length > 0) setTimeout(() => revealOneChar(characters), delaySpeed);
    else {
        conclusion.classList.add('revealed');
    }
}
setTimeout(() => revealOneChar(characters), 6300);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
})
const courseContent = document.querySelectorAll('.hidden');
courseContent.forEach(line => observer.observe(line));

const closeFormBtn = document.querySelector('#signUpForm span.close');
const signUpForm = document.querySelector('#signUpForm');
const buyBtn = document.querySelector('a.buy');
const leaveMessageBtn = document.querySelector('#contact ul li button');
const contactForm = document.querySelector('#contactForm');
const closeMessageBtn = document.querySelector('#contactForm span.close');
const logInBtn = document.querySelector('#logInBtn');
const logInForm = document.querySelector('#logInForm');
const closeLogIn = document.querySelector('#logInForm span.close');
buyBtn.addEventListener('click', () => {
    signUpForm.style.display = 'block';
})
closeFormBtn.addEventListener('click', () => {
    signUpForm.style.display = 'none';
})
leaveMessageBtn.addEventListener('click', () => {
    contactForm.style.display = 'block';
})
closeMessageBtn.addEventListener('click', () => {
    contactForm.style.display = 'none';
})
logInBtn.addEventListener('click', () => {
    logInForm.style.display = 'block';
})
closeLogIn.addEventListener('click', () => {
    logInForm.style.display = 'none';
})
window.onclick = (event) => {
    if (event.target == signUpForm)
        signUpForm.style.display = 'none';
    else if (event.target == contactForm)
        contactForm.style.display = 'none';
    else if (event.target == logInForm)
        logInForm.style.display = 'none';
}


