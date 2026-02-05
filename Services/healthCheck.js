export default function healthCheckHandler(req, res) {
    if (req.method === 'GET') {
        res.status(200).send('It works!');
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}