'use client';

import Image from "next/image";
import Navbar from "@/components/Navbar";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import Calendar from "@/components/Calendar";



export default function Home() {
  const router = useRouter();
  const today = dayjs();

  const handleDayClick = (date: dayjs.Dayjs) => {
    const target = date.format('YYYY-MM-DD');
    router.push(`/days/${target}`);
  };

  return (
    <div>
      <Navbar />

      <h1 className="text-5xl font-extrabold text-white text-center tracking-tight mb-2">30 Apps In 30 Days!</h1>
      <h4 className="text-xl font-bold text-white text-center tracking-tight mb-2">Lets freaking go!</h4>
      <Calendar days={31} onDayClick={handleDayClick} />
    </div>
  );
}
