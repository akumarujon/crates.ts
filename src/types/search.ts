// deno-lint-ignore-file no-explicit-any

export interface Meta {
  /**
   * Anchor to the previous page
   * null if there is no more results
   * @example "?q=something&page=2"
   */
  next_page: string | null;

  /**
   * Anchor to the next page
   * null if there is no more results
   * @example "?q=something&page=1"
   */
  prev_page: string | null;

  /**
   * Total amount of results
   */
  total: number;
}

export interface Item {
  /**
   * @todo: lookup types
   */
  badges: any[];
  /**
   * Supposed to be categories list (array of strings)
   * However, always return null value...
   * Maybe just to avoid big chunk of spam
   */
  categories: null;
  created_at: string | Date;
  description: string;
  documentation: string;
  downloads: number;
  exact_match: boolean;
  homepage: string;
  id: string;
  /**
   * Supposed to be keyword list (array of strings)
   * However, always return null value...
   * Maybe just to avoid big chunk of spam
   */
  keywords: null;
  /**
   * Links to various fields
   */
  links: {
    owner_team: string;
    owner_user: string;
    owners: string;
    reverse_dependencies: string;
    version_downloads: string;
    versions: string;
  };
  max_stable_version: string;
  max_version: string;
  name: string;
  newest_version: string;
  recent_downloads: number;
  repository: string;
  updated_at: string | Date;
  /**
   * Supposed to be version list (list of massive objects)
   * However, always return null value...
   * Maybe just to avoid big chunk of spam
   */
  versions: null;
}

export interface Search {
  crates: Item[];
  meta: Meta;
}
