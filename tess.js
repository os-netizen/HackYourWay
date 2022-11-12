const Tesseract = require("tesseract.js");

const worker = Tesseract.createWorker({
  logger: (m) => console.log(m)
});

async function captchaToText(imageLink){
  await worker.load();
  await worker.loadLanguage("eng");
  await worker.initialize("eng");
  const {
    data: { text },
  } = await worker.recognize(__dirname+imageLink);
  // console.log(text)
  await worker.terminate();
  return text;
};

module.exports = captchaToText;
