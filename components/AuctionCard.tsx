"use client"
import { StarIcon, TimerIcon } from "lucide-react"
import car from "../public/laFerrari.jpg"
import Image from "next/image"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"
import { formatCurrency } from "@/lib/utils"
import { useCountdown } from "./AuctionCountdown"
import AuctionCountdownAndPrice from "./AuctionCountdownAndPrice"



const AuctionCard = ({auctionId}: {auctionId: Id<"auctions">}) => {

    const auction =useQuery(api.auctions.getById, {auctionId})
    
    const  countdown = useCountdown(auction?.auctionEndDate)
    if (!auction) return null
    
 
  return (
    <div className="relative overflow-hidden rounded-lg shadow-sm mb-2">
            <div className="relative rounded-lg w-full  h-64">
                <Image
                    src={car}
                    alt="car"
                    width={500}
                    height={500}
                    className="rounded-lg size-full object-cover object-center"
                />

                <div className="absolute bottom-2 left-0 flex justify-between w-full px-2">
                    {/* <div className="flex bg-black/20 items-center justify-center rounded-sm px-2 py-1 gap-2">
                        <TimerIcon />
                        <p className="text-white text-md">{countdown}</p>
                    </div>
                    <div className="flex bg-black/20 items-center justify-between gap-2 rounded-sm px-2 py-1">
                        <h4 className="text-white font-medium">Bid:</h4>
                        <p className="text-white font-bold">{formatCurrency(50000)}</p>
                    </div> */}

                    <AuctionCountdownAndPrice price={5000} endTime={auction?.auctionEndDate}/>
                </div>
            </div>

          {/* Auction Details */}

            <div className="flex gap-2 mt-2 mr-4 items-center justify-between">
                <h4 className="text-lg font-bold">{auction.year} {auction?.make}</h4>
                <StarIcon className="text-secondary" />
            </div>
            <div className="flex flex-col gap-2 mt-1 mb-3">
                <p className="text-gray-700 font-medium">{auction?.location}</p>
                <p className="text-gray-700 font-medium">{auction?.seller}</p>
            </div>
    </div>
  )
}
export default AuctionCard