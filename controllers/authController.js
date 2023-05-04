import JWT from "jsonwebtoken";

import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../utils/authUtil.js";

// registerController
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    // validations
    if (!name) { return res.send({ message: 'Name is Required' }) }
    if (!email) { return res.send({ message: 'Email is Required' }) }
    if (!password) { return res.send({ message: 'Password is Required' }) }
    if (!phone) { return res.send({ message: 'Phone no is Required' }) }
    if (!address) { return res.send({ message: 'Address is Required' }) }

    // check user
    const existingUser = await userModel.findOne({ email })

    // existing user
    if (existingUser) {
      return res.status(200).send({
        sucess: false,
        message: 'Allready Registered Please Login'
      })
    }

    // register user
    const hashedPassword = await hashPassword(password)

    // save user
    const user = await new userModel({ name, email, password: hashedPassword, phone, address }).save()

    res.status(201).send({
      sucess: true,
      message: 'User Registered Successfully',
      user
    })

  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: 'Error in registration',
      error
    })
  }
};


// loginController
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validations
    if (!email || !password) {
      return res.status(404).send({
        sucess: false,
        message: 'Invalide email or password'
      })
    }

    // check user
    const user = await userModel.findOne({ email })

    if (!user) {
      return res.status(404).send({
        sucess: false,
        message: 'Email is not registered'
      })
    }

    const matchPassword = await comparePassword(password, user.password)

    if (!matchPassword) {
      return res.status(200).send({
        sucess: false,
        message: 'Invalide Password'
      })
    }

    // generate token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" })

    res.status(200).send({
      sucess: true,
      message: 'Login Successfully',
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token
    })


  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: 'Error in logging',
      error
    })
  }
};

// testController
export const testController = (req, res) => {
  res.send('protected route');
}

