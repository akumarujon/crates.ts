export interface Meta {
  next_page: string | null; // "?q=something&page=2"
  prev_page: string | null; // "?q=something&page=1"
  total: number; // X
}

export interface Item {
  badges: [];
  categories: null;
  created_at: string | Date; // "2022-02-22T18:34:48.081213+00:00"
  description: string; // "Extra functionality and widgets for the egui GUI library"
  documentation: string; // null
  downloads: number; // 4732
  exact_match: boolean; // false
  homepage: string; // "https://github.com/to/page"
  id: string; // "egui_extras"
  keywords: null; // unknown
  links: {
    owner_team: string; // "/api/v1/crates/egui_extras/owner_team"
    owner_user: string; // "/api/v1/crates/egui_extras/owner_user"
    owners: string; // "/api/v1/crates/egui_extras/owners"
    reverse_dependencies: string; // "/api/v1/crates/egui_extras/reverse_dependencies"
    version_downloads: string; // "/api/v1/crates/egui_extras/downloads"
    versions: string; // "/api/v1/crates/egui_extras/versions"
  };
  /**
   * @example "0.18.0"
   */
  max_stable_version: string;
  max_version: string; // "0.18.0"
  name: string; // "egui_extras"
  newest_version: string; // "0.18.0"
  recent_downloads: number; // 4300
  repository: string; // "https://github.com/emilk/egui"
  updated_at: string | Date; // "2022-04-30T18:28:54.050226+00:00";
  versions: null; // unknown
}

export interface Search {
  crates: Item[];
  meta: Meta;
}
