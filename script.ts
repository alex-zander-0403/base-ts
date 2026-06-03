// =========================================

// условные типы
type isArray<T> = T extends any[] ? true : false;

const data1: isArray<string> = false;
const data2: isArray<string[]> = true;

// --------------------

type User = {
  id: number;
  login: string;
};

type Error = {
  message: string;
};

type loginUser<T> = T extends User ? User : Error;

const userData: loginUser<User> = {
  id: 123,
  login: "qwe",
};

const errorData: loginUser<123> = { message: "login failed" };
