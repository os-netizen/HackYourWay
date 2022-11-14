# HackYourWay
This Project's aim is to create an API that will let users enter a few details and receieve their entire family Tree. 
We take in data such as name, DoB, state, district and can then query all electoral poll website. 
This provides us complete electoral pdf data which we then scrape to get meaningful data. We do basic operations on this data to build that persons family tree.


Process- 
after accepting responses from users, a call is made to our hosted AWS server. This server then collects AC number, PN number and district code etc from "electoralsearch.in"

Using this data we can then query the individual state website of the person. Captchas are encountered, so we have created a system that reads the image and converts it to text using google vision API. The results are fed into the captch and we bypass it.

We enter the district and other data in the state website which gives us a pdf download link which we download onto the AWS server. 

This server then sends this pdf to google cloud vision API which does some processing. 
The cloud accepts the pdf, detects the language and transcribes it into searchable data. 
After that we use this data to send it to Google translate API which returns translated data. 
This data is raw and we use proprietary string manipulation to make into queriable data. From this data a family tree is constructed and returned.







To make an API call to our server you must use specific data. 

Refer the state and district code .txt file to find your state and district code to be entered. this is Code.txt







examples of API endpoints you can use are; 

http://3.110.155.47:80/api?name=AVINASH A&state=U02&dob=2002-11-12

enter your name as the key parameter. Enter state code as shown if you are from Chandigarh. DoB as shown. Optional parameter is district you can similarly search in Code.txt and enter here as a parameter. 
