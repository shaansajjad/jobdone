import axios from "axios";

const SENDEMAIL = "https://jobdonedev.appskeeper.com/api/v1/users/signup";
const LOGINUSERS = "https://jobdonedev.appskeeper.com/api/v1/auth/login";
const SETPASSWORD =
  "https://jobdonedev.appskeeper.com/api/v1/users/set-password";
const PROFILESETUP =
  "https://jobdonedev.appskeeper.com/api/v1/users/profile-setup";
let config = {
  auth: {
    username: "job_done",
    password: "job@done@123",
  },
};

class ApiService {
  sendEmail(email) {
    console.log("debugger");
    return axios.post(SENDEMAIL, email, config);
  }
  setPassword(passwordData) {
    console.log("hey");
    return axios.put(SETPASSWORD, passwordData);
  }
  loginUsers(signInData) {
    return axios.post(LOGINUSERS, signInData);
  }
  profileSetup(data) {
    return axios.post(PROFILESETUP, data);
  }
}
export default new ApiService();
