We are going to model the basic structure of a ticketing system. This will require us to keep track of Users and their related Tickets. This is similar to any ticketing system for IT, maintenance, etc, where a user submits a ticket and waits for someone to review them.

It will be completely up to you how you structure your components and endpoints, so long as the end product works. Your site should have the following:

For either users or admins:

A register functionality where the user may input their preferred username & password, which must be at least 4 characters each.

A log-in functionality, which also either informs the user of an incorrect login or re-routes the user to an appropriate page when successfully logged in.

As a user:

A page to submit a new ticket. The user must submit a description. A ticket should have its ID and its unresolved status be generated automatically by the application.

A page to view the tickets belonging to the logged-in user, where the ID, description, and resolved/unresolved status is displayed.

As an admin:

A page to view all unresolved tickets for all users. Every ticket on the unresolved tickets page should have a button that will allow the admin to resolve the ticket, removing it from this page and making it visible on the resolved tickets page. This page should only be accessible to logged-in admins.

A page to view all resolved tickets for all users. This page should only be accessible to logged-in admins.

Technical requirements:

React

You should be using Routing so that your page conforms to the SPA design, with a navbar to navigate between pages.

You should be using context to keep track of site-wide data.

Remember to configure CORS headers to permit communication from your frontend.

The problems presented by the requirements can be solved by proper use of Props/State/Context, Fetch/Axios, Conditional Rendering, Data binding, Event binding, and useEffect. You’ll likely end up using each of these concepts at least once.

Spring

You should be using H2 as your database. You may allow Spring Data to generate your tables for you.

Remember to configure CORS policy to permit communication from your backend.

Ideally, endpoints that ought to require authorization should only permit logged-in users. We haven’t discussed JWTs in depth, but for now you could authorize by passing the logged-in user in the request header and checking on the backend if the user in the header should be allowed to perform the requested action.

The problems presented by the requirements can be solved by proper use of Spring Boot, Spring Data JPA, and Spring MVC. The backend could be completed with only 6-7 endpoints, excluding any extra endpoints you might write during development.

Testing / Styling / Security / Deployment

There is no need to work on these topics for this project, although the project is a good base for experimentation. 