const container = document.querySelector(".textdiv");
const phrases = ['Developer', 'Student', 'Enthusist'];
let e = []
let index = 0;
let charindex = 0;
const speed = 200;

function typeWriter() {
    let char = phrases[index].charAt(charindex)
    if (0 < phrases[index].length) {
        e.push(char)
        container.innerHTML = e.join('');
        charindex++;
        setTimeout(typeWriter, 200);
    }

    if (phrases[index].length === e.length) {
        charindex = 0;
        e.shift();
        index++;
    }
}

typeWriter();