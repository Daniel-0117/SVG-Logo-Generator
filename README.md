# SVG-Logo-Generator


## Description

This project was built as a means for web developers to create simple logos for clients and projects without having pay a third party. It makes use of inquirer to ask the user questions on how they wish their logo to look like. 

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Technologies](#Technologies)

## Installation
--Clone the Repo: git@github.com:Daniel-0117/SVG-Logo-Generator.git

--Open terminal in VScode, install node.js

--Then type npm init -y to create a package.json

--All thats left is to install inquirer and jest by typing npm i inquirer@8.2.4 and npm i jest. 

--Now run the application through the terminal by typing node index. 

## Usage

To use this application the user must fisrt perform the installation process above. Then answer the prompt questions that appear within the terminal. The logo will generate in a file called logo.svg located between the license and package-lock.json. 

Picture of the prompt
![Picture of terminal with the prompt](./Images/SVG%20Terminal.png)

Picture of the SVG files location when it generates
![Image with the location of the SVG file](./Images/File%20Location.png)

Picture of the final product
![Picture of the file created containg the svg](./Images/SVG%20File.png)

-Video
https://drive.google.com/file/d/1zXzt8HBQtrNwW-_Lr97NsZQy4TM8MqRE/view

## Credits

Daniel Pacheco: https://github.com/Daniel-0117

## License

MIT License

Copyright (c) 2023 Daniel 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



## Acceptance Criteria


GIVEN a command-line application that accepts user input<br>
WHEN I am prompted for text<br>
THEN I can enter up to three characters<br>
WHEN I am prompted for the text color<br>
THEN I can enter a color keyword (OR a hexadecimal number)<br>
WHEN I am prompted for a shape<br>
THEN I am presented with a list of shapes to choose from: circle, triangle, and square<br>
WHEN I am prompted for the shape's color<br>
THEN I can enter a color keyword (OR a hexadecimal number)<br>
WHEN I have entered input for all the prompts<br>
THEN an SVG file is created named `logo.svg`<br>
AND the output text "Generated logo.svg" is printed in the command line<br>
WHEN I open the `logo.svg` file in a browser<br>
THEN I am shown a 300x200 pixel image that matches the criteria I entered<br>