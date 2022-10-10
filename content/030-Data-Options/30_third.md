---
title: "WebMessaging Data"
chapter: false
weight: 30
---

## WebMessaging Data

Event If you are running WebMessenger without Predictive Engagment you can still attach data to the conversationId and pass it in as "customAttributes". These can then be used in Arcitect as well as the Agent Script. The KEY difference here is to remember that the data is NOT sent into the cloud until a message is sent. So this is only good if you know for sure that this is going to be a conversation or there is already one happening. The API documentation on this can be found [HERE](https://developer.genesys.cloud/commdigital/digital/webmessaging/messengersdk/SDKCommandsEvents).

First to test this out. If you disconnect and close your current interaction that you have on the labpage.html and scroll down to the bottom left of the page there is a "Clear Session" button.

![](./clearSession.png?raw=true)

once you click this it will clear out all the session cookies and reload the page. If you are in teh same browser "session" the region and deploymentId will persist to make it easier for you when testing and creating new interactions all the time.

Now that the page is loaded and its a new session we can test out the WebMessaging database without using GPE. There is a section of the labpage that we have not used yet called "Database Plugin" this is what will send the "database.set" command into the solution.

![](./databasePlugin.png?raw=true)

Now there are a few VERY important things to understand on how this works so you understand the nuances about this data transfer. Due to security reasons the client side will NOT "store" the data so what this means is that if you send the data in with that command it is sitting on the client side but NOT sent to the cloud until there is a "Message" sent... so if you send this command then "start" a conversation or send in another message BEFORE a page load event it will work fine.... BUT if you refresh the page the data is lost from the local temp variable. So if you want to maintain data before a conversation is started it is up to the website to cache this and send it in once a conversation starts.

To test this out enter in some data like in the example and press the "Set" button.

    { "keyInt": 123, "keyString": "hello" }

If you then start the WebMessenger conversation without reloading the page it will work fine and you will see the data on the conversation

![](./webdata.png?raw=true)

Now if you do the same thing but this time BEFORE you start the conversation client the "PageView Home" button to make the page refresh back to the home page URL

![](./home.png?raw=true)

Then send in a conversation you will notice that the data is NOT attached to the conversation.