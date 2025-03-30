let fs = require('fs');
let path = require('path');

const rootPath = process.cwd();
const dataDir = `${rootPath}/data`;
const indexFile = `${rootPath}/index.js`;

// Read the data directory
fs.readdir(dataDir, (err, files) => {
  if (err) throw err;

  // Filter and sort the files by extension
  const fileExtensions = files.filter(file => /\.json$/.test(file)).sort((a, b) => a.name.localeCompare(b.name));

  console.log('File extensions:', fileExtensions);

  let dataMap = {};

  // Process each JSON file
  fileExtensions.forEach(file => {
    fs.readFile(`${dataDir}/${file}`, (err, jsonData) => {
      if (err) throw err;

      const jsonDataObject = JSON.parse(jsonData);
      Object.keys(jsonDataObject).forEach(key => {
        let value = jsonDataObject[key];
        dataMap[value] = value;
      });

      console.log(`Processed ${file}, mapping to:`, dataMap);
    });
  });

  // Write the mapped data back to an index.js file
  fs.writeFile(indexFile, `module.exports = {${dataMap.join(', ')};}`, (err) => {
    if (err) throw err;

    console.log('Index.js written successfully');
  });
});
