import API from '../api/api'; // ⬅️ your custom axios instance
import MockAdapter from 'axios-mock-adapter';

export function setupLoginMock() {
  const mock = new MockAdapter(API, { delayResponse: 500 });

  mock.onPost("/api/auth/login").reply(200, {
    id: 567,
    firstName: "Ivan",
    lastName: "Ivanov",
    login: "ivanov9a",
    className: "10B",
    role: "STUDENT"
  });

  console.log("✅ Login mock is active!");
}
