const fs = require('fs').promises;

async function generateSchema(dbName, schema, schemaName) {
  let codeString = `
  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
  
  mongoose.connect('mongodb://localhost:27017', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  dbName: "${dbName}"
  });

  const testSchema = new Schema(${schema});

  module.exports = mongoose.model("${schemaName}", testSchema);
  `;
 
  try {
    await fs.writeFile(`backend/models/${schemaName}.js`, codeString);
  } catch (err) {
    console.log("Error in generate schema", err);
  }
  
  console.log('File written');
}

generateSchema('databaseName', `{
    name: String,
    rotation_period: Number,
    orbital_period: Number,
    diameter: Number,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    population: Number
  }`, 'schemaName');