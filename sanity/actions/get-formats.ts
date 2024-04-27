import { createClient, groq } from "next-sanity";
import { Format } from "@/types";
import clientConfig from "../config/client-config";

export default function getFormats(): Promise<Format[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "format"] | order(title desc){
      title,
      slug,
      _id
    }`
  );
}