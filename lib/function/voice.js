const iso2 = {
  indonesia: "id",
  arabic: "ar",
  russia: "ru",
  japan: "ja",
  thailand: "th",
};

const filterIso = (countrycode) => {
  if (iso2[countrycode]) return iso2[countrycode];
  const isoArr = Object.entries(iso2)
    .map(([key, value]) => value)
    .filter((value) => value === countrycode)[0];
  return isoArr;
};

const voiceUrl = (arguments) => {
  const countrycode = arguments[0];
  const filterCC = filterIso(countrycode);
  const phrase = filterCC ? arguments.slice(1) : arguments;
  const filterPhrase = phrase.join("%20") || "Kamu mau ngomong apa";
  return `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${filterCC ? filterCC : "id"}&q=${filterPhrase}`;
};

module.exports = voiceUrl;
