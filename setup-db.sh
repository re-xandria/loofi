echo "Initializing database..."

export MYSQL_PWD='loofi_2025'

mysql -u root < init-db.sql

unset MYSQL_PWD