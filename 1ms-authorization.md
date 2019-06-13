## Description

You are required to implement a microservice that meets the following requirements:

- Exposes a RESTful API that allows the consumers (users) to
   - Given a set of features (list of descriptors of functionality) creates a license key that encapsulates those features
    and updates the document of the user who made the request
   - Given an existing license key allows to update it by adding or removing features from it
   - Allows revoking an existing key
  
- Utilizes OPA to enforce feature descriptors (derived from a license key). see more in  [here] (https://www.openpolicyagent.org/)

- Exposes certain RabbitMQ queues that allow for other (internal) services to do the following
   - Provide a user and a feature (that requires access to) and responds true/false (if the user has access or not respectively)
   - Provide a channel that every microservice can listen to broadcasted changes regarding update or revocation of a license key

  For instance consider the following use cases:
  
    - (input) REST API consumer requires a key for accessing 3 features [f1, f2, f5]
    - (outcome) Microservice is responsible for updating the user document by adding those features
      and generate a key (eg.AAAAAAAAAAA ) that encodes those features, returns it as a response, broadcasts change via rabbit
    
    - (input) REST API consumer sends an existing key and requires a fourth feature to be appended. So the list would be [f1, f2, f3, f5]
      (outcome) the microservice produces a new key (eg. BBBBBBBBB ), returns it as a repsonse, broadcasts change via rabbit
    
    - (input) RabbitMQ consumer asks the microservice if user X  has access to feature f1
      (outcome) the mircoservice should reply positively

    - (input) RabbitMQ consumer asks the microservice if user X  has access to feature f4
      (outcome) the microservice should reply negatively

    - (input) REST API requests revoking to access to feature f2, produces a new key CCCCCCCCCC, updates user document and 
      (outcome) returns the key, broadcasts change via rabbit

    - (input) RabbitMQ consumer asks if user X has access to f2,
      (outcome) the microservice should reply negatively

    - OPA can be used for those permission checks

    
    One example structure could be based on this:
    > items := ["f1", "f2", "f3", "f4", "f5", "f6"]
    > users := {"marios": {"has_access": [1,2, 4]}, "antri": {"has_access": [1, 2]}}


Bonus points:
   - If you have worked in something similar, propose alternatives to OPA that can achieve the same result in a scalable manner
   - Propose a way for this microservice type to be deployed in redundancy and what would happen if one instance failed
   - Bonus points for following reactive programming paradigm in your approach (eg. like RxJava, or RxJS, or RxPY, RxClojure)
   - Bonus points for using functional programming over imperative programming
