import { users } from "../../users.json";

export async function load() {
  console.log("load");
  return {
    users: users,
  };
}
