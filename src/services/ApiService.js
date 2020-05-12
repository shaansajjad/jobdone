import axios from "axios";

const SENDEMAIL = "https://jobdonedev.appskeeper.com/api/";

class ApiService {
  sendEmail(email) {
    console.log("debugger");
    return axios.post(SENDEMAIL, email);
  }
}
export default new ApiService();
