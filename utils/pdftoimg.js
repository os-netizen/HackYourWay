const pdf2img = require('pdf-img-convert')
const fs = require('fs')

async function pdfToImg(pdfPath) {
  pdfArray = await pdf2img.convert(pdfPath, { width: 1200, height: 1700 })
  // TODO: check number of iterations
  for (i = 2; i < pdfArray.length - 1; i++) {
    fs.writeFile(
      `../images/roll/${pdfPath}` + i + `.png`,
      pdfArray[i],
      function (error) {
        if (error) {
          console.error('Error: ' + error)
        }
      }
    )
  }

  // TODO: delete images after use
}

module.exports = pdfToImg
