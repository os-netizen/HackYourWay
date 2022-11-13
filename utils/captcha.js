const vision = require('@google-cloud/vision');

const CONFIG = {
    credentials: {
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDThXx/nY4DnP1i\niXHN0AjMKij8YIfvFoKnIGanDM9W5Ba2nipBbBUJsoc6KDRwg7aBtPuMl58vAXXw\nKPLPrRuuMlFFfSCPKtLAgvUBCBU70VJ2b7WUKtF4Rjs0jVRYQVDlIC0sJmVfl6Et\n0CZjW3mlwoxbXsx4Sh4H5v0V32ALDuclNZojTT6y1S8KTdQzheNz4J5vLRHA7wSI\nrlTdXLxct6EOwJDUG4qoOjtrMUkqPNwQe1GtQXRanTN1vOhAbKMYKgZjHknm0PRH\n/9ygYmOaKXfx9MfRmdzdC99GtHyTfHGc90dpe7i7zPyZjwVDwwiaD3aq1JDHBQAZ\nrLJ3CsnVAgMBAAECggEAL83l3sOhcnCbFZeBmGWxb08B91PrtN3OBm58tLlg7L7c\n4UXqv+Fo+cmW5U5r15f0+eiIx3QG/m0ilfXzNntlm590nbNTVff0LJ0MOUD155B9\nxhWmIIfy0m9w9wYP72hHm5kDjIxa8dlHjJ6T5nWojw1igk3xASijE98hCL30q1q4\nJc837Fbf9oxIMKczI2CZ3vawukhAJX7UijfNa0oE0PDINaQ/0sYzOgYOPkKK/JwP\noOIobtsX7ZKBka7QI7kkZXtF38LTaoIYvAF49zMDd627oR9XWXFH8L9cmIqa9t1G\ntzC1CvrG5l8ZjTzWN8JOLUFJmXGn3/ZcOGbEyE61QQKBgQDwnMBZJJ0gKk+/5b8+\nTYOrMFIG0cxBXRIm3vBzcNn0bPOJoTw21aLckuxXXMgVOQowxg+bMpqCrE8vweQK\nFtEVDSw8FPQJyd7P3tUcfe8glp/A9LsAdIYD06r0v4urfJ3X5PklYM1DexmK9nwZ\nChpLINMkeZgdI63wsycjKlr6dQKBgQDhDHdDcIXjuexE4FBDdjQu4uMkQQocWTLy\nk2EOIIPIGfrp0SaLQK1GWag2M3ikSxcqllxyGGJdi+/ZeYrD3U/QnA+COyQEPGky\nrUd1o1zBWwaB9MQIbH4Tk5wXFCzPKacnBgfcF21/qehpYM0E2C1/pex2pg2q26Nh\n72AlSaLl4QKBgFNwmIeRWefYpHVQsARkDyAjjp6MzL9yDiRqtYni/cJ0sfPtdRsy\n9Np3HPyi0UQC1tTZKnpQjyJ3rLJME8+n3/Pj8I4ZWhO27My7Yr4RsgZkFZxtghgD\nUKItGiDr9/yNJ5PB9OCQdD5NhysYlSp9xWZ+SJpijGy2fdB14EGio5AtAoGARvjj\nc8U8tECiHmaPaXcRpeevsnNAeQg4ZP/Nj+L5LFXlJ2/qM+hFvPXxcoZw+X8k4y1g\nIitGejHzhiYqePKGhUdyLKPyC9PxaSX0b0kBq4jFWJ6UZAOzDwFyLGUUbJC6QjhI\nqkRJKAWxYepBPdHfJ25wUEq17LgvomcXbyr10IECgYEAlVrNCVC7K0spQd7M4nRv\nFQBNY40wMryCjSP5SRPzKrAXwtVws11cNMkV4+xXwWuITzRLei1EJ88oeT92m54a\ncBJ8HLPOqkfbextSG9g8YLp49U1xovl43IAYeFkqpqIJzt7A4JnfTtTT3S8DukjV\nUc+fZUvoJuZ3YwZDivg+DXY=\n-----END PRIVATE KEY-----\n",
        client_email: "hackyourway@corded-streamer-368502.iam.gserviceaccount.com",
    }
};

const client = new vision.ImageAnnotatorClient(CONFIG);
const detectText = async (file_path) => {
    let [result] = await client.textDetection(file_path);
    let captchaText = result.fullTextAnnotation.text;
    captchaText = captchaText.replace(/\s/g, '');
    return captchaText;
};

module.exports = detectText;