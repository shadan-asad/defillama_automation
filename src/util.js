export const selectChain = async (page) => {
  //to click on chain field
  await page.waitForSelector(".css-1ewalef-control");
  await page.click(".css-1ewalef-control");

  //to select Arbitrum One
  await page.waitForSelector("#react-select-2-option-4");
  await page.click("#react-select-2-option-4");
};

export const selectWBTCAndEnterAmount = async (page) => {
  //to enter 12 in 'You sell' field
  await page.waitForSelector(".chakra-input.css-lv0ed5");
  const input = await page.$(".chakra-input.css-lv0ed5");
  await input.click({ clickCount: 3 });
  await input.type("12");

  //click on the dropdown to select token
  await page.waitForSelector(".chakra-button.css-qjhap");
  await page.click(".chakra-button.css-qjhap");

  //enter WBTC in search
  await page.waitForSelector("input.chakra-input.css-s1d1f4");
  await page.type("input.chakra-input.css-s1d1f4", "WBTC");

  //select WBTC
  await page.waitForTimeout(1000);
  await page.waitForSelector("div.sc-b49748d5-3.cjxQGj");
  await page.click("div.sc-b49748d5-3.cjxQGj");
};

//to select USDC in "You buy"
export const selectUSDC = async (page) => {
  //click on dropdown to select token
  await page.waitForSelector(".chakra-button.css-qjhap");
  let divs = await page.$$(".chakra-button.css-qjhap");
  if (divs.length > 1) {
    await divs[1].click();
  }

  //write USDC in search
  await page.waitForSelector("input.chakra-input.css-s1d1f4");
  await page.type("input.chakra-input.css-s1d1f4", "USDC");

  //select the USDC option
  await page.waitForTimeout(1000);
  await page.waitForSelector("div.sc-b49748d5-3.cjxQGj");
  divs = await page.$$("div.sc-b49748d5-3.cjxQGj");
  if (divs.length > 1) {
    await divs[1].click();
  }
};

//to select the 2nd route
export const selectRoute = async (page) => {
  //wait to load the routes
  await page.waitForTimeout(6000);

  //select the second option
  await page.waitForSelector("div.sc-d413ea6e-0.ppUJr.RouteWrapper");
  let divs = await page.$$("div.sc-d413ea6e-0.ppUJr.RouteWrapper");
  if (divs.length > 1) {
    await divs[1].click();
  }
};
