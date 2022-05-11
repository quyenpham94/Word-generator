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

INSERT INTO categories (handle, 
                        name,
                        description)
    VALUES ('animals', 'Animals','animals'),
           ('sports','Sports','sports'),
           ('places', 'Places','places'),
           ('food and cooking', 'Food and Cooking','food and cooking');
           ('movies 1', 'Movies 1', 'movies 1');
           ('movies 2', 'Movies 2', 'movies 2');
           ('food 1', 'Food 1', 'food 1');
           ('food 2', 'Food 2', 'food 2');
           ('nature', 'Nature', 'nature');

INSERT INTO words (name, category_handle)
    VALUES ('leopard', 'animals'),
           ('reindeer','animals'),
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
           ('Spiderman', 'movies 1');
           ('Groundhog Day', 'movies 1');
           ('Back to the Future', 'movies 1');
           ('Apollo 13', 'movies 1');
           ('Batman', 'movies 1');
           ('The Princess Bride', 'movies 1');
           ('High School Musical', 'movies 1');
           ('Snow White', 'movies 1');
           ('Tarzan', 'movies 1');
           ('Sleeping Beauty', 'movies 1');
           ('The Lion King', 'movies 2');
           ('Dumbo', 'movies 2');
           ('Aladdin', 'movies 2');
           ('Forest Gump', 'movies 2');
           ('Beauty and the Beast', 'movies 2');
           ('Up', 'movies 2');
           ('Thoy Story', 'movies 2');
           ('Cars', 'movies 2');
           ('Finding Nemo', 'movies 2');
           ('The Incredibles', 'movies 2');
           ('beef jerky', 'food 1');
           ('deep-fry', 'food 1');
           ('blackberry', 'food 1');
           ('pancakes', 'food 1');
           ('broth', 'food 1');
           ('hot dogs', 'food 1');
           ('Kool-aid', 'food 1');
           ('bake', 'food 1');
           ('waffles', 'food 1');
           ('crepe', 'food 1');
           ('KFC', 'food 2');
           ('appetizer', 'food 2');
           ('frying pan', 'food 2');
           ('popcorn', 'food 2');
           ('chicken pot pie', 'food 2');
           ('strawberry', 'food 2');
           ('basil', 'food 2');
           ('taco', 'food 2');
           ('Burger King', 'food 2');
           ('McDonalds', 'food 2');
           ('river', 'nature');
           ('cliff', 'nature');
           ('moor', 'nature');
           ('predator', 'nature');
           ('weeping pillow', 'nature');
           ('typhoon', 'nature');
           ('saltwater', 'nature');
           ('wadi', 'nature');
           ('paw', 'nature');
           ('wings', 'nature');
                      