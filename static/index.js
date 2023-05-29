// const parameters = [
//   "Parameter 1",
//   "Parameter 2",
//   "Parameter 3",
//   "Parameter 4",
//   "Parameter 5",
//   "Parameter 6",
//   "Parameter 7",
//   "Parameter 8",
//   "Parameter 9",
//   "Parameter 10",
//   "Parameter 11",
//   "Parameter 12",
//   "Parameter 13",
//   "Parameter 14",
//   "Parameter 15",
//   "Parameter 16",
//   "Parameter 17",
//   "Parameter 18",
//   "Parameter 19",
//   "Parameter 20",
//   "Parameter 21",
//   "Parameter 22",
//   "Parameter 23",
//   "Parameter 24",
//   "Parameter 25",
//   "Parameter 26",
//   "Parameter 27",
//   "Parameter 28",
//   "Parameter 29",
//   "Parameter 30",
//   "Parameter 31",
//   "Parameter 32",
//   "Parameter 33",
//   "Parameter 34",
//   "Parameter 35",
//   "Parameter 36",
//   "Parameter 37",
//   "Parameter 38",
//   "Parameter 39",
//   "Parameter 40",
// ];

// // Define a selectedParameters array to hold the selected parameters
// let selectedParameters = [];

// function renderParameters(query) {
//   // Clear the existing parameters in the box
//   document.getElementById("paramsBox").innerHTML = "";

//   // Filter the parameters based on the user's search query
//   const filteredParameters = parameters.filter((parameter) => {
//     return parameter.toLowerCase().includes(query.toLowerCase());
//   });

//   // Loop through the filtered parameters and display each parameter in a span element with the parameter class
//   for (let i = 0; i < filteredParameters.length; i++) {
//     const parameterElement = document.createElement("span");
//     parameterElement.classList.add("parameter");
//     parameterElement.textContent = filteredParameters[i];

//     // Add a click event listener to each parameter element to handle the selection
//     parameterElement.addEventListener("click", () => {
//       // Add the selected parameter to the selectedParameters array
//       selectedParameters.push(filteredParameters[i]);

//       // Call the renderSelectedParameters function to update the selectedParamsBox
//       renderSelectedParameters();
//     });

//     document.getElementById("paramsBox").appendChild(parameterElement);
//   }
// }

// // Define the renderSelectedParameters function to display the selected parameters in the selectedParamsBox
// function renderSelectedParameters() {
//   // Clear the existing selected parameters in the box
//   document.getElementById("selectedParamsBox").innerHTML = "";

//   // Loop through the selectedParameters array and display each selected parameter in a span element with the selectedParameter class
//   for (let i = 0; i < selectedParameters.length; i++) {
//     const selectedParameterElement = document.createElement("span");
//     selectedParameterElement.classList.add("selectedParameter");
//     selectedParameterElement.textContent = selectedParameters[i];

//     // Add a delete icon to the selectedParameterElement
//     const deleteIcon = document.createElement("i");
//     deleteIcon.classList.add("fas", "fa-times", "deleteIcon");

//     // Add a click event listener to the delete icon to handle the removal of the selected parameter
//     deleteIcon.addEventListener("click", () => {
//       // Remove the selected parameter from the selectedParameters array
//       selectedParameters.splice(i, 1);

//       // Call the renderSelectedParameters function to update the selectedParamsBox
//       renderSelectedParameters();
//     });

//     selectedParameterElement.appendChild(deleteIcon);
//     document
//       .getElementById("selectedParamsBox")
//       .appendChild(selectedParameterElement);
//   }
// }

// // Call the renderParameters function when the page loads to display all the parameters
// renderParameters("");

// // Add a keyup event listener to the search box to filter the parameters as the user types
// document.getElementById("searchBox").addEventListener("keyup", () => {
//   const query = document.getElementById("searchBox").value;
//   renderParameters(query);

//   // Get a reference to the form element
// const form = document.querySelector('form');

// // Add an event listener to the form's submit event
// form.addEventListener('submit', function(event) {
//   // Prevent the default form submission behavior
//   event.preventDefault();

//   // Get the selected parameters
//   const selectedParameters = document.querySelectorAll('.selected-params-list li');

//   // Convert the selected parameters to an array of objects
//   const paramsArray = Array.from(selectedParameters).map(function(param) {
//     return {
//       name: param.dataset.name,
//       value: param.dataset.value
//     };
//   });

//   // Create a new XMLHttpRequest object
//   const xhr = new XMLHttpRequest();

//   // Set the HTTP method and URL
//   xhr.open('POST', '/submit-params');

//   // Set the request headers
//   xhr.setRequestHeader('Content-Type', 'application/json');

//   // Set the response type
//   xhr.responseType = 'json';

//   // Define the callback function for when the response is received
//   xhr.onload = function() {
//     if (xhr.status === 200) {
//       // Handle the successful response
//       console.log(xhr.response);
//     } else {
//       // Handle the error response
//       console.error('Error: ' + xhr.status);
//     }
//   };

//   // Send the request with the selected parameters as JSON
//   xhr.send(JSON.stringify(paramsArray));
// });

// });
