
import React from 'react';
import BackgroundGradient from '../components/BackgroundGradient';
import HeartAnimation from '../components/HeartAnimation';
import Heart from '../components/Heart';
import Clock from '../components/Clock';

const Index = () => {
  // Set the date when you first met - for example: 2022, 3, 15 represents April 15, 2022
  // Note: month is 0-indexed (0 = January, 11 = December)
  const meetingDate = new Date(2022, 3, 15); // Change this date to when you first met

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden text-floral-deepGreen">
      <BackgroundGradient />
      <HeartAnimation />
      
      <div className="container px-4 mx-auto relative z-10 flex flex-col items-center justify-between min-h-screen py-12">
        {/* Header Section */}
        <div className="w-full flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <Heart className="animate-sway-heart" />
            <h2 className="text-2xl md:text-3xl font-semibold animate-fade-in opacity-0" style={{
              animationDelay: '0.2s'
            }}>สำหรับอิ้งค์</h2>
            <Heart className="animate-sway-heart" />
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in opacity-0" style={{
            animationDelay: '0.5s'
          }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-floral-pink to-floral-lavender">นาฬิกา แสดงเวลาที่รู้จักกัน</span>
          </h1>
          
          <div className="animate-fade-in opacity-0 mb-12" style={{ animationDelay: '0.8s' }}>
            <Clock startDate={meetingDate} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto mb-12">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white bg-opacity-50 backdrop-blur-sm p-6 rounded-2xl shadow-lg animate-fade-in opacity-0" style={{
                animationDelay: `${1.2 + i * 0.2}s`
              }}>
                <div className="flex justify-center mb-4">
                  <Heart />
                </div>
                <h3 className="text-xl font-semibold mb-2">Beautiful Hearts</h3>
                <p className="text-sm">อิ้งค์เป็น คนที่น่ารักและนิสัยดีมาก อยู่ด้วยละไม่เหงาเลย</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer Quote */}
        <div className="w-full text-center mt-12 animate-fade-in opacity-0" style={{
          animationDelay: '1.5s'
        }}>
          <p className="text-lg md:text-xl italic px-4 py-2 bg-white bg-opacity-40 backdrop-blur-sm inline-block rounded-full">&quot;ขอบคุณที่เป็นห่วงนะ ขอบคุณที่คอยช่วย รักน้ามี๊อิ้งค์&quot;</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
