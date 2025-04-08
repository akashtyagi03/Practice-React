import React, {useId} from 'react'


function InputBox({
    label,
    amount,
    onAmountchange,
    onCurrencychange,
    selectcurrency="usd", 
    currenyoptions=[],
    amountDisable=false,
    currencyDisable=false,

    
    className = "",
}) {
   const amountinput = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountinput}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountinput}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={isNaN(amount) ? '' : amount}
                    disabled={amountDisable}
                    onChange={(e) => {
                        const value = Number(e.target.value);
                        onAmountchange && onAmountchange(isNaN(value) ? 0 : value);
                      }}

                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectcurrency}
                    onChange={(e)=> onCurrencychange && onCurrencychange(e.target.value)}
                    disabled={currencyDisable}
                    
                >
                    
                        {currenyoptions.map((currency)=>(
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
    
