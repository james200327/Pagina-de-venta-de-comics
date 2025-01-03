CREATE USER 'james'@'localhost' IDENTIFIED BY '1234';
create database webcomic;
GRANT ALL PRIVILEGES ON webcomic.* TO 'james'@'localhost';
FLUSH PRIVILEGES;
use webcomic;
