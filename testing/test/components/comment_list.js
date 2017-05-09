import { renderComponent, expect } from "../test_helper";
import CommentList from "../../src/components/comment_list";

describe("CommentList", () => {
  let component;
  const props = { comments: ["New comment", "Other new comment"] };

  beforeEach(() => {
    component = renderComponent(CommentList, null, props);
  });

  it("shows an <li> for each comment", () => {
    expect(component.find("li")).to.have.length(2);
  });

  it("shows each comment that is provided", () => {
    expect(component).to.contain(props.comments[0]);
    expect(component).to.contain(props.comments[1]);
  });
});
