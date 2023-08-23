const Service = require("node-windows").Service;
const dir = require("path").join(__dirname, "server.js");
// Create a new service object
const svc = new Service({
  name: "API SFTP MANAGER",
  script: dir,
});

// Listen for the "uninstall" event so we know when it's done.
svc.on("uninstall", function () {
  console.log("Uninstall complete.");
  console.log("The service exists: ", svc.exists);
});

// Uninstall the service.
svc.uninstall();