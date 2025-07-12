import{generateToken} from"../utils/tokengenerator.js"

const default_user ={
 // id:1,
  email:"eric@gmail.com",
  password:"ericitow123",
}

export async function login(req, res) {
  const { email, password } = req.body;
  if (email === default_user.email
      && password === default_user.password) {
    const token = generateToken(default_user);
    res.json({ token });
  } else {
    res.sendStatus(401);
  }
}
