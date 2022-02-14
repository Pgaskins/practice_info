//require("dotenv").config();
const fetch = require("node-fetch");

async function getUnsplashPhoto(keyword) {
  const url = `https://api.unsplash.com/photos/random/?client_id=${process.env.UNSPLASH_API_KEY}&query=${keyword}`;

  const res = await fetch(url);
  const data = await res.json();

  return data.urls.small;
}

// Validation Function used to Validate Function
function checkRequiredFields(req, res, next) {
  const { destination, location } = req.body;

  if (destination === undefined || location === undefined) {
    return res
      .status(400)
      .send({ error: "destination and location are required" });
    //if they did check for none required fields
  }

  next();
}

module.exports = {
  checkRequiredFields,
  getUnsplashPhoto,
};
