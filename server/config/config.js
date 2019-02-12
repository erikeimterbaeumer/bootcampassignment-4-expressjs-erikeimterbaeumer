//This file holds any configuration variables we may need 
//'config.js' is typically ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
  db: {
    uri: 'mongodb://root:root123@ds121455.mlab.com:21455/bootcampsoftwareengineering', //place the URI of your mongo database here.
  }, 
  port: process.env.PORT || 3000
};