export default function handler(req, res) {
  res.status(200).json({ status: 'ok', message: 'Lucent Pharmatech API is running on Vercel Serverless' });
}
