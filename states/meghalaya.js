const requestPauser = require("../utils/requestPauser");

async function captchaHandling(page, link, time_now) {
  await page.goto(link);
}

async function meghalaya(dist, ac, pn) {
    // TODO : INPUT ac AND pn AS STRINGS
  // TODO: ac is 3 digit and pn is 4 digit
  // dist is null
  const URL = `https://ceomeghalaya.nic.in/erolls/pdf/english/A${ac}/A${ac}${pn}.pdf`;

  await requestPauser(URL, captchaHandling);
  // Do somehting with pdf [take epic id too above]
}

//module.exports= meghalaya
meghalaya("", '003', '0009')
