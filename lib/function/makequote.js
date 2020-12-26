const makequote = (arguments) => {
  const split = arguments.join(" ").split("@");
  const phrase = split[1]
    .split(" ")
    .map((result, i) => {
      if (i !== 0 && i % 3 === 0) return result + "%0A";
      return result + "%20";
    })
    .join("");
  const author = split[0].replace(/[ ]/g, "%20");
  const randompic = Math.floor(Math.random() * (25 - 0) + 0);
  const finalText = `https://ejaceyke.sirv.com/umum/umum_${randompic}.jpg?text.0.text=${phrase}&text.0.position.gravity=center&text.0.size=52&text.0.color=ffffff&text.0.font.family=Poppins&text.0.font.weight=700&text.1.text=-%20${author}&text.1.position.gravity=center&text.1.position.y=20%25&text.1.size=20&text.1.font.family=Poppins`;
  return finalText;
};

module.exports = makequote;
