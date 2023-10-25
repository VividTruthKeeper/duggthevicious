import { ImageUrlBuilder } from "sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

const urlFor = (source: SanityImageSource): ImageUrlBuilder => {
  return builder.image(source);
};

export default urlFor;
