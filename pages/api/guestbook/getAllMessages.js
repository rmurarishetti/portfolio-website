import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
    const result = await prisma.message.findMany();
    const sortedData = result.sort((a, b) => {
        return (new Date(b.dateTime) - new Date(a.dateTime))
    })
    res.json(sortedData);
}