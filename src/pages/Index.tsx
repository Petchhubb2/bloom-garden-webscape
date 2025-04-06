import React from 'react';
import BackgroundGradient from '../components/BackgroundGradient';
import FlowerAnimation from '../components/FlowerAnimation';
const Flower = () => {
  return <div className="flower animate-sway">
      <div className="center"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
    </div>;
};
const Index = () => {
  return <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden text-floral-deepGreen">
      <BackgroundGradient />
      <FlowerAnimation />
      
      <div className="container px-4 mx-auto relative z-10 flex flex-col items-center justify-between min-h-screen py-12">
        {/* Header Section */}
        <div className="w-full flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <Flower />
            <h2 className="text-2xl md:text-3xl font-semibold animate-fade-in opacity-0" style={{
            animationDelay: '0.2s'
          }}>สำหรับอิ้งค์</h2>
            <Flower />
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in opacity-0" style={{
          animationDelay: '0.5s'
        }}>
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-floral-pink to-floral-lavender">Blossom Garden</span>
          </h1>
          
          <div className="flex justify-center mb-12 animate-float">
            <div className="flower scale-150">
              <div className="center"></div>
              <div className="petal"></div>
              <div className="petal"></div>
              <div className="petal"></div>
              <div className="petal"></div>
              <div className="petal"></div>
              <div className="petal"></div>
              <div className="petal"></div>
              <div className="petal"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto mb-12">
            {[1, 2, 3].map(i => <div key={i} className="bg-white bg-opacity-50 backdrop-blur-sm p-6 rounded-2xl shadow-lg animate-fade-in opacity-0" style={{
            animationDelay: `${0.8 + i * 0.2}s`
          }}>
                <div className="flex justify-center mb-4">
                  <Flower />
                </div>
                <h3 className="text-xl font-semibold mb-2">Beautiful Blooms</h3>
                <p className="text-sm">Experience the beauty and tranquility of our garden sanctuary.</p>
              </div>)}
          </div>
        </div>
        
        {/* Footer Quote */}
        <div className="w-full text-center mt-12 animate-fade-in opacity-0" style={{
        animationDelay: '1.5s'
      }}>
          <p className="text-lg md:text-xl italic px-4 py-2 bg-white bg-opacity-40 backdrop-blur-sm inline-block rounded-full">&quot;ขอบคุณที่เป็นห่วงนะ ขอบคุณที่คอยช่วย รักน้ามี๊อิ้งค์&quot;</p>
        </div>
      </div>
    </div>;
};
export default Index;