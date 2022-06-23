// deno-lint-ignore-file no-explicit-any
/**
 * WIP
 */
export class Configs {
  private path = "crates.json";
  public auth: string | null;

  constructor() {
    try {
      Deno.lstatSync(this.path);
      const read: Record<string, string> = JSON.parse(
        Deno.readTextFileSync(`./${this.path}`),
      );

      this.auth = read["auth"];
    } catch (err) {
      if (err instanceof Deno.errors.NotFound) {
        this.auth = null;
      }
    }
  }

  object() {
    return Object.assign({}, this);
  }

  async save() {
    await Deno.writeTextFile(this.path, JSON.stringify(this.object()));
  }
}

// export const fetcher = async (url: string) => {
//   // const configs = new Configs();
//   const addition: RequestInit = {};
//
//   const request = await fetch(url, addition);
//   return request.json();
// };

export default async (link: string | undefined): Promise<any> => {
  if (!link) {
    throw new Error("No link provided");
  }

  try {
    const response = await fetch(link);
    return await response.json();
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
};
