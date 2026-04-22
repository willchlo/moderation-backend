export default function handler(req, res) {
  const { message } = req.body || {};

  if (!message) {
    return res.status(400).json({ error: "No message" });
  }

  return res.status(200).json({
    safe: true,
  });
}
