// import { user } from '../models/user.js';

import { emailService } from '../email';

export const controllerRegister = async (req, res) => {
  const { email /* password, username */ } = req.body;

  // const newUser = await user.create({ email, password, username });

  emailService.sendConfirmEmail(email);

  // res.send(newUser);

  res.redirect('/confirm-email');
};
