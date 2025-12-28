import { NextResponse } from "next/server";
import squarespaceAPI from "@/lib/squarespace";

/**
 * GET /api/products
 * Fetch all products from Squarespace
 * Query params:
 * - category: Filter by category
 * - limit: Number of products to return
 * - cursor: Pagination cursor
 */
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const limit = searchParams.get("limit");
    const cursor = searchParams.get("cursor");

    const params = {};
    if (category) params.category = category;
    if (limit) params.limit = parseInt(limit);
    if (cursor) params.cursor = cursor;

    const data = await squarespaceAPI.getProducts(params);

    return NextResponse.json({
      success: true,
      data: data.products,
      pagination: data.pagination,
    });
  } catch (error) {
    console.error("Error in /api/products:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to fetch products",
      },
      { status: 500 }
    );
  }
}
