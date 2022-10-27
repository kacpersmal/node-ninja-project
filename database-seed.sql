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



/* Auth */ 

/* ROLES */ 

INSERT INTO auth.user_roles(name,id)
VALUES ('user','a1421fe7-5052-414d-835c-fa560c46a24a');

INSERT INTO auth.user_roles(name,id)
VALUES ('admin', '089dfb3e-cd0d-4c0a-951a-54d5635b1870');

/* USERS  password: test1234*/

INSERT INTO auth.users(email,password_hash,role_id)
VALUES ('admin@test.com', '$2b$10$RrYcGRDabeXe/DtGNIa7uOB/QvBWlgNnhgMyCxty2h5fiWc3aXIE2','089dfb3e-cd0d-4c0a-951a-54d5635b1870');

INSERT INTO auth.users(email,password_hash,role_id)
VALUES ('user@test.com', '$2b$10$RrYcGRDabeXe/DtGNIa7uOB/QvBWlgNnhgMyCxty2h5fiWc3aXIE2','a1421fe7-5052-414d-835c-fa560c46a24a');

INSERT INTO auth.users(email,password_hash,role_id,delete_date)
VALUES ('userdel@test.com', '$2b$10$RrYcGRDabeXe/DtGNIa7uOB/QvBWlgNnhgMyCxty2h5fiWc3aXIE2','a1421fe7-5052-414d-835c-fa560c46a24a','2022-10-24 09:50:48.905466+00');