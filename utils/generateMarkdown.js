// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// add an if statement to this function
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// add an if statem,emt to this function
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// add an if statement to this function
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// complete this function
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  
 `; 
}

module.exports = generateMarkdown;
