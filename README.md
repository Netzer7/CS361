# CS-361
# Microservice Data Interactions
## How to request data
Data requests can be made using the client.js file provided. The intention is that the client.js will be called when a certain webpage, the jobs page is loaded. The client simply establishes a connection using sockets, and sends over a string, alerting the server that it is requesting data. The client will output several strings, one that attempts to connect to the server and another stating that a request was sent, indicating a successful connection to the server and that it is awaiting a reponse.
## How to receive data
After the data request is made, the server will take a given object, in its current case jobs[] and then stringify it. The server will then send this JSON string back to the client as its response which gets displayed in the clients console, allowing the data to be parsed and handled as neccessary. This JSON String can then be parsed by the user, allowing them to use the JavaScript object in their program. The intention is that this object would be displayed on the webpage, in a table format. 
## UML Diagram
![My Remote Image](https://user-images.githubusercontent.com/58796038/200655149-06f88ee2-6ea5-4a03-bcbd-9dbc30dd1a5d.png)
