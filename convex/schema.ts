import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
        userId: v.string(),
    })
    .index("by_user_id", ["userId"])
    .index("by_email", ["email"]),

   auctions: defineTable({
      bodyStyle: v.string(),
      drivetrain: v.string(),
      engine: v.string(),
      exteriorColor: v.string(),
      extras: v.array(v.string()),
      highlights: v.optional(v.array(v.string())),
      image: v.string(),
      interiorColor: v.string(),
      knownFlaws: v.array(v.string()),
      location: v.string(),
      make: v.string(),
      mileage: v.float64(),
      model: v.string(),
      modifications: v.array(v.string()),
      ownershipHistory: v.string(),
      recentService: v.optional(v.array(v.string())),
      seller: v.string(),
      sellerType: v.string(),
      titleStatus: v.string(),
      transmission: v.string(),
      vin: v.string(),
      year: v.float64(),
      auctionEndDate: v.string(),
    }),
}
)