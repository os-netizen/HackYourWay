const puppeteer = require('puppeteer');
const captcha = require('../tess');

// https://ceoaperolls.ap.gov.in/AP_Eroll_2023/Popuppage?partNumber=141&roll=EnglishMotherRoll&districtName=DIST_15&acname=106&acnameeng=A106&acno=106&acnameurdu=106
async function andhra(dist, ac, pn){
  const time_now = Date.now();
  const URL = `https://ceoaperolls.ap.gov.in/AP_Eroll_2023/Popuppage?partNumber=${pn}&roll=EnglishMotherRoll&districtName=DIST_${dist}&acname=${ac}&acnameeng=A${ac}&acno=${ac}&acnameurdu=${ac}`;
  try {
    browser = await puppeteer.launch({
      headless: false,
      args: ["--disable-setuid-sandbox"],
      'ignoreHTTPSErrors': true
    });
		let page = await browser.newPage();
    await page.goto(URL);

    // Wait for the required DOM to be rendered
		await page.waitForSelector('#Image2');
    // Take the element to be captured
    const element = await page.$("#Image2");
    await element.screenshot({
      path: `images/andhra-captcha-${time_now}.jpg`
    });
    const text = await captcha(`/images/andhra-captcha-${time_now}.jpg`);
    await page.type('input[name=txtVerificationCode]', text);
    await page.$("#btnSubmit").click();
    // await browser.close();
  } catch (error) {
    console.log("")
  }
}


andhra (15, 106, 141);