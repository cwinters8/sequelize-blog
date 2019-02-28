'use strict';
var dateFormat = require('dateformat');

module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    body: DataTypes.TEXT
  });
  Article.associate = function(models) {
    // associations can be defined here
  };

  Article.prototype.publishedAt = function() {
    return dateFormat(this.createdAt, "dddd, mmmm dS, yyyy, h:MM TT");
  };
  
  Article.prototype.shortDescription = function() {
    return this.body.length > 30 ? this.body.substr(0, 30) + "..." : this.body;
  };

  return Article;
};