import { PostCardType } from "./postType";

export interface AuthorPostCardType extends PostCardType {
  author: number;
  featured_media: number;
  comment_status: "open" | "close";
  ping_status: "open" | "close";
  sticky: boolean;
  template: string;
  format: "standard";
}
