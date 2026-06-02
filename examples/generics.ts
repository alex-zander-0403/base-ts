interface User {
  login: string;
  password: string;
}

interface Product {
  id: number;
  data: string[];
}

interface ApiResponse<T> {
  status: "success" | "error";
  result: T;
}

// =======

const user: ApiResponse<User> = {
  status: "success",
  result: {
    login: "alex",
    password: "123",
  },
};

const product: ApiResponse<Product> = {
  status: "success",
  result: {
    id: 33,
    data: ["hello", "wtf"],
  },
};
