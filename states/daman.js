const requestPauser = require('../utils/requestPauser')

async function captchaHandling(page, link, time_now) {
  await page.goto(link)
}

async function daman(pn) {
  const URL = `https://ceodaman.nic.in/ElectoralRoll/PhotoER2022_F/pdf/English/A00100${
    pn < 10 ? pn.toString().padStart(2, '0') : pn
  }.PDF`

  await requestPauser(URL, captchaHandling)
}

module.exports = daman
// daman(null, null, 10)
