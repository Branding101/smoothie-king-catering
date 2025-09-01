export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok:false, error:"Method not allowed" });
  const { name, email, industry, message } = req.body || {};
  console.log("Lead:", { name, email, industry, message });
  return res.status(200).json({ ok:true });
}