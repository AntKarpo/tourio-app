import { db_places } from "../../../lib/db_places";
import dbConnect from "../../../db/connect";
import Place from "../../../db/Models/Places";

export default async function handler(request, response) {
  const {id} =request.query;
  await dbConnect();

  if (request.method === "GET"){
    const place = await Place.findById(id);
  
  if (!place) {
    return response.status(404).json({ status: "Not Found" });
  }
 return response.status(200).json(place);
  }
}