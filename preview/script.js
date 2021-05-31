const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

let i = 0;

const deletElement = (e) => {
    console.log(e.target);
    console.log(e.type);   
};

// btn.addEventListener('click', deletElement);
// overlay.addEventListener('click', deletElement);

btns.forEach(btn => {
    btn.addEventListener('click', deletElement, {once: true});
});

const link = document.querySelector('a');
link.addEventListener('click', function(event) {
    event.preventDefault();
    
    console.log(event.target);
});