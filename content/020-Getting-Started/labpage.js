const deploymentId = sessionStorage.getItem("deploymentId")
const region = localStorage.getItem("region")
const firstName = sessionStorage.getItem("firstName")
const lastName = sessionStorage.getItem("lastName")
const email = sessionStorage.getItem("email")

if(region){
    document.getElementById("region").value = region
}

if (deploymentId && region) {
    console.log(deploymentId);
    console.log(region)
    var script = document.createElement("script")
    script.type = "text/javascript"

    //Getting region based snippet
    if(region === "mypurecloud.com"){
        script.innerHTML = (function (g, e, n, es, ys) { g['_genesysJs'] = e; g[e] = g[e] || function () { (g[e].q = g[e].q || []).push(arguments) }; g[e].t = 1 * new Date(); g[e].c = es; ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys); })(window, 'Genesys', 'https://apps.mypurecloud.com/genesys-bootstrap/genesys.min.js', { environment: 'use1', deploymentId: deploymentId, debug: true });
    }
    if(region === "usw2.pure.cloud"){
        script.innerHTML = (function (g, e, n, es, ys) { g['_genesysJs'] = e; g[e] = g[e] || function () { (g[e].q = g[e].q || []).push(arguments) }; g[e].t = 1 * new Date(); g[e].c = es; ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys); })(window, 'Genesys', 'https://apps.usw2.pure.cloud/genesys-bootstrap/genesys.min.js', { environment: 'usw2', deploymentId: deploymentId, debug: true });
    }
    if(region === "mypurecloud.ie"){
        script.innerHTML = (function (g, e, n, es, ys) { g['_genesysJs'] = e; g[e] = g[e] || function () { (g[e].q = g[e].q || []).push(arguments) }; g[e].t = 1 * new Date(); g[e].c = es; ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys); })(window, 'Genesys', 'https://apps.mypurecloud.ie/genesys-bootstrap/genesys.min.js', { environment: 'euw1', deploymentId: deploymentId, debug: true });
    }
    if(region === "mypurecloud.com.au"){
        script.innerHTML = (function (g, e, n, es, ys) { g['_genesysJs'] = e; g[e] = g[e] || function () { (g[e].q = g[e].q || []).push(arguments) }; g[e].t = 1 * new Date(); g[e].c = es; ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys); })(window, 'Genesys', 'https://apps.mypurecloud.com.au/genesys-bootstrap/genesys.min.js', { environment: 'apse2', deploymentId: deploymentId, debug: true });
    }
    if(region === "mypurecloud.jp"){
        script.innerHTML = (function (g, e, n, es, ys) { g['_genesysJs'] = e; g[e] = g[e] || function () { (g[e].q = g[e].q || []).push(arguments) }; g[e].t = 1 * new Date(); g[e].c = es; ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys); })(window, 'Genesys', 'https://apps.mypurecloud.jp/genesys-bootstrap/genesys.min.js', { environment: 'apne1', deploymentId: deploymentId, debug: true });
    }
    if(region === "mypurecloud.de"){
        script.innerHTML = (function (g, e, n, es, ys) { g['_genesysJs'] = e; g[e] = g[e] || function () { (g[e].q = g[e].q || []).push(arguments) }; g[e].t = 1 * new Date(); g[e].c = es; ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys); })(window, 'Genesys', 'https://apps.mypurecloud.de/genesys-bootstrap/genesys.min.js', { environment: 'euc1', deploymentId: deploymentId, debug: true });
    }
    if(region === "cac1.pure.cloud"){
        script.innerHTML = (function (g, e, n, es, ys) { g['_genesysJs'] = e; g[e] = g[e] || function () { (g[e].q = g[e].q || []).push(arguments) }; g[e].t = 1 * new Date(); g[e].c = es; ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys); })(window, 'Genesys', 'https://apps.cac1.pure.cloud/genesys-bootstrap/genesys.min.js', { environment: 'cac1', deploymentId: deploymentId, debug: true });
    }
    if(region === "apne2.pure.cloud"){
        script.innerHTML = (function (g, e, n, es, ys) { g['_genesysJs'] = e; g[e] = g[e] || function () { (g[e].q = g[e].q || []).push(arguments) }; g[e].t = 1 * new Date(); g[e].c = es; ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys); })(window, 'Genesys', 'https://apps.apne2.pure.cloud/genesys-bootstrap/genesys.min.js', { environment: 'apne2', deploymentId: deploymentId, debug: true });
    }
    if(region === "euw2.pure.cloud"){
        script.innerHTML = (function (g, e, n, es, ys) { g['_genesysJs'] = e; g[e] = g[e] || function () { (g[e].q = g[e].q || []).push(arguments) }; g[e].t = 1 * new Date(); g[e].c = es; ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys); })(window, 'Genesys', 'https://apps.euw2.pure.cloud/genesys-bootstrap/genesys.min.js', { environment: 'euw2', deploymentId: deploymentId, debug: true });
    }
    if(region === "aps1.pure.cloud"){
        script.innerHTML = (function (g, e, n, es, ys) { g['_genesysJs'] = e; g[e] = g[e] || function () { (g[e].q = g[e].q || []).push(arguments) }; g[e].t = 1 * new Date(); g[e].c = es; ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys); })(window, 'Genesys', 'https://apps.aps1.pure.cloud/genesys-bootstrap/genesys.min.js', { environment: 'aps1', deploymentId: deploymentId, debug: true });
    }
    if(region === "sae1.pure.cloud"){
        script.innerHTML = (function (g, e, n, es, ys) { g['_genesysJs'] = e; g[e] = g[e] || function () { (g[e].q = g[e].q || []).push(arguments) }; g[e].t = 1 * new Date(); g[e].c = es; ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys); })(window, 'Genesys', 'https://apps.sae1.pure.cloud/genesys-bootstrap/genesys.min.js', { environment: 'sae1', deploymentId: deploymentId, debug: true });
    } else {window.alert("Set region to a correct value")}
    document.head.appendChild(script)
    document.getElementById("card").hidden = false
    document.getElementById("data").hidden = false
    document.getElementById("user").hidden = false
    document.getElementById("supportCenter").hidden = false
    document.getElementById("region").value = region
    document.getElementById("deploymentId").value = deploymentId
}

if (firstName) {
    document.getElementById("firstName").value = firstName
}

if (lastName) {
    document.getElementById("lastName").value = lastName
}

if (email) {
    document.getElementById("email").value = email
}

function save() {
    if (document.getElementById("deploymentId").value && document.getElementById("region").value) {
        sessionStorage.setItem("deploymentId", document.getElementById("deploymentId").value)
        localStorage.setItem("region", document.getElementById("region").value)
        document.location.reload();
    }
    else {
        window.alert("Set the DeploymentId & Region first !!!")
    }
}

function reset() {
    if (document.getElementById("deploymentId").value) {
        sessionStorage.removeItem("deploymentId")
        sessionStorage.removeItem("firstName")
        sessionStorage.removeItem("lastName")
        sessionStorage.removeItem("email")
        document.location.reload();
    }
    else {
        window.alert("Set the DeploymentId first !!!")
    }
}

function setCustomAttributes() {
    // https://developer.genesys.cloud/commdigital/digital/webmessaging/messengersdk/SDKCommandsEvents#database-set
    let json = JSON.parse(document.getElementById("customAttributes").value)
    console.log(json)
    Genesys("command", "Database.set", { messaging: { customAttributes: json } });
}

function getCustomAttributes() {
    Genesys("command", "Database.get", { name: "messaging.customAttributes" }, (function (data) {
        console.log(data)
        document.getElementById("customAttributes").value = data
    }))
}

function login() {
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    sessionStorage.setItem("firstName", firstName)
    sessionStorage.setItem("lastName", lastName)
    sessionStorage.setItem("email", email)
    Genesys("command", "Journey.pageview", { customAttributes: { "email": email, "givenName": firstName, "familyName": lastName }, traitsMapper: [{ "fieldName": "email" }, { "fieldName": "givenName" }, { "fieldName": "familyName" }] })
}

function pageView() {
    var date = new Date();
    var clock = date.getTime();
    clock.toString();
    console.log(clock);
    Genesys("command", "Journey.pageview", { pageTitle: '\'' + clock + '\'', pageLocation: '\'' + clock + '\'' });
}

function home() {
    document.location.href = document.location.href
}

function openChat() {
    Genesys("command", "Messenger.open");
}

function closeChat() {
    Genesys("command", "Messenger.close");
}

function addProduct() {
    Genesys("command", "Journey.record", { eventName: "product_added", customAttributes: { price: 15.99, code: "CDE-123", name: "Product", hasBatteries: false } });
}

function removeProduct() {
    Genesys("command", "Journey.record", { eventName: "product_removed", customAttributes: { price: 15.99, code: "CDE-123", name: "Product", hasBatteries: false } });
}

function triggerTest() {
    Genesys('command', 'Journey.record', { eventName: 'Test', customAttributes: { TestObject: 'test123' }, });
}

function clearSession() {
    localStorage.removeItem(`_${deploymentId}:gcmcopn`);
    localStorage.removeItem(`_${deploymentId}:gcmcsessionActive`);
    Genesys('command', 'Identifiers.purgeAll', {});
    home();
}

//JavaScript Native way to get Url Parameters for config
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}