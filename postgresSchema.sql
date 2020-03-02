CREATE TABLE class_status
(
    id SERIAL PRIMARY KEY,
    status_title TEXT NOT NULL,
    rank INTEGER
);

INSERT INTO class_status
    (status_title, rank)
VALUES
    ('Awesome', 5),
    ('Great', 4),
    ('Good', 3),
    ('Okay', 2),
    ('Poor', 1),
    ('Unranked', 0);

CREATE TABLE topic
(
    id SERIAL PRIMARY KEY,
    topic_title TEXT NOT NULL,
    status_id INT,
    FOREIGN KEY
    (status_id) REFERENCES class_status
    (id)
);

INSERT INTO topic
    (topic_title)
VALUES
    ('HTML'),
    ('CSS'),
    ('Javascript'),
    ('PostgreSQL'),
    ('NodeJS'),
    ('ExpressJS');

