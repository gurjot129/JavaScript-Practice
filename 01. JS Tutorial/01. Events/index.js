// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed!");
});


//changes text of paragraph
function changeText() {
    document.getElementById('Placeholder').innerHTML = "Button was successfully clicked!";
}