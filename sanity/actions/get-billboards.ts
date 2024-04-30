import { createClient, groq } from "next-sanity";
import { Billboard } from "@/types";
import clientConfig from "../config/client-config";

export default function getBillboards(): Promise<Billboard[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "billboard" ] | order(_createdAt desc) {
      _id,
      title,
      'image': image.asset->url,
      description
    }
    `
  );
}
