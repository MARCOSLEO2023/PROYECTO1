class mascotasController {
  constructor() {}

  async create(req, res) {
    try {
      res.status(201).json({ status: "create-ok" });
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async update(req, res) {
    try {
      res.status(201).json({ status: "update-ok" });
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async delete(req, res) {
    try {
      res.status(201).json({ status: "delete-ok" });
    } catch (err) {
      res.status(500).send(err);
    }
  }
  async getAll(req, res) {
    try {
      res.status(201).json({ status: "getAll-ok" });
    } catch (err) {
      res.status(500).send(err);
    }
  }
  async getOne(req, res) {
    try {
      res.status(201).json({ status: "getOne-ok" });
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

export default new mascotasController();
