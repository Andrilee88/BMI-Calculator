import manEating from "../assets/images/image-man-eating.webp"
import curveLine from "../assets/images/pattern-curved-line-left.svg"
export default function Result() {
    return (
        <section className="flex flex-col gap-12 md:flex md:flex-row md:overflow-hidden md:mt-32 lg:justify-center lg:relative lg:items-center lg:overflow-visible lg:gap-40">
            <img className="hidden lg:block lg:absolute lg:-top-40 lg:right-75" src={curveLine} alt="curve line left" />
            <div>
                <img className="md:max-w-sm md:-ml-16 lg:scale-150" src={manEating} alt="Image Man Eating" />
            </div>
            <div className="mx-7 flex flex-col gap-8 md:w-[331px] lg:w-[465px] lg:mt-20">
                <h1 className="tp-3 text-blue-9900 lg:text-5xl">What your BMI result means</h1>
                <p className="tp-6 text-gray-5500">A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' 
                    Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. 
                    Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. 
                    Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
            </div>
        </section>
    )
}