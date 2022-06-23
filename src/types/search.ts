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

  /**
   * @example "2022-02-22T18:34:48.081213+00:00"
   */
  created_at: string | Date;

  /**
   * @example "Extra functionality and widgets for the egui GUI library"
   */
  description: string;

  /**
   * @example "https://docs.rs/releases/search?query=something"
   */
  documentation: string;

  /**
   * @example 4732
   */
  downloads: number;

  /**
   * @example false
   */
  exact_match: boolean;

  /**
   * @example "https://github.com/rust-lang-uz/crates.ts"
   */
  homepage: string;

  /**
   * @example "egui_extras"
   */
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
    /**
     * @example "/api/v1/crates/egui_extras/owner_team"
     */
    owner_team: string;

    /**
     * @example "/api/v1/crates/egui_extras/owner_user"
     */
    owner_user: string;

    /**
     * @example "/api/v1/crates/egui_extras/owners"
     */
    owners: string;

    /**
     * @example "/api/v1/crates/egui_extras/reverse_dependencies"
     */
    reverse_dependencies: string;

    /**
     * @example "/api/v1/crates/egui_extras/downloads"
     */
    version_downloads: string;

    /**
     * @example "/api/v1/crates/egui_extras/versions"
     */
    versions: string;
  };

  /**
   * @example "0.18.0"
   */
  max_stable_version: string;

  /**
   * @example "0.18.0"
   */
  max_version: string;

  /**
   * @example "egui_extras"
   */
  name: string;

  /**
   * @example "0.18.0"
   */
  newest_version: string;

  /**
   * @example 4300
   */
  recent_downloads: number;

  /**
   * @example "https://github.com/rust-lang-uz/crates.ts"
   */
  repository: string;

  /**
   * @example "2022-04-30T18:28:54.050226+00:00"
   */
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
