// import { user } from '../models/user.js';
import { v4 } from 'uuid';

import { emailService } from '../email.js';

export const controllerRegister = async (req, res) => {
  const { email /* password, username */ } = req.body;

  // const newUser = await user.create({ email, password, username });

  const token = v4();

  await emailService.sendConfirmEmail(email, token);

  // res.send(newUser);

  res.redirect('/confirm-email');
};
