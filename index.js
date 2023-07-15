import { launch } from "puppeteer";
import {
  selectChain,
  selectRoute,
  selectUSDC,
  selectWBTCAndEnterAmount,
} from "./src/util.js";

const start = async () => {
  const browser = await launch({
    executablePath: "/usr/bin/brave-browser",
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();
  await page.goto("https://swap.defillama.com");

  //To select the Arbitrum
  await selectChain(page);

  //Select WBTC and enter 12 in 'You sell' field
  await selectWBTCAndEnterAmount(page);

  //Select USDC in 'You buy' field
  await selectUSDC(page);

  //Select the second route
  await selectRoute(page);

  //to make window stay open
  await new Promise(() => {});
  await browser.close();
};

start();
