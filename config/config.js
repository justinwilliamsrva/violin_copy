require("dotenv").config();

module.exports = {
  development: {
    username: "boi4l8tkglm0k2h8",
    password: "s42bvchd1u9kea5s",
    database: "dnam8nx9wdqay9r5",
    host: "sh4ob67ph9l80v61.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",

    // username: process.env.LOCAL_USERNAME,
    // password: process.env.LOCAL_PASSWORD,
    // database: process.env.LOCAL_DATABASE,
    // host: "127.0.0.1",
    // host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
