export type PostCardType = {
  id: number;
  date: string;
  date_gmt: string;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: "publish" | "semiFinished" | "completing";
  type: "post" | "news";
  title: string;
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  categories: [
    {
      id: number;
      name: "دسته اخبار" | "دسته اطلاعات";
      slug: string;
    }
  ];
  featured_media_object: {
    id: number;
    title: string;
    caption: "";
    description: "";
    media_details: {
      width: 421;
      height: 247;
      filesize: 8174;
    };
    source_url: "https://nabsteel.rahkartest.ir/wp-content/uploads/2024/04/card-3.webp";
  };
};
