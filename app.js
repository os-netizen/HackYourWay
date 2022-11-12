const express = require("express");
const axios = require("axios");
const { response } = require("express");
// const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

// var name;
// var dob;
// var gender;
// var state;
// var district;

console.log(
  '{"txtCaptcha":"koVXsL","search_type":"details","reureureired":"ca3ac2c8-4676-48eb-9129-4cdce3adf6ea","name":"adarsh","rln_name":" ","page_no":1,"location":"S28,1,","results_per_page":10,"location_range":"20","age":null,"dob":"2001-09-16","gender":"M"}'.length
);
// --> andhra s01 s02
// `state={}}`

app.get("/", (req, res) => {
  const DATA = {
    txtCaptcha: "ykfxsg",
    search_type: "details",
    reureureired: "ca3ac2c8-4676-48eb-9129-4cdce3adf6ea",
    name: "adarsh",
    rln_name: " ",
    page_no: 1,
    location: "S28,1,",
    results_per_page: 10,
    location_range: "20",
    age: null,
    dob: "2001-09-16",
    gender: "M",
  };
  const HEADER = {
    headers: {
      Accept: "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "en-US,en;q=0.9",
      Connection: "keep-alive",
      "Content-Length": 251, //num of characters in string
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
  console.log("Starting");
  axios.post("https://electoralsearch.in/Home/searchVoter", DATA, HEADER)
    .then((response) => {
      console.log(response);
      res.send(response.data.response);
      console.log("GG");
    })
    .catch((e) => {
      console.log(e);
    });
    console.log("Ended");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
