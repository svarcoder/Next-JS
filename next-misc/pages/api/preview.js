export default function handler(req, res) {
  res.setPreviewData({
    user: "Subham",
  });
  res.redirect(req.query.redirect);
}
