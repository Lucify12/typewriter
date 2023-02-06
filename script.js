const container = document.querySelector(".textdiv");
const phrases = ['Developer', 'Student', 'Enthusist'];
let e = []
let index = 0;
let charindex = 0;
const speed = 200;

console.log(phrases.length)

function typeWriter() {
    let char = phrases[index].charAt(charindex)

    // pushes the letter of the first index and increments by 1

    if (0 < phrases[index].length) {
        e.push(char)
        container.innerHTML = e.join('');
        charindex++;
        setTimeout(typeWriter, 250);
    }

    // increments the pharases index by one which will just keep going to the next word

    if (phrases[index].length === e.length) {
        charindex = 0;
        e = []
        index++;
    }

    // so that the array will loop

    if (index === phrases.length) {
        index = 0
    }
}

typeWriter();