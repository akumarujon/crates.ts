import { Search } from "./types/search.ts";
import fetcher from "./client.ts";
import { Info } from "./types/info.ts";

/**
 * Base crates.io API URL
 */
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
  return await fetcher<Search>(url);
};

/**
 * Get info about single package
 * @param query Packages to get info for
 * @param version You may specify version of Package
 * @exports
 */
export const info = async (
  query: string,
  version?: string,
): Promise<Info[]> => {
  const url = baseUrl + `/${query}${version ? `/${version}` : ""}`;
  return await fetcher<Info[]>(url);
};

export default { index, search, info };
