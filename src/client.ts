export class Configs {
  private path = "crates.json";
  public auth: string | null;

  constructor() {
    try {
      Deno.lstatSync(this.path);
      const read = Deno.readTextFileSync(`./${this.path}`);

      this.auth = read.auth;
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

export const fetcher = async (url: string) => {
  const configs = new Configs();
  const addition: RequestInit = {};

  const request = await fetch(url, addition);
  return request.json();
};
