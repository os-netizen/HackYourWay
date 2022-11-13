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
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
