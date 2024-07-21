# URL-Shorterner

## Introduction
This is a URL shorterner web app which shortens your url input. Do note that if your url is already short, it won't shorten it further.

## Requirement
Have mysql installed.

## Installation/ Running of web app
1) Clone this repository
2) Run ```setup.sql``` in your mysql workbench/ terminal
3) Change ```.env.local``` environment variables if yours differs
4) ```npm i``` in root folder to install node_modules 
6) ```npm run dev``` in root folder to run app
7) Open http://localhost:3000 in browser (chrome preferable)

## Web App Flow
Demo Video: https://youtu.be/h8goDlsormQ
1) Upon loading the web app
![image](https://user-images.githubusercontent.com/101784318/224400296-a580a4d6-3989-46c9-8b27-0e38b4d22773.png)


2) Short url is generated upon valid url input
![image](https://user-images.githubusercontent.com/101784318/224428186-88a9a657-eefd-4d24-9ebf-76ee75662b13.png)



3) Url input must be a valid url
   ![image](https://user-images.githubusercontent.com/101784318/224403401-43130370-7593-4bf2-b185-416f2de2a370.png)

