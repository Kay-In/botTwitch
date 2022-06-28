import tmi from "tmi.js";

const client = new tmi.Client({
    options: { debug: true },
    identity: {
        username: "k4yb0t",
        password: "oauth:8xextt1s08jagicmdmbx5fwsj9od2d"
    },
    channels: ['kkay_in']
});

client.connect();

client.on('message', (channels, tag, message, self) => {
    if (self || !message.startsWith('!')) return;
    console.log(`${tag['display-name']}: ${message}`);

    const args = message.slice(1).split(' ');
    const command = args.shift().toLowerCase();

    if (command === "hello") {
        console.log(tag);
        client.say(channels, `@${tag.username} ,Bonjour`);
    } else if (command === "bye") {
        client.say(channels, `@${tag.username},Merci d'être passé,j'espere que tu t'es bien amusée et a bientôt`)
    } else if (command === `dice`) {
        const num = rollDice();
        client.say(channels, `tu as obtenu un ${num}`);
        console.log(`Executed ${command}command`)
    } else {
        client.say(channels, `@${tag.username},désolé,mon génial créateur n'a pas pris soin de m'apprendre cette commande`)
    }


})

function rollDice() {
    const sides = 6;
    return Math.floor(Math.random() * sides) + 1;
};