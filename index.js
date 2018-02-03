const puppeteer = require('puppeteer');
const { expect } = require('chai');

describe('test', () => {
  it('does', async function() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://www.example.com/');
    await page.screenshot({path: 'outputs/example.png'});

    expect(true).to.true;
    await browser.close();
  })
})
