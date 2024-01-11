const clearBody = () => {
  // Get the main element
  let mainElement = document.querySelector("main");

  if (mainElement) {
    // Remove all classes
    mainElement.className = "";

    // Remove all children
    while (mainElement.firstChild) {
      mainElement.removeChild(mainElement.firstChild);
    }
  } else {
    console.error("No <main> element found.");
  }
};

export default clearBody;
