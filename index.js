var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details :'Nani?',
assets : {
large_image : "index",
large_text :'UwU'
},
buttons : [{label : 'Bot' , url : "https://discord.com/api/oauth2/authorize?client_id=863795370911334420&permissions=0&scope=bot"},{label :"Umm Please join my server", url : "https://discord.gg/EmQHJyB2QC"}]
		}
	})
})
client.login({ clientId : "868140947265961994" }).catch(console.error);
