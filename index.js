const containerOne = document.querySelector(".container-one");
const containerTwo = document.querySelector(".container-two");

//Save a copy of elements in container one
const childrenOfOne = [...containerOne.children]

//dragstart handler function
function handleDragstart(event){
    
    event.dataTransfer.setData("application/item", event.target.id);
    event.dataTransfer.effectAllowed = "move";
    event.target.classList.add("dragging"); //Style the element being dragged
}

//dragover handler function
function handleDragover(event){

    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
}

//drop handler function
function handleDrop(event){

    event.preventDefault();

    const item = event.dataTransfer.getData("application/item");
    event.target.appendChild(document.getElementById(item));
    containerTwo.classList.add("dropped"); //Update container two UI to indicate drop event
}

function handleDragend(event){
    event.target.classList.remove("dragging"); //Remove the style of dragging element as it is dropped
}

function handleReset(){
    
    if(containerTwo.hasChildNodes()){

        //Remove all child nodes from container two
        while(containerTwo.hasChildNodes()){
            containerTwo.removeChild(containerTwo.firstChild);
        }

        containerOne.replaceChildren(...childrenOfOne); // Replace the children in container one with original elements
        containerTwo.classList.remove("dropped"); //reset style of container two

    } else {
        return
    }
}