# CS-361
# Microservice Data Interactions
## How to request data
Data requests can be made using the client.js file provided. The client simply establishes a connection using sockets, and sends over a string, alerting the server that it is requesting data.
## How to receive data
After the data request is made, the server will take a given object, in its current case jobs[] and then stringify it. The server will then send this JSON string back as their response. Allowing the data to be parsed and handleded as neccessary. 
## UML Diagram
![image](https://user-images.githubusercontent.com/58796038/198368769-e516af0a-6dd9-431a-8f54-c6881b801dc3.png)
