import logo from "../assets/images/logo.svg"
import Calculator from "./Calculator"

export default function Hero() {
    return (
        <section className="relative mb-20">
            <div className="relative z-20 lg:flex lg:flex-row lg:py-[88px] lg:px-[144px]">
                <div className="flex flex-col items-center text-center pt-8 px-12 gap-8 md:gap-10 lg:items-start lg:text-left">
                    <img className="w-[40px] h-[40px] lg:w-16 lg:h-16" src={logo} alt="Logo Icon" />
                    <h1 className="tp-2 lg:text-balance">Body Mass Index Calculator</h1>
                    <p className="tp-6 text-gray-5500">Better understand your weight in relation to your height using our body mass index (BM) calculator. 
                        While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
                </div>
                <div className="mt-8">
                    <Calculator />
                </div>      
            </div>
            <div className="
                    absolute top-0 z-10 w-[375px] h-[640px] bg-gradient-1 rounded-b-[35px] opacity-70
                    md:w-full lg:w-[1002px]"></div>
        </section>
    )
}