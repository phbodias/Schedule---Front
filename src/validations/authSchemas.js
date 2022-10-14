import * as yup from "yup";

export const signupSchema = yup.object().shape({
  name: yup.string().min(3).max(45).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(25).required(),
  profilePic: yup.string().required(),
});

export const signinSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(25).required(),
});
