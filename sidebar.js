// Variables and Constants
const collapse_src = "images/Collapse.png";
const expand_src = "images/Expand.png";

const sidebarColor = "#f3f3f3";

let canCollapse = true;

const button = document.getElementById("image-button");
const image = document.getElementById("image");
const sidebar = document.getElementById("side-bar");
const collapsableObjects = document.querySelectorAll(".to-be-hidden");
const div = document.getElementById('the-div');

// Functions
function HandleCollapseAndExpand(image) {
    const sidebar = document.getElementById('side-bar');
    const button = document.getElementById('image-button');
    
    if (canCollapse === true) {

        // Collapsed CLOSED
        canCollapse = false;

        collapsableObjects.forEach((object) => {
            object.classList.remove('visible');
            object.classList.add('hidden');
        })
        sidebar.style.backgroundColor = "inherit";

        div.classList.remove('visible-button');
        div.classList.add('hidden-button');


        image.src = expand_src;

    } else {
        // Expanded OPEN

        collapsableObjects.forEach((object) => {
            console.log(object);

            object.classList.remove('hidden');
            object.classList.add('visible');
        })
        sidebar.style.backgroundColor = sidebarColor;

        div.classList.remove('hidden-button');
        div.classList.add('visible-button');

        canCollapse = true;
        image.src = collapse_src;

        // Button visibility can be adjusted if needed
        button.style.opacity = 1;
    }
}

button.addEventListener("click", (event) => {
    HandleCollapseAndExpand(image);
})