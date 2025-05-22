'use client'
import { useQuery } from "convex/react"
import AuctionCard from "./AuctionCard"
import { api } from "@/convex/_generated/api"

const AuctionList = () => {
    const auction = useQuery(api.auctions.get)
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auction &&
                auction.map((auction) => (
                    <AuctionCard key={auction._id} auctionId={auction._id}/>
                ))
            }
            
        </div>
    </div>
  )
}
export default AuctionList