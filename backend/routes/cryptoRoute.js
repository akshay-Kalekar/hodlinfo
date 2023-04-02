import express from "express";
import fetch from "node-fetch";
import cryptoSchema from "../models/cryptoSchema.js";

const router = express.Router();

router.get("/getapidata", async (req, res) => {
  await cryptoSchema.deleteMany({});
  fetch("https://api.wazirx.com/api/v2/tickers")
    .then((res) => res.json())
    .then((json) => {
      const data = [];
      //Add a counter to get top and store in array one by one great
      var top = 0;
      for (const key in json) {
        if (json.hasOwnProperty(key)) {
          console.log(`${key}`);
          data[top] = key;

          //Extracting needed data
          var { name, last, buy, sell, volume, quote_unit } = json[data[top]];
          console.log({ name, last, buy, sell, volume, quote_unit });
          //Storing Data on mongo
          var cryptoSchem = new cryptoSchema({
            CoinName: name,
            LastPrice: last,
            BuyPrice: buy,
            SellPrice: sell,
            Volume: volume,
            base_uint: quote_unit,
          });
          cryptoSchem.save();
          if (top >= 10) {
            break;
          }
          top++;
        }
      }
      res.send(data[2] + " + " + JSON.stringify(json[data[2]]));
    });
});

router.get("/apidata", async (req, res) => {
    const CryptoRec = await cryptoSchema.find({});
    res.status(200).json( CryptoRec);
  });

export default router;
