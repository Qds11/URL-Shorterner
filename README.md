# URL-Shorterner
Software Engineer : GoWhere Internship Assessment

## Introduction
This web app is for an internship assigment which shortens your url input. Do note that if your url is already short, it won't shorten it further.

## Requirement
Have mysql installed.

## Installation/ Running of web app
1) Download Files
2) Run ```setup.sql``` in your mysql workbench/ terminal
3) Change ```.env.development.local``` environment variables if yours differs
4) ```npm i``` in root folder to install node_modules 
6) ```npm run dev``` in root folder to run app
7) Open http://localhost:3000 in browser (chrome preferable)

## Web App Flow

1) Upon loading the web app
![image](https://user-images.githubusercontent.com/101784318/224400296-a580a4d6-3989-46c9-8b27-0e38b4d22773.png)


2) Users can filter data displayed according to date range using the 2 date type inputs.
<img width="630" alt="filtered" src="https://user-images.githubusercontent.com/101784318/205484349-06011081-0ff3-4807-8e31-761179f3c7fa.PNG">


   Both dates must be inputted and end date must be later than start date or else there will be an error message
   
<img width="233" alt="empty" src="https://user-images.githubusercontent.com/101784318/205483984-4eb6debc-0c33-4921-8330-eb2b1d5a6213.PNG">
<img width="575" alt="error" src="https://user-images.githubusercontent.com/101784318/205484008-f6429dc9-2f7d-4388-b032-9de8b4c39288.PNG">
