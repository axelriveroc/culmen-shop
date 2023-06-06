const db = require("../models");

// Sincronizar los modelos con la base de datos (ejecutar migraciones)
db.sequelize
  .sync()
  .then(() => {
    console.log("Migraciones aplicadas correctamente.");
    process.exit(0); // Finaliza el proceso después de ejecutar las migraciones
  })
  .catch((error) => {
    console.error("Error al aplicar las migraciones:", error);
    process.exit(1); // Finaliza el proceso con un código de error en caso de fallo
  });
