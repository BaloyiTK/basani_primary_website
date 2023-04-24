import asyncHandler from "express-async-handler";
import { sendEmail } from "../utils/sendEmail.js";

// Define an async function for getting user details
const sendEmil = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  res.send(name + "" + email + " " + message);
  if (!name || !email || !message) {
    res.send("fill all fields");
  }

  sendEmail(name, email, message);
});

export default sendEmil;
