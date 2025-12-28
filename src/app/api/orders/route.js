import { NextResponse } from "next/server";
import squarespaceAPI from "@/lib/squarespace";

/**
 * POST /api/orders
 * Create a new order in Squarespace
 */
export async function POST(request) {
  try {
    const orderData = await request.json();

    // Validate required fields
    if (!orderData.items || orderData.items.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Order must contain at least one item",
        },
        { status: 400 }
      );
    }

    if (!orderData.customer || !orderData.customer.email) {
      return NextResponse.json(
        {
          success: false,
          error: "Customer email is required",
        },
        { status: 400 }
      );
    }

    // Create order in Squarespace
    const order = await squarespaceAPI.createOrder(orderData);

    return NextResponse.json({
      success: true,
      data: order,
    });
  } catch (error) {
    console.error("Error in /api/orders:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to create order",
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/orders
 * Get order by ID from Squarespace
 * Query params:
 * - orderId: Order ID to fetch
 */
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get("orderId");

    if (!orderId) {
      return NextResponse.json(
        {
          success: false,
          error: "Order ID is required",
        },
        { status: 400 }
      );
    }

    const order = await squarespaceAPI.getOrder(orderId);

    return NextResponse.json({
      success: true,
      data: order,
    });
  } catch (error) {
    console.error("Error in /api/orders GET:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to fetch order",
      },
      { status: 500 }
    );
  }
}
