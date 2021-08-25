const net = require("net");
const {IP, PORT} = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,

  });
  //Send data to server
  conn.on("connect", () => {
    conn.write("Name: HKD");
  });

  conn.on("connect", () => {
   setTimeout(() => {
    conn.write("Say: Hy Snake")
   }, 2000) ;
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