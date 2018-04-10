# doctor-hr-frontend
constructor: Yi Zhao    4/10/2018  
This project is to help people to get the data from the docker via the browser. The goal for this project is to help students learn how to build browser simply and get to know how to use Material-UI et al.  

In this project, I built a browser to get heart rate data from the docker. Users should enter a valid email address to get the data. All the data under this email address will be presented in the table.  
### The initial state of the browser:  
![404 Not Found](https://github.com/yz398/doctor-hr-frontend/blob/master/initial.png)
### When users get data:  
![404 Not Found](https://github.com/yz398/doctor-hr-frontend/blob/master/test.png)  

## <font size = 5>__running the project__  
  
first
``` JavaScript
  npm install
``` 
next go to the virtual machine open the Mongodb because I install the docker in vm
``` Python
  ssh vcm@vcm-3551.vm.duke.edu
  ```  
  go into this folder
  ``` Python
  cd heart_rate_databases_introduction
  ```
  and then
  ``` Python
    sudo docker run -v $PWD/db:/data/db -p 27017:27017 mongo
  ```
  and the Mongodb is opened.  
  
Then go back to the repository you have the code for FLASK
``` Python
  cd ...
```  
and run the FLASK
 ``` Python
  FLASK_APP=pro1.py flask run
  ```  
  
 Last,
  ``` JavaScript
  npm run start
  ```
  then use the url: http://localhost:3000/, you can connect to the browser I built.
  
##  <font size = 6> Thank you so much
