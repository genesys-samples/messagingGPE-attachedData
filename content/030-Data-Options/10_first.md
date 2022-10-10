---
title: "Predictive Engagment Data (attributes)"
chapter: false
weight: 10
---

## Predective Engagement Data (attributes)

There are actually a few ways to store data to the web session but before we even start doing that lets look at what you get OOTB with the default GPE tracking snippet as there is a LOT of context you get be default without even having to manually attached meta data. These values are then also nativly avalible inside Arcitect as you will soon see.

```
{
  "AttributeLists":   [
  ],
  "Attributes":   [
  ],
  "AwayDate": "2022-10-03T00:55:46.043Z",
  "Browser":   {
    "Family": "Chrome",
    "FeaturesFlash": false,
    "FeaturesJava": false,
    "FeaturesPdf": true,
    "FeaturesWebrtc": true,
    "Fingerprint": null,
    "IsMobile": null,
    "Lang": "en",
    "Version": "106",
    "ViewHeight": 876,
    "ViewWidth": 948
  },
  "CreatedDate": "2022-10-03T00:44:13.198Z",
  "CustomerId": "626556e8-5f18-46f6-9462-6d294c378767",
  "CustomerIdType": "cookie",
  "Device":   {
    "Category": "desktop",
    "Fingerprint": null,
    "IsMobile": false,
    "OSFamily": "Linux",
    "OSVersion": "Unknown",
    "ScreenHeight": 1080,
    "ScreenWidth": 1920,
    "Type": "Unknown"
  },
  "DurationInSeconds": 632,
  "EventCount": 4,
  "ExternalId": null,
  "ExternalUrl": null,
  "Geolocation":   {
    "Country": "AU",
    "CountryName": "Australia",
    "Latitude": -37.8159,
    "Locality": "Melbourne",
    "Longitude": 144.9669,
    "PostalCode": "3000",
    "Region": "VIC",
    "RegionName": "Victoria",
    "Source": "ip",
    "Timezone": null
  },
  "Id": "fcd6cfca-6d35-47a6-bf8f-cada62065e7b",
  "IdleDate": "2022-10-03T00:55:31.043Z",
  "IpAddress": "1.136.111.220",
  "IpOrganization": "Telstra Internet",
  "LastPage":   {
    "Breadcrumb":     [
    ],
    "Domain": "localhost",
    "Fragment": null,
    "Hostname": "localhost",
    "Keywords": null,
    "Lang": "en",
    "Pathname": "/labpage.html",
    "QueryString": null,
    "Title": "Home",
    "Url": "http://localhost:8080/labpage.html"
  },
  "MktCampaign":   null,
  "OutcomeAchievements":   [
  ],
  "PageviewCount": 4,
  "Referrer":   {
    "Domain": "localhost",
    "Fragment": null,
    "Hostname": "localhost",
    "Keywords": null,
    "Medium": "internal",
    "Name": null,
    "Pathname": "/labpage.html",
    "QueryString": null,
    "Url": "http://localhost:8080/labpage.html"
  },
  "ScreenviewCount": null,
  "SearchTerms":   [
  ],
  "SegmentAssignments":    [
  ],
  "Type": "web",
  "UserAgentString": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
}
```

Now to access these default values you simply need to access them via the "Journey" block in Arcitect to get the "sessionId" then the objects are exposed for you to use. One of the main use cases people as me for is the last page URL as well as the location as they want to treat people different that are "in country" vers browsing from outside the local country. With this default data inside the GPE session you get that and more !!!

## Access the data in Arcitect

From the "toolbot" select the "Get Journey Session" block. NOTE: if this fails or you dont have GPE enabled on the Messenger configuration the flow will take the overall error handeling path.

For the Journey Session Id enter in:

    Message.JourneyContext.customerSession.id

For the variable to save it to this is up to you but personally I go with 

    varJourney

![](./journeyData.png?raw=true)

## Using the Data

Now if you want to use one of the objects in the JSON you can simply access it from the output you careated in my case "varJourney"

![](./varJourney.png?raw=true)

So if you wanted to know the country that the use was browsing from based on the IP address you would use

    State.varJourney.geolocation.countryName

As this output is a "String" this is the format it will be in. You will also see there are "collections" or as I prefer to call them "Arrays" also of data including the "Segments" these are the SegmentIds that have been associated with this web session and are also very handy to be used in the routing design.

While you can trigger a different "Flow" based on the "Aciton Map" configuration in GPE now days this does then force you to make many differnet "Flows" personally I like to have the 1x Flow and then use the Segment data in the session to do the personlisation that way then you only need 1x flow to maintain and update when changes are required.

### Future

At the time of writing this Workshop there is a new feature comming that is not released yet as GA. It will give the ability to add your own "Custom Events" & "Custom Attributes" to this JSON object that can then be easily used in Arcitect as well as displayed to the agent. Once this is released I will update this Workshop. For now though for Custom data payloads the next 2x options can be used.