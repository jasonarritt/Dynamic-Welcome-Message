const button = document.querySelector('button');
const output = document.querySelector('.output');

// output.setAttribute(
//   'style',
//   'color:white;width:200px;height:100px;text-align:center;'
// );

output.style.cssText =
  'color:white;width:200px;height:100px;text-align:center;';

function showOutput() {
  const date = new Date();
  console.log('button clicked');
  console.log(date.getHours());

  let currentHour = date.getHours();
  let message;

  //   currentHour = -5;
  console.log(currentHour);
  if (currentHour >= 17) {
    // Evening
    message = 'Good Evening!';
    output.style.backgroundColor = 'navy';
  } else if (currentHour >= 12) {
    // Afternoon
    message = 'Good Afternoon!';
    output.style.backgroundColor = 'orange';
  } else if (currentHour >= 0) {
    // Morning
    message = 'Good Morning!';
    output.style.backgroundColor = 'lightblue';
    console.log(output.style.backgroundColor);
  } else {
    message = 'Something Went Wrong';
    output.style.backgroundColor = 'red';
  }
  output.innerHTML = `<h3>Hello, ${message}</h3>`;
}

button.addEventListener('click', showOutput);
