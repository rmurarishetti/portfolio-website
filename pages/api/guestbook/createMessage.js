import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
    const { email, image, fullName, message, dateTime } = req.body

    const result = await prisma.message.create({
        data: {
            email,
            image,
            fullName,
            message,
            dateTime
        }
    });

    res.json(result);
}