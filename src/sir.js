const WebSocket = require('ws');
require('dotenv').config();

var ws = new WebSocket('wss://gateway.discord.gg/?v=9&encoding=json');

const token = process.env.USER_TOKEN;
const userIds = process.env.TARGET_IDS.split(',');
const webhook = process.env.WEBHOOK_URL;

// Clear the Whitespaces
userIds.forEach((id, i) => {
    userIds[i] = id.trim();
});

/**
 * Resets Websocket Heartbit
 * @param {Integer} ms
 * @returns
 */
const heartbeat = (ms) => {
    return setInterval(() => {
        ws.send(JSON.stringify({ op: 1, d: null }));
    }, ms);
}

/**
 * Webhook Initiator Payload
 */
const payload = {
    op: 2,
    d: {
        token: token,
        capabilities: 253,
        properties: {
            "os": "linux",
            "browser": "chrome",
            "device": "chrome",
        }
    }
}

ws.on('open', () => {
    ws.send(JSON.stringify(payload));
});

// Don't let it close the connection
ws.on('close', () => {
    ws = new WebSocket('wss://gateway.discord.gg/?v=9&encoding=json');
})

ws.on('message', (data) => {
    let payload = JSON.parse(data);
    let { t, op, d } = payload;

    switch (op) {
        case 10:
            const { heartbeat_interval } = d;
            heartbeat(heartbeat_interval);
            break;

        case 7:
            console.log(payload);
    }

    switch (t) {
        case 'READY':
            console.log(`Logged in as ${d.user.username}#${d.user.discriminator}`);
            break;

        case 'MESSAGE_CREATE':
            let author = d.author.username;
            let authorId = d.author.id;
            let content = d.content;

            if (userIds.includes(authorId)) {
                let data = {
                    authorId,
                    author,
                    message: content
                }
                console.log(data);
            }
    }
});