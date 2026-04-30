import API from '../api/api'; // 
import MockAdapter from 'axios-mock-adapter';

export function setupLoginMock() {
  const mock = new MockAdapter(API, { delayResponse: 500 });

  mock.onPost("/api/auth/login").reply(200, {
    id: 2,
    firstName: "Erkhembileg",
    lastName: "Batzorig",
    login: "25B1NUM2640",
    password: "password",
    className: "12",
    role: "STUDENT"
  });

}