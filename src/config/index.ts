type Config = {
  API: string;
};

const dev: Config = {
  API: "http://localhost:8080/api"
};

const prod: Config = {
  API: "http://localhost:8080/api"
};

export const CONFIG: Config =
  process.env.NODE_ENV === "development" ? dev : prod;
