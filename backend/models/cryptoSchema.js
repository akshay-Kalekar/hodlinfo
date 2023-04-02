import mongoose from "mongoose";

//CoinName,LastPrice,BuyPrice,SellPrice,Volume,
var cryptoSchema = new mongoose.Schema({
  CoinName: { type: String, required: true },
  LastPrice: { type: Number, required: true },
  BuyPrice: { type: Number, required: true },
  SellPrice: { type: Number, required: true },
  Volume: { type: Number, required: true },
  base_uint: { type: String, required: true },
});
 
export default cryptoSchema = new mongoose.model("cryptoSchema", cryptoSchema);
