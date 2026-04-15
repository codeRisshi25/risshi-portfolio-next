"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState<string>("--:--");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const ist = new Date(
        d.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );
      const h = ist.getHours().toString().padStart(2, "0");
      const m = ist.getMinutes().toString().padStart(2, "0");
      setTime(`${h}:${m}`);
    };

    tick(); // initial call
    const intervalId = setInterval(tick, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return <div className="clock">{time}</div>;
}
