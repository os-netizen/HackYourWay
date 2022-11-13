const requestPauser = require('../utils/requestPauser');

async function captchaHandling(page, link, time_now){
  await page.goto(link);
}

async function gujarat(dist, ac, pn) {
  const URL = `https://erms.gujarat.gov.in/ceo-gujarat/DRAFT2022/0${ac < 10 ? ('0'+ac) : ac}/S06A${ac}P${pn}.pdf`;

  await requestPauser(URL, captchaHandling);
}

gujarat(null, 3, 8);
