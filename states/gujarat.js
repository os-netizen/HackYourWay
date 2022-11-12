const puppeteer = require("puppeteer");
const captcha = require("../tess");

// https://erms.gujarat.gov.in/ceo-gujarat/DRAFT2022/007/S06A7P1.pdf
async function gujarat(dist, ac, pn) {
  const time_now = Date.now();
  // TODO: check for 007 and 7
  const URL = `https://erms.gujarat.gov.in/ceo-gujarat/DRAFT2022/00${ac}/S06A${ac}P${pn}.pdf`;
  try {
    browser = await puppeteer.launch({
      headless: false,
      args: ["--disable-setuid-sandbox"],
      ignoreHTTPSErrors: true,
    });
    let page = await browser.newPage();
    await page.goto(URL);

    // Wait for the required DOM to be rendered
    // await page.waitForSelector("#Image2");
    // // Take the element to be captured
    // const element = await page.$("#Image2");
    // await element.screenshot({
    //   path: `images/andhra-captcha-${time_now}.jpg`,
    // });
    // const text = await captcha(`/images/andhra-captcha-${time_now}.jpg`);
    // await page.type("input[name=txtVerificationCode]", text);
    // await page.$("#btnSubmit").click();
    // await browser.close();
  } catch (error) {
    console.log("");
  }
}

andhra(15, 106, 141);
