
//webhook response of the channel
async function reply() {
    const options = {
        method: 'POST',
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

module.exports = { reply }