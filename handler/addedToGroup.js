const set = require("../settings");

module.exports = async (client, event) => {
  const { id, formattedTitle, groupMetadata } = event;
  const { owner, participants } = groupMetadata;

  if (participants.length < 10 && !set.owner.includes(owner)) {
    await client.sendText(id, `_⚠️ Member grup kamu ${participants.length}, Bot hanya dapat digunakan pada grup yang membernya berjumlah 10 Orang atau lebih!_`);
    return await client.leaveGroup(id);
  }

  return await client.sendText(id, `_Terima kasih karena telah menggunakan *SADBOT* sebagai Bot Penghibur anda_\n\n_Gunakan perintah *!menu* untuk melihat Seluruh Perintah Bot_\n\n_Gunakan *!rules* untuk melihat Peraturan penggunaan Bot!_\n\n_Jangan lupa Follow Instagram Developer *@rzkytmgrr* untuk mendapatkan informasi lengkap tentang Bot! Kalian juga bisa request Fitur!_`);
};
