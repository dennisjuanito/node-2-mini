module.exports = {
  getPlanes: (req, res, next) => {
    let dataBaseInstance = req.app.get("db"); // this will get a dbinstance
    dataBaseInstance
      .get_planes([25])
      .then(planes => {
        res.status(200).send(planes);
      })
      .catch(err => {
        console.log(err);
        res.status(500);
      });
  }
};
