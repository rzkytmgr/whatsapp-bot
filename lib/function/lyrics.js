const { requestLyricsFor, requestAuthorFor, requestTitleFor } = require("solenolyrics");

module.exports = async (title) => {
  return new Promise(async (resolve, rejecet) => {
    try {
      const author = (await requestAuthorFor(title)) || "Tidak diketahui";
      const fetchTitle = (await requestTitleFor(title)) || "Tidak diketahui";
      const lyrics = (await requestLyricsFor(title)) || undefined;
      if (!lyrics) return resolve(false);
      const text = `
_🧑‍🎤 *Dipopulerkan Oleh :* ${author}_
_🎵 *Judul Lagu :* ${fetchTitle}_

${lyrics}
      `;
      return resolve(text);
    } catch (exception) {
      return rejecet("Not found/Error Lyrics!");
    }
  });
};
