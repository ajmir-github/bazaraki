import { cookies, headers, draftMode } from "next/headers";

const key = "auth";

export async function getAuth() {
  if (cookies().has(key)) {
    console.log("a");
  } else {
    console.log(cookies().getAll(key));
  }
  console.log(headers().get(key));
}
