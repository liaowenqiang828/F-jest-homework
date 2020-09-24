import axios from "axios";
import { register } from "../user";
import { verifyUsername, verifyPassword } from "../verify";

jest.mock("../verify");
jest.mock("axios");
// TODO feedback: 未使用的变量就删掉

// const mockValidate = jest.fn()
const username = "fake username";
const password = "fake password";

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    axios.post.mockResolvedValueOnce({
      data: {
        name: "sun",
      },
    });
    const result = register(username, password);
    await expect(result).resolves.toEqual({ name: "sun" });
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here

    // TODO feedback:我们mock的时候，需要mock所依赖的module的function, 而不是自己文件里面的function

    // validate(username,password).mockReturnValue(false);
    verifyUsername.mockImplementation(() => false);
    verifyPassword.mockImplementation(() => true);

    // await register(username, password).catch(err => {
    //    expect(err).toThrow("wrong username or password");
    // });
    await expect(register()).rejects.toThrow(Error);
  });
});
