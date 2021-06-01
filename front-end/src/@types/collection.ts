import Items from "./items";
import LinksCollection from "./linksCollection";
import MetaData from "./metaData";

export default interface Collection {
  href: string;
  items: Items[];
  links: LinksCollection[];
  metadata: MetaData;
  version: string;
}
