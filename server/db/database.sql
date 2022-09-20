CREATE DATABASE teebay;

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    password VARCHAR(50) NOT NULL,
    UNIQUE (email)
);

CREATE TABLE products(
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INT,
    title VARCHAR(255) NOT NULL,
    categories VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    rent INT NOT NULL,
    time VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)


);

CREATE TABLE transactions(
    id SERIAL PRIMARY KEY NOT NULL,
    product_id INT NOT NULL,
    user_id INT,
    product_name VARCHAR(255) NOT NULL,
    action VARCHAR(255) NOT NULL,
    time VARCHAR(255),
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);