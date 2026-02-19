import fs from "fs";

const writeFile = async (path, data) => {
  try {
     fs.promises.writeFile(path, data);
    console.log("Data has been written to the file successfully.");
  } catch (err) {
    console.error("Error writing to the file:", err);
  }
};

writeFile("./example.txt", "This data is written using try catch.");