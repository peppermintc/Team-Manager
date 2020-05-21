var db = require('../db');

db.query(`SELECT * FROM team`, function (error, teams) {
  if(error){throw error;}
  console.log(teams);
});

export default q1;