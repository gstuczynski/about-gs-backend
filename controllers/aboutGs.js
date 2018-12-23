exports.getAboutGsInfo = (req, res) => {
  console.log("supa", req.session.dupa);
  const bio = "abotu gs";
  res.send(bio);
};
