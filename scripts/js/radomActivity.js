const activities = require("../jsons/activities.json");

const randomActivity = function (client) {
  const activity = randomElement(activities);
  client.user.setActivity(activity.message, { type: activity.type });
  const time = randomIntFromInterval(1 * 60 * 1000, 15 * 60 * 1000); // entre 1min(60 000) e 15min
  sleep(time).then(() => randomActivity(client));
};

module.exports = {
  randomActivity,
  randomElement,
};

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
