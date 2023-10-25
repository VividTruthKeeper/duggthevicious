import { type SchemaTypeDefinition } from "sanity";
import hero from "./schemas/hero";
import cta from "./schemas/cta";
import benefits from "./schemas/benefits";
import services from "./schemas/services";
import about from "./schemas/about";
import faq from "./schemas/faq";
import final from "./schemas/final";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, cta, benefits, services, about, faq, final],
};
