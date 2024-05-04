// var colors = document.querySelector("#color")


// function pink(){
//     colors = this.style.backgroundColor = pink 
// }




var count = 0;
var countDisplay = document.getElementById('count');

function updateCount() {
  countDisplay.textContent = count;
}

function increaseCount() {
  count++;
  updateCount();
}



    function decreaseCount() {
        if(count > 0) {
            count--;
            updateCount();
        }
       
      }



// function resetCount() {
//   count = 0;
//   updateCount();
// }



function changebackgroundcolor(colorname){
    document.body.style.backgroundColor = colorname
}


