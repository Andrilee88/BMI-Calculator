import gender from "../assets/images/icon-gender.svg"
import age from "../assets/images/icon-age.svg"
import muscle from "../assets/images/icon-muscle.svg"
import pregnancy from "../assets/images/icon-pregnancy.svg"
import race from "../assets/images/icon-race.svg"
import curveLineRight from "../assets/images/pattern-curved-line-right.svg"

export default function Limitation() {
  return (
    <section className="mt-20 mx-6">
        <div className="grid md:grid-cols-4 md:grid-rows-4 md:gap-y-6 md:gap-x-4 lg:grid-cols-6 lg:gap-x-8 lg:relative lg:mx-[144px] lg:my-[104px]">
            <div className="flex flex-col items-center text-center gap-8 md:w-[686px] md:h-[139px] md:col-span-4 lg:items-start lg:text-left lg:w-[564px] lg:h-[191px] lg:col-span-3">
            <h1 className="tp-3 lg:text-5xl">Limitations of BMI</h1>
            <p className="tp-6 text-gray-5500">
                Although BMI is often a practical indicator of healthy weight, it is not suited for every person.
                Specific groups should carefully consider their BMI outcomes, and in certain cases,
                the measurement may not be beneficial to use.
            </p>
            </div>

            {/* RIGHT SIDE GRID OF CARDS */}
            {/* Card: Gender */}
            <div className="bg-white rounded-2xl p-6 drop-shadow-2xl flex flex-col gap-4 md:row-start-2 md:col-start-1 md:col-span-2 lg:h-[232px] lg:w-[365px] lg:row-start-1 lg:col-start-4 lg:col-span-2 lg:ml-20">
                <div className="flex flex-row items-center gap-4">
                <img src={gender} alt="Icon Gender" />
                <h1 className="tp-5 text-blue-9900">Gender</h1>
                </div>
                <p className="tp-6 text-gray-5500">
                The development and body fat composition of girls and boys vary with age.
                Consequently, a child's age and gender are considered when evaluating their BMI.
                </p>
            </div>

            {/* Card: Age */}
            <div className="bg-white rounded-2xl p-6 drop-shadow-2xl flex flex-col gap-4 md:row-start-2 md:col-start-3 md:col-span-2 lg:w-[365px] lg:h-[184px] lg:row-start-2 lg:col-start-3 lg:col-span-2">
                <div className="flex flex-row items-center gap-4 ">
                <img src={age} alt="Icon Age" />
                <h1 className="tp-5 text-blue-9900">Age</h1>
                </div>
                <p className="tp-6 text-gray-5500">
                In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.
                </p>
            </div>

            {/* Card: Muscle */}
            <div className="bg-white rounded-2xl p-6 drop-shadow-2xl flex flex-col gap-4 md:row-start-3 md:col-start-1 md:col-span-2 lg:w-[365px] lg:h-[184px] lg:row-start-2 lg:col-start-5 lg:col-span-2">
                <div className="flex flex-row items-center gap-4">
                <img src={muscle} alt="Icon Muscle" />
                <h1 className="tp-5 text-blue-9900">Muscle</h1>
                </div>
                <p className="tp-6 text-gray-5500">
                BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.
                </p>
            </div>

            {/* Card: Pregnancy */}
            <div className="bg-white rounded-2xl p-6 drop-shadow-2xl flex flex-col gap-4 md:col-start-3 md:col-span-2 lg:w-[365px] lg:h-[232px] lg:row-start-3 lg:col-start-2 lg:col-span-2">
                <div className="flex flex-row items-center gap-4">
                <img src={pregnancy} alt="Icon Pregnancy" />
                <h1 className="tp-5 text-blue-9900">Pregnancy</h1>
                </div>
                <p className="tp-6 text-gray-5500">
                Expectant mothers experience weight gain due to their growing baby.
                Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.
                </p>
            </div>

            {/* Card: Race */}
            <div className="bg-white rounded-2xl p-6 drop-shadow-2xl flex flex-col gap-4 md:col-start-3 md:col-span-2 lg:w-[365px] lg:h-[232px] lg:row-start-3 lg:col-start-4 lg:col-span-2">
                <div className="flex flex-row items-center gap-4">
                <img src={race} alt="Icon Race" />
                <h1 className="tp-5 text-blue-9900">Race</h1>
                </div>
                <p className="tp-6 text-gray-5500">
                Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others.
                To learn more, it is advised to discuss this with your GP or practice nurse.
                </p>
            </div>
            <div>
                <img className="hidden lg:block lg:absolute lg:right-3/4 lg:top-1/4" src={curveLineRight} alt="curve line right" />
            </div>
        </div>
    </section>
  )
}
