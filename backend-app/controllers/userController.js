const Users = require('../models/user_model');

async function getUsers(req, res) {
  try {
    // console.log("Fetching users...");
    const users = await Users.find();
    // console.log("Fetched users:", users);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


module.exports = {
  getUsers
};
