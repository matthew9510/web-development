### Links:
- [Learn how to install nodejs ](https://nodejs.org/en/download/package-manager/)

    
    sudo apt-get install nodejs-legacy
    mkdir directoryName
    cd directoryName
    npm init // initializes the project, answer questions about package
    npm install packagename -g // to be able to execute it globally from any directory in the computer in the terminal  
    npm uninstall package name
   
 if we have a project and transfer it to somewhereelse the node module folder iusn ot the r it is in the .git ignor file 
        
       
    npm install packagename --save or -s // install a package into the .json file as a dependency, if we want to use this project later on somewhere else we have to save it in the ..json file  
    npm install // if you have dependencies in the projects .json file you can run
    npm uninstall bootstrap -s // removes the package from the .json file 
    npm uninstall 
    npm install 
    
        
In .json file 
    
    "dependecies": {
     "bootstrap": "*" //latest version 
    }


 


### Example of global packages 

    sudo npm install packagename -g 
    packageName -v
    packageName new test // test is the name of the packageName application 
    cd test/
    
This part varies 

    sails lift //loads it in the browser at http://localhost:1337

In breowser type in http://localhost:1337 // to see the application 

learned how to install global dependencies for node and we created an application with that a global dependency and we started the server with sails lift  
    
   
   
### How to run Javascript in the terminal 
     node 
     > console.log("Hello world!");
     hello world!
     >^C
     
     mkdir test
     cd test
     touuch test.js 
     vim test.js //check out the test.js file in the folder
     node test.js
     
   
### Create a development server with Node.js
    mkdir test
    cd test
    touch test.js
   
 I received [this error](https://stackoverflow.com/questions/20136714/how-can-i-fix-webstorm-warning-unresolved-function-or-method-for-require-fi)
 
   
 
[ server.listen('8000'); ] tells the server to listen to the local host port

     node development_server.js

There is something working 
      
  
 