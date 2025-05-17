CREATE DATABASE IF NOT EXISTS loofi;

CREATE USER IF NOT EXISTS 'loofi_admin'@'localhost' IDENTIFIED BY 'loofi_2025';

GRANT ALL PRIVILEGES ON loofi.* TO 'loofi_admin'@'localhost';

FLUSH PRIVILEGES;
