import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
    const { messageId } = req.query
    if (req.method === 'DELETE') {
        const result = await prisma.message.delete({
            where: {
                id: messageId
            },
        });
        res.json(result);
    }
}