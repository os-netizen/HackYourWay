const pdf2img = require("pdf-img-convert");
const fs=require('fs');

(async function () {
  pdfArray = await pdf2img.convert("./pdfs/tl1.pdf");
  console.log("saving");
  // TODO: check number of iterations
  for (i = 2; i < pdfArray.length-1; i++) {
    fs.writeFile("./images/roll/output" + i + ".png", pdfArray[i], function (error) {
      if (error) {
        console.error("Error: " + error);
      }
    });
  }

  // TODO: delete images after use
})();
