import { PrismaClient } from "@prisma/client";

async function main() {
  const client = new PrismaClient();

  const data = await client.friendRequest.update({
    where: {
      fromUserId_toUserId: {
        fromUserId: 1,
        toUserId: 2,
      },
    },
    data: {
      status: "accepted",
    },
  });
  console.log(data);
  client.disconnect();
}

main();
