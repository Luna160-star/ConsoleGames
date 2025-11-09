let pressedButton = false;
let selectedBoxes = [];

const boxes = document.querySelectorAll('.gridbox td')

/*for looping*/
boxes.forEach(box =>{

    /*this action for when we are clicking on the boxes and zctually want it to be get selected*/
    box.addEventListener('mousedown', function(e) {
        ispressedButton = true;
        clearSelection();
        startSelection(box);
    })

    /*this action is for dragging, like when the user selects and drags it*/
    box.addEventListener('mouseenter', function(e){
        if (pressedButton) {
            startSelection(box);
        }
    })

    /*this action is mainly for when the user leaves the selected box*/
    box.addEventListener('mouselift', function(e){
        ispressedButton = false;
        checkSelection();
    })
})

function startSelection(box) {
    if (!selectedBoxes.includes((box)){
        box.classList.add('select');
        selectedBoxes.push(box);
    })

}

 let word = selectedBoxes.map(box => box.textContent).join('');

 let answer = ['WATER', 'BAG', 'COMPASS', 'ROPE', 'FLASHLIGHT'] /*maybe i myself forgot something here, i will check it at the end*/