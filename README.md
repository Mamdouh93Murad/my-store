# Angular Store Web-App
<h2 align="center">MyStore Project - Angular App</h2>

<p align="center">
<a href="https://www.linkedin.com/in/mamdouh-morad/">
    <img alt="Follow Me on LinkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
</a>

A Web Application for an online Store to sell products
The Application has been built using **Angular** and **Angular-Material** to give dynamic and responsive experience.

## Basic Info
* use ``npm install`` in root folder to install the project dependencies and modules
* use ``ng serve`` to get the project working and starting on ``localhost:4200``
``ng serve --port xxxx`` can be used to specify port number


## Application Data

The Data are being stored and read from json files in the ``src/app/assets`` Folder.
* **Product Info** are stored in the ``data.json`` file.
* **User Info** are stored in the ``user.json`` file.

The Data Interfaces and Objects Structures are located in the ``src/app`` Folder.
* The **Product** Data interface is located in the ``product.ts``file.
* The **User** Interface is located in the ``login.ts`` file.
* The **Form** Interface is located in the ``form.ts`` file.

## Project Structure
The Application is built using set of **components** and **services** which handle the flow of data and UI-design. 
The **Components** are set into 3 different modules. 
* **Main** Module which handles the Login, Signup and Header Components.
* **Product** Module which handles and contains the Product List, Product Info and Product Details.
* **Shopping** Module which handles the Cart, Form and Confirmation Processes.

The **Services** are made up of two. 
* **HTTP** Service which retrieves Data from The JSON Files.
* **Store** Service which handles the application functions such as Login, Signup and Data Details.



## Interface Properities and Functions

A table containing the properities and functions of each application data-object and Interface used in the website.

|                |Products                                      | Users                      |
|----------------|----------------------------------------------|----------------------------|
|Elements        |`'ID, Name, URL, Description, Price, Amount`  |`Usernmae, Password`        |
|Functions       |`"Retrieve, Update, Add2Cart, RemoveFromCart` |`"Login, Sign up`           |




## UML diagram
The Flow of User Experience and Interaction in the website. 

```mermaid
graph LR
A[Login] --> B((sign up))
B --> C((Login))
A -->C
C --> D{HomePage}
D --> F(ProductList)
F --> J(Product Details)
J --> E
F --> E
D ---> E(CartList)
E --Buyer Info Form-->G(Checkout)
G --> H(Confirmation)
H -->D
