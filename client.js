const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "135.23.223.133",
    port: 50542,

  });
  //Send data to server
  conn.on("connect", () => {
    conn.write("Name:HKD");
  });

  //Listen data from the server
  conn.on("data", (data) => {
    console.log(data);
  })

  conn.setEncoding("utf8");

  return conn;
}

module.exports = {
  connect
}