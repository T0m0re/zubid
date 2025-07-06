import { useEffect, useState } from "react";

export function useCountdown(targetDateString: string | null | undefined) {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    if (!targetDateString) {
      setTimeLeft(""); // or "Loading..." if you prefer
      return;
    }

    const targetDate = new Date(targetDateString).getTime();

    if (isNaN(targetDate)) {
      setTimeLeft("Invalid Date");
      return;
    }

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft("Auction Ended");
        return;
      }

      const diffInSeconds = Math.floor(diff / 1000);
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      const diffInHours = Math.floor(diffInMinutes / 60);
      const diffInDays = Math.floor(diffInHours / 24);

      if (diffInDays === 0) {
        setTimeLeft(
          `${String(diffInHours).padStart(2, "0")}:${String(diffInMinutes % 60).padStart(2, "0")}:${String(diffInSeconds % 60).padStart(2, "0")}`
        );
      } else if (diffInDays === 1 && diffInHours < 24) {
        setTimeLeft(`${diffInHours} Hours`);
      } else if (diffInDays > 1) {
        setTimeLeft(`${diffInDays} days`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDateString]);

  return timeLeft;
}
