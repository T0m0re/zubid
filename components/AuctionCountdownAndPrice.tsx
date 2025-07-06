import { formatCurrency } from '@/lib/utils'
import { TimerIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

function AuctionCountdownAndPrice({price, endTime}: {price: number | null | undefined , endTime: string | null | undefined}) {
    const [countdownSeconds, setCountdownSeconds] = useState<number>(0)
    const [countdownMinutes, setCountdownMinutes] = useState<number>(0)
    const [countdownHours, setCountdownHours] = useState<number>(0)
    const [countdownDays, setCountdownDays] = useState<number>(0)

    useEffect(()=> {
        if (!endTime) return

        const auctionEndDate = new Date(endTime).getTime();

        const interval = setInterval(() => {
            const currentTime = Date.now();
            const auctionTimeLeft = auctionEndDate - currentTime;

            const seconds = Math.floor(auctionTimeLeft / 1000);
            const diffInMinutes = Math.floor(seconds / 60);
            const diffInHours = Math.floor(diffInMinutes / 60);
            const diffInDays = Math.floor(diffInHours / 24);

            setCountdownSeconds(seconds);
            setCountdownMinutes(diffInMinutes);
            setCountdownHours(diffInHours);
            setCountdownDays(diffInDays);

            if (seconds < 0){
                clearInterval(interval);
                setCountdownSeconds(0);
                setCountdownMinutes(0);
                setCountdownHours(0);
                setCountdownDays(0);
            }
        }, 1000)

        return () => clearInterval(interval);
    }, [endTime])
  return (
    <div className={`flex bg-black/70 items-center justify-between rounded-sm px-1 py-2 gap-4 
                        ${countdownSeconds == 0 && '!bg-black'} 
                        ${countdownHours > 2 && '!bg-green-700/70'} 
                        ${countdownHours < 2 && countdownSeconds > 1 && '!bg-orange-700/70'} 
                        ${countdownHours == 0 && countdownMinutes > 10 && countdownMinutes < 30 && '!bg-orange-700/70'} 
                        ${countdownHours == 0 && countdownMinutes > 0 && countdownMinutes < 10 && '!bg-red-700/70'}
                        `}>
        <div className='flex items-center gap-1'>
            {countdownSeconds > 0 && <TimerIcon className="text-white size-4" />}
            <p className="text-white text-md">
                {countdownSeconds == 0 && `Ended: ${endTime?.split("T")[0]}`}
                {countdownDays >= 1 && `${countdownDays} Day${countdownDays > 1 ? 's' : ''}`}
                {countdownSeconds !== 0 && countdownDays < 1 && countdownHours <= 23 && `${String(countdownHours).padStart(2, "0")}:${String(countdownMinutes % 60).padStart(2, '0')}:${String(countdownSeconds % 60).padStart(2, '0')}`}
                {/* {countdownDays < 1 && countdownHours == 23 && countdownMinutes > 30 && "24 Hours"} */}
            </p>
        </div>
       
         <p> 
            <span className='text-white/90'>Bid: </span>
            <span className='font-bold text-white'>{formatCurrency(50000)}</span>
        </p>
    </div>
  )
}

export default AuctionCountdownAndPrice