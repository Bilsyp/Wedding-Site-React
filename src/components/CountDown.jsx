import { useEffect, useState } from "react";
import Box from "./Box";

const Countdown = () => {
  const targetDate = new Date("2023-12-31 23:59:59"); // Ganti dengan tanggal dan waktu yang diinginkan
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Fungsi untuk menghitung sisa waktu dari targetDate ke waktu saat ini
  function calculateTimeLeft() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    } else {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      return {
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      };
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='countdown'>
      <Box name={"Hari"} time={timeLeft.days} />
      <Box name={"Jam"} time={timeLeft.hours} />
      <Box name={"Menit"} time={timeLeft.minutes} />
      <Box name={"Detik"} time={timeLeft.seconds} />
    </div>
  );
};

export default Countdown;
