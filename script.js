console.log('Hello!');
const subContainersEl = document.querySelectorAll('.sub-container');
const prevBtnEl = document.querySelector('.prev-btn');
const nextBtnEl = document.querySelector('.next-btn');
let containers = [...subContainersEl];

// Set the 'left' property of each sub-container using its index
for(let i=0; i<containers.length; i++) {
    containers[i].style.left = `${i * 100}%`;
}

// Create a variable to hold the index based on the selected and initialiise with a value of zero
let counter = 0;

const forward = () => {
    counter += 1;
    if(counter > 1) {
        // counter = 0;
        counter = containers.length - 2;
    }
    return counter;
};

const backward = () => {
    counter -= 1;
    if(counter < 0) {
        // counter = 1;
        counter = containers.length - 1;
    }
    return counter;
}

nextBtnEl.addEventListener('click', function() {
    let updatedCounter = forward();
    for(let i=0; i < containers.length; i++) {
        if(i == updatedCounter) {
            containers[i].style.transform = `translateX(-${i * 100}%)`;
        } else {
            containers[i].style.transform = `translateX(-${updatedCounter * 100}%)`;
        }
    }
    // console.log(updatedCounter);
})

prevBtnEl.addEventListener('click', function() {
    let updatedCounter = backward();
    for(let i=0; i < containers.length; i++) {
        if(i == updatedCounter) {
            containers[i].style.transform = `translateX(-${i * 100}%)`;
        } else {
            containers[i].style.transform = `translateX(-${updatedCounter * 100}%)`;
        }
    }
    // console.log(updatedCounter);
})
