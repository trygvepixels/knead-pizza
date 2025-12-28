import { NextResponse } from "next/server";
import squarespaceAPI from "@/lib/squarespace";

/**
 * GET /api/inventory
 * Check inventory availability for a product variant
 * Query params:
 * - variantId: Variant ID to check
 */
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const variantId = searchParams.get("variantId");

    if (!variantId) {
      return NextResponse.json(
        {
          success: false,
          error: "Variant ID is required",
        },
        { status: 400 }
      );
    }

    const inventory = await squarespaceAPI.getInventory(variantId);

    return NextResponse.json({
      success: true,
      data: inventory,
    });
  } catch (error) {
    console.error("Error in /api/inventory:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to fetch inventory",
      },
      { status: 500 }
    );
  }
}
