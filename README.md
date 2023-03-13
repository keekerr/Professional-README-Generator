# Professional Readme Generator

## Table of Contents

* [Description](#description)
* [Code Examples](#code-examples)
* [Important links](#important-links)
* [Languages Used](#languages-used)
* [Questions](#questions)

## Description

The purpose of this prject was to create a an application that generated a Readme file based on the users answer to several prompts about their project.


## Code Examples
Example of Code used to create the prompts for the generator:

```js
const questions = [
    {
        type: "input",
        name: "Project Title",
        message: "Enter a title for your Project",
    },
    {
        type: "input",
        name: "Project Description",
        message: "Enter a Description for your Project.",
    },
```
Example of Code used to create a readme file from the prompts.

```js
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  };       
```

## Important Links
[GitHub Repository](https://github.com/keekerr/Professional-README-Generator)

[Deployed Application](https://keekerr.github.io/Professional-README-Generator/)

[Video of Application in use](https://drive.google.com/file/d/1UYByASkRz2ctRR59WgdNet9uJxMhXNb5/view)

## Languages Used

![JavaScript Badge](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-yru0g__m2utbuabzKfGBlNLIe2ahblJbg&usqp=CAU&w=100&h=120)
## Questions

If you have any questions regarding this project, please feel free to contact me at this email: keeley.s.sprouse@gmail.com

Other examples of projects I have worked on can be viewed on Github via this link: [keekerr](https://github.com/keekerr)
