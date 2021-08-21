CREATE DATABASE pernotesapp;
--\c pernotesapp
--//create extension if not exists "uuid-ossp";
--\x off
--\d+ users
--psql -U postgres
CREATE TABLE users(
    user_id UUID DEFAULT 
    uuid_generate_v4(),
    user_name varchar(255) NOT NULL,
    user_email varchar(255) NOT NULL,
    user_password varchar(255) NOT NULL,
    PRIMARY KEY(user_id)
);
CREATE TABLE notes(
    note_id  SERIAL,
    user_id UUID,
    note_content varchar(255) NOT NULL UNIQUE,
    note_important Boolean,
    PRIMARY KEY(note_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);

INSERT INTO users (user_name,user_email,user_password) VALUES()