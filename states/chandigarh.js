const requestPauser = require('../utils/requestPauser')

async function captchaHandling(page, link, time_now) {
  await page.goto(link)
}

async function chandigarh(dist, ac, pn) {
  const URL = `https://ceochandigarh.gov.in/sites/default/files/polling_files/w0010${pn.toString().padStart(3, "0")}.pdf`

  await requestPauser(URL, captchaHandling)
}

module.exports = chandigarh
// chandigarh(null, null, 9)
