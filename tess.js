// const Tesseract =require("tesseract.js");
const tesseract = require("node-tesseract-ocr");

// const worker = Tesseract.createWorker({
//   logger: (m) => console.log(m),
// });

async function captchaToText() {
  // await worker.load();
  // await worker.loadLanguage("eng");
  // await worker.initialize("eng");
  // const {
  //   data: { text },
  // } = await worker.recognize(
  //   __dirname+"/images/captcha.jpg"
  // );

  // await worker.terminate();
  const config = {
    lang: "eng",
    oem: 1,
    psm: 3,
  };
  var t;
  console.log(__dirname)
  tesseract.recognize(__dirname + "/images/captcha.jpg", config)
    .then((text) => {
      t = text;
      console.log("Result:", text);
    })
    .catch((error) => {
      console.log(error.message);
    });
  return t;
}

captchaToText()
//module.exports = captchaToText;
