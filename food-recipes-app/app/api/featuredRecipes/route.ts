import { NextRequest, NextResponse } from "next/server";
import FeaturedRecipe from "@/utils/models/featuredRecipeModel";
import connectMongo from "@/utils/connectMongo";

export async function GET(req: NextRequest, res: NextResponse) {
  await connectMongo();
  const result = await FeaturedRecipe.find();

  return NextResponse.json(result);
}
