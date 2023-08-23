const { getIpiAdress } = require("./utils/functions");
require("dotenv").config();
const Service = require("node-windows").Service;
const dir = require("path").join(__dirname, "server.js");
const IP = getIpiAdress();
const PORT = process.env.PORT;
// Create a new service object
const svc = new Service({
  name: "API SFTP MANAGER",
  description: "The nodejs web server.",
  script: dir,
  env: {
    name: "NODE_ENV",
    value: "production",
  },
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on("install", function () {
  svc.start();
});

// Just in case this file is run twice.
svc.on("alreadyinstalled", function () {
  console.log("This service is already installed.");
});

// Listen for the "start" event and let us know when the
// process has actually started working.
svc.on("start", function () {
  console.log(
    svc.name +
      " started!\nVisit http://" +
      IP +
      ":" +
      PORT +
      " to see it in action."
  );
});

// Install the script as a service.
console.log("Installing to", dir);
svc.install();
