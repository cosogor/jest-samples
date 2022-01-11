const filterByTerm = require('../src/filterByTerm');

describe("Filter function", () => {
  const input = [
    { id: 1, url: "https://www.url1.dev" },
    { id: 2, url: "https://www.url2.dev" },
    { id: 3, url: "https://www.link3.dev" }
  ];
  const output = [{ id: 3, url: "https://www.link3.dev" }];
  const output2 = [
    { id: 1, url: "https://www.url1.dev" },
    { id: 2, url: "https://www.url2.dev" },
  ];
  test("it should filter by a search term (link)", () => {
    expect(filterByTerm(input, "link")).toEqual(output);
    expect(filterByTerm(input, "LINK")).toEqual(output);
  });
  test("it should filter by a search term input = empty[]", () => {
    expect(()=>filterByTerm([], "link")).toThrow();
  });
  test("it should filter by a search filter  = \"\"", () => {
    expect(()=>filterByTerm(input, "")).toThrow();
  });
  test("it should filter by a search input = empty[] and filter  = \"\"", () => {
    expect(()=>filterByTerm([], "")).toThrow();
  });
});