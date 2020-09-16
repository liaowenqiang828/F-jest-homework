import { register, validate} from "../user";
import axios from "axios";

jest.mock("../verify");
jest.mock("axios");
const mockValidate = jest.fn()
let username = "fake username";
let password = "fake password";

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    axios.post.mockResolvedValueOnce({
      data: {
        name: "sun"
      }
    })
    let result = register(username, password);
    await expect(result).resolves.toEqual({name: "sun"});
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    validate(username,password).mockReturnValue(false);
    await register(username, password).catch(err => {
       expect(err).toThrow("wrong username or password");
    });
  });
});
