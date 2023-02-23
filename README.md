# Google Books Search Engine

## Description

This application lets you search for books using google's api. It returns a list of books with a title, author, and a short description. You can make an account which is saved using a mongoDB database and save the books to your account which can be removed at any time. This project was a way for me to practice a way to set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API. As well as modify the existing authentication middleware so that it works in the context of a GraphQL API. I was able to as well create an Apollo Provider so that requests can communicate with an Apollo Server.

## Installation

- Have Nodejs installed (I used v16.18)
- Install npm dependencies
  - use 'npm install' on terminal once navigated to folder
- create a .env file, rename/use the [.env.EXAMPLE file](./server/.env.EXAMPLE)
  - create your own secret for better security

## Usage

Navigate to the root directory of the project in your terminal and install the dependencies with 'npm i' then start the server with 'npm run develop'. The application will be deployed on your localhost with port 3000. When you first start the application you should see something similar to the image below. You can make an account or login if you've already made one. Then type in a book title into the search which will display matching books. If you're logged in you will see a button to save the book. If you click the "See Your Books" navigation link it will take you a page with a list of books you have saved each with a button to delete it from your list. You can also view a [working application through this heroku link.](https://search-google-books.herokuapp.com/)

![project preview](assets/images/project-preview.jpg)

## Credits

N/A

## License

N/A
