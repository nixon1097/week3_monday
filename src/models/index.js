const Country = require('./Country');
const Degree = require('./Degree');
const Student = require('./Student');



Student.belongsTo(Degree) // degreeId
Degree.hasMany(Student)

Student.belongsTo(Country) // countryID
Country.hasMany(Student)