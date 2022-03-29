var config = {
  user: "sa",
  password: "ReleaseIT",
  server: "159.69.173.139",
  database: "WebERP",
  options: {
    trustServerCertificate: true,
    trustedconnection: true,
    enableArithAbort: true,
    instancename: "SQLEXPRESS",
  },
  port: 61433,
};
// var config = {
//   server: "DESKTOP-J9EU29A", //update me
//   authentication: {
//     type: "default",
//     options: {
//       userName: "sa", //update me
//       password: "1234", //update me
//     },
//   },
//   options: {
//     // If you are on Microsoft Azure, you need encryption:
//     encrypt: true,
//     database: "FirstDb", //update me
//   },
// };

module.exports = config;
