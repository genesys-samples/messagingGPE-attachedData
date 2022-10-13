---
title: "Predictive Engagment Data (record)"
chapter: false
weight: 20
---

## Predictive Engagement Data (record)

You can also use GPE to append data to the "Journey" as a "Record" event. This then has the advantage of not only being able to be used by Arcitect but also by default then becomes avaliable to be visually shown to the agent. These events can then also be used to trigger both a [Segment](https://all.docs.genesys.com/ATC/Current/AdminGuide/About_segments) and an [Action Map](https://all.docs.genesys.com/ATC/Current/AdminGuide/About_action_maps)

There are pre configured event types for more common items such as "product added" or "product removed" These will also show the corrosponding icons on teh timeline to match the event type.

![](./journey.png?raw=true)

You can use the buttons I have created in the [labpage.html](./labpage.html) from the "Getting Started" section to click the buttons and see the items appear on the journey.

![](./command_buttons.png?raw=true)

to leverage these commands the API documentation can be foudn [HERE](https://developer.genesys.cloud/commdigital/digital/webmessaging/messengersdk/SDKCommandsEvents) The examples I have used in the code are also below. If you would like to change the values and test them you can simply "Paste" these into the Browser console as well to send in the commands

    Genesys("command", "Journey.record", { eventName: "product_added", customAttributes: { price: 15.99, code: "CDE-123", name: "Product", hasBatteries: false } });

    Genesys("command", "Journey.record", { eventName: "product_removed", customAttributes: { price: 15.99, code: "CDE-123", name: "Product", hasBatteries: false } });

    Genesys('command', 'Journey.record', { eventName: 'Test', customAttributes: { TestObject: 'test123' }, });

To enter data manually into the "console" of the browser right click on the page and go to "Inspect" then up the to select the "Console" tab and you can click down the bottom of the log. Paste in the text you want to send then press the "Enter" key. This way you can easily edit the examples above and see them reflected in the journey view. NOTE somtimes you need to refresh the journey view as it might not refresh.

![](./console.png?raw=true)

Data is then seen in the Journy View as a custom record event

![](./newData.png?raw=true)

For other specifc fields such as 

### firstName lastName & email

There are specifc "Trait mapper" fields that should be used as these identifiers are then also able to be used to "Identify" the customer and even stitch the session with an external contactId if they exist in the solution. To show this I have created the "Login" section of the labpage where you can send in the firstName, lastName & email address of the user. With this you will notice that it will then associate the interaction with those details as well as if there is an external contactId with a matching email address it will also then stitch the session with other interactions and media types.

![](./login.png?raw=true)

I have removed my test email address form teh screen shot but you will see if you do this on your side the same thing happen. NOTE once again you many need to refresh the live now view for it to fully update the journey.

![](./name.png?raw=true)

To do this you can also manually paste in the command once again. The first 3x lines of this is actually getting the HTML elements that contain the values that I want to get then im uses those variables in the command itself. In the real world you would also be doing something similar in getting data from somewhere on the webpage or sessionStorage to populate these values. This method can also be used to populate the values in the above examples to GET the shopping cart product for example. This can also be feed from the "tag manager" EG Goolgle Tag Manager via the "DataLayer" but that conversation is outside the scope of this workshop.

    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let email = document.getElementById("email").value

    Genesys("command", "Journey.pageview", { customAttributes: { "email": email, "givenName": firstName, "familyName": lastName }, traitsMapper: [{ "fieldName": "email" }, { "fieldName": "givenName" }, { "fieldName": "familyName" }] })

These record objects can then be used inside the GPE Segments & ActionMaps to tirgger items as well as reporting, not just to visualise data to the agent. This can also be leveraged inside of Arcitect via an API "GET" request into the Journey endpoints but for that type of data I would more recommend the "attributes" section that was before this as that is a more native way to access them directly in Arcitect without calling into the Genesys Cloud Journey Session API endpoint. But it is good to know that it can be done if required. If you are interested in this and more of an advanced user I have put the specific endpoint below and it is a GET request.

    /api/v2/journey/sessions/${input.sessionId}/events

