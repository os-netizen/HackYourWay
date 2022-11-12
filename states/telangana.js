const puppeteer = require("puppeteer");
const captcha = require("../tess");

// https://ceotserms2.telangana.gov.in/ts_erolls/Popuppage.aspx?partNumber=125&roll=EnglishMotherRoll&districtName=DIST_16&acname=AC_047&acnameeng=A47&acno=47&acnameurdu=047
async function telangana(dist, ac, pn) {
  const time_now = Date.now();
  const URL = `https://ceotserms2.telangana.gov.in/ts_erolls/Popuppage.aspx?partNumber=${pn}&roll=EnglishMotherRoll&districtName=DIST_${dist}&acname=AC_0${ac}&acnameeng=A${ac}&acno=${ac}&acnameurdu=0${ac}`;
  try {
    browser = await puppeteer.launch({
      headless: false,
      args: ["--disable-setuid-sandbox"],
      ignoreHTTPSErrors: true,
    });
    let page = await browser.newPage();
    await page.goto(URL);

    // Wait for the required DOM to be rendered
    await page.waitForSelector("#Image2");
    // Take the element to be captured
    const element = await page.$("#Image2");
    await element.screenshot({
      path: `images/telangana-captcha-${time_now}.jpg`,
    });
    const text = await captcha(`/images/telangana-captcha-${time_now}.jpg`);
    // console.log(text)
    await page.type("input[name=txtVerificationCode]", text);
    await page.$("#btnSubmit").click();

    //TODO: converting pdf to image

    // await browser.close();
  } catch (error) {
    console.log("");
  }
}

telangana(16, 47, 125)