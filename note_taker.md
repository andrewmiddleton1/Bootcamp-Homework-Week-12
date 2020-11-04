
# README for Note_Taker
          
## Description 
              
This application is used to write, save, and delete notes. This application uses an express backend and save and retrieve note data from a JSON file.
        
## Table of Contents
* Title
* Description
* Installation
* Useage
* License
* Contributing
* Tests
* Questions

    
## Installation
To install this application, the user runs the “server.js” file in Node. Running the server file will establish the listener on port 3000 and requires a number of dependencies: express and fs, along with the two route files which establish links to the HTML and to the API (Javascripts) front end files. For the API, the “apiroutes” file links the server to the “index.js” file, which provides the front end functions necessary for the app to work. User input is saved to a file, db.json, and is retrieved from that file, which essentially acts as the database. The app has been deployed on Heroku. 

## Usage 
The server.js file, when running in node, links the front end and the back end. It requires the packages mentioned above, allowing the Express package to create the routes to the front end (API and HTML) and the back-end (the db.json file). Once the server is running, the user can input notes, save those notes, and retrieve the saves notes next time they use the application. Each individual note is allocated a unique ID by making the ID equal to date.now() - this is particularly important for the delete function. Those functions are contained within the "apiroutes.js" file. Step by step instructions are found in the following Screencastify video.



## Credits
This was a solo project, however the project relied heavily on Node JS and the packages mentioned above. Additionally, sought advice from the Ask BCS instructors a number of times and would like to thank Renato for his assistance during our Sunday night tutoring sessions.

## License
MIT

## Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributing
Should others wish to contribute to this application, I thank them for their interest and request that they use the standards from at the Contributor Covenant. 
Note: the [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard

## Tests
There were no tests developed for this application.

## Questions
Please direct questions to Please direct questions to Andrewmiddleton1, https://github.com/andrewmiddleton1
