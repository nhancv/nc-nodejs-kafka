const fs = require('fs');
const path = require('path');
const workingDir = path.join(__dirname, 'dumps');
if (!fs.existsSync(workingDir)) {
  fs.mkdirSync(workingDir);
}

const workingFile = path.join(workingDir, 'sample.txt');

function getFilesizeInBytes(fPath) {
  try {
    const stats = fs.statSync(fPath);
    return stats.isFile() ? stats.size : 0;
  } catch (error) {
    return 0;
  }
}

function writeToFile(stream, fPath, index = 1, step = 1000000, maxFileSizeMB = 500) {
  const length = index + step
  stream.once('finish', function(fd) {
    const fileSizeinMB = getFilesizeInBytes(fPath) / 1000000.0
    if (fileSizeinMB < maxFileSizeMB) {
      execute(length, true)
    } else {
      console.log(`File finish size: ${getFilesizeInBytes(fPath) / 1000000.0} MB ~ Length: ${length -1} rows`)
    }
  })
  stream.once('open', function(fd) {
    for (var i = index; i < length; i++) {
      stream.write(`Row${i}\n`)
    }
    stream.end()
  })
}

function execute(index = 1, append = false) {
  const stream = fs.createWriteStream(workingFile, { flags: append ? 'a' : 'w' });
  writeToFile(stream, workingFile, index);
}
execute();
