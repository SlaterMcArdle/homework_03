# homework_03
UCSD Web Development Bootcamp Homework #3
The goal of this homework was a follows: 
    Use the starter code and add random password generation functionality via javascript. There was already some javascript included. Our job was to prompt the user with some options for their desired password, generate the password, and display the password in a usable format. 

The acceptance criteria were as follows:
    1. Generate a series of password criteria prompts when the password generte button is clicked. I acheived this usign a combination of prompt and confirm boxes.
    2. Allow the user to select what criteria to include in the password via prompts. I accomplished this using a series of concurrent prompts
    3. Allow the user to choose a password length between 8 and 128 characters. I acheived this using a prompt and including a while loop to check if the input was within range. If not, the prompt would keep appearing until it was either exited out of or a number within range was input. 
    3. Once the user chooses an appropriate number of characters, they should be allowed to select the types of characters they want in their password (lowercase, uppercase, numeric, and special). A check must be included to determine that they've selected at least one character type. I acheived this using a series of confirms, one for each character type. I included an if statement to check that at least one type is selected. If not, the generator exits. 
    4. When all of the conditions are met, generate the password. I took all of the acceptable criteria and concatonated them into a single string. I then used a for loop and a random number generator to select a random character from the string to add to the password. 
    5. The generated password is displayed in an alert or written to the page. I elected to write it to into the textbox included in the page.

See a live version of the site here: https://windwalker-92.github.io/homework_03/
See below for screenshots of the working webpage.

The initial prompt appears as follows asking the user for a number of characters.
![ScreenShot](./assets/screenshot_01.png)

If the user enters an invalid character count, a new prompt appears.
![ScreenShot](./assets/screenshot_02.png)

If the user cancels out of either of the first two prompts, a cancelled alert appears.
![ScreenShot](./assets/screenshot_03.png)

The password textbox also displays 'No Password Generated'
![ScreenShot](./assets/screenshot_04.png)

If they successfully input a valid character count, a confirm appears asking if they want to include lowercase characters.
![ScreenShot](./assets/screenshot_05.png)

At this point they must navigate through all of the confirms in order to proceed or exit. The next confirm asks about uppercase characters.
![ScreenShot](./assets/screenshot_06.png)

The next asks about numeric characters, and the last asks about special characters.
![ScreenShot](./assets/screenshot_07.png)
![ScreenShot](./assets/screenshot_08.png)

If they haven't selected any valid options for characters, the password generated cancelled alert appears as above and the 'No Password Generated' appears in teh textbox.

If they've selected at least one valid option, a randomly generated password appears in the textbox.
![ScreenShot](./assets/screenshot_09.png)