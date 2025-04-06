
import React, { useState, useEffect } from 'react';

interface ClockProps {
  startDate: Date;
}

const Clock: React.FC<ClockProps> = ({ startDate }) => {
  const [timeSince, setTimeSince] = useState<{
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      
      // Calculate time units
      const seconds = Math.floor((diff / 1000) % 60);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      
      // Calculate days, considering months with different lengths
      let tempDate = new Date(startDate);
      let days = 0;
      let months = 0;
      let years = 0;
      
      // Calculate years
      years = now.getFullYear() - startDate.getFullYear();
      
      // Calculate months
      if (now.getMonth() < startDate.getMonth() || 
          (now.getMonth() === startDate.getMonth() && now.getDate() < startDate.getDate())) {
        years--;
        months = 12 - startDate.getMonth() + now.getMonth();
        if (now.getDate() < startDate.getDate()) {
          months--;
        }
      } else {
        months = now.getMonth() - startDate.getMonth();
        if (now.getDate() < startDate.getDate()) {
          months--;
        }
      }
      
      // Calculate days
      tempDate = new Date(now.getFullYear(), now.getMonth(), 0); // Last day of previous month
      const lastDay = tempDate.getDate();
      
      if (now.getDate() < startDate.getDate()) {
        days = lastDay - startDate.getDate() + now.getDate();
      } else {
        days = now.getDate() - startDate.getDate();
      }
      
      setTimeSince({ years, months, days, hours, minutes, seconds });
    };
    
    updateClock();
    const interval = setInterval(updateClock, 1000);
    
    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className="clock-container flex flex-wrap justify-center gap-4 md:gap-6">
      <ClockUnit value={timeSince.years} label="ปี" />
      <ClockUnit value={timeSince.months} label="เดือน" />
      <ClockUnit value={timeSince.days} label="วัน" />
      <ClockUnit value={timeSince.hours} label="ชั่วโมง" />
      <ClockUnit value={timeSince.minutes} label="นาที" />
      <ClockUnit value={timeSince.seconds} label="วินาที" />
    </div>
  );
};

const ClockUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="bg-white bg-opacity-50 backdrop-blur-sm rounded-xl p-3 md:p-4 w-16 md:w-20 h-16 md:h-20 flex items-center justify-center shadow-lg">
        <span className="text-2xl md:text-3xl font-bold">{value}</span>
      </div>
      <div className="mt-2 text-sm md:text-base">{label}</div>
    </div>
  );
};

export default Clock;
