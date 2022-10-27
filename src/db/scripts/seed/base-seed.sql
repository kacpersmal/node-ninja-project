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