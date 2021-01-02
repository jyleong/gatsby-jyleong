// sectionWriting Props
export interface BlogPost {
  title: string,
  date: string,
  tags: string[],
  id: string,
  slug: string,
}

export interface WritingListProps {
  posts: BlogPost[]
}

// logo props
export interface LogoProps {
  show: boolean
};

// Navbar props
export interface NavProps {
  path: string
};

export interface OpenProps {
  open: boolean;
};


export interface IEdge {
  node: {
    frontmatter: {
      title: string,
      date: string,
    }
    fields: {
      slug: string,
    }
  }
};

// Content props
export interface IContentEdge extends IEdge {
  node: {
    id: string,
    frontmatter: {
      title: string,
      date: string,
      tags: string[],
    }
    fields: {
      slug: string,
    }
  }
};

export interface ContentProps {
  iEdge: IContentEdge[];
};

// Footer props
export interface FooterProps {
  author: string
};

// Header Props
export interface HeadProps {
  title: string,
  description: string,
  siteUrl: string,
  author?: string,
}

// Layout props
export type SiteMetaProps = {
  title: string,
  description: string,
  siteUrl: string,
  author: string,
}

export type LayoutProps = {
  children: React.ReactNode;
  location: any;
};

// About props
export interface MdProps {
  data: {
    markdownRemark: {
      html: string
    }
  };
  location: any;
}
// Blogpost props
export interface PostProps extends MdProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title?: string,
        date?: string,
        tags?: string[],
      }
      fields: {
        slug: string,
      }
      html: string
    }
  };
  location: any;
};

// writings pagecontent props
export interface PageContextProps {
  data: any;
  pageContext: {
    limit: number;
    skip: number;
    numPages: number;
    currentPage: number;
  };
  location: any;
};

export interface TagProps {
  pageContext: {
    tag: string;
  };
  data: {
    allMarkdownRemark: {
      totalCount: number;
      edges: IEdge[];
    }
  };
  location: any;
}

export interface TagsPageProps {
  data: {
    allMarkdownRemark: {
      group: any[];
    }
    site: {
      siteMetadata: {
        title: string;
      }
    }
  };
  location: any;
}

export interface SharingBarProps {
  title: string;
  location: any;
}

