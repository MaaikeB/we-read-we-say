# we-read-we-say


This is a sample React - Flux project to show how to deal with multiple data events.

The app shows the main headline from a certain date (fetched through the New York Times API),
and shows instagram pictures of people on that subject.
Further implementation will allow the user to pick the date and also select a country to see what people in that country commented on the 'happening'.

The challenge is to manage Components that are dependent on one or more data requests
(the Headline component is dependent on the Date picked, the Pictures component is dependent on the Headline returned from the API, and so on)

## run

npm install -
gulp -
browserify dist/main.babel.js -o bundle.js -
open index.html in the browser


### demo

http://mumbai-lane-5821.pancakeapps.com/
