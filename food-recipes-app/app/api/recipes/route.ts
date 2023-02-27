import { NextRequest, NextResponse } from "next/server";
import Recipe from "../../../utils/models/recipeModel";
import connectMongo from "../../../utils/connectMongo";
import RecipesType from "@/utils/interfaces/recipes";
import { NextApiResponse } from "next";

export async function GET(req: NextRequest, res: NextApiResponse) {
  await connectMongo();
  const resultMain = await Recipe.find<RecipesType>(); 
  console.log('recipes', resultMain) 
  return res.json(resultMain);
}
