"use client";

import Input from "./components/Input";

const Home = () => {
  return (
  <div className="bg-cover bg-gradient-to-r from-sky-900 to-sky-700 h-screen">
      <div className="bg-white/25 w-full rounded-lg flex flex-col h-fit">
        {/* INPUT AND LOGO */}
         <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input />
          <h1 className="mb-8 md:mb-0 order-1 text-sky-200 py-2 px-4 rounded-xl italic font-bold">
            Weather App
          </h1>
         </div>
      </div>
  </div>
  )
}

export default Home;
