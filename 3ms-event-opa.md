# Description
## Part A
You are required to develop 3 microservices (using either NodeJs or Python) for a fictions Fleet Management System (FMS) as follows:
- *Microservice_A*: Exposes an HTTP Restful API, that allows performing CRUD operations for the management of Fleet entities (i.e: Driver, Car, Trip, etc). Also provides endpoints for assigning a Driver to a Car
- *Microservice_B*: Simulates a Car that is driven about a city. This microservice generates heartbeats on frequent time intervals that encapsulate the state of the car (car_id, geo-coordinates, speed, etc) and driver identity.
- *Microservice_C*: Consumes heartbeats in order to apply penalty points to drivers that are not driving in a behaved manner. 1 Penalty point is added for every Km over 60Km/h, 2 points for over 80Km/h, 5 points for over 100Km/h. Driver/Penalty point map is stored in a NoSQL store and exposed via an HTTP API
- Microservices should communicate among them using a RabbitMQ service bus. You should define the message exchange protocol and explain your design decisions

- Implementation of the above services should be provided in a pull-request to this GitHub repo
- Pull-request must include a Docker-Compose YML that allows running the whole stack
- Pull-request must include a README for any explanation points

## Part B
- Familiarize with the [Open Policy Agent (OPA)](https://www.openpolicyagent.org/)
- Extend the README in Part A in order to:
- - provide your own thoughts (i.e. user-stories), where OPA can be a good fit for the fictious FMS in Part A
- - what is the benefit of OPA
- - where could OPA potentially reside in the FMS architecture?

# Bonus
- Provide a simple implementation that extends the FMS services and makes use of OPA
- You can use one of the concepts provided in Part B
