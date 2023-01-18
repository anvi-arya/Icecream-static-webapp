import datarr from "./data.json";
const api_url = "https://employeedetails.free.beeceptor.com/my/api/path";

// Defining async function
async function getapi(api_url) {
  // Storing response
  const response = await fetch(api_url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
}
//
const keys = datarr.map((obj) => obj.name); //[]
