const box = document.getElementById("box");
let color = ['red','green','yellow','blue'];
let wow = [];
let i = 0,score = 0, k = 0;

const abc = document.getElementById('abc');

box.addEventListener('click',(event)=>{
    if(event.target.id !== 'box')
    {
        let a = event.target;
        a.style.backgroundColor = 'transparent';
        setTimeout(() => {
            a.style.backgroundColor = '';
        }, 100);
        setTimeout(() => {
            if(a.id === wow[k] && k === i-1)
            {
                abc.innerText = `Level ${++i}`;
                k = 0;
                score++;
                n();
            }
            else if(a.id === wow[k] && k !== i) k++;
            else
            {
                abc.innerText = `Failed! Final Score = ${score}`;
                box.style.pointerEvents = "none";
            }
        }, 100);
    }
})

const n = () => {
    let a = Math.floor(Math.random() * 4);
    let b = color[a];
    wow.push(b);
    const c = document.getElementById(b);
    c.style.backgroundColor = 'transparent';
    setTimeout(() => {
        c.style.backgroundColor = '';
    }, 100);
};

document.addEventListener('keydown', (event) => {
  abc.innerText = `Level 1`;
  i = 1;
  wow = [];
  k = 0;
  score = 0;
  n();
},{once: true});
