var mongoose = require('mongoose');

var IntoxicationSchema = new mongoose.Schema({
  Year : String,
  Heroin : Number,
  Prescription_Opioid : Number,
  Alcohol : Number,
  Benzodiazepine : Number,
  Cocaine : Number,
  Fentanyl : Number,
},
{
    collection: 'intoxication_deathcounts_collection'
});

mongoose.model('IntoxicationDeaths', IntoxicationSchema);