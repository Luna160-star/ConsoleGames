let isPressButton = false;
let selectedBoxes = [];

const boxes = document.querySelectorAll('.gridbox td');

/*for looping*/
boxes.forEach(box =>{

    /*this action for when we are clicking on the boxes and zctually want it to be get selected*/
    box.addEventListener('mousedown', function(e) {
        isPressButton = true;
        clearSelection();
        startSelection(box);
    });

    /*this action is for dragging, like when the user selects and drags it*/
    box.addEventListener('mouseenter', function(e) {
        if (isPressButton) {
            startSelection(box);
        }
    });

    /*this action is mainly for when the user leaves the selected box*/
    box.addEventListener('mouseup', function(e) {
        isPressButton = false;
        checkSelection();
    });
});

function startSelection(box) {
    if (!selectedBoxes.includes(box)) {
        box.classList.add('select');
        selectedBoxes.push(box);
    }

}

function clearSelection() {
    selectedBoxes.forEach(box => box.classList.remove('select'));
    selectedBoxes = [];
}

function checkSelection() {

let word = selectedBoxes.map(box => box.textContent).join('');
let answerList = ['WATER', 'BAG', 'COMPASS', 'ROPE', 'FLASHLIGHT', 'TENT', 'MAP'] /*maybe i myself forgot something here, i will check it at the end*/

if (answerList.includes(word)) {

    selectedBoxes.forEach(box => {
    box.classList.remove('select');
    box.classList.add('highlight');
});

} else {
setTimeout(() => {
    clearSelection();
}, 100);
}}

document.body.onmousedown = () => false;