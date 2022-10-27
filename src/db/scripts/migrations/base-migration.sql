/* Creating database */

CREATE DATABASE IF NOT EXISTS "ninja-node"
    WITH
    OWNER = pguser
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

/* AUTH SCHEMA */

CREATE SCHEMA auth;

/* USER ROLES */

CREATE TABLE auth.user_roles
(
    "id" uuid UNIQUE DEFAULT gen_random_uuid(),
    "name" text UNIQUE NOT NULL,
    PRIMARY KEY ("id")
);

ALTER TABLE IF EXISTS auth.user_roles
    OWNER to pguser;

/* USERS */

CREATE TABLE auth.users
(
    "id" uuid UNIQUE DEFAULT gen_random_uuid(),
    "email" text UNIQUE NOT NULL,
    "password_hash" text NOT NULL,
    "role_id" uuid NOT NULL,
    "creation_date" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "delete_date" TIMESTAMPTZ DEFAULT NULL,
    "edit_date" TIMESTAMPTZ DEFAULT NULL,

    PRIMARY KEY ("id"),
    
    CONSTRAINT fk_role
      FOREIGN KEY(role_id) 
	      REFERENCES auth.user_roles(id)
);

ALTER TABLE IF EXISTS auth.users
    OWNER to pguser;

