# Restaurant Recommendation Website Based On Scrapped Data 

This project aims to scrape restaurant data from https://afar.com and store it in both a JSON file and a MySQL database. The stored data can then be retrieved and displayed on a website built using React.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributing)
- [Acknowledgments](#acknowledgments)

## Getting Started

### Prerequisites

To run this project, you will need the following installed on your local machine:

- Python 3.x
- Django
- MySQL Connector for Python
- React

### Installation

1. Clone the repository to your local machine:

  ```
  git clone https://github.com/mimidoox/-Restaurant-Recommendation-Website.git
  ```
  
## Usage

1. Scrape restaurant data and store it in a file:

- Execute the `my_spider.py` to scrape the data and save it in a JSON file.

  ```
  scrapy crawl my_spider -o data.json
  ```

2. Load the scraped data into the MySQL database:

- Execute the `scrapy_to_db.py` script to load the data from the file into the database.

  ```
  python3 scrapy_to_db.py /path/to/your/data.json
  ```

3. Display the restaurant data on the website:

- The React frontend retrieves the data from the Django backend using Axios and displays it on the website.

## Contributions

- ARRAJ Mohamed
- ABERANE Dia Eddine


## Acknowledgments

- [Scrapy](https://scrapy.org/)
- [Django](https://www.djangoproject.com/)
- [MySQL](https://www.mysql.com/)
- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)


