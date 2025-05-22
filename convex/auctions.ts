import { v } from "convex/values";
import { query } from "./_generated/server";

export const get = query({
    args:{},
    handler: async (ctx) => {
        const auctions = await ctx.db
            .query("auctions")
            .collect()
           
        return auctions;
    },
})  

export const getById = query({
    args: {auctionId: v.id("auctions")},
    handler: async (ctx, {auctionId}) => {
        return await ctx.db.get(auctionId)
    },
})