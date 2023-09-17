const axios = require('axios');
require('dotenv').config();


// bot registration
(async function register() {
    try {
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

        const options = {
            method: 'POST',
            headers: {
                "Authorization": `Bot ${process.env.BOT_TOKEN}`
            },
            data: body,
            url: commandRegisterURL,
        };
        const response = await axios(options)
        return response.data
    }
    catch (e) {
        console.log(e.message);
    }

})()

// module.exports = register