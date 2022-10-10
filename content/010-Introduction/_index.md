---
title: "Introduction"
chapter: true
weight: 10
---

# Introduction

### High level

With WebMesseaging the single "snippet" is able to do both the Async Messaging as well as run the "plugin" for the Journey or GPE session. This does need to be turned on and if this feature is enabled then you instantly have access to both data locations inside Arcitect.

![](/010-introduction/enable_gpe.png?raw=true)

NOTE: If enabled consider the pricing details found [HERE](https://help.mypurecloud.com/articles/predictive-engagement-event-pricing/) This workshop is not designed as a GPE setup course

It critical to understand that their are two seprate data loctions that can be used to store data. 

### 1. The WebMessage or "ConversationId"
### 2. The GPE session or "SessionId"

Depending on when the data is avaliable is key to picking which solution as well as how you want it visualised (if at all) to the agent as well as what its going to be used for. For example you can have a web session without even creating a WebMessage conversation and there for you would not have a conversationId to link the data to so in that use case you would have to use the GPE data store. But if a customer did not want to use GPE and ONLY uses WebMessaging on the site then the only option to store data is the WebMessaging data location but it is worth noting that in this case a conversationId would need to be created for it to be saved to the cloud and attached.

![](/010-introduction/overview.png?raw=true)

As you can see from the above image there are 2x cookies used and each one has its own storage and SDK to communicate to Genesys Cloud.