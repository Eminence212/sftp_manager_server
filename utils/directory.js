const fsPromises = require("fs/promises");
const path = require("path");
const fs = require("fs");
const urlBase = path.join(__dirname, "..", "files");

const createLocalDirectory = (customer_name, folder_names = []) => {
  try {
    fs.mkdir(path.join(urlBase, customer_name), () => {
      folder_names.map((name) => {
        const folder = path.join(urlBase, customer_name, name);
        fs.mkdir(folder, (resp) => {});
      });
    });
  } catch (error) {
    console.log(`${error} `);
  }
};

const deleteLocalDirectory = (customer_name) => {
  try {
    fs.rm(
      path.join(urlBase, customer_name),
      { recursive: true, force: true },
      (rep) => {}
    );
  } catch (error) {
    console.log(`${error} `);
  }
};
const updateLocalDirectory = async (curr_name, new_name) => {
  const currPath = path.join(urlBase, curr_name);
  const newPath = path.join(urlBase, new_name);

  try {
    if (curr_name !== new_name && fs.existsSync(currPath)) {
      //delete current directory
      deleteLocalDirectory(curr_name);
      //create new directory
      createLocalDirectory(new_name, ["in", "out", "err", "arch"]);
    }
  } catch (error) {
    console.log(`${error} `);
  }
};

module.exports = {
  createLocalDirectory,
  deleteLocalDirectory,
  updateLocalDirectory,
};
