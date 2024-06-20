import { createClient, groq } from "next-sanity";
import { Reference } from "@/types";
import clientConfig from "../config/client-config";

export default async function getReference(
  slug: string
): Promise<Reference | null> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "reference" && slug.current == $slug][0] {
      _id,
      title,
      'slug': slug.current,
      description,
      'image': image.asset->url,
      'images': images[].asset->url
    }
    `,
    { slug }
  );
}
