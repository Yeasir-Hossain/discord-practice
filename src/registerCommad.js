const axios = require('axios');
require('dotenv').config();

var commandRegisterURL = `https://discord.com/api/v10/applications/${process.env.APPLICATION_ID}/commands`
const body = {
    "name": "country",
    "type": 1,
    "description": "Send details of the country",
    "options": [
        {
            "name": "country",
            "description": "The country name",
            "type": 3,
            "required": true,

        },
    ]
}
// https://discord.com/api/webhooks/1150105116171583518/eil34JV1fH-50AtdZkKdpqgsRIS2CPMcvGFGtBlDCnf_3LvdzYO9Q0QFbnHNI0DdXZjR

const options = {
    method: 'POST',
    headers: {
        "Authorization": `Bot ${process.env.BOT_TOKEN}`
    },
    data: body,
    url: commandRegisterURL,
};
async function register() {
    try {
        const response = await axios(options)
        return response.data
    }
    catch (e) {
        console.log(e.message);
    }

}

async function reply() {
    const options = {
        method: 'POST',
        // headers: {
        //     "Authorization": `Bot ${process.env.BOT_TOKEN}`
        // },
        data: {
            "type": 3,
            "token": "eil34JV1fH-50AtdZkKdpqgsRIS2CPMcvGFGtBlDCnf_3LvdzYO9Q0QFbnHNI0DdXZjR",
            "id": "658822586720976555",
            "name": "country",
            "avatar": "689161dc90ac261d00f1608694ac6bfd",
            "channel_id": null,
            "guild_id": null,
            "application_id": "658822586720976555",
            "content": "Hello"

        },
        url: "https://discord.com/api/webhooks/1150105116171583518/eil34JV1fH-50AtdZkKdpqgsRIS2CPMcvGFGtBlDCnf_3LvdzYO9Q0QFbnHNI0DdXZjR"
    };
    await axios(options)
}
// reply()

module.exports = { register, reply }