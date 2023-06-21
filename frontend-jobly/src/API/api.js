import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_BASE_URL || "https://jobly-backend-70rw.onrender.com";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    // console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    const res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies() {
    const res = await this.request(`companies`);
    return res.companies;
  }

  static async filterCompanies(formData) {
    let endpoint = "companies";
    const queryParams = [];

    if (formData.name !== "") queryParams.push(`name=${formData.name}`);
    if (formData.min !== "") queryParams.push(`minEmployees=${formData.min}`);
    if (formData.max !== "") queryParams.push(`maxEmployees=${formData.max}`);
    if (queryParams.length > 0)
      endpoint = `${endpoint}?${queryParams.join("&")}`;

    const res = await this.request(endpoint);
    return res.companies;
  }

  static async getJobs() {
    const res = await this.request(`jobs`);
    return res.jobs;
  }

  static async filterJobs(formData) {
    let endpoint = "jobs";
    const queryParams = [];

    if (formData.title !== "") queryParams.push(`title=${formData.title}`);
    if (formData.min !== "") queryParams.push(`minSalary=${formData.min}`);
    if (formData.equity !== "")
      queryParams.push(`hasEquity=${formData.equity}`);
    if (queryParams.length > 0)
      endpoint = `${endpoint}?${queryParams.join("&")}`;

    const res = await this.request(endpoint);
    return res.jobs;
  }

  static async signup(regData) {
    const endpoint = "auth/register";
    let data = regData;
    const res = await this.request(endpoint, data, "post");
    return res.token;
  }

  static async login(loginData) {
    const endpoint = "auth/token";
    let data = loginData;
    const res = await this.request(endpoint, data, "post");
    return res.token;
  }

  static async updateUser(profData, username) {
    const endpoint = `users/${username}`;
    let data = profData;
    const res = await this.request(endpoint, data, "patch");
    return res.user;
  }

  static async getUserInfo(username) {
    const endpoint = `users/${username}`;
    const res = await this.request(endpoint);
    return res.user;
  }

  // "users/:username/jobs/:id"
  static async applyToJob(username, jobId) {
    const endpoint = `users/${username}/jobs/${jobId}`;
    const res = await this.request(endpoint, {}, "post");
    console.log(res.applied);
    return res.applied;
  }
}

export default JoblyApi;
// for now, put token ("testuser" / "password" on class)
JoblyApi.token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";
