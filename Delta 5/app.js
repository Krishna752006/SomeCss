const box = document.getElementById("box");
const abc = document.getElementById("abc");

let color = ['red','green','yellow','blue'];
let wow = [];
let level = 0;
let i = 0;
let score = 0;
let pow = true;

box.addEventListener('click',(event)=>{
    if(event.target.id === 'box') return;
    
    let a = event.target;
    flash(a);

    setTimeout(() => {
        if(a.id === wow[i]) {
            i++;
            if(i === wow.length) {
                level++;
                score++;
                abc.innerText = `Level ${level}`;
                i = 0;
                next();
            }
        } else {
            document.querySelector('body').style.backgroundColor = 'red';
            setTimeout(() => {
                document.querySelector('body').style.backgroundColor = 'white';
            },100)
            abc.innerText = `Failed! Final Score = ${score}`;
            wow = [];
            level = 0;
            i = 0;
            score = 0;
            pow = true;
        }
    }, 100);
});

const next = () => {
    let a = Math.floor(Math.random() * 4);
    let c = color[a];
    wow.push(c);
    flash(document.getElementById(c));
};

const flash = (a) => {
    a.classList.add("flash");
    setTimeout(() => a.classList.remove("flash"), 100);
};

document.addEventListener('keypress', () => {
  if(pow) {
    pow = false;
    level = 1;
    wow = [];
    i = 0;
    score = 0;
    abc.innerText = `Level 1`;
    next();
  }
});
