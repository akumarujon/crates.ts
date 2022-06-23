/**
 * Base AUR API URL
 */
import { Search } from "./types/search.ts";
import fetcher from "./client.ts";

const baseUrl = "https://crates.io/api/v1/crates";

/**
 * Search for packages on crates.io
 * @exports
 */
// on node.js, i wouldn't use index as name, nodejs sucks! :)
export const index = async (): Promise<Search> => {
  return await fetcher(baseUrl);
};

/**
 * Search for packages on crates.io
 * @param query The query to search for
 * @param per_page Count of results to have in response
 * @exports
 */
export const search = async (
  query: string,
  per_page?: number,
): Promise<Search> => {
  const url = `${baseUrl}?q=${query}${per_page ? "&per_page=" + per_page : ""}`;
  return await fetcher(url);
};

// /**
//  * Get info about single package
//  * @param query Packages to get info for
//  * @exports
//  */
// export const info = async (query: string | string[]): Promise<AURInfo[]> => {
//     if (typeof query === "string") {
//         query = [query];
//     }
//
//     const url = `${baseUrl}&type=info${
//         query
//             .map((pkg) => `&arg[]=${pkg}`)
//             .join("")
//     }`;
//     const response = await fetcher(url);
//     return response.results;
// };

export default { search }; // info
