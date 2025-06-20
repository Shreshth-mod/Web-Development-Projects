const fs = require('fs');
// import * as Jimp from 'jimp'; // es module
// fs.readFile(
//     "coding-blocks-image.png" , 
//     {encoding: 'base64'},
//     (err, data)=>{
//     if (err) return console.log(err);
//     console.log(data);
//     }
// )

// let file =  fs.readFileSync("coding-blocks-image.png");
// console.log(file);

// let str = file.toString("base64");
// console.log(str);

// write file 
// fs.writeFileSync("image.txt" , str);

// fs.writeFile(
//     "image.txt",
//     str,
//     function (err){
//         if (err) console.log(err);
//         console.log("saved successfully");
//     }
// )

str = fs.readFileSync("image.txt", {encoding :'utf-8'});
let buffer = Buffer.from(str , 'base64');
console.log(buffer);    

fs.writeFileSync("coding-blocks-image.png" , buffer);


// jimp npm to reduce the size of the image
// Jimp.read('image.jpg', (err , image)=>{
//      if (err) throw err;
//      image
//      .resize(256,256)
//      .quality(60)  // set JPEG Quality 
//     .write('image-small.jpg')  // save 
// });


// async function compressImage() {
//   try {
//     const image = await Jimp.read('image.jpg'); 
//     await image
//       .resize(256, 256)      // Resize to 256x256
//       .quality(60)           // JPEG quality (for JPGs only)
//       .writeAsync('image-small.jpg'); // Save compressed image
//     console.log('Image saved as image-small.jpg');
//   } catch (err) {
//     console.error(' Error processing image:', err);
//   }
// }
// compressImage();

const Jimp = require('jimp');

Jimp.read('image.jpg')
  .then(image => {
    return image
      .quality(60)
      .writeAsync('image-small.jpg');
  })
  .catch(err => {
    console.error('Error processing image:', err);
  });