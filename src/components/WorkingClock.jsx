import { useEffect, useState } from "react";

export default function WorkingClock() {

  const [now, setNow] = useState(new Date());


  useEffect(() => {

    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);


    return () => clearInterval(timer);

  }, []);



  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();



  const secondRotation = seconds * 6;
  const minuteRotation = minutes * 6 + seconds / 10;
  const hourRotation = ((hours % 12) * 30) + (minutes * 0.5);



  return (

    <svg
      className="working-clock-svg"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >


      {/* Clock Border */}
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />



      {/* Hour Hand */}
      <line
        x1="25"
        y1="25"
        x2="25"
        y2="14"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        transform={`rotate(${hourRotation} 25 25)`}
      />



      {/* Minute Hand */}
      <line
        x1="25"
        y1="25"
        x2="25"
        y2="9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        transform={`rotate(${minuteRotation} 25 25)`}
      />



      {/* Second Hand */}
      <line
        x1="25"
        y1="27"
        x2="25"
        y2="7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        transform={`rotate(${secondRotation} 25 25)`}
      />



      {/* Center Point */}
      <circle
        cx="25"
        cy="25"
        r="2.5"
        fill="currentColor"
      />


    </svg>

  );

}