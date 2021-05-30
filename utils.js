const config = require("config");
const admin = require("firebase-admin");

const createImageUrl = (destination, filename) => {
  return "images" + destination.substring(16) + filename;
};
const createVideoUrl = (destination, filename) => {
  return "videos" + destination.substring(23) + filename;
};
const getImagePath = (image) => {
  return "./public/uploads" + image.substring(image.indexOf("images") + 6);
};

const isImage = (type) => {
  const mimeTypes = ["image/gif", "image/jpeg", "image/png"];
  return mimeTypes.includes(type);
};
const isVideo = (type) => {
  const mimeTypes = [
    "video/mp4",
    "video/x-flv",
    "video/MP2T",
    "	video/3gpp",
    "video/quicktime",
    "	video/x-msvideo",
    "	video/x-ms-wmv",
  ];
  return mimeTypes.includes(type);
};
const pushNotifications = async (tokens, title, message) => {
  const payload = {
    notification: { title, body: message },
  };
  const options = {
    priority: "high",
    timeToLive: 60 * 60 * 24,
  };
  const result = await admin.messaging().sendToDevice(tokens, payload, options);
  return result;
};
function covertMiliToDays(milli) {
  let minutes = Math.floor(milli / 60000);
  let hours = Math.round(minutes / 60);
  let days = Math.round(hours / 24);

  return (
    (days && { value: days, unit: "days" }) ||
    (hours && { value: hours, unit: "hours" }) || {
      value: minutes,
      unit: "minutes",
    }
  );
}
module.exports = {
  isImage,
  isVideo,
  createImageUrl,
  createVideoUrl,
  getImagePath,
  pushNotifications,
  covertMiliToDays,
};
