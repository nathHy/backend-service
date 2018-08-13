module.exports = {
  client: "pg",
  connection: {
    user: "spgchallenge",
    password: "password",
    host: "localhost",
    database: "spgchallenge",
    charset: "utf8",
    pool: { min: 0, max: 50 },
    debug:true
  }
};
