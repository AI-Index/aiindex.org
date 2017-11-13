scrollTo = function(elem, event) {
    event.preventDefault();

    var elemTargetId = elem.href.substr(elem.href.indexOf('#'));
    console.log(elemTargetId);
    document.querySelector(elemTargetId).scrollIntoView({
        behavior: 'smooth'
    });
};

// JS for Report Description
desc_text = {
    "volume": "The Volume of Activity measures capture the “how much” aspects: attendance in AI conferences, venture capital investments in AI companies, and so on.",
    "performance": "The Technical Performance measures capture the “how good” aspects; for example, how well machine learning techniques help computers understand images or how quickly SAT solvers are able to solve practical problem instances.",
    "derivative": "We show a few exploratory measures that combine some of the raw measures. First we present the AI Vibrancy Index, which tracks and aggregates trends across academia, industry, and general media. We also display the AI Workforce Preparedness Index, which relates AI training volumes to industry demand.",
    "human-level": "In the Towards Human-Level Performance section we outline a short list of notable areas where AI systems have matched or exceeded human performance in some capacity. We also discuss the difficulties of such comparisons and introduce appropriate caveats."
};
function desc_click(elem, event) {
    // Get container of buttons
    buttonContainer = document.getElementById("report-items-list")

     // Set font weight of all elements in item list container to normal 
    var buttons = buttonContainer.children;
    for (var i = 0; i < buttons.length; i++) {
      var item = buttons[i];
      item.style.fontWeight = "normal";
    }
    // Set selected element to bold
    elem.style.fontWeight = "bold";

    // Set description container content
    descContainer = document.getElementById("report-desc");
    descContainer.innerHTML = desc_text[elem.id];
}