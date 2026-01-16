import { Client } from "@googlemaps/google-maps-services-js";
import { NextResponse } from "next/server";

const client = new Client({});

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID || "ChIJRUEZ8kjFSGoRdb3EPIHL8So"; // Knead Pizzeria Place ID

  if (!apiKey) {
    return NextResponse.json({ error: "API Key missing" }, { status: 400 });
  }

  try {
    const response = await client.placeDetails({
      params: {
        place_id: placeId,
        fields: ["reviews", "rating", "user_ratings_total"],
        key: apiKey,
      },
      timeout: 5000,
    });

    const reviews = response.data.result.reviews.map((r, i) => ({
      id: `live_${i}`,
      name: r.author_name,
      avatar: r.profile_photo_url,
      text: r.text,
      date: r.relative_time_description,
      rating: r.rating,
    }));

    return NextResponse.json({ 
      reviews,
      rating: response.data.result.rating,
      total: response.data.result.user_ratings_total
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}
