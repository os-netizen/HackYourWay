const captcha = require('../tess');
const requestPauser = require('../utils/requestPauser');

async function captchaHandling(page, link, time_now){
  await page.goto(link);
  await page.waitForSelector('#Image2');
  // Take the element to be captured
  const element = await page.$("#Image2");
  await element.screenshot({
    path: `images/andhra-captcha-${time_now}.jpg`
  });
  const text = await captcha(`/images/andhra-captcha-${time_now}.jpg`);
  console.log(text);
  // await page.type('input[name=txtVerificationCode]', text);
  // await page.$("#btnSubmit").click();
  // delete image
  await page.waitForTimeout(10000);
  // close browser
}

// https://ceoaperolls.ap.gov.in/AP_Eroll_2023/Popuppage?partNumber=141&roll=EnglishMotherRoll&districtName=DIST_15&acname=106&acnameeng=A106&acno=106&acnameurdu=106
async function andhra(dist, ac, pn){
  const URL = `https://ceoaperolls.ap.gov.in/AP_Eroll_2023/Popuppage?partNumber=${pn}&roll=EnglishMotherRoll&districtName=DIST_${dist}&acname=${ac}&acnameeng=A${ac}&acno=${ac}&acnameurdu=${ac}`;

  await requestPauser(URL, captchaHandling);
  // Do somehting with pdf [take epic id too above]
}

module.exports = andhra;
// andhra(15, 106, 141);