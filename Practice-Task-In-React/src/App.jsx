import { useState } from 'react';
import './App.css'
import InputBox from './component/Inputbox'
import useCurrencyInfo from './Hook/currencyinfo';

function App() {
  const [amount, setAmount] = useState(0)
  const [to, setTo] = useState("usd")
  const [from, setFrom] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyinfo = useCurrencyInfo(from)
  const options = Object.keys(currencyinfo || {})
  
  console.log("currencyinfo:", currencyinfo);
  console.log("to:", to);

  function swap(){
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    if (!currencyinfo) {
      console.error("Currency info is not loaded yet.");
      return;
    }
  
    const targetCurrency = to.toUpperCase(); // Convert `to` to uppercase
  
    if (!currencyinfo[targetCurrency]) {
      console.error(`Currency key "${targetCurrency}" does not exist in currencyinfo:`, currencyinfo);
      return;
    }
  
    if (isNaN(amount)) {
      console.error("Invalid amount:", amount);
      return;
    }
  
    setConvertedAmount(amount * currencyinfo[targetCurrency]);
  };

  
  return (
    <div
    className="w-full min-h-screen flex justify-center items-center"
    style={{
            backgroundImage: `url('https://images.pexels.com/photos/640781/pexels-photo-640781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert();
                    }}
                >
                    <div className="w-full mb-1 text-black">
                        <InputBox
                            label="From"
                            amount={amount}
                            currenyoptions={options}
                            onCurrencychange={(currency) =>{
                                setAmount(amount)
                            }}
                            selectcurrency={from}
                            onAmountchange={(amount)=>
                                setAmount(amount)
                            }

                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4 text-black">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            onCurrencychange={(currency)=>{
                                setAmount(amount)
                            }}
                            currenyoptions={options}
                            selectcurrency={from}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
