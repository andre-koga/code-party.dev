import { allData } from "../../content.json";

export async function load() {
  // console.log(allData);
  return {
    allData,
  };
}
