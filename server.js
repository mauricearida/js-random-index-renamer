var fs = require("fs");
var jsonFiles = fs.readdirSync("./json/");
const jsonFilesLength = jsonFiles.length;
const dirPath = "./json";
const dirNewPath = "./jsonn";
const fsExtra = require("fs-extra");

function generateRandomIndex(min, jsonFilesLength) {
  //Math.random() => between 0 and 1
  return Math.floor(Math.random() * (jsonFilesLength - min + 1) + min);
}

function makeNewDirectory(directoryname = "") {
  fs.mkdirSync(directoryname, (err) => {
    if (err) {
      throw err;
    }
    console.log(`Directory ${directoryname} has been created.`);
  });
}
function emptyDirectory(directoryname = "") {
  fsExtra.emptyDirSync(directoryname);
}
function removeDirectory(directoryname = "") {
  fs.rm(directoryname, { recursive: true }, (err) => {
    if (err) {
      throw err;
    }

    console.log(`${dirPath} is deleted!`);
  });
}
function loadJSON(filename = "") {
  return JSON.parse(
    fs.existsSync(filename) ? fs.readFileSync(filename).toString() : '""'
  );
}
function saveJSON(filename = "", json = '""') {
  return fs.writeFileSync(filename, JSON.stringify(json, null, 2));
}
function copyFilesToAnotherFolderAndRenameThem() {
  starter = 1;
  const randomdIndex = generateRandomIndex(1, jsonFilesLength - 1);

  makeNewDirectory(dirNewPath);

  for (i = 1; i < jsonFilesLength + 1; i++) {
    const data = loadJSON(`./json/${i}.json`);
    //  console.log("data", data);
    saveJSON(
      `./jsonn/${
        randomdIndex + i > jsonFilesLength ? starter++ : randomdIndex + i
      }.json`,
      data
    );
  }

  emptyDirectory(dirPath);

  for (i = 1; i < jsonFilesLength + 1; i++) {
    const data = loadJSON(`./jsonn/${i}.json`);
    //  console.log("data", data);
    saveJSON(`./json/${i}.json`, data);
  }
  removeDirectory(dirNewPath);
}
copyFilesToAnotherFolderAndRenameThem();

// function renameFiles(a = 5) {
//   x = 1;
//   c = 1;
//   for (i = 0; i < jsonFilesLength; i++) {
//     if (fs.existsSync(dirPath + `/${jsonFiles[i]}`)) {
//       console.log("1111111", jsonFiles);

//       fs.renameSync(
//         dirPath + `/${jsonFiles[i]}`,
//         dirPath + `/${a + i > jsonFilesLength ? x++ : a + i}.json`
//       );
//       console.log("2222222", jsonFiles, c++);
//     } else {
//       console.log("File not found");
//     }
//   }
// }
// renameFiles();

// function renameFiles(a = 15) {
//   x = 1;
//   for (i = 0; i < jsonFilesLength; i++) {
//     if (fs.existsSync(dirPath + `/${jsonFiles[i]}`)) {
//       console.log("jsonFilesLength1111", jsonFilesLength);

//       fs.renameSync(
//         dirPath + `/${jsonFiles[i]}`,
//         dirPath + `/${jsonFilesLength + i}.json`
//       );
//       console.log("2222222", jsonFiles);
//     } else {
//       console.log("File not found");
//     }
//   }
//   console.log("jsonFilesLength22222", jsonFilesLength);
//   for (i = 0; i < jsonFilesLength; i++) {
//     const fileToChange = jsonFilesLength + i;
//     console.log("fileToChange", fileToChange);
//     console.log("jsonFilesLength +i +1", jsonFilesLength + i + 1);
//     if (fs.existsSync(dirPath + `/${jsonFiles[fileToChange]}`)) {
//       console.log("87878788787");
//       fs.renameSync(
//         dirPath + `/${jsonFiles[jsonFilesLength + 1 + i]}`,
//         dirPath + `/${a + i > jsonFilesLength ? x++ : a + i}.json`
//       );
//     } else {
//       console.log("file nto found", dirPath + `/${fileToChange}.json`);
//     }
//   }
// }
// renameFiles();

// function deleteFile() {
//   if (fs.existsSync(dirPath + "/2.json")) {
//     fs.unlinkSync(dirPath + "/2.json");
//   } else {
//     console.log("File not found");
//   }
// }
// deleteFile();

// function readFile() {
//   if (fs.existsSync(dirPath + "/10.json")) {
//     fs.readFile(dirPath + "/10.json", "utf8", (err, data) => {
//       if (err) throw err;
//       console.log(data);
//     });
//   } else {
//     console.log("File not found");
//   }
// }
// readFile();
// ============================
// ============================
// const contentArray = [];
// function changeTheirNamesWithRndIndex(a = 20) {
//   for (i = 0; i < jsonFilesLength; i++) {
//     if (fs.existsSync(dirPath + `/${jsonFiles[i]}`)) {
//       console.log("111 1", `${i}`);
//       fs.readFile(dirPath + `/${jsonFiles[i]}`, "utf8", (err, data) => {
//         console.log("7777777777777777", `${i}`);

//         fs.writeFile(dirNewPath + `/${i}.json`, data, function (err, result) {
//           if (err) console.log("error", err);
//         });
//       });
//     } else {
//       console.log("File not found to read");
//     }
//   }
// }
// changeTheirNamesWithRndIndex();
// ============================
// ============================

// const numbersArray = [];
// function getFilesNamesSorted(array) {
//   const a = 100;

//   for (i = 0; i < array.length; i++) {
//     const value = parseInt(array[i].split(".")[0]);
//     numbersArray.push(value);
//   }
//   numbersArray.sort(compareFunction);
//   function compareFunction(a, b) {
//     return a - b;
//   }
//   return numbersArray;
// }

// function changeTheirNamesWithRndNumb(a = 100) {
//   getFilesNamesSorted(jsonFiles);
//   console.log("numbersZzZZZArray", numbersArray);

//   const newArr = numbersArray.map(myFunction);

//   function myFunction(num) {
//     return num + a;
//   }
//   console.log("newArr", newArr);
// }

// changeTheirNamesWithRndNumb();
