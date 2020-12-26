const brain = require("brainly-scraper");

const brainly = async (question) => {
  const fetch = await brain(question);
  const data = fetch.data[0];
  const pertanyaan = data.pertanyaan;
  const jawaban = data.jawaban;
  const mergeJawaban = jawaban.map((value, index) => `${index + 1}. ${value.text}`);
  return `_📔 *Pertanyaan :*_ ${pertanyaan}\n\n📖 Ada ${jawaban.length} jawaban didapatkan!\n\n${mergeJawaban.join("\n\n")}`;
};

module.exports = brainly;
