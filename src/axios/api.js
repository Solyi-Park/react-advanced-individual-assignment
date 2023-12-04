import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  //timeout - axios 콜을 했을때, 서버에 통신을 요청했을 때 언제까지 기다릴 건지의 기준!
  // 그 기준만큼 기다렸는데 요청이 안오면 error 내보냄! 
//   timeout: 1
});

instance.interceptors.request.use(
  //요청을 보내기 전 수행되는 함수
  function (config) {
    console.log('인터셉터 요청 성공!');
    return config; // 프리패스!!
  },

  //오류요청을 보내기 전 수행되는 함수
  function (error) {
    console.log('인터셉터 요청 오류!');
    return Promise.reject(error);
  }
);


instance.interceptors.response.use(
  // 응답을 내보내기 전 수행되는 함수
  function (response) {
    console.log('인터셉터 응답을 받았습니다!');
    return response;
  },

  //오류 응답을 내보내기 전 수행되는 함수
  function (error) {
    console.log('인터셉터 응답 오류 발생')
    return Promise.reject(error)
  }
);
export default instance;