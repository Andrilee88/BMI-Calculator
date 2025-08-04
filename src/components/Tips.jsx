import eating from "../assets/images/icon-eating.svg"
import exercise from "../assets/images/icon-exercise.svg"
import sleep from "../assets/images/icon-sleep.svg"

export default function Tips() {
    return (
        <section className="mt-16 w-full bg-gradient-to-r from-[rgba(214,230,254,0)] to-[rgba(214,252,254,0.4)] rounded-2xl lg:mt-50">
            <div className="px-6 py-12 flex flex-col gap-12 lg:flex-row lg:px-32 lg:py-24">
                <div>
                    <div>
                        <img className="mb-8" src={eating} alt="Icon Eating" />
                        <h1 className="tp-4 text-blue-9900">Healthy eating</h1>
                    </div>
                    <p className="tp-6 text-gray-5500 mt-6">Healthy eating promotes weight control, disease prevention, 
                    better digestion, immunity, mental clarity, and mood.</p>
                </div>

                <div>
                    <div>
                        <img className="mb-8" src={exercise} alt="Icon Exercise" />
                        <h1 className="tp-4 text-blue-9900">Regular exercise</h1>
                    </div>
                    <p className="tp-6 text-gray-5500 mt-6">Exercise improves fitness, aids weight control, elevates mood, and 
                        reduces disease risk, fostering wellness and longevity.</p>
                </div>

                <div>
                    <div>
                        <img className="mb-8" src={sleep} alt="Icon Sleep" />
                        <h1 className="tp-4 text-blue-9900">Adequate sleep</h1>
                    </div>
                    <p className="tp-6 text-gray-5500 mt-6">Sleep enhances mental clarity, emotional stability, and physical wellness, 
                        promoting overall restoration and rejuvenation.</p>
                </div>
            </div>            
        </section>
    )
}