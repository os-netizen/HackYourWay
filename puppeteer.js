const puppeteer = require('puppeteer');

async function linkScraper(URL){
	try{
    browser = await puppeteer.launch({
      headless: false,
      args: ["--disable-setuid-sandbox"],
      'ignoreHTTPSErrors': true
    });
    console.log(browser);
		let page = await browser.newPage();
    console.log(`Navigating to ${URL}...`);
    await page.goto(URL);
    // Wait for the required DOM to be rendered
		await page.waitForSelector('#captchaDetailImg');
    // Dialog logic
    const dialog = await page.$("#welcomeDialog");
    if (dialog) {
      const dialogContinue = await page.$("#welcomeDialog #continue");
      console.log(dialogContinue);
      await dialogContinue.click();
    }
    const element = await page.$("#captchaDetailImg");
    await element.screenshot({
      path: `images/captcha.jpg`
    });

    await browser.close();
		// // Get the link to all the required books
		// let urls = await page.$$eval('#captchaDetailImg', imgs => {
		// 	// Make sure the book to be scraped is in stock
		// 	imgs = links.filter(link => link.querySelector('.instock.availability > i').textContent !== "In stock")
		// 	// Extract the links from the data
		// 	links = links.map(el => el.querySelector('h3 > a').href)
		// 	return imgs[0];
		// });
		// console.log(urls);
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
}


module.exports=linkScraper;
// EXAMPLE USAGE BELOW: https://electoralsearch.in/

// linkScraper("https://electoralsearch.in/");