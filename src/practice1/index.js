import getURL from "./utils";
import { ADDRESS, REGION as region, PATH, PORT } from "./constant";

const url = getURL(ADDRESS, PATH, PORT);

export { url, region };
