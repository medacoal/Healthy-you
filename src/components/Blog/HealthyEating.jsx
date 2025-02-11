import React from "react";
import facebook from "../../assets/icons/Vector (42).png";
import linked from "../../assets/icons/Vector (41).png";
import twitter from "../../assets/icons/Vector (43).png";
import healthy from "../../assets/images/eating.png";
import pic from "../../assets/images/stainless.png";
import Footer from "../../components/Footer";
import Wellness from "../../components/HomeComponents/Wellness";

const HealthyEating = () => {
  return (
   <div className='container mx-auto'>
     <div className="container mx-auto px-5 md:px-10 font-[Axiforma]">
      <div className="py-10">
        <p className="text-gray-500 text-sm :text-lg md:text-xl lg:text-2xl mb-10 sm:mb-10 font-semibold">
          Home / Blog / Healthy eating on a budget: tips and strategies.
        </p>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold lg:leading-20 text-gray-900 mb-4">
          Healthy Eating On a Budget: Tips and Strategies
        </h1>

        {/* Categories */}
        <div className="flex flex-col sm:flex-row justify-between mb-3">
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 cursor-pointer ">
            {["Emergency", "Cardiology", "Pediatric", "Others"].map(
              (category) => (
                <span
                  key={category}
                  className="border-1 border-[#147C84] text-[#147C84] text-sm sm:text-base md:text-lg lg:text-[20px] px-3 sm:px-4 py-1 sm:py-2 font-semibold rounded-lg"
                >
                  {category}
                </span>
              )
            )}
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-[20px] mt-1.5">
              May 1, 2024 | Augustine Dabby
            </p>
          </div>
          <div className="flex gap-3  sm:gap-3 mb-4">
            <p className="font-bold text-sm sm:text-base md:text-lg lg:text-[20px] mt-1">
              Share:
            </p>
            <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center  justify-center rounded-full border-1 border-[#147C84] cursor-pointer">
              <img src={linked} alt="" className="" />
            </button>
            <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center  justify-center rounded-full border-1 border-[#147C84] cursor-pointer">
              <img src={facebook} alt="" />
            </button>
            <button className="w-8 h-8 sm:w-10 sm:h-10  flex items-center  justify-center rounded-full border-1 border-[#147C84] cursor-pointer">
              <img src={twitter} alt="" />
            </button>
          </div>
        </div>

        {/* Images */}
        <div className="mb-5">
          <img src={healthy} alt="" className="w-full lg:h-[600px] "/>
        </div>

        {/* Blog Content */}
        <div>
          <div className="mb-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold">
              Healthy Meal
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-[20px]">
              Eating healthy on a budget is completely achieved with some
              planning and smart strategies. Here are some tips to help you
              maintain a nutritious diet without overspending:{" "}
            </p>
          </div>
          <div className="px-3 flex flex-col gap-5">
            {[
              {
                title: "1. Plan Your Meals:",
                items: [
                  "Create a weekly meal plan: Focus on receipt that use similar ingredients to minimize waste and improve efficiency.",
                  "Make a shopping list: Stick to it to avoid impulse buys and focus on healthy items.",
                ],
              },
              {
                title: "2. Shop Seasonal and Local:",
                items: [
                  "Choose season produce; Fruits and vegetables that are in season are often cheaper and taste better.",
                  "Visit farmers markets; Locally grown produce can be more affordable, especially when purchased in bulk.",
                ],
              },
              {
                title: "3. Buy in Bulk:",
                items: [
                  "Grain, legumes, and nuts; Purchasing these items in bulk can save money, and they have a long shelf life.",
                  "Frozen fruits and vegetables; These are often cheaper and retain their nutritional value, making them a great alternative for out-of-season produce.",
                ],
              },
              {
                title: "4. Choose Whole Meal:",
                items: [
                  "Minimize Processed Foods: Whole foods like (Like grains, fruits and vegetables) are naturally cheaper and healthier than packaged items.",
                  "Incorporate more plant-based proteins: Beans, lentils and eggs can be budget-friendly protein sources.",
                ],
              },
              {
                title: "5. Cook at Home:",
                items: [
                  "Prepare meals from scratch: This is often cheaper and allows you to control ingredients and portions.",
                  "Batch cooking: Make large quantities and freeze portions for quick and healthy meals later.",
                ],
              },
              {
                title: "6. Be Smart About Protein:",
                items: [
                  "Opt for cheaper cuts of meat: Try chicken thighs or ground turkey instead of expensive cuts",
                  "Use canned beans or dried beans: These are nutritious, filling and often more affordable than processed meat.",
                ],
              },
              {
                title: "7. Avoid waste:",
                items: [
                  "Save leftovers: Be creative in using leftover ingredients in creating new meals to prevent waste.",
                  "Store food properly: Keep fruits and vegetables fresh long to avoid spoilage.",
                ],
              },
              {
                title: "8. Limit Snacks and Beverages:",
                items: [
                  "Focus on filling meals: Prioritize whole meals instead of pre packaged snacks.",
                  "Drinking water or homemade beverages: Reducing expenses on sugary drinks it can free up budget for healthier food options",
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold">
                  {section.title}
                </h1>
                <ol className="list-disc px-5 sm:px-7 text-sm sm:text-base md:text-lg lg:text-[20px]">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold mt-5">
              Conclusion
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-[20px]">
              Healthy eating on a budget is all about smarter choices, planning,
              and making the most of your resources. With these strategies, you
              can enjoy nutritious meals without breaking the Bank.
            </p>
          </div>
        </div>

        <div className="flex flex-col  sm:flex-row w-full  mt-14 mx-auto border-t border-b border-gray-400 py-10">
          <div className="flex-2">
            <img
              src={pic}
              alt=""
              className="mx-auto rounded-full"
            />
          </div>
          <div className="flex-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold">
              Author Bio
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-[20px] text-gray-400">
              Augustine Dabby is a freelancer writer and content strategist with
              a passion in product design, with over 5 years of experience in
              the industry .she holds a bachelors degree in English from the
              university of California. follow her on twitter @augustinejoy for
              the latest update on her work.
            </p>
          </div>
        </div>   
      </div>  
    </div>
    <Wellness />
    <Footer />
   </div>
  );
};

export default HealthyEating;