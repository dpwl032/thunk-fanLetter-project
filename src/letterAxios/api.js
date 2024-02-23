import axios from "axios";

const authApi = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
  headers: {
    "Content-Type": "application/json",
  },
});

authApi.interceptors.request.use(
  function (config) {
    // console.log("config", config);

    const at = localStorage.getItem("accessToken");
    if (at) {
      config.headers["Authorization"] = `Bearer ${at}`;
    }

    return config;
  },
  function (error) {
    console.log("인터셉터 요청 오류!");
    return Promise.reject(error);
  }
);

authApi.interceptors.response.use(
  function (response) {
    console.log("응답성공");
    return response;
  },
  function (error) {
    console.log("응답받기 실패", error.message);
    return Promise.reject(error);
  }
);

export default authApi;
