import { expect } from "../test_helper";
import commentReducer from "../../src/reducers/comments";
import { SAVE_COMMENT } from "../../src/actions/types";

describe("Comments Reducer", () => {
  it("handles actions with unknown type", () => {
    const reducer = commentReducer(undefined, {});
    expect(reducer).to.be.eql([]);
  });

  it("handles action with type SAVE_COMMENT", () => {
    const action = { type: SAVE_COMMENT, payload: "new comment" };
    expect(commentReducer([], action)).to.be.eql(["new comment"]);
  });
});
