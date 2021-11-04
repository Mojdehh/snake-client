const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Successfuly connected to game server');
  });

  conn.on('connect', (data) => {
    conn.write('Name: Moj');
    // for (let i = 0; i < 10; i++) {
    //   setTimeout(() => {
    //     conn.write('Move: up');
    //   }, 1000 * i);
    // }
    conn.write('Move: up');
  });


  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;

};

module.exports = {connect};