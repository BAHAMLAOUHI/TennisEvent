// Modules / packages
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const User = require("./models/User"); // Nom du fichier modèle en minuscules
const sponsors = require("./models/sponsors"); // Nom du fichier modèle en minuscules
const Sponsor = require("./models/sponsors");

const Participant = require("./models/participant"); // Nom du fichier modèle en minuscules
const multer = require("multer");
const path = require("path");

// App instance
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// GET All users
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});
app.get("/sponsors", async (req, res) => {
    const sponsor = await sponsors.find();
    res.json(sponsor);
  });
app.get("/participants", async (req, res) => {
  const participants = await Participant.find();
  res.json(participants);
});

// Configuration de Multer pour gérer le téléchargement du fichier photo
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads"); // Répertoire de destination des fichiers
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext); // Nom du fichier : timestamp + extension
  },
});

app.post("/participants", async (req, res) => {
  try {
    const { nom, prenom, email, telephone, description } = req.body;

    const participant = new Participant({
      nom: nom,
      prenom: prenom,
      email: email,
      telephone: parseInt(telephone),
      description: description,
    });

    await participant.save();

    res.status(201).json(participant);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Une erreur s'est produite lors de l'ajout du participant." });
  }
});

app.delete('/participants/:id', async (req, res) => {
  const sponsorId = req.params.id;

  try {
    const deletedInterv = await Participant.findByIdAndDelete(sponsorId);

    if (!deletedInterv) {
      res.status(404).json({ error: "Le sponsor n'a pas été trouvé." });
      return;
    }

    res.json({ message: "Sponsor supprimé avec succès." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Une erreur s'est produite lors de la suppression du sponsor." });
  }
});

const upload = multer({ storage: storage });

// Route POST pour créer un nouvel utilisateur avec photo
app.post("/users", upload.single("photo"), async (req, res) => {
  try {
    const { nom, prenom, email, telephone, message } = req.body;

    const user = new User({
      nom: nom,
      prenom: prenom,
      email: email,
      telephone: parseInt(telephone),
      message: message,
      photo: req.file.filename, // Nom du fichier photo
    });

    await user.save();

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Une erreur s'est produite lors de la création de l'utilisateur." });
  }
});
app.post("/sponsors", async (req, res) => {
  console.log(req.body);

  try {
    const { image } = req.body;
    const sponsor = new Sponsor({
      image: image,
    });

    await sponsor.save();

    res.status(201).json(sponsor);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Une erreur s'est produite lors de l'ajout du sponsor" });
  }
});
app.delete('/sponsors/:id', async (req, res) => {
  const sponsorId = req.params.id;

  try {
    const deletedSponsor = await Sponsor.findByIdAndDelete(sponsorId);

    if (!deletedSponsor) {
      res.status(404).json({ error: "Le sponsor n'a pas été trouvé." });
      return;
    }

    res.json({ message: "Sponsor supprimé avec succès." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Une erreur s'est produite lors de la suppression du sponsor." });
  }
});




// Autres routes et middleware...

// Démarrer le serveur
app.listen(8000, () => {
  console.log("Serveur démarré sur le port 8000");
});

// Connexion à la base de données
mongoose
  .connect("mongodb+srv://bahamlaouhi2:test1111@mernapp.nqqzrqt.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connecté à la base de données MongoDB");
  })
  .catch((error) => {
    console.log("Erreur de connexion à la base de données MongoDB", error);
  });
