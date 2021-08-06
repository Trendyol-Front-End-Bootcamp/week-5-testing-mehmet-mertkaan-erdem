const PostsProvider = require("./posts-provider");
describe("PostsProvider", () => {
  const postsProvider = new PostsProvider();

  it("should fetch posts from api", async () => {
    const posts = await postsProvider.getPosts();

    expect(posts.length).toBeGreaterThan(0);
  });
});
