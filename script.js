 // Task 1: get src and log it
    const img1 = document.getElementById("img1");
    console.log("src value: ", img1.getAttribute("src"));
 
    // Task 2: change image src on click
    const img2 = document.getElementById("img2");
    document.getElementById("changeImgBtn").addEventListener("click", function () {
      img2.setAttribute("src", "https://picsum.photos/id/30/200/120");
    });
 
    // Task 3: set placeholder
    document.getElementById("nameInput").setAttribute("placeholder", "Enter your name");
 
    // Task 4: remove disabled on click
    const disabledInput = document.getElementById("disabledInput");
    document.getElementById("enableBtn").addEventListener("click", function () {
      disabledInput.removeAttribute("disabled");
    });
 
    // Task 5: check if paragraph has class attribute (logs false)
    const para = document.getElementById("para");
    console.log("Paragraph has class:", para.hasAttribute("class"));
