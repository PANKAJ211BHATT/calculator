document.addEventListener("DOMContentLoaded", function () {
    const displayInput = document.getElementById("displayInput");
  
    displayInput.addEventListener("input", function () {
      
      displayInput.scrollLeft = displayInput.scrollWidth;
    });
  });
  