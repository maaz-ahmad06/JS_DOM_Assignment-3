 // Task 1: get src and log it
    const img1 = document.getElementById("img1");
    console.log("src value: ", img1.getAttribute("src"));
 
    // Task 2: change image src on click
    const img2 = document.getElementById("img2");
    document.getElementById("changeImgBtn").addEventListener("click", function () {
      img2.setAttribute("src", "https://picsum.photos/id/30/200/120");
    });
