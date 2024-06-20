import { createClient, groq } from "next-sanity";
import { Reference } from "@/types";
import clientConfig from "../config/client-config";

export default function getReferences(): Promise<Reference[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "reference" ] | order(_createdAt desc) {
      _id,
      title,
      'slug': slug.current,
      'image': image.asset->url,
    }
    `
  );
}
