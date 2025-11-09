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

})
