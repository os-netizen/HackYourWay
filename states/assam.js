const requestPauser = require('../utils/requestPauser');

async function captchaHandling(page, link, time_now){
  await page.goto(link);
}

async function assam(dist, ac, pn){
  const URL = `http://103.8.249.227:8080/voterlist/pdfroll/D${dist}/A${ac}/MotherRoll/S03A${ac}P${pn}.pdf`;

  await requestPauser(URL, captchaHandling);
  // Do somehting with pdf [take epic id too above]
}

module.exports = assam;
//assam(9, 32, 1);
