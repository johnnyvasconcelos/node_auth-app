import { user } from '../models/user';

export const controllerRegister = async (req, res) => {
  const { email, password, username } = req.body;

  const newUser = await user.create({ email, password, username });

  res.send(newUser);
};
