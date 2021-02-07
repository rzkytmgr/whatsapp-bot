const axios = require('axios');
const surahName = require('./json/surahlist.json');

const ayat = async (arguments) => {
  return new Promise(async (resolve, reject) => {
    try {
      const args = {
        surah: arguments[0],
        ayah: surahName[arguments[1].toLowerCase()] || arguments[1],
      };

      const fetch = await axios.get(`https://api.quran.sutanlab.id/surah/${args.surah}/${args.ayah}`);
      const result = fetch.data;
      if (result.code !== 200) throw Exception;
      const data = result.data;
      const text = `${data.surah.name.transliteration.id} [${data.surah.name.translation.id}] [${args.surah}:${args.ayah}] - ${data.surah.name.short}\n\n${data.text.arab}\n\n_*Artinya :*_ ${data.translation.id}`;
      resolve(text);
    } catch (Exception) {
      reject('Error Quran Ayat!' + Exception);
    }
  });
};

const surah = async (arguments) => {
  return new Promise(async (resolve, reject) => {
    try {
      const getSurah = surahName[arguments[0].toLowerCase()] || arguments[0];
      const fetch = await axios.get(`https://api.quran.sutanlab.id/surah/${getSurah}`);
      const result = fetch.data;
      if (result.code !== 200) throw Exception;
      const data = result.data;
      const collectedAyah = data.verses.map((res) => `${res.number.inSurah}. ${res.text.arab}`);
      const text = `${data.name.transliteration.id} [${data.name.translation.id}] - ${data.name.short}\n\n${data.preBismillah !== null ? `${data.preBismillah.text.arab}\n\n` : ''} ${collectedAyah.join('\n')}`;
      resolve(text);
    } catch (Exception) {
      reject('Error Quran Surah!');
    }
  });
};

const murottal = async (arguments) => {
  return new Promise(async (resolve, reject) => {
    try {
      const args = {
        surah: arguments[0],
        ayah: surahName[arguments[1].toLowerCase()] || arguments[1],
      };

      const fetch = await axios.get(`https://api.quran.sutanlab.id/surah/${args.ayah}/${args.surah}`);
      const data = fetch.data.data;
      resolve(data.audio.primary || data.audio.secondary[0]);
    } catch (Exception) {
      reject('Error Quran Murottal!');
    }
  });
};

const tafsir = async (arguments) => {
  return new Promise(async (resolve, reject) => {
    try {
      const args = {
        surah: arguments[0],
        ayah: surahName[arguments[1].toLowerCase()] || arguments[1],
      };

      const fetch = await axios.get(`https://api.quran.sutanlab.id/surah/${args.ayah}/${args.surah}`);
      const data = fetch.data.data;
      resolve(`Q.S ${data.surah.name.transliteration.id} [${data.surah.name.translation.id}] - ${data.surah.name.long}:${data.number.inSurah}\n\n*Tafsir :* ${data.tafsir.id.short}`);
    } catch (Exception) {
      reject('Error Quran Tafsir!');
    }
  });
};

module.exports = { ayat, surah, murottal, tafsir };
