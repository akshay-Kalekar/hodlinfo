import { useState,useEffect } from "react";

import "./App.css";

function App() {
  var sno = 0;
  const [count, setCount] = useState(0);
  const [ApiData, setApiData] = useState([{
    BuyPrice:'123123',CoinName:'123123',LastPrice:'123123',SellPrice:'123123',Volume:'123123',base_uint:'123123'
  }]);
  useEffect( () => {
    async function getUserData() {
      const CryptoApi = await fetch(`http://localhost:3001/v2/apidata`);
      console.log('CryptoApi',CryptoApi)
      if (!CryptoApi.ok) {
        const message = `An error occured: ${CryptoApi.status.Text}`;
        window.alert(message);
        return;
      }
      const CryptoApiData = await CryptoApi.json();
      // console.log(CryptoApiData);
      const Data  = CryptoApiData;
      await setApiData(Data);
      console.log(ApiData[0]);
    }
    getUserData();
    // const {buy} = ApiData;
    // console.log( buy +" hello")
    return;
  },[]);

  return (
    <>
    {/*Heading */}
    <div className="flex gap-4 items-center  w-[100vw] text-center">
    <div className="p-2 text-[#3dc6c1] font-semibold text-3xl  ">
    HODLINFO.com
    <br/>
    <span className="text-left text-[#999999] text-sm">Powered By <span className="text-[#3dc6c1]">Finstreet</span></span>
    </div>
    
    
    {/*Options*/}
    <div className="flex gap-2">
    <button> INR </button>
    <button> BTC </button>
    <button> BUY BTC </button>
    </div>

    {/*Timer connect */}
    <div className="flex gap-2 items-center flex-wrap">
    <div className="Counter"> 60 </div>
    
    <button className="flex items-center bg-[#3dc6c1]">
    {" "}
            <img
              src="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/svg/telegram.svg"
              className="w-[50px] h-[50px] "
            />{" "}
            Connect Telegram{" "}
            </button>
            
            <label className="relative inline-flex items-center cursor-cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" checked />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      {/*Stats */}
      <div>
      <div className="pt-8"> Best Price to Trade </div>
        <div className="flex gap-2 justify-center">
        <div>
        <div className="text-[#2d9894] text-lg">0.41%</div>
        <p className="text-xs ">5 Mins</p>
        </div>
            </div>
      </div>
      
      {/*Table of content*/}
      <table className="w-full text-center ">
      <thead>
      <tr>
      <th>
      <h4><span className="cursor-pointer">#</span></h4>
      </th>
                    <th>
                      <h4><span className="cursor-pointer">name</span></h4>
                    </th>
                    <th>
                      <h4><span className="cursor-pointer">Last</span></h4>
                    </th>
                    <th>
                      <h4><span className="cursor-pointer">Buy / Sell Price</span></h4>
                    </th>
                    <th>
                      <h4><span className="cursor-pointer">volume</span></h4>
                    </th>
                    <th>
                      <h4><span className="cursor-pointer">base_unit</span></h4>
                    </th>
                  </tr>
                </thead>
                <tbody>
                {ApiData.map(({BuyPrice,CoinName,LastPrice,SellPrice,Volume,base_uint})=>{
                  sno ++;
                  return (
                    <tr className="font-bold">
                    <td className="align-middle "><h4 >{sno}</h4></td>
                    <td className="align-middle">
                      <a
                        target="_blank"
                        href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&amp;utm_medium=affiliate&amp;utm_campaign=regnow-btn"
                        ><h4 className="flex w-full" >
                         <span className="text-center w-full">{CoinName}</span>
                        </h4></a>
                    </td>
                    <td className="align-middle">
                      <h4 > &#8377; {LastPrice}</h4>
                    </td>
                    <td className="align-middle">
                      <h4 >
                        <span> &#8377; {BuyPrice} / &#8377; {SellPrice}</span>
                      </h4>
                    </td>
                    <td className="align-middle">
                      <h4 >{Volume}</h4>
                    </td>
                    <td className="align-middle">
                      <h4 >{base_uint}</h4>
                    </td>
                  </tr>
                  )
                }
                
               
              )}
               
                
                </tbody>
      </table>
      <div className="border border-10">
      Add Hodlin to homescreen
      </div>
    </>
  );
}

export default App;
