import { NextResponse } from "next/server";
import squarespaceAPI from "@/lib/squarespace";

/**
 * GET /api/products/[id]
 * Fetch a single product by ID from Squarespace
 */
export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: "Product ID is required",
        },
        { status: 400 }
      );
    }

    const product = await squarespaceAPI.getProductById(id);

    return NextResponse.json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error(`Error in /api/products/${params.id}:`, error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to fetch product",
      },
      { status: 500 }
    );
  }
}
