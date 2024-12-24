// ScrollReveal animation for the element with class "home-text"
// The animation will trigger when the element comes into view
ScrollReveal().reveal(".home-text", {
    delay: 300,               // Delay before the animation starts (in ms)
    origin: "top",            // The animation will start from the top
    distance: "50px",         // The distance the element will move during the animation
    duration: 1000,           // Duration of the animation (in ms)
    easing: "ease-in-out"     // Easing function for the animation
});

// Function to animate text by revealing one character at a time
// elementId: The ID of the element whose text will be animated
// speed: The speed at which each character appears (in ms)
function animateText(elementId, speed){
    const element = document.getElementById(elementId);  // Get the element by ID
    const text = element.innerHTML;  // Store the original text inside the element
    element.innerHTML = "";         // Clear the element’s content
    let i = 0;  // Index for the current character to display

    // Set an interval to add one character at a time from the original text
    const interval = setInterval(function() {
        element.innerHTML += text.charAt(i);  // Add the next character to the element
        i++;  // Increment the index
    }, speed);  // Repeat the process every 'speed' milliseconds
}

// When the page is fully loaded, start animating the text with ID "text"
onload = function() {
    animateText("text", 50);  // Call the animateText function with speed of 50ms
}
