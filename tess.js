const Tesseract =require("tesseract.js");

const worker = Tesseract.createWorker({
  logger: (m) => console.log(m),
});

async function captchaToText(){
  await worker.load();
  await worker.loadLanguage("eng");
  await worker.initialize("eng");
  const {
    data: { text },
  } = await worker.recognize(
    __dirname+"/images/captcha.jpg"
  );
  
  await worker.terminate();
  return text;
  };

  module.exports=captchaToText;
