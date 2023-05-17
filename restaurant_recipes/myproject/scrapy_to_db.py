import os
import json
import mysql.connector

class ScrapyToDB:
    def __init__(self, file_path):
        self.file_path = '/Users/macbookmimid/PycharmProjects/restaurant_recipes/restaurant_recipes/myproject/noo.json'

    def store_data(self):
        # Get the absolute path to the JSON file
        file_path = os.path.abspath(self.file_path)

        with open(file_path) as f:
            data = json.load(f)

        # Connect to MySQL database
        db = mysql.connector.connect(
            user='root',
            password='',
            database='restodb'
        )

        cursor = db.cursor()

        for item in data:
            name = item['restaurant']
            image_path = item['img']
            description = item['description']
            address = item['adresse']

            # Insert scraped data into MySQL database
            sql = "INSERT INTO restaurant (nom, img, description, adresse) VALUES (%s, %s, %s, %s)"
            values = (name, image_path, description, address)
            cursor.execute(sql, values)

        # Commit changes and close the connection
        db.commit()
        cursor.close()
        db.close()

        print('Restaurant data stored successfully.')


if __name__ == '__main__':
    file_path = '/restaurant_recipes/myproject/noo.json'  # Replace with the actual path to your JSON file
    scraper = ScrapyToDB(file_path)
    scraper.store_data()
