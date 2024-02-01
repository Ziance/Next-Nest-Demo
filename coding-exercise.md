## Coding Exercise

### 1. How will you design the Next-Nest Stack?

Frontend Framework Next.js - Consider using Next.js for server-side rendering (SSR) and improved performance.

Backend Framework Nest.js - Nest. JS is a framework for building efficient and scalable server-side applications using JavaScript or TypeScript.
Consider using an ORM (Object-Relational Mapping) library for easier database interaction.


### 2. Would you be using routing from Next or Nest?

Routing from Next - Used page routing for better performance of dynamic routing
Routing from Nest - Route Handlers: The @Get(), @Post(), @Put(), etc., decorators are used to define the HTTP methods for your routes. You can also use parameters in your route handlers to capture dynamic values from the URL or request.


### 3. How will you implement user auth - considering that API exposed by Nest could also be used by other frontends, thus would need authentication there as well.

using @nestjs/passport that integrates but in current system we can't use that.


### 4. Which API/Framework would you use to put access control/authorization?

JSON Web Tokens (JWT),
Role-Based Access Control (RBAC),
Auth0,
Firebase Authentication


### 5. Which ORM Framework/Construct/Tool would you use to expose the multitude of storage such as MySQl/MongoDB/S3 buckets to the backend tiers?

There are several popular Object-Relational Mapping (ORM) frameworks/tools available for working with databases like MySQL. The choice depends on your programming language and the specific requirements of our project. 
Additionally, ensure that the ORM framework has good community support and documentation for the database system you are working with (in this case, MySQL).
