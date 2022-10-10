---
title: "Setup Demo Page"
chapter: false
weight: 10
---

## 1. Access Demo Page

Open the [labpage](./labpage.html) in another browser tab and go through the steps of setting it to your WebMessaging deploymentId that also has GPE enabled on it.

![](./region.png?raw=true)

## 2. Login to the page

You will need to enter your region based on your ORG on where you are. For example I'm in Australia so I will enter "mypurecloud.com.au" you can find a list of all the regions [HERE](https://developer.genesys.cloud/platform/api/)

Then you will also need to put in your WebMessenger DeploymentId. Once done the page will load and show your messenger as well as other custom input HTML elements I have created for this Workshop.

![](./labpage.png?raw=true)

## 3. Send in a interaction

Now that you are setup first dont enter in any information into the HTML fields just yet. Simply start a WebMessaging conversation by clicking on the normal "Launcher" and start your conversation. Ensure that the message routes though to your agent and that you can see the "live Now" GPE Journey as well as the Agent can see this web session in progress.

If this is NOT working ensure that you have the DeploymentId and Region correctly as well as the Genesys Cloud Routing and Queues etc setup correctly. The setup of these channels is not part of this workshop scope.