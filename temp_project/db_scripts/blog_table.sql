CREATE TABLE blog_data (
blog_id VARCHAR(100),
blog_title TEXT,
blog_description TEXT,
user_name VARCHAR(100) REFERENCES user_data(user_name),
points NUMERIC(10,0) NOT NULL DEFAULT 10
)