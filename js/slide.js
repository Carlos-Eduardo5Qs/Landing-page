const control = document.querySelectorAll('.control');
let currentItem = 0;
const item = document.querySelectorAll('.item');
const maxItem = item.length;

control.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left');
        
        if(isLeft) {
            currentItem -= 1;
        }else {
            currentItem += 1;
        }

        if(currentItem > maxItem) {
            currentItem = 0;
        }

        if(currentItem < 0) {
            currentItem = maxItem -1;
        }


        item[currentItem].scrollIntoView({
            inline:'center',
        });
    });
});


