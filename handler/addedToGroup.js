const set = require('../settings');
const text = require('../lib/text/text_id');

module.exports = async (client, event) => {
  const { id, formattedTitle, groupMetadata } = event;
  const { owner, participants } = groupMetadata;

  if (participants.length < 5 && !set.owner.includes(owner)) {
    await client.sendText(id, `_⚠️ Ooppss.. maaf Member grup kamu ${participants.length}, Bot hanya dapat digunakan pada grup yang membernya berjumlah 5 Orang atau lebih!_`);
    return await client.leaveGroup(id);
  }

  return await client.sendText(id, text.menu);
};
