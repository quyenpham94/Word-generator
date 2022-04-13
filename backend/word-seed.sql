-- both test users have the password "password"

INSERT INTO users (username, password, first_name, last_name, email, is_admin)
    VALUES ('testuser',
            '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
            'Test',
            'User',
            'joel@joelburton.com',
            FALSE),
        ('testadmin',
            '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
            'Test',
            'Admin!',
            'joel@joelburton.com',
            TRUE);

INSERT INTO categories(handle, name)
    VALUES ('animals', 'Animals'),
           ('sports','Sports'),
           ('places', 'Places'),
           ('food and cooking', 'Food and Cooking');
        
INSERT INTO words (name, category_handle)
    VALUES ('leopard', 'animals'),
           ('reindeer','animlas'),
           ('clam', 'animals'),
           ('crab', 'animals'),
           ('donkey', 'animals'),
           ('seahorse', 'animals'),
           ('puppy', 'animals'),
           ('python', 'animals'),
           ('spider', 'animals'),
           ('bumblebee', 'animals'),
           ('trophy', 'sports'),
           ('karate', 'sports'),
           ('curve ball', 'sports'),
           ('soft ball', 'sports'),
           ('swimming pool', 'sports'),
           ('slam dunk', 'sports'),
           ('sprint', 'sports'),
           ('game clock', 'sports'),
           ('tumbling', 'sports'),
           ('uniform number', 'sports'),
           ('Nebraska', 'places'),
           ('Stonehenge', 'places'),
           ('Big Ben', 'places'),
           ('Iran', 'places'),
           ('Ukraine', 'places'),
           ('Egypt', 'places'),
           ('Bahamas', 'places'),
           ('South Dakota', 'places'),
           ('Phonenix', 'places'),
           ('West Virginia', 'places'),
           ('meatball', 'food and cooking'),
           ('cuisine', 'food and cooking'),
           ('white bread', 'food and cooking'),
           ('pumpkin pie', 'food and cooking'),
           ('cookie', 'food and cooking'),
           ('food coloring', 'food and cooking'),
           ('green bean', 'food and cooking'),
           ('whipped cream', 'food and cooking'),
           ('salami', 'food and cooking'),
           ('kettle', 'food and cooking');
                      