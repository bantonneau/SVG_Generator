# SVG Generator

 [![License Badge](https://img.shields.io/badge/License-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)

## Description

This project allows you to generate a customized logo in SVG format based on user input. The logo can be in the shape of a circle, square, or triangle, and it includes a text element with up to 3 characters. The user can specify the text content, text color, shape color, and shape type through a command-line interface.

## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [Customization](#customization)
  - [Testing](#testing)
  - [Questions](#questions)
  - [Credits](#credits)
  - [License](#license)

## Installation

1. Clone the repository or download the project files.
2. Open a terminal or command prompt and navigate to the project directory.
3. Install the project dependencies by running the following command:

```bash
npm install
```

## Usage

<img width="506" alt="image" src="https://github.com/bantonneau/SVG_Generator/assets/109747300/d6402fea-9c3b-4272-8535-03e9f0644699">

(Video Tutorial)[https://drive.google.com/file/d/1uUsoGougYiMxQkpWNQ4dXA3ju2KrQ7De/view]

To generate a logo, follow these steps:

1. Open a terminal or command prompt and navigate to the project directory.
2. Run the following command:

```bash
node index.js
```

3. The command-line interface will prompt you with several questions:

   - Enter the text you want in your shape (up to 3 characters).
   - Specify the color of the text.
   - Choose the shape for your logo (circle, square, or triangle).
   - Specify the color of the shape.

4. After providing all the required information, the program will generate an SVG file named "logo.svg" in the project directory.

## Project Structure

The project consists of the following files:

- `index.js`: This file contains the main logic of the program. It uses the `inquirer` package to prompt the user with questions and generate the logo based on the user's input.
- `lib/shapes.js`: This file defines the `Shape` class and its derived classes (`Triangle`, `Circle`, and `Square`). Each derived class implements the `render` method to generate the SVG code for the specific shape.
- `shapes.test.js`: This file contains unit tests for the shape classes. It uses the `jest` testing framework to ensure that the shapes are rendered correctly.

## Customization

You can customize the appearance of the shapes by modifying the `render` method in the respective shape classes (`Triangle`, `Circle`, and `Square`). Each shape class defines its own rendering logic using SVG syntax.

Additionally, you can modify the `getTextSVG` method in the `Shape` class to change the appearance of the text element in the logo.

## Testing

The project includes unit tests to verify the correctness of the shape classes. To run the tests, open a terminal or command prompt and navigate to the project directory. Then, run the following command:

```bash
npm test
```

The tests use the `jest` framework and are defined in the `shapes.test.js` file. They ensure that each shape class renders the correct SVG code based on the specified color.

## Questions

If you have any questions or issues, feel free to reach out to me via one of the following channels:

Email: [benantonn@gmail.com](mailto:benantonn@gmail.com)

GitHub: [@bantonneau](https://github.com/bantonneau)

## Credits

This project was developed by Ben Antonneau. The project builds upon several open-source libraries and frameworks:

- [inquirer](https://www.npmjs.com/package/inquirer): A powerful library for creating interactive command-line interfaces in Node.js.

- [Jest](https://jestjs.io/): A delightful JavaScript testing framework that allows you to write and run tests with ease.

- [Node.js](https://nodejs.org/): A JavaScript runtime environment that provides the necessary tools and capabilities to build and run server-side applications.

Special thanks to the contributors of the open-source libraries and frameworks that were used in this project for their valuable work.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for personal or commercial purposes.
