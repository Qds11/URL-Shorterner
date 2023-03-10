DROP DATABASE IF EXISTS URLShorterner;

CREATE DATABASE URLShorterner;
USE URLShorterner;

CREATE TABLE IF NOT EXISTS url_information (
  id INT NOT NULL AUTO_INCREMENT,
  short_url_key VARCHAR(50) NOT NULL,
  long_url VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (short_url_key)
);



