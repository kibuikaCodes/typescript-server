import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import mikroOrmConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig); // initialise the ORM
  orm.getMigrator().up(); // runs migrations automatically
  const post = orm.em
    .fork({})
    .create(Post, {
      title: "test post",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  await orm.em.persistAndFlush(post);
  const posts = await orm.em.find(Post, {});
  console.log(posts);
};
main().catch((err) => {
  console.log(err);
});
