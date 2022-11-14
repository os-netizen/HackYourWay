const requestPauser = require("../utils/requestPauser");

async function captchaHandling(page, link, time_now) {
  await page.goto(link);
}

async function punjab(ac, pn) {
  const URL = `https://ceopunjab.gov.in/erollpdf2/A${ac
    .toString()
    .padStart(3, "0")}/S19A${ac.toString().padStart(3, "0")}P${pn
    .toString()
    .padStart(3, "0")}.pdf`;

  console.log(URL)
  await requestPauser(URL, captchaHandling);
  // Do somehting with pdf [take epic id too above]
}

module.exports = punjab;
// punjab(1, 1)
