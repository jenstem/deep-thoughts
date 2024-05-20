const { v4: uuidv4 } = require("uuid");

const params = (fileName) => {
    const myFile = fileName.originalname.split(".");
    const fileType = myFile[myFile.length - 1];

    const imageParams = {
        Bucket: 'user-images-31edcf58-e63f-4417-b7fa-f226c8e90588',
        Key: `${uuidv4()}.${fileType}`,
        Body: fileName.buffer,
        ACL: 'public-read' // allow read access to this file
    };

    return imageParams;
};

module.exports = params;
