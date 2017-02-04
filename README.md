# React Blog

This app is a very simple implementation of a blog made with React.
You can see a list of posts, you can navigate to one, you can add and delete posts.

It uses:
react-router
axios - to make network requests
redux-promise - to unwrap our promises and actions
redux-form - to handle the input form

[https://www.udemy.com/react-redux/](https://www.udemy.com/react-redux/)

##Udemy Modern React with Redux part 6##

boilerplate: https://github.com/StephenGrider/ReduxSimpleStarter

###React router####

React router takes over the process of figuring out what components need to be rendered on the screen at any given time. It doe this by taking a look at the current URL and then referencing that with our routes that we defined inside routes.js.
We defined a couple of different routes:

First of we always say: always show the component that is our core containter the entire application: App.
App has just one job, to show any children components. So whenever we navigate to some nested component like post/new or post/id that component will be passed into App and then App will render that component in addition to itself.

Whenever a user navigates to "/" we use the index route helper to make sure that we showed the postIndex component. So  the index is showed whenever we navigate to just "/".

![code-snippet](http://res.cloudinary.com/ddpouudhk/image/upload/v1486213806/Schermafbeelding_2017-02-03_om_21.41.45_x2xrvo.png)

Next we made sure that we made use of React router by displaying React router in place or our App compnent where we had it preciously inside of our index.js file.
We defined router and also passed in our routes configuration object in addition to the browser history object. History just says: "hey, uses the entire URL whenever you're trying to figure out where you are."

![code-snippet](http://res.cloudinary.com/ddpouudhk/image/upload/v1486213814/Schermafbeelding_2017-02-03_om_21.46.08_eywxmh.png)

###Action creators###

Next we created a hand full of action creators. A lot of them are just normal API requests, including post and delete requests to make changes to our remote data.

![code-snippet](http://res.cloudinary.com/ddpouudhk/image/upload/v1486213819/Schermafbeelding_2017-02-03_om_21.55.22_fpxdyw.png)

###Reducer###

We have just two pieces of state. all: wich contains all of our posts. (Keep in mind that those posts do not contain the content propperty). And then we also have a single individual post.

![code-snippet](http://res.cloudinary.com/ddpouudhk/image/upload/v1486213813/Schermafbeelding_2017-02-03_om_22.03.17_zlwvef.png)

###Containers###

There are three different containters; index, new and show.

####Index####
Index is responsible for showing data to the user, or a list of all of the blogposts. It loads as soon as it knows that it is about to be rendered to the DOM by placing the action creator inside of componentWillMount.

Once this component is showing a list of blog posts we are able to navigate to an individual blog post by using the link tag provided by React router. The Link-tag is used just like any other component, and it produces just a normal anchor tag on the page.

![code-snippet](http://res.cloudinary.com/ddpouudhk/image/upload/v1486213817/Schermafbeelding_2017-02-03_om_22.08.50_fjyoqk.png)

####Show####
The post show page is another component that fetches it's own data. It needs a parameter out of the URL to figure out what individual post it wants to fetch. This componet is also in charge of deleting posts and after a user succesfully deletes a post it navigates back to the index route.

####New####

One of the most interesting aspects of this component is redux-form. At the bottom if the file there is configuration for this form: the form is named here and it is told witch fields it is going to be in charge of. There is also defined a validation function.

![code-snippet](http://res.cloudinary.com/ddpouudhk/image/upload/v1486213805/Schermafbeelding_2017-02-04_om_13.53.47_mgme8o.png)

For each of our different fields that we defined we we created an imput or a text area and we made sure to pass in the fields-confuguration object provided by redux-form. That makes sure that redux-form is 100% in charge of handling all the changes and events emitted from this input.

![code-snippet](http://res.cloudinary.com/ddpouudhk/image/upload/v1486213803/Schermafbeelding_2017-02-04_om_13.56.05_pxvo04.png)

Redux-form is also used for handling validation. Specifically to show an error for each individual input, only after the user has interacted with the input in some fashion.
Finally it highlights the entire field and the error message in red, if the user has touched it and if the particular field is not valid.

![code-snippet](http://res.cloudinary.com/ddpouudhk/image/upload/v1486213810/Schermafbeelding_2017-02-04_om_14.00.07_q3v78p.png)



###To start this app:####
Checkout this repo, install dependencies, then start the gulp process with the following:

```
	> git clone git@github.com:tlohstroh/react-blog.git
	> cd ReduxSimpleStarter
	> npm install
	> npm start
```
