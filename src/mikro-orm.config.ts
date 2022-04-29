import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\.[tj]s$/,
  },
  entities: [Post],
  dbName: "lireddit",
  user: "postgres",
  password: "kibuika",
  type: "postgresql",
  debug: !__prod__, // when not in prod, set debug to true
  allowGlobalContext: true,
} as Parameters<typeof MikroORM.init>[0];
