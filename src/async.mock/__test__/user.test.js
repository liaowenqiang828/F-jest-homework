import axios from "axios";
import { register } from "../user";
import { verifyPassword } from "../verify";

jest.mock("../verify");
jest.mock("axios");
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
    const mockUsername = "fake username";
    const mockPassword = "fake password";
    verifyPassword.mockImplementation(() => false);
    await expect(register(mockUsername, mockPassword)).rejects.toThrow(
      "wrong username or password"
    );
  });
});
