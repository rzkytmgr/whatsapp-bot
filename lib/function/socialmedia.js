const fbvideo = require("fbvideos");

exports.facebook = async (url) => {
  return new Promise(async (resolve, reject) => {
    const regex = /(https?):\/\/(?:www|m)\.(?:facebook.com|fb.me)\/[a-zA-Z0-9]*\/(?:videos|[a-zA-Z0-9]*)\/(?:videos|[0-9]*)/gi;
    if (!url.match(regex)) return resolve(false);
    try {
      const getVideo = await fbvideo.low(url);
      return resolve(getVideo.url);
    } catch {
      return reject("Error Facebook URL!");
    }
  });
};

exports.twitter = () => {};

exports.instagram = () => {};
