export interface Category {
  /**
   * @example "Algorithms"
   */
  category: string;

  /**
   * @example 1649
   */
  crates_cnt: number;

  /**
   * @example "2017-01-17T19:13:05.112025+00:00"
   */
  created_at: string | Date;

  /**
   * @example "Rust implementations of core algorithms such as hashing, sorting, searching, and more."
   */
  description: string;

  /**
   * @example "algorithms"
   */
  "id": string;

  /**
   * @example "algorithms"
   */
  "slug": string;
}

export interface Auctions {
  /**
   * @example "publish"
   */
  "action": string;

  /**
   * @example "2022-02-14T08:37:47.035988+00:00"
   */
  "time": string | Date;

  /**
   * Author of Auction
   */
  "user": {
    /**
     * @example "https://avatars.githubusercontent.com/u/134893?v=4"
     */
    "avatar": string;

    /**
     * @example 1234
     */
    "id": number;

    /**
     * @example "dhardy"
     */
    "login": string;

    /**
     * @example "Diggory Hardy"
     */
    "name": string;

    /**
     * @example "https://github.com/dhardy"
     */
    "url": string;
  };
}

// export interface Version {
//   "audit_actions": Auctions[];
//   "crate": "rand";
//   "crate_size": 87113;
//   "created_at": "2022-02-14T08:37:47.035988+00:00";
//   "dl_path": "/api/v1/crates/rand/0.8.5/download";
//   "downloads": 7786310;
//   "features": {
//     "alloc": [
//       "rand_core/alloc",
//     ];
//     "default": [
//       "std",
//       "std_rng",
//     ];
//     "getrandom": [
//       "rand_core/getrandom",
//     ];
//     "min_const_gen": [];
//     "nightly": [];
//     "serde1": [
//       "serde",
//       "rand_core/serde1",
//     ];
//     "simd_support": [
//       "packed_simd",
//     ];
//     "small_rng": [];
//     "std": [
//       "rand_core/std",
//       "rand_chacha/std",
//       "alloc",
//       "getrandom",
//       "libc",
//     ];
//     "std_rng": [
//       "rand_chacha",
//     ];
//   };
//   "id": 499768;
//   "license": "MIT OR Apache-2.0";
//   "links": {
//     "authors": "/api/v1/crates/rand/0.8.5/authors";
//     "dependencies": "/api/v1/crates/rand/0.8.5/dependencies";
//     "version_downloads": "/api/v1/crates/rand/0.8.5/downloads";
//   };
//   "num": "0.8.5";
//   "published_by": {
//     "avatar": "https://avatars.githubusercontent.com/u/134893?v=4";
//     "id": 1234;
//     "login": "dhardy";
//     "name": "Diggory Hardy";
//     "url": "https://github.com/dhardy";
//   };
//   "readme_path": "/api/v1/crates/rand/0.8.5/readme";
//   "updated_at": "2022-02-14T08:37:47.035988+00:00";
//   "yanked": false;
// }
