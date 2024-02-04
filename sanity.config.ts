import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import schemas from "./sanity/schemas";
import { structureTool } from "sanity/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

const config = defineConfig({
  basePath: "/admin",
  title: "CMS | Zomar",

  projectId,
  dataset,
  apiVersion, 
  useCdn: true,

  plugins: [structureTool(), visionTool()],

  schema: { types: schemas },
});

export default config;
