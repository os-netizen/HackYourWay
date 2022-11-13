const requestPauser = require('../utils/requestPauser')

async function captchaHandling(page, link, time_now) {
  await page.goto(link)
}

async function chandigarh(dist, ac, pn) {
  if (pn < 10) {
    pn = '00' + pn
  } else if (pn < 100) {
    pn = '0' + pn
  }
  const URL = `https://ceochandigarh.gov.in/sites/default/files/polling_files/w0010${pn}.pdf`

  await requestPauser(URL, captchaHandling)
}

module.exports = chandigarh
// gujarat(null, 3, 8);
chandigarh(null, null, 9)
