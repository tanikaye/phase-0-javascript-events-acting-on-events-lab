

// // Your code here
// // document.addEventListener("keydown", function (event) {
// //   console.log(event);
// // });

// const dodger = document.getElementById("dodger");

// function moveDodgerLeft() {
//   const leftNumbers = dodger.style.left.replace("px", "");
//   const left = parseInt(leftNumbers, 10);

//   if (left > 0) {
//     dodger.style.left = `${left - 1}px`;
//   }
// }

// document.addEventListener("keydown", function (e) {
//   if (e.key === "ArrowLeft") {
//     moveDodgerLeft();
//   }
//   if (e.key === "ArrowRight") {
//     moveDodgerRight();
//   }
// });


// function moveDodgerRight() {
//   const leftNumbers = dodger.style.left.replace("px", "");
//   const left = parseInt(leftNumbers, 10);

//   if (left < 360) {
//     dodger.style.left = `${left + 1}px`;
//   }
// }

// document.addEventListener("keydown", function (e) {
//   if (e.key === "ArrowRight") {
//     moveDodgerRight();
//   }
// });

const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = '#FF69B4';
// dodger.style.bottom = "100px";
// dodger.style.left = "0px";

document.addEventListener("keydown", function (event) {
  console.log(event);
});


function moveDodgerLeft() {
  console.log('im here #1')
  document.addEventListener("keydown", function (event) {
    // if (event.key === "ArrowLeft") {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);

      if(left > 0) {
        dodger.style.left = `${left - 1}px`;
      // }
    }
  });
}
console.log('im here #2')

moveDodgerLeft()


function moveDodgerRight() {
  console.log('im here #3')

document.addEventListener("keydown", e => {
  if(e.key === "ArrowRight") {
    console.log('hellooooooo')
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if(left < 360) {
      console.log('is this working')
      dodger.style.left = `${left + 1}px`;
      console.log(left)
    }
  }

})
}
console.log('im here #4')


moveDodgerRight()

// function moveDodgerRight() {
//     console.log('im here #3')

//   document.addEventListener("keydown", e => {
//     if(e.key === "ArrowRight") {
//       const leftNumbers = dodger.style.left.replace("px", "");
//       const left = parseInt(leftNumbers, 10);

//       if(left < 360) {
//         dodger.style.left = `${left + 1}px`;
//         console.log(dodger.style.left)
//       }
//     }

//   })
//   }
//   console.log('im here #4')


//   moveDodgerRight()