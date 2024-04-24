import { hash } from "bcrypt";
import { userModel } from "../models/UserModel.js";
// import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";
// export const registerController = async (req, res) => {
//   try {
//     const { name, email, password, phone, address } = req.body;

//     // validations

//     if (!name) {
//       return res.send({ message: "Name is required" });
//     }
//     if (!email) {
//       return res.send({ message: "Email is required" });
//     }
//     if (!password) {
//       return res.send({ message: "Password is required" });
//     }
//     if (!phone) {
//       return res.send({ message: "Phone is required" });
//     }
//     if (!address) {
//       return res.send({ message: "Address is required" });
//     }

//     // checking user
//     const exisitingUser = await userModel.findOne({ email });
//     // existing user
//     if (exisitingUser) {
//       return res.send(200).send({
//         success: true,
//         message: "Already Register please login",
//       });
//     }

//     const hashedPassword = await hashPassword(password);
//     const user = await new userModel({
//       name,
//       email,
//       phone,
//       address,
//       password: hashedPassword,
//     });

//       res.status(201).send({
//         success: true,
//         message: "User registered successfully",
//         user,
//       });
//     } catch (error) {
//       console.log(error);
//       res.status(500).send({
//         success: false,
//         message: "Error in registration",
//         error,
//       });
//     }
// //     try {
// //       await user.save();
// //       console.log("User saved successfully:", user);
// //       res.status(201).send({
// //         success: true,
// //         message: "User registered successfully",
// //         user,
// //       });
// //     } catch (error) {
// //       console.error("Error saving user to database:", error);
// //       res.status(500).send({
// //         success: false,
// //         message: "Error in registration",
// //         error,
// //       });
// //     }
// //   } catch (error) {
// //     console.log(error);
// //     res.status(500).send({
// //       success: false,
// //       message: "Error in registration",
// //       error,
// //     });
// //   }
// // };

// // POST LOGIN
// // export const registerController = async (req, res) => {
// //   try {
// //     const { name, email, password, phone, address } = req.body;

// //     // validations
// //     if (!name || !email || !password || !phone || !address) {
// //       return res.status(400).json({ message: "All fields are required" });
// //     }

// //     // checking user
// //     const existingUser = await userModel.findOne({ email });

// //     if (existingUser) {
// //       console.log("user already exists")
// //       return res.status(400).json({ message: "User already exists" });
// //     }

// //     const hashedPassword = await hashPassword(password);
// //     const user = new userModel({
// //       name,
// //       email,
// //       phone,
// //       address,
// //       password: hashedPassword,
// //     });

// //     await user.save();

// //     res.status(201).json({
// //       success: true,
// //       message: "User registered successfully",
// //       user,
// //     });
// //   } catch (error) {
// //     console.error("Error in registration:", error);
// //     res.status(500).json({
// //       success: false,
// //       message: "Error in registration",
// //       error: error.message,
// //     });
// //   }
// // };

// export const loginController = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     //validation

//     if (!email || !password) {
//       return res.status(404).send({
//         success: false,
//         message: "Invalid email or password",
//       });
//     }

//     // Check user

//     const user = await userModel.findOne({ email });

//     if (!user) {
//       return res.status(404).send({
//         success: false,
//         message: "Email not registered",
//       });
//     }

//     const match = await comparePassword(password, user.password);

//     if (!match) {
//       return res.status(404).send({
//         success: false,
//         message: "Password not matched",
//       });
//     }

//     // token

//     const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "7d",
//     });

//     res.status(200).send({
//       success: true,
//       message: "Login successfully",
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         phone: user.phone,
//         address: user.address,
//         role: user.role,
//       },
//       token,
//     });
//   } catch (error) {
//     console.log(error);
//     res.send(500).send({
//       success: false,
//       message: "Error in login",
//       error,
//     });
//   }
// };

// //forgot password controller
// const forgotPasswordController = async () => {
//   try {
//     const [email, answer, newPassword] = req.body;
//     if (!email) {
//       req.status(400).send({ message: "Email is required" });
//     }

//     if (!answer) {
//       req.status(400).send({ message: "Answer is required" });
//     }

//     if (!newPassword) {
//       req.status(400).send({ message: "New Password is required" });
//     }
//     //check

//     const user = await userModel.findOne({ email, answer });
//     //validation

//     if (!user) {
//       return res.status(404).send({
//         success: false,
//         message: "Wrong email or answer",
//       });
//     }
//     const hashed = await hashedPassword(newPassword);
//     await userModel.findByIdAndUpdate(user._id, { password: hashed });
//     res.status(200).send({
//       success: true,
//       message: "Password reset successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "Something went wrong",
//       error,
//     });
//   }
// };

// // test controller

// export const testController = (req, res) => {
//   res.send("Protected Routes");
// };
// import userModel from "../models/userModel.js";
// import orderModel from "../models/orderModel.js";

// import {hashPassword } from "./../helpers/authHelper.js";
// import JWT from "jsonwebtoken";

// import userModel from "../models/userModel.js";
// import orderModel from "../models/orderModel.js";

import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
// import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, answer } = req.body;
    //validations
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone no is Required" });
    }
    if (!address) {
      return res.send({ message: "Address is Required" });
    }
    if (!answer) {
      return res.send({ message: "Answer is Required" });
    }
    //check user
    const exisitingUser = await userModel.findOne({ email });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
      answer,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in Registeration",
      error,
    });
  }
};

//POST LOGIN
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
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
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
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

//forgotPasswordController

export const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    if (!email) {
      res.status(400).send({ message: "Emai is required" });
    }
    if (!answer) {
      res.status(400).send({ message: "answer is required" });
    }
    if (!newPassword) {
      res.status(400).send({ message: "New Password is required" });
    }
    //check
    const user = await userModel.findOne({ email, answer });
    //validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong Email Or Answer",
      });
    }
    const hashed = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

//test controller
export const testController = (req, res) => {
  try {
    res.send("Protected Routes");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
