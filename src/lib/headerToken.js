import { auth } from "@/auth";
export default async function headerToken() {
  const session = await auth();
  console.log(session?.user?.token);
  // console.log(products);
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${session?.user?.token}`,
  };
}
