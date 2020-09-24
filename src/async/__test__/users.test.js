import axios from "axios";
// TODO feedback: 使用import就好了，不需要使用require

// const { default: getUsers } = require("../users");
import getUsers from "../users";

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    // TODO feedback: getUsers()依赖了axios的get方法，所以你需要mock它
    axios.get.mockResolvedValue({ data: {} });
    const result = getUsers();
    await expect(result).resolves.toEqual({});
  });
});
