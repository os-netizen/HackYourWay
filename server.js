const express = require("express");
const axios = require("axios");
const scraper=require('./puppeteer')
const captcha=require('./tess')
const {
  andhraFunc,
  assamFunc,
  chandigarhFunc,
  chattisgarhFunc,
  damanFunc,
  goaFunc,
  delhiFunc,
  gujaratFunc,
  karnatakaFunc,
  meghalayaFunc,
  mizoramFunc,
  nagalandFunc,
  odishaFunc,
  rajasthanFunc,
  sikkimFunc,
  westBengalFunc,
  telanganaFunc
} = require('./states')

const app = express();
const port = 3000;

app.post('/api', async (req, res)=>{
    const name=req.query.name
    const ac=req.query.ac
    const pn=req.query.pn
    const state=req.query.state
    const dist=req.query.district

    // "S01 S03 U02 S26 U03 U05 S05 S06 S10 S15 S16 S17 S18 S20 S21 S29 S25"
    switch (state) {
      case "S01":
        await andhraFunc(dist, ac, pn);
        break;
      
      case "S03":
        await assamFunc(dist, ac, pn);
        break;

      case "U02":
        await chandigarhFunc(pn);
        break;

      case "S26":
        await chattisgarhFunc(ac, pn);
        break;

      case "U03":
        await damanFunc(pn);
        break;

      case "U05":
        await delhiFunc(ac, pn);
        break;

      case "S05":
        await goaFunc(ac, pn);
        break;

      case "S06":
        await gujaratFunc(ac, pn);
        break;

      case "S10":
        await karnatakaFunc(ac, pn);
        break;

      case "S15":
        await meghalayaFunc(ac, pn);
        break;

      case "S16":
        await mizoramFunc(ac, pn);
        break;

      case "S17":
        await nagalandFunc(ac, pn);
        break;

      case "S18":
        await odishaFunc(ac, pn);
        break;

      case "S20":
        await rajasthanFunc(dist, ac, pn);
        break;
  
      case "S21":
        await sikkimFunc(ac, pn);
        break;

      case "S29":
        await telanganaFunc(dist, ac, pn);
        break;

      case "S25":
        await westBengalFunc(dist, ac, pn);
        break;
    
      default:
        break;
    }
    // console.log(name, dob, gender, state, district)
    await scraper("https://electoralsearch.in/");
    const text= await captcha("/images/captcha.jpg");
    // TODO: delete image after use also name image using date
    console.log(text);

    const DATA = {
      txtCaptcha: `${text}`,
      search_type: "details",
      reureureired: "ca3ac2c8-4676-48eb-9129-4cdce3adf6ea",
      name: `${name}`,
      rln_name: " ",
      page_no: 1,
      location: `${state},${district},`,
      results_per_page: 10,
      location_range: "20",
      age: null,
      dob: `${dob}`,
      gender: `${gender}`,
    };

    const len =
      (`{"txtCaptcha":"xxxxxx","search_type":"details","reureureired":"ca3ac2c8-4676-48eb-9129-4cdce3adf6ea","name":"","rln_name":" ","page_no":1,"location":",,","results_per_page":10,"location_range":"20","age":null,"dob":"xxxx-xx-xx","gender":"x"}`+name+state+district).length;

    const HEADER = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9",
        Connection: "keep-alive",
        "Content-Length": len, //num of characters in string
        Cookie:
          "Electoral=456c656374726f6c7365617263682d7365727665723130; Electoral=456c656374726f6c7365617263682d7365727665723130; cookiesession1=678B2867043EA5470F2703FCC759BBFF; runOnce=true; electoralSearchId=r2ir4hbrrdbzwlmrbgoflnjn; __RequestVerificationToken=J7YYJtmEZmOKcNoVk3tEKRB2yRFqY4WMSTggjXYWLRVTKMijBuipEot4eI66K8u4JDbFhr6qik-GnVmSotG-c5_UYr08Eesh7djZsxw2lAA1",
        DNT: 1,
        Host: "electoralsearch.in",
        Origin: "https://electoralsearch.in",
        Referer: "https://electoralsearch.in/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-ch-ua":
          ' "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24" ',
      },
    };

    axios.post("https://electoralsearch.in/Home/searchVoter", DATA, HEADER)
      .then((response) => {
        res.send(response.data.response);
        console.log(response.data.response.docs[0]);
        // Required details can be accesses as follows -----
        // epic_no=response.data.response.docs[0].epic_no
        // ac_no=response.data.response.docs[0].ac_no
        // part_no=response.data.response.docs[0].part_no
      })
      .catch((e) => {
        console.log(e);
      });
      console.log('End!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
