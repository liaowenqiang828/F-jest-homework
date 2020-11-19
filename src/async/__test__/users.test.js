const { default: axios } = require("axios");
const { default: getUsers } = require("../users");

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    axios.get.mockResolvedValueOnce({ data: {} });
    const result = getUsers();
    await expect(result).resolves.toEqual({});
  });
});
