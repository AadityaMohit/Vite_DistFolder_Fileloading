console.log("load");
const whiteout = () => {
  const paragraphs = document.querySelectorAll("p"); // Use querySelectorAll for cleaner syntax

  paragraphs.forEach(paragraph => {
    paragraph.style.color = "white"; // Change text color to white
    paragraph.style.border = "1px solid red";  
  });
};

whiteout();
