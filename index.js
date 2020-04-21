const whiteBlock = document.getElementById("dodger");

function moveDodgerLeft() {
    let leftNumbers = whiteBlock.style.left.replace("px","");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      whiteBlock.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  function moveDodgerRight(){
      let leftNumbers = whiteBlock.style.left.replace("px","");
      let left = parseInt(leftNumbers);

      if (left > 0){
          whiteBlock.style.left = `${left + 1}px`;
      } 
  }

  document.addEventListener("keydown", function(e){
      if (e.key === "ArrowRight"){
          moveDodgerRight();
      }
  })

