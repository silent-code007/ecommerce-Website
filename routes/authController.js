import { hash } from "bcrypt";
import { userModel } from "../models/UserModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    // validations

    if (!name) {
      return res.send({message: "Name is required" });
    }
    if (!email) {
      return res.send({message: "Email is required" });
    }
    if (!password) {
      return res.send({message: "Password is required" });
    }
    if (!phone) {
      return res.send({message: "Phone is required" });
    }
    if (!address) {
      return res.send({message: "Address is required" });
    }

    // checking user
    const exisitingUser = await userModel.findOne({ email });
    // existing user
    if (exisitingUser) {
      return res.send(200).send({
        success: true,
        message: "Already Register please login",
      });
    }

    const hashedPassword = await hashPassword(password);
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    });

    //   res.status(201).send({
    //     success: true,
    //     message: "User registered successfully",
    //     user,
    //   });
    // } catch (error) {
    //   console.log(error);
    //   res.status(500).send({
    //     success: false,
    //     message: "Error in registration",
    //     error,
    //   });
    // }
    try {
      await user.save();
      console.log("User saved successfully:", user);
      res.status(201).send({
        success: true,
        message: "User registered successfully",
        user,
      });
    } catch (error) {
      console.error("Error saving user to database:", error);
      res.status(500).send({
        success: false,
        message: "Error in registration",
        error,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};

// POST LOGIN

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation

    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Check user

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email not registered",
      });
    }

    const match = await comparePassword(password, user.password);

    if (!match) {
      return res.status(404).send({
        success: false,
        message: "Password not matched",
      });
    }

    // token

    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).send({
      success: true,
      message: "Login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.send(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

// test controller

export const testController = (req, res) => {
  res.send("Protected Routes");
};
