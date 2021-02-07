module.exports = async (client, event) => {
  const { action, who, chat } = event;

  const botNumber = await client.getHostNumber();

  if (action === 'add') {
    console.log('bug!!!!');
  } else {
    if (who === botNumber) return;
    return await client.sendTextWithMentions(chat, `Selamat Jalan @${who.split('@')[0]} semoga diterima di sisi yang maha kuasa`);
  }
};
