class PostsService {
  constructor(postsProvider) {
    this.postsProvider = postsProvider;
  }

  async getMostPostedUser() {
    const posts = await this.postsProvider.getPosts();

    const users = this.getUsers(posts);

    let mostPostedUsersPosts = {};

    for (const userId in users) {
      if (Object.keys(mostPostedUsersPosts).length === 0) {
        mostPostedUsersPosts = users[userId];
      }

      if (users[userId].posts.length > mostPostedUsersPosts.posts.length) {
        mostPostedUsersPosts = users[userId];
      }
    }

    return mostPostedUsersPosts.posts;
  }

  getUsers(posts) {
    const users = {};

    try {
      posts.forEach((post) => {
        if (users.hasOwnProperty(post.userId)) {
          users[post.userId].posts.push(post);
        } else {
          users[post.userId] = {
            posts: [post],
          };
        }
      });
    } catch (err) {
      throw new Error("There is no any post");
    }

    return users;
  }

  async getPostsTitles() {
    let posts;

    try {
      posts = await this.getMostPostedUser();
      return posts.map((post) => post.title);
    } catch (err) {
      throw new Error("Not post titles found");
    }
  }
}

module.exports = PostsService;
