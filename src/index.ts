import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateParams {
    firstName: string;
    lastName: string;
}
async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
    const res = await prisma.user.update({
        where: { email: username },
        data: {
            firstName,
            lastName
        }
    })
    console.log(res);
}

updateUser("aakashrambhad08@gmail.com", {
    firstName: "1111",
    lastName: "Rambhad"
});
