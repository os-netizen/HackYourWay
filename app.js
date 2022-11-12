const express = require("express");
const axios = require("axios");
const { response } = require("express");
// const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.post('/api', (req, res)=>{
    const name=req.query.name
    const dob=req.query.dob// yyyy-mm-dd
    const gender=req.query.gender// M or F 
    const state=req.query.state// state id
    const district=req.query.district// district id

    // console.log(name, dob, gender, state, district)

    const DATA = {
      txtCaptcha: "UwBBqM",
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
      (`{"txtCaptcha":"AtPhvC","search_type":"details","reureureired":"ca3ac2c8-4676-48eb-9129-4cdce3adf6ea","name":"","rln_name":" ","page_no":1,"location":",,","results_per_page":10,"location_range":"20","age":null,"dob":"2001-09-16","gender":"M"}`+name+state+district).length;
    // console.log(len)

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
        // Required details can be accesses as follows -----
        // epic_no=response.data.response.docs[0].epic_no
        // ac_no=response.data.response.docs[0].ac_no
        // part_no=response.data.response.docs[0].part_no
      })
      .catch((e) => {
        console.log(e);
      });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
