const PostsProvider = require("./posts-provider");
const PostsService = require("./posts-services");

jest.mock("./posts-provider");

describe("Posts Service", () => {
  const postsProvider = new PostsProvider();
  const postsService = new PostsService(postsProvider);

  it("should there is an error if there is no posts", async () => {
    expect(postsService.getMostPostedUser()).rejects.toThrow(
      "There is no any post"
    );
  });

  it("should return post titles", () => {
    postsProvider.getPosts.mockResolvedValue([
      { userId: 1, id: 1, title: "title 1", body: "body 1" },
      { userId: 1, id: 2, title: "title 2", body: "body 2" },
    ]);

    expect(postsService.getPostsTitles()).resolves.toEqual([
      "title 1",
      "title 2",
    ]);
  });

  it("should have title attributes in posts", async () => {
    postsProvider.getPosts.mockResolvedValue([
      { userId: 1, id: 1, title: "title 1", body: "body 1" },
      { userId: 1, id: 2, title: "title 2", body: "body 2" },
    ]);
    expect(postsService.getPostsTitles()).resolves.not.toContain(undefined);
  });
});
