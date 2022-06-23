export interface Category {
  category: string;
  crates_cnt: number;
  created_at: string | Date;
  description: string;
  id: string;
  slug: string;
}

export interface Auctions {
  action: string;
  time: string | Date;
  /**
   * Author of Auction
   */
  user: {
    avatar: string;
    id: number;
    login: string;
    name: string;
    url: string;
  };
}

export interface Keyword {
  crates_cnt: number;
  created_at: string | Date;
  id: string;
  keyword: string;
}

export interface Version {
  audit_actions: Auctions[];
  crate: string;
  crate_size: number;
  created_at: string | Date;
  dl_path: string;
  downloads: number;
  /**
   * Features object which contains
   * support & implementation
   */
  features: {
    [key: string]: string[];
  };
  id: string;
  license: string;
  /**
   * Additional helpful links
   * authors, dependencies, downloads
   */
  links: {
    authors: string;
    dependencies: string;
    version_downloads: string;
  };
  num: string;
  published_by: {
    avatar: string;
    id: number;
    login: string;
    name: string;
    url: string;
  };
  readme_path: string;
  updated_at: string | Date;
  yanked: boolean;
}

export interface Crate {
  badges: [];
  categories: string[];
  created_at: string;
  description: string;
  documentation: string;
  downloads: number;
  exact_match: boolean;
  homepage: string;
  id: string;
  keywords: string;
  "links": {
    owner_team: string;
    owner_user: string;
    owners: string;
    reverse_dependencies: string;
    version_downloads: string;
    /**
     * @todo lookup types
     */
    versions: null;
  };
  max_stable_version: string;
  max_version: string;
  name: string;
  newest_version: string;
  recent_downloads: number;
  repository: string;
  updated_at: string | Date;
  /**
   * @todo lookup for types
   */
  versions: [];
}

export interface Info {
  categories: Category[];
  crate: Crate;
  keywords: Keyword[];
  versions: Version[];
}
