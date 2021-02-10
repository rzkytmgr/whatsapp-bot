const { decryptMedia } = require('@open-wa/wa-automate');
const moment = require('moment');
const set = require('../settings');

// Library
const _function = require('../lib/function');
const _txt = require('../lib/text');
const color = require('../util/colors');

module.exports = async (client, message) => {
  try {
    const msgAmount = await client.getAmountOfLoadedMessages();
    if (msgAmount > 3000) await client.cutMsgCache();

    const { id, body, mimetype, type, t, from, sender, content, caption, author, isGroupMsg, chat, quotedMsg, quotedMsgObj, mentionedJidList } = message;
    const { name, shortName, pushname, formattedName } = sender;
    const { formattedTitle, isGroup, contact, groupMetadata } = chat;

    const botOwner = set.owner;
    const botGroup = set.support;
    const botPrefix = set.prefix;
    const botNumber = (await client.getHostNumber()) + '@c.us';

    const isAdmin = groupMetadata ? groupMetadata.participants.find((res) => res.id === sender.id).isAdmin : undefined;
    const isOwner = groupMetadata ? groupMetadata.participants.find((res) => res.id === sender.id).isSuperAdmin : undefined;
    const isBotAdmin = groupMetadata ? groupMetadata.participants.find((res) => res.id === botNumber).isAdmin : undefined;

    /**
     * Premium code / feature
     * Kamu bisa melakukan donasi terlebih dahulu untuk mendapatkan seluruh kode
     * lakukan donasi melalui link ini https://bit.ly/34IDvrD
     */

    const validMessage = caption ? caption : body;
    if (!validMessage || validMessage[0] != botPrefix) return;

    const command = validMessage.trim().split(' ')[0].slice(1);
    const arguments = validMessage.trim().split(' ').slice(1);
    const senderId = sender.id.split('@')[0] || from.split('@')[0];
    const urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

    // debug
    console.debug(color('green', '➜'), color('yellow', isGroup ? '[GROUP]' : '[PERSONAL]'), `!${command} | ${sender.id} ${isGroup ? 'FROM ' + formattedTitle : ''}`, color('yellow', moment().format()));

    /**
     * Premium code / feature
     * Kamu bisa melakukan donasi terlebih dahulu untuk mendapatkan seluruh kode
     * lakukan donasi melalui link ini https://bit.ly/34IDvrD
     */

    if (isGroup) {
      if (groupMetadata.participants.length < 10 && !botOwner.includes(groupMetadata.owner)) {
        await client.reply(from, `_⚠️ Ooops... maaf untuk menghidari grup SPAM, bot hanya dapat di gunakan di grup yang mempunyai member lebih dari 10, sedangkan member grup kamu hanya ada *${groupMetadata.participants.length}*_\n\n_Untuk informasi lebih lanjut silahkan tanyakan saya di instagram *@rzkytmgrr*_`, id);
        return client.leaveGroup(from);
      }
    }

    const allChats = await client.getAllChats();
    switch (command) {
      case 'resetlimit':
        /**
         * Premium code / feature
         * Kamu bisa melakukan donasi terlebih dahulu untuk mendapatkan seluruh kode
         * lakukan donasi melalui link ini https://bit.ly/34IDvrD
         */
        break;

      case 'unblock':
        if (senderId !== botOwner) return await client.reply(from, '_⛔ Perintah yang kamu maksud hanya dapat digunakan oleh Owner bot!_', id);
        await client.contactUnblock(arguments[0] + 'c.us');
        return await client.reply(from, '_🟢 Berhasil *Unblock* user!_', id);
        break;

      case 'leaveall':
        if (senderId !== botOwner) return await client.reply(from, '_⛔ Perintah yang kamu maksud hanya dapat digunakan oleh Owner bot!_', id);
        const allGroups = await client.getAllGroups();
        allGroups.forEach(async (group) => {
          if (!group.id !== botGroup) {
            await client.leaveGroup(group.id);
          }
        });
        return await client.reply(from, '_🟢 Bot Berhasil keluar dari semua grup yang ada!_', id);
        break;

      case 'resetrank':
        /**
         * Premium code / feature
         * Kamu bisa melakukan donasi terlebih dahulu untuk mendapatkan seluruh kode
         * lakukan donasi melalui link ini https://bit.ly/34IDvrD
         */
        break;

      case 'owner':
      case 'contact':
      case 'ownerbot':
        return await client.reply(from, '_👋 Hai, Mari berkomunikasi dengan owner, Instagram : *@rzkytmgrr*_', id);
        break;

      case 'clearall':
        if (senderId !== botOwner) return await client.reply(from, '_⛔ Perintah yang kamu maksud hanya dapat digunakan oleh Owner bot!_', id);
        allChats.forEach(async (chat) => {
          await client.clearChat(chat.id);
        });
        return await client.reply(from, '_🟢 Berhasil Membersihkan History Message Bot!_', id);
        break;

      case 'bc':
        if (senderId !== botOwner) return await client.reply(from, '_⛔ Perintah yang kamu maksud hanya dapat digunakan oleh Owner bot!_', id);
        if (arguments.length < 1) return;
        await allChats.forEach(async (chat) => {
          await client.sendText(chat.id, arguments.join(' '));
        });
        return await client.reply(from, '_🟢 Berhasil Broadcast kesemua Chat List Bot!_', id);
        break;

      case 'premium':
        /**
         * Premium code / feature
         * Kamu bisa melakukan donasi terlebih dahulu untuk mendapatkan seluruh kode
         * lakukan donasi melalui link ini https://bit.ly/34IDvrD
         */
        break;

      case 'ban':
        /**
         * Premium code / feature
         * Kamu bisa melakukan donasi terlebih dahulu untuk mendapatkan seluruh kode
         * lakukan donasi melalui link ini https://bit.ly/34IDvrD
         */
        break;

      case 'freespace':
        /**
         * Premium code / feature
         * Kamu bisa melakukan donasi terlebih dahulu untuk mendapatkan seluruh kode
         * lakukan donasi melalui link ini https://bit.ly/34IDvrD
         */
        break;

      case 'kickall':
        if (!isGroup) return await client.reply(from, '_⛔ Perintah ini hanya dapat di-pakai didalam grup!_', id);
        if (!isOwner) return await client.reply(from, '_⛔ Perintah ini hanya dapat di-gunakan oleh *Owner* grup saja!_', id);
        if (!isBotAdmin) return await client.reply(from, '_⚠️ Bot *Wajib* dijadikan *Admin* untuk menggunakan perintah ini!_', id);
        await client.reply(from, '_😏 Perintah dilaksanakan! Berharap kamu tau apa yang kamu lakukan!_', id);
        await groupMetadata.participants.forEach(async (participant) => {
          if (!participant.isSuperAdmin) await client.removeParticipant(from, participant.id);
        });
        break;

      case 'start':
        /**
         * Premium code / feature
         * Kamu bisa melakukan donasi terlebih dahulu untuk mendapatkan seluruh kode
         * lakukan donasi melalui link ini https://bit.ly/34IDvrD
         */
        break;

      case 'toxic':
        /**
         * Premium code / feature
         * Kamu bisa melakukan donasi terlebih dahulu untuk mendapatkan seluruh kode
         * lakukan donasi melalui link ini https://bit.ly/34IDvrD
         */
        break;

      case 'add':
        if (!isGroup) return await client.reply(from, '_⛔ Perintah ini hanya dapat di-gunakan didalam grup!_', id);
        if (!isAdmin) return await client.reply(from, '_⛔ Perintah ini hanya dapat di-gunakan oleh *Admin* grup saja!_', id);
        if (arguments.length !== 1) client.reply(from, '_⚠️ Contoh Penggunaan perintah : !add 62812....._', id);
        if (!isBotAdmin) return await client.reply(from, '_⚠️ Perintah ini hanya dapat digunakan ketika *Bot berstatus Admin* di grup ini!_', id);
        const isNumberValid = await client.checkNumberStatus(arguments[0] + '@c.us');
        if (isNumberValid.status === 200)
          await client
            .addParticipant(from, isNumberValid.id._serialized)
            .then(async () => await client.reply(from, '_🎉 Berhasil menambahkan Member, Berikan ucapan Selamat datang!_', id))
            .catch(async (error) => await client.reply(from, '_🥺 Gagal menambahkan member! kemungkinan member sudah diblock oleh Bot! untuk unblockir silahkan DM ke *@rzkytmgrr*_', id));
        break;

      case 'kick':
        if (!isGroup) return await client.reply(from, '_⛔ Perintah ini hanya dapat di-gunakan didalam grup!_', id);
        if (!isAdmin) return await client.reply(from, '_⛔ Perintah ini hanya dapat di-gunakan oleh *Admin* grup saja!_', id);
        if (mentionedJidList.length !== 1) client.reply(from, '_⚠️ Contoh Penggunaan perintah : !kick @mention_', id);
        if (!isBotAdmin) return await client.reply(from, '_⚠️ Perintah ini hanya dapat digunakan ketika *Bot berstatus Admin* di grup ini!_', id);
        const isKicked = await client.removeParticipant(from, mentionedJidList[0]);
        if (isKicked) return await client.reply(from, '_🎉 Berhasil Kick member Berikan Ucapan Selamat Tinggal!_', id);
        break;

      case 'promote':
        if (!isGroup) return await client.reply(from, '_⛔ Perintah ini hanya dapat di-gunakan didalam grup!_', id);
        if (!isAdmin) return await client.reply(from, '_⛔ Perintah ini hanya dapat di-gunakan oleh *Admin* grup saja!_', id);
        if (mentionedJidList.length !== 1) client.reply(from, '_⚠️ Contoh Penggunaan perintah : !promote @mention_', id);
        if (!isBotAdmin) return await client.reply(from, '_⚠️ Perintah ini hanya dapat digunakan ketika *Bot berstatus Admin* di grup ini!_', id);
        const isPromoted = await client.promoteParticipant(from, mentionedJidList[0]);
        if (isPromoted) return await client.reply(from, '_🎉 Berhasil promote member menjadi Admin/Pengurus Grup! Berikan Ucapan Selamat_', id);
        break;

      case 'demote':
        if (!isGroup) return await client.reply(from, '_⛔ Perintah ini hanya dapat di-gunakan didalam grup!_', id);
        if (!isAdmin) return await client.reply(from, '_⛔ Perintah ini hanya dapat di-gunakan oleh *Admin* grup saja!_', id);
        if (mentionedJidList.length !== 1) client.reply(from, '_⚠️ Contoh Penggunaan perintah : !demote @mention_', id);
        if (!isBotAdmin) return await client.reply(from, '_⚠️ Perintah ini hanya dapat digunakan ketika *Bot berstatus Admin* di grup ini!_', id);
        const isDemoted = await client.demoteParticipant(from, mentionedJidList[0]);
        if (isDemoted) return await client.reply(from, '_🎉 Berhasil demote Admin menjadi Member! Ucapkan Kasihan!_', id);
        break;

      case 'revoke':
        if (!isGroup) return await client.reply(from, '_⛔ Perintah ini hanya dapat di-gunakan didalam grup!_', id);
        if (!isAdmin) return await client.reply(from, '_⛔ Perintah ini hanya dapat di-gunakan oleh *Admin* grup saja!_', id);
        if (!isBotAdmin) return await client.reply(from, '_⚠️ Perintah ini hanya dapat digunakan ketika *Bot berstatus Admin* di grup ini!_', id);
        await client
          .revokeGroupInviteLink(from)
          .then(async (res) => await client.reply(from, '_🎉 Berhasil Me-reset ulang Invite Link Grup! gunakan !link untuk mendapatkan Link invite Group_', id))
          .catch((error) => console.log('revoke link error!'));
        break;

      case 'link':
      case 'invitelink':
        if (!isGroup) return await client.reply(from, '_⛔ Perintah ini hanya dapat di-gunakan didalam grup!_', id);
        if (!isAdmin) return await client.reply(from, '_⛔ Perintah ini hanya dapat di-gunakan oleh *Admin* grup saja!_', id);
        if (!isBotAdmin) return await client.reply(from, '_⚠️ Perintah ini hanya dapat digunakan ketika *Bot berstatus Admin* di grup ini!_', id);
        await client
          .getGroupInviteLink(from)
          .then(async (inviteLink) => await client.reply(from, `_🔗 Group Invite Link : *${inviteLink}*_`, id))
          .catch((error) => console.log('Invite link error'));
        break;

      case 'startvote':
        /**
         * Premium code / feature
         * Kamu bisa melakukan donasi terlebih dahulu untuk mendapatkan seluruh kode
         * lakukan donasi melalui link ini https://bit.ly/34IDvrD
         */
        break;

      case 'disconnect':
      case 'kickbot':
        if (!isGroup) return await client.reply(from, '_⛔ Perintah ini hanya dapat di-gunakan didalam grup!_', id);
        if (!isAdmin) return await client.reply(from, '_⛔ Perintah ini hanya dapat di-gunakan oleh *Admin* grup saja!_', id);
        client
          .reply(from, '_👋 Terimakasih, atas kenangan selama ini yang kita lalui, kalau kamu rindu gpp masukin aku lagi ke grup kamu! aku akan selalu ada buat kamu!_', id)
          .then(async () => await client.leaveGroup(from))
          .catch((error) => console.log('kickbot error'));
        break;

      case 'notif':
        /**
         * Premium code / feature
         * Kamu bisa melakukan donasi terlebih dahulu untuk mendapatkan seluruh kode
         * lakukan donasi melalui link ini https://bit.ly/34IDvrD
         */
        break;

      case 'adminmode':
      case 'silent':
        if (!isGroup) return await client.reply(from, '_⛔ Perintah ini hanya dapat di-gunakan didalam grup!_', id);
        if (!isAdmin) return await client.reply(from, '_⛔ Perintah ini hanya dapat di-gunakan oleh *Admin* grup saja!_', id);
        if (arguments.length !== 1) return await client.reply(from, '_⚠️ Contoh penggunaan Perintah : !silent on|off_', id);
        if (!isBotAdmin) return await client.reply(from, '_⚠️ Perintah ini hanya dapat digunakan ketika *Bot berstatus Admin* di grup ini!_', id);
        const isSilent = await client.setGroupToAdminsOnly(from, arguments[0].toLowerCase() === 'on');
        if (isSilent) return await client.reply(from, `_🎉 Berhasil set grup ke-*${arguments[0].toLowerCase() === 'on' ? 'Admin Mode' : 'Everyone Mode'}*_`, id);
        break;

      case 'p':
      case 'ping':
        if (!isGroup) return await client.reply(from, '_⛔ Perintah ini hanya dapat di-gunakan didalam grup!_', id);
        const allMembers = groupMetadata.participants.map((member) => `@${member.id.split('@')[0]}`);
        await client.sendTextWithMentions(from, `_😏 Summon no jutsu!_\n\n${allMembers.join('\n')}\n\n_🧒🏻 Follow instagram Developer *@rzkytmgrr*, untuk mendapatkan informasi lebih tentang Bot!_`);
        break;

      case 'votekick':
        /**
         * Premium code / feature
         * Kamu bisa melakukan donasi terlebih dahulu untuk mendapatkan seluruh kode
         * lakukan donasi melalui link ini https://bit.ly/34IDvrD
         */
        break;

      case 'voteinfo':
        /**
         * Premium code / feature
         * Kamu bisa melakukan donasi terlebih dahulu untuk mendapatkan seluruh kode
         * lakukan donasi melalui link ini https://bit.ly/34IDvrD
         */
        break;

      case 'vote':
        /**
         * Premium code / feature
         * Kamu bisa melakukan donasi terlebih dahulu untuk mendapatkan seluruh kode
         * lakukan donasi melalui link ini https://bit.ly/34IDvrD
         */
        break;

      case 'gjodoh':
      case 'matchme':
        if (!isGroup) return await client.reply(from, '_⛔ Perintah ini hanya dapat di-gunakan didalam grup!_', id);
        let countMember = groupMetadata.participants.length;
        let randomNumber = Math.floor(Math.random() * (countMember - 1) + 1);
        const randomMembers = groupMetadata.participants[randomNumber];
        const isSenderNumber = randomMembers.id === sender.id;
        await client.sendTextWithMentions(from, isSenderNumber ? `_👬🏼 Yha! jodoh kamu gak ada ditemukan di grup ini, nge-gay aja ya_` : `_❤️ Jodoh @${sender.id.split('@')[0]} kamu digrup ini adalah @${randomMembers.id.split('@')[0]}_`);
        break;

      case 'groupstats':
        if (!isGroup) return await client.reply(from, '_⛔ Perintah ini hanya dapat di-gunakan didalam grup!_', id);
        let { owner, creation, participants, desc } = groupMetadata;
        const creationTime = moment.unix(creation);
        await client.sendTextWithMentions(from, `_📃 Informasi Grup_\n\n_Nama : ${formattedTitle}_\n_Owner : @${owner.split('@')[0]}_\n_Total Member : ${participants.length}_\n_Tanggal Dibuat : ${creationTime.format('DD MMMM YYYY')}_\n_Jam Dibuat : ${creationTime.format('HH:mm:ss')}_\n_Deskripsi : ${desc ? desc : ''}_`, id);
        break;

      case 'kickme':
        if (!isGroup) return await client.reply(from, '_⛔ Perintah ini hanya dapat di-gunakan didalam grup!_', id);
        if (isOwner) return await client.reply(from, '_⛔ Owner grup/Orang ganteng tidak dapat dikick!_', id);
        await client.reply(from, '_😏 Aku harap kamu tau apa yang kamu lakukan!_', id);
        await client.removeParticipant(from, sender.id);
        break;

      case 'mystats':
        if (!isGroup) return await client.reply(from, '_⛔ Perintah ini hanya dapat di-gunakan didalam grup!_', id);
        const senderPicture = sender.profilePicThumbObj.eurl ? sender.profilePicThumbObj.eurl : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
        await client.sendImage(from, senderPicture, formattedName, `_🎉 Group Member [ *${formattedTitle}* ]_\n\n_Nama : ${pushname ? pushname : 'Tidak Diketahui'}_\n_Owner Status : ${isOwner ? 'Ya' : 'Tidak'}_\n_Admin Status : ${isAdmin ? 'Ya' : 'Tidak'}_`, id);
        break;

      case 'rob':
        /**
         * Premium code / feature
         * Kamu bisa melakukan donasi terlebih dahulu untuk mendapatkan seluruh kode
         * lakukan donasi melalui link ini https://bit.ly/34IDvrD
         */
        break;

      case 'richman':
        /**
         * Premium code / feature
         * Kamu bisa melakukan donasi terlebih dahulu untuk mendapatkan seluruh kode
         * lakukan donasi melalui link ini https://bit.ly/34IDvrD
         */
        break;

      case 'pick':
        if (!isGroup) return await client.reply(from, '_⛔ Perintah ini hanya dapat di-gunakan didalam grup!_', id);
        if (arguments.length < 1) return await client.reply(from, '_Contoh penggunaan perintah : !pick <sifat>_', id);
        const pickSomeone = groupMetadata.participants[Math.floor(Math.random() * groupMetadata.participants.length)];
        await client.sendTextWithMentions(from, `_👦🏼 ${arguments.join(' ')} di grup ini adalah @${pickSomeone.id.split('@')[0]}_`);
        break;

      case 'voice':
        if (arguments.length < 1) return await client.reply(from, '_⚠️ Contoh Penggunaan Perintah: !voice <kode> <kalimat>_', id);
        const voiceUrl = _function.voiceUrl(arguments);
        await client.sendPtt(from, voiceUrl, id);
        break;

      case 'menu':
        return await client.reply(from, _txt.menu, id);
        break;

      case 'info':
        return await client.reply(from, _txt.info, id);

      case 'source':
        return await client.reply(from, _txt.source, id);

      case 'rules':
        return await client.reply(from, _txt.rules, id);
        break;

      case 'faq':
        return await client.reply(from, _txt.faq, id);
        break;

      case 'support':
        await client.addParticipant(botGroup, sender.id);
        return await client.reply(from, 'Kamu sudah ditambahkan kedalam Grup Official Bot Ini!');
        break;

      case 'donate':
      case 'donasi':
        return await client.reply(from, _txt.donate, id);
        break;

      case 'quran':
      case 'quranayat':
        if (arguments.length != 2) return await client.reply(from, '_⚠️ Contoh Penggunaan Perintah : !quranayat <surah> <ayat>_', id);
        const ayah = await _function.quran.ayat(arguments);
        await client.reply(from, ayah, id);
        break;

      case 'quransurah':
        if (arguments.length != 1) return await client.reply(from, '_⚠️ Contoh Penggunaan Perintah : !quransurah <surah>_');
        const surah = await _function.quran.surah(arguments);
        await client.reply(from, surah, id);
        break;

      case 'murotal':
      case 'murrotal':
      case 'murottal':
        if (arguments.length != 2) return await client.reply(from, '_⚠️ Contoh Penggunaan Perintah : !quranayat <surah> <ayat>_', id);
        const murottalAudio = await _function.quran.murottal(arguments);
        await client.sendPtt(from, murottalAudio, id);
        break;

      case 'tafsir':
        if (arguments.length != 2) return await client.reply(from, '_⚠️ Contoh Penggunaan Perintah : !quranayat <surah> <ayat>_', id);
        const tafsir = await _function.quran.tafsir(arguments);
        await client.reply(from, tafsir, id);
        break;

      case 'quotes':
        break;

      case 'makequote':
        if (arguments.join(' ').split('@').length < 2) return await client.reply(from, '_⚠️ Contoh Penggunaan Perintah : !makequote <nama>@<kalimat>_', id);
        const getMakequote = _function.makequote(arguments);
        await client.sendImage(from, getMakequote, sender.id, '', id);
        break;

      case 'mirip':
        if (mentionedJidList.length > 0 || arguments.length < 1) return await client.reply(from, '_⚠️ Contoh Penggunaan Perintah: !mirip <nama>_', id);
        const listNama = ['Udin', 'Uzumaki Bayu', 'Saburo', 'Saruto', 'Yang Lek', 'Uchiha Roy', 'DPR yang korupsi, gendut gendut gak berotak', 'Monyet', 'Maling kandang', 'Maling Dalaman'];
        await client.reply(from, `_👦🏼 *${arguments.join(' ')}* Mirip dengan ${listNama[Math.floor(Math.random() * listNama.length)]}_`, id);
        break;

      case 'gay':
        if (mentionedJidList.length > 0 || arguments.length < 1) return await client.reply(from, '_⚠️ Contoh Penggunaan Perintah: !gay <nama>_', id);
        const gayPercentage = Math.floor(Math.random() * 100);
        await client.reply(from, `_👬🏻 Tingkat gay *${arguments.join(' ')}* sebesar ${gayPercentage}%_`, id);
        break;

      case 'brainly':
        if (arguments.length < 1) return client.reply(from, '_⚠️ Contoh Penggunaan Perintah : !brainly <pertanyaan>_', id);
        const getBrainly = await _function.brainly(arguments.join(' '));
        await client.reply(from, getBrainly, id);
        break;

      case 'sticker':
      case 'stiker':
        if (!mimetype) return await client.reply(from, '_⚠️ Contoh Penggunaan Perintah : kirim sebuah gambar yang ingin dijadikan stiker lalu berikan caption !stiker_', id);
        if (!mimetype.includes('image')) return await client.reply(from, '_⚠️ Pastikan kamu benar mengirim image (gambar)_', id);
        const imagemediadata = await decryptMedia(message);
        const imageb64 = `data:${mimetype};base64,${imagemediadata.toString('base64')}`;
        await client.sendImageAsSticker(from, imageb64);
        break;

      case 'gifsticker':
      case 'gifstiker':
        if (!mimetype) return await client.reply(from, '_⚠️ Contoh Penggunaan Perintah : kirim sebuah video pendek yang ingin dijadikan stiker lalu berikan caption !gifstiker_', id);
        if (!mimetype.includes('mp4')) return await client.reply(from, '_⚠️ Pastikan yang anda kirim adalah file video ber-ekstensi mp4_', id);
        const vidmediadata = await decryptMedia(message);
        const vidb64 = `data:${mimetype};base64,${vidmediadata.toString('base64')}`;
        await client.sendMp4AsSticker(from, vidb64, { fps: 10, startTime: `00:00:00.0`, endTime: `00:00:05.0`, loop: 0 });
        break;

      case 'giphysticker':
      case 'giphystiker':
        if (arguments.length < 1) return await client.reply(from, '_⚠️ Contoh Penggunaan Perintah : !giphystiker <giphy url/link>_', id);
        if (!arguments[0].match(urlRegex)) return await client.reply(from, '_⚠️ Pastikan yang kamu kirimkan adalah url yang benar_', id);
        await client.sendGiphyAsSticker(from, arguments[0]);
        break;

      case 'bucin':
        const katabucin = await _function.bucin();
        await client.reply(from, katabucin, id);
        break;

      case 'jodoh':
        const jodohSplit = arguments.join(' ').split('&');
        if (jodohSplit.length < 2) return await client.reply(from, '_⚠️ Contoh Penggunaan Perintah: !jodoh <nama kamu>&<nama seseorang>_');
        const jodohPersentase = Math.floor(Math.random() * 100);
        await client.reply(from, `_💖 Persentase kecocokan ${jodohSplit[0]} & ${jodohSplit[1]} sebesar ${jodohPersentase}_`, id);
        break;

      case 'hitme':
        /**
         * Premium code / feature
         * Kamu bisa melakukan donasi terlebih dahulu untuk mendapatkan seluruh kode
         * lakukan donasi melalui link ini https://bit.ly/34IDvrD
         */
        break;

      case 'hitrank':
        /**
         * Premium code / feature
         * Kamu bisa melakukan donasi terlebih dahulu untuk mendapatkan seluruh kode
         * lakukan donasi melalui link ini https://bit.ly/34IDvrD
         */
        break;

      case 'musik':
      case 'music':
        if (arguments.length < 1) return await client.reply(from, '_⚠️ Contoh Penggunaan Perintah : !music <title>_', id);
        const musicLink = await _function.youtubeMusic(arguments.join(' '));
        if (!musicLink) return await client.reply(from, '_⚠️ Pastikan music yang anda inginkan dibawah 10 menit!_', id);
        await client.sendPtt(from, musicLink, id);
        break;

      case 'downtiktok':
        return await client.reply(from, '_🛑 Fitur sedang dalam pengerjaan!_', id);
        break;

      case 'downtwitter':
        return await client.reply(from, '_🛑 Fitur sedang dalam pengerjaan_', id);
        break;

      case 'downfacebook':
        return await client.reply(from, '_🛑 Fitur sedang dalam pengerjaan_', id);
        break;

      case 'downinstagram':
        return await client.reply(from, '_🛑 Fitur sedang dalam pengerjaan_', id);
        break;

      case 'lyrics':
      case 'lirik':
        if (arguments.length < 1) return await client.reply(from, '_⚠️ Contoh Penggunaan Perintah : !lirik <judul lagu>_', id);
        const getLyrics = await _function.lirik(arguments.join(' '));
        if (!getLyrics) return await client.reply(from, `_🥺 Lirik *${arguments.join(' ')}* Tidak Ditemukan!_`, id);
        await client.reply(from, getLyrics, id);
        break;

      case 'short':
        if (arguments.length < 1) return await client.reply(from, '_⚠️ Contoh Penggunaan Perintah : !short <url/link yang ingin di perkecil>_', id);
        const getShortener = await _function.short(arguments[0]);
        await client.reply(from, `_${getShortener}_`, id);
        break;

      case 'corona':
      case 'covid':
        const getCovid = await _function.covid(arguments.join(' '));
        await client.reply(from, getCovid || '_⚠️ Negara yang kamu maksud sepertinya tidak ter-data!_', id);
        break;

      case 'cat':
        const getCat = await _function.cat();
        await client.sendImage(from, getCat || 'https://cdn2.thecatapi.com/images/uvt2Psd9O.jpg', `${t}_${sender.id}.jpg`, '', id);
        break;

      case 'dog':
        const getDog = await _function.dog();
        await client.sendImage(from, getDog || 'https://images.dog.ceo/breeds/cattledog-australian/IMG_3668.jpg', `${t}_${sender.id}.jpg`, '', id);
        break;

      case 'meme':
        const getMeme = await _function.meme();
        await client.sendFile(from, getMeme.picUrl || 'https://i.redd.it/5zm5i8eqw5661.jpg', `${t}_${sender.id}.${getMeme.ext}`, '', id);
        break;

      case 'anime':
        if (arguments.length < 1) return await client.reply(from, '_Penggunaan : !anime <judul>_', id);
        const getAnime = await _function.anime(arguments.join(' '));
        await client.sendImage(from, getAnime.picUrl, `${t}_${sender.id}.jpg`, getAnime.caption, id);
        break;

      case 'stikernobg':
        return await client.reply(from, '_⚠️ Fitur Proses perbaikan/pengerjaan!_', id);
        break;

      case 'stickertottext':
      case 'stikerteks':
        if (arguments.length < 1) return await client.reply(from, '_⚠️ Contoh Penggunaan Perintah : !stikerteks <kalimat>_', id);
        const teksLink = _function.tosticker(arguments);
        await client.sendStickerfromUrl(from, teksLink);
        break;

      case 'wikipedia':
      case 'wiki':
        if (arguments.length < 1) return await client.reply(from, '_⚠️ Contoh Penggunaan Perintah : !wiki <keywords>_', id);
        const getWiki = await _function.wiki(arguments.join(' '));
        if (!getWiki) return await client.reply(from, `_⚠️ *${arguments.join(' ')}* pada Wikipedia tidak ditemukan_`, id);
        await client.sendImage(from, getWiki.picUrl, `${t}_${sender.id}.jpg`, getWiki.caption, id);
        break;

      case 'imagequote':
        const getImagequote = await _function.imgquote();
        await client.sendImage(from, getImagequote, `${t}_${sender.id}.jpg`, '', id);
        break;

      case 'join':
        if (arguments.length < 1) return await client.reply(from, '_⚠️ Contoh Penggunaan Perintah : !join <grup link>_', id);
        const joinStatus = await client.joinGroupViaLink(arguments[0]);
        if (joinStatus === 406) return await client.reply(from, '_⚠️ Pastikan yang kamu masukkan adalah URL grup yang benar!_', id);
        if (joinStatus === 401) return await client.reply(from, '_⚠️ Bot Tidak dapat Join, karena baru-baru ini bot baru saja di kick dari grup tersebut!_', id);
        await client.reply(from, '_🚀 Meluncur! Bot berhasil masuk grup!_', id);
        break;

      case 'roll':
        const rollNumber = Math.floor(Math.random() * (6 - 1) + 1);
        await client.sendStickerfromUrl(from, `https://www.random.org/dice/dice${rollNumber}.png`);
        break;

      case 'weather':
      case 'cuaca':
        if (arguments.length < 1) return await client.reply(from, '_⚠️ Contoh Penggunaan Perintah : !cuaca <nama kota>_', id);
        const getWeather = await _function.weather(arguments.join(' '));
        await client.reply(from, getWeather, id);
        break;

      case 'movie':
        if (arguments.length < 1) return await client.reply(from, '_⚠️ Contoh Penggunaan Perintah : !movie <judul>_', id);
        const getMovie = await _function.movie(arguments.join(' '));
        if (!getMovie) return await client.reply(from, `_⚠️ ${arguments.join(' ')} Tidak ditemukan!_`, id);
        await client.sendImage(from, getMovie.moviePicture, `${t}_${sender.id}.jpeg`, getMovie.movieCaption, id);
        break;

      default:
        return console.debug(color('red', '➜'), color('yellow', isGroup ? '[GROUP]' : '[PERSONAL]'), `!${command} | ${sender.id} ${isGroup ? 'FROM ' + formattedTitle : ''}`, color('yellow', moment().format()));
    }

    return;
  } catch (err) {
    console.log(err);
  }
};
