import Cards from 'components/Cards'
import Posts from 'components/Posts'
import React from 'react'

export default function Body  ()  {
  return (
    <div className="container mx-auto px-6 py-16 pt-28 text-center">
   
            <div className="mx-auto max-w-lg">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">अस्पतालको इतिहास</h1>

            <p className="mt-6 text-gray-500 dark:text-gray-300">मदन भण्डारी अस्पताल तथा ट्रमा सेन्टरको इतिहास धरै नै लामो रहेको छ । वि.सं. २०४९ साल चैत्र मा प्राथमिक स्वास्थ्य केन्द्रको रुपमा सुरु भएको थियो त्यसताका प्राथमिक स्वास्थ्य सेवा मात्र उपलब्ध हुन्थ्यो । सिमीत जनशक्ती र सिमित श्रोत साधनको कारण यहाँका जनताले उचित र व्यवस्थित उपचार सेवा पाउन भने सकेका थिएनन् । आ.व. २०७२/७३ मा १५ शैया सहितको मंगलबारे अस्पतालको रुपमा स्तरोन्नती  भइ उर्लाबारी नगपालिका मातहतमा संचालन भयो र विषेषज्ञ सहितको १५ बेड क्षामतामा संचालन हुन थाल्यो । पुर्वी मोरङ कै एकमात्र ठूलो अस्पतालको रुपमा परिचीत मंगलबारे अस्पताल लाई प्रदेश नं. १ सरकारले  प्रदेशको गौरवको आयोजनाकोरुमा ५० शैयाको अस्पताल सहित ट्रमा सेन्टरको रुपमा स्तरोन्नती गर्ने योजना बनाई २०७७ श्रावण देखी कार्यान्वयनमा ल्याएको हो ।</p>

            
            </div>

            <div className="mx-auto mt-28 max-w-screen-xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                {/* <div className="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
                  <img src="hospital.jpg"  width={500} height={500} className="object-cover" ></img>
                </div>

                <div className="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
                <img src="hospitalfront.jpg"  width={500}height={500} className="object-cover" ></img>
                </div>

                <div className="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
                <img src="high.jpg"  width={500}height={500} className="object-cover" ></img>
                </div>

                <div className="col-span-1 flex items-center justify-center md:col-span-3 lg:col-span-1">
                <img src="intensivecare.jpg"  width={500}height={500} className="object-cover" ></img>
                </div>

                <div className="col-span-2 flex items-center justify-center md:col-span-3 lg:col-span-1">
                <img src="labor room.jpg"  width={500}height={500} className="object-cover"></img>
                </div> */}
            </div>
            <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">सूचनाहरू</h1>

                      <div className="mx-auto mt-6 flex justify-center">
                      <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
                      <span className="mx-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
                      <span className="inline-block h-1 w-1 rounded-full bg-blue-500"></span>
                      </div>
                  </div>
           
                <div>
                   <Posts/>
                   <div>
                      <h1 className="text-3xl mt-8 font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl ">Our Team</h1>

                      <div className="mx-auto mt-6 flex justify-center">
                      <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
                      <span className="mx-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
                      <span className="inline-block h-1 w-1 rounded-full bg-blue-500"></span>
                      </div>
                  </div>
                   <Cards/>  
                  
                   
                </div>
           
            </div>
            
        </div>
  )
}

