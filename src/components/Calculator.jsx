import React from "react"
import { useState } from "react"
import clsx from "clsx"


export default function Calculator() {
    const [unit, setUnit] = useState("metric")

    const [metric, setMetric] = useState({
        height: "", 
        weight: ""
    })
    const [imperial, setImperial] = useState({
        ft: "",
        in: "",
        st: "",
        lbs: "",
    })

    // Metric Calculator
    const getMetricBmi = () => {
        const heightMetric = parseFloat(metric.height) / 100;
        const weight = parseFloat(metric.weight);
        if(!heightMetric || !weight) return null;
        
        const bmi = weight / (heightMetric * heightMetric);
        const min = 18.5 * heightMetric * heightMetric;
        const max = 24.9 * heightMetric * heightMetric;

        return { bmi, min, max, category: getBMICategory(bmi) }
    }

    // Imperial Calculator
    const getImperialBmi = () => {

        if(
            imperial.ft === "" ||
            imperial.in === "" ||
            imperial.st === "" ||
            imperial.lbs === ""
        ) return null

        const ft = parseFloat(imperial.ft || 0);
        const inch = parseFloat(imperial.in || 0);
        const st = parseFloat(imperial.st || 0);
        const lbs = parseFloat(imperial.lbs || 0);

        const totalIn = ft * 12 + inch;
        const totalLbs = st * 14 + lbs;
        const bmi = (totalLbs / (totalIn * totalIn)) * 703;
        const minLbs = (18.5 * (totalIn * totalIn)) / 703;
        const maxLbs = (24.9 * (totalIn * totalIn)) / 703;

        return {
            bmi,
            min: lbsToLbs(minLbs),
            max: lbsToLbs(maxLbs),
            category: getBMICategory(bmi),
        };
    };

    const getBMICategory = (bmi) => {
        if(bmi < 18.5) return "underweight";
        if(bmi < 25) return "a healthy weight"
        if(bmi <30) return "overweight"
        return "obese"
    }

    const lbsToLbs = (lbs) => {
        const st = Math.floor(lbs / 14)
        const remainingLbs = Math.round(lbs % 14)
        return { st, lbs: remainingLbs }
    }

    const bmiResult = unit === "metric" ? getMetricBmi() : getImperialBmi ()

    return (
        <div className="bg-white rounded-2xl flex flex-col p-6 gap-6 mx-6 drop-shadow-2xl">
            <h2 className="tp-4 text-blue-9900">Enter your detail below</h2>
            <div className="flex">

                {/* Metric selected*/}
                <label className="flex items-center">
                    <input 
                        type="radio"
                        name="unit"
                        checked={unit === "metric"}
                        onClick={() => setUnit("metric")}
                        className="sr-only"
                    />
                <div 
                    className={clsx(
                    "w-[31px] h-[31px] rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer",
                    unit === "metric" ? "bg-blue-1100" : "border-1 border-gray-5500"
                    )}
                >
                    <div
                        className={clsx(
                            "w-[15px] h-[15px] rounded-full transition-transform",
                            unit === "metric" ? "bg-blue-5500 scale-100" : "scale-0"
                        )}
                    >
                    </div>
                </div>
                <span className="tp-6-sb text-blue-9900 mr-6 ml-4">Metric</span>
                </label>

                {/* Imperial selected */}
                <label className="flex items-center ml-6 md:ml-47">
                    <input 
                        type="radio"
                        checked={unit === "imperial"}
                        onChange={() => setUnit("imperial")}
                        className="sr-only"
                    />
                <div
                    className={clsx(
                        "w-[31px] h-[31px] rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer",
                        unit === "imperial" ? "bg-blue-1100" : "border-1 border-gray-5500"
                    )}
                >
                    <div
                        className={clsx(
                            "w-[15px] h-[15px] rounded-full flex items-center justify-center transition-all duration-250 delay-150 cursor-pointer",
                            unit === "imperial" ? "bg-blue-5500 scale-100" : "scale-0"
                        )}
                    >

                    </div>
                </div>
                <span className="ml-4 tp-6-sb">Imperial</span>
                </label>
            </div>

            {unit === "metric" ? (
                <div className="flex flex-col md:flex md:flex-row md:items-center md:gap-6 md:justify-between">
                    {/* Height Input */}
                    <div className="md:w-[299px]">
                        <label className="flex flex-col">
                            <span className="tp-7 text-gray-5500 mb-2">Height</span>
                            <div className="p-6 border-1 rounded-xl relative">
                                <input 
                                    type="number"
                                    placeholder="0"
                                    value={metric.height}
                                    onChange={(e) => 
                                        setMetric({ ...metric, height: e.target.value})
                                    }
                                    className={clsx(
                                        "w-20 no-spinner tp-4 focus:outline-none focus:ring-0",
                                        metric.height ? "text-blue-9900" : "text-gray-5500"
                                    )}
                                        
                                />
                                <span className="tp-4 text-blue-5500 absolute right-6">cm</span>
                            </div>
                        </label>
                    </div>

                    {/* Weight input */}
                    <div className="md:w-[299px]">
                        <label className="flex flex-col mt-4 md:mt-0">
                            <span className="tp-7 text-gray-5500 mb-2">Weight</span>
                            <div className="p-6 border-1 rounded-xl relative">
                                <input 
                                    type="number"
                                    placeholder="0"
                                    value={metric.weight}
                                    onChange={(e) => 
                                        setMetric({ ...metric, weight: e.target.value})
                                    }
                                    className={clsx(
                                        "w-20 no-spinner tp-4 focus:outline-none focus:ring-0",
                                        metric.weight ? "text-blue-9900" : "text-gray-5500"
                                    )}
                                />
                                <span className="tp-4 text-blue-5500 absolute right-6">kg</span>
                            </div>
                        </label>
                    </div>
                </div>
            ) : (
                <div>
                    {/* Feet Input */}
                        <h1 className="tp-7 text-gray-5500 mb-2">Height</h1>
                        <div className="flex gap-4 justify-around">
                            <div className="border-1 rounded-xl relative p-6 md:w-[299px]">
                                <input 
                                    type="number"
                                    placeholder="0"
                                    value={imperial.ft}
                                    onChange={(e) => 
                                        setImperial({ ...imperial, ft: e.target.value})
                                    }
                                    className={clsx(
                                        "w-21.5 flex-1 no-spinner tp-4 focus:outline-none focus:ring-0",
                                        imperial.ft ? "text-blue-9900" : "text-gray-5500"
                                    )}
                                />
                                <span className="tp-4 text-blue-5500 absolute right-5">ft</span>
                            </div>

                            {/* Inch input */}
                            <div className="border-1 rounded-xl relative p-6 md:w-[299px]">
                                <input 
                                    type="number"
                                    placeholder="0"
                                    value={imperial.in}
                                    onChange={(e) => 
                                        setImperial({ ...imperial, in: e.target.value})
                                    }
                                    className={clsx(
                                        "w-21.5 flex-1 no-spinner tp-4 focus:outline-none focus:ring-0",
                                        imperial.in ? "text-blue-9900" : "text-gray-5500"
                                    )}
                                />
                                <span className="tp-4 text-blue-5500 absolute right-6">in</span>
                            </div>
                        </div>
                    

                    {/* st input */}
                    <div className="mt-4">
                        <h2 className="tp-7 text-gray-5500 mb-2">Weight</h2>
                        <div className="flex gap-4 justify-around">
                            <div className="border-1 rounded-xl relative p-6 md:w-[299px]">
                                <input 
                                    type="number"
                                    placeholder="0"
                                    value={imperial.st}
                                    onChange={(e) => 
                                        setImperial({ ...imperial, st: e.target.value})
                                    }
                                    className={clsx(
                                        "w-21.5 flex-1 no-spinner tp-4 focus:outline-none focus:ring-0",
                                        imperial.st ? "text-blue-9900" : "text-gray-5500"
                                    )}
                                />
                                <span className="tp-4 text-blue-5500 absolute right-5">st</span>
                            </div>
                            
                            {/* lbs input */}
                            <div className="border-1 rounded-xl relative p-6 md:w-[299px]">
                                <input 
                                    type="number"
                                    placeholder="0"
                                    value={imperial.lbs}
                                    onChange={(e) => 
                                        setImperial({ ...imperial, lbs: e.target.value})
                                    }
                                    className={clsx(
                                        "w-21.5 flex-1 no-spinner tp-4 focus:outline-none focus:ring-0",
                                        imperial.lbs ? "text-blue-9900" : "text-gray-5500"
                                    )}
                                />
                                <span className="tp-4 text-blue-5500 absolute right-4">lbs</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {bmiResult ? (
            
                <div className="bg-blue-5500 rounded-l-2xl rounded-r-2xl 
                                md:rounded-l-2xl md:rounded-r-full md:flex md:flex-row md:items-center
                                p-8 flex flex-col gap-6">
                    <div>
                        <p className="tp-6-sb text-white mb-2">Your BMI is...</p>
                        <p className="tp-2 text-white">{bmiResult.bmi.toFixed(1)}</p>
                    </div>
                    <div>
                        <p className="tp-7 text-white">
                            Your BMI suggets you're{" "}
                            {bmiResult.category}. <br/>
                            Your ideal weight is between{" "}
                            <strong>
                            {unit === "metric"
                            ? `${bmiResult.min.toFixed(1)}kgs - ${bmiResult.max.toFixed(1)}kgs`
                            : `${bmiResult.min.st}st ${bmiResult.min.lbs}lbs - ${bmiResult.max.st}st ${bmiResult.max.lbs}lbs`}
                            </strong>
                            .
                        </p>
                    </div>
                </div>
            ) : (
                <div className="bg-blue-5500 rounded-l-2xl rounded-r-2xl 
                                md:rounded-l-2xl md:rounded-r-full
                                p-8 flex flex-col gap-6">
                    <h2 className="tp-4 text-white">Welcome!</h2>
                    <p className="tp-7 text-white">Enter your height and weight and you'll see your BMI result here</p>
                </div>
            )}
        </div>
    )
}