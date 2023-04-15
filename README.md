# BookMyShow Clone

This is a project that is a clone of BookMyShow, a popular online ticketing platform, developed using Node.js, Express, MongoDB, React, HTML, and CSS. It allows users to choose a theater and book their seats for movies or events.

## How to Start

Clone the repository: 
```bash 

git clone https://github.com/ashishingle29/Book-My-Seat.git  

```

```bash

cd backend

npm Start

```

```bash

cd frontend

npm run dev

```

Open http://localhost:5173/ to view



### Project Description: BookMyShow Clone

The BookMyShow Clone is a web-based application that allows users to book seats in theaters for movies or events. It is built using Node.js, Express, MongoDB, React, HTML, and CSS. The application provides a user-friendly interface for users to browse and select theaters, choose showtimes, and book seats for their preferred shows.

---

![Screenshot 2023-04-15 052928](https://user-images.githubusercontent.com/114053180/232172209-82796299-7e98-4d1f-ad4c-aa0b2c93d75d.png)

---

### The main features of the BookMyShow Clone include:

1. Theater Selection: Users can browse through a list of available theaters and select their preferred theater for booking seats.
2. Seat Booking: Users can choose their desired showtime and select seats from the available options, which include two types - Standard and Premium.
3. Seat Status: The seat status is visually represented using different colors. Booked seats are shown in gray, selected seats are shown in green, and available seats are shown in white.
4. Real-time Updates: The seat availability is updated in real-time to provide an interactive and seamless booking experience for users.
5. Authentication: Users can register and log in to their accounts to manage their bookings and view their booking history.
6. Responsive Design: The application is designed to be responsive, allowing users to access it from different devices, such as desktops, tablets, and mobiles.

The BookMyShow Clone is a full-stack application that utilizes Node.js and Express for building the backend server, MongoDB for database management, React for the frontend user interface, and HTML/CSS for the website layout and design. It provides an intuitive and easy-to-use interface for users to book seats in theaters for their favorite movies or events.

---

### Theater CRUD operation

SCHEMA

```json
{
    theaterName: {
      type: String,
      required: true,
    },
    seatCategory: [
      {
        categoryName: String,
        categoryPrice: Number,
        rowCount: Number,
        columnCount: Number,
        totalSeat: Number,
        bookedSeat: [Number],
      },
    ],
  }
```


CREATE

```js
{
    "theaterName": "PVR",
    "seatCategory": [
        {
            "categoryName": "Standard",
            "categoryPrice": 160,
            "rowCount": 3,
            "columnCount": 7
        },
        {
            "categoryName": "Premium",
            "categoryPrice": 200,
            "rowCount": 6,
            "columnCount": 12
        }
    ]
}
```

SUCCESSFULLY CREATED DATA 

```js
{
    "status": "success",
    "data": {
        "theater": {
            "theaterName": "Meta",
            "seatCategory": [
                {
                    "categoryName": "Standard",
                    "categoryPrice": 160,
                    "rowCount": 3,
                    "columnCount": 7,
                    "totalSeat": 21,
                    "bookedSeat": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    "_id": "6439e76addf4da3b72c1f384"
                },
                {
                    "categoryName": "Premium",
                    "categoryPrice": 200,
                    "rowCount": 6,
                    "columnCount": 12,
                    "totalSeat": 72,
                    "bookedSeat": [
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    ],
                    "_id": "6439e76addf4da3b72c1f385"
                }
            ],
            "_id": "6439e76addf4da3b72c1f383",
            "__v": 0
        }
    }
}
```

## Features

Theater Selection: Users can browse and select from a list of theaters available for booking.
Seat Booking: Users can select their preferred seats for a particular showtime and book them.
Seat Types: Two types of seats are available for booking - Standard and Premium.
Seat Status: Booked seats are shown in gray, selected seats are shown in green, and available seats are shown in white.
Real-time Updates: Seat availability is updated in real-time to provide an interactive user experience.
Authentication: Users can register and login to their accounts to manage their bookings.
Booking History: Users can view their booking history and manage their bookings.
Responsive Design: The application is designed to be responsive and can be accessed on different devices such as desktops, tablets, and mobiles.

## Technologies Used

Node.js: A JavaScript runtime that allows server-side execution of JavaScript code.
Express: A popular web framework for Node.js that simplifies routing, handling HTTP requests, and managing middleware.
MongoDB: A NoSQL database used for storing theater, showtime, and booking information.
React: A popular JavaScript library for building user interfaces.
HTML: The standard markup language for creating web pages.
CSS: A style sheet language used for designing web pages.


## Usage

Browse and select a theater from the list of available theaters.
Choose a showtime and select seats from the available options (white seats).
Click on the seats to book them. Booked seats will be shown in gray, and selected seats will be shown in green.
If not logged in, you will be prompted to register or login to your account.
Logged-in users can view their booking history and manage their bookings.
Logout from the application after usage.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow the standard GitHub workflow:

## Fork the repository

Create a new branch for your feature or bug fix
Make your changes
Test your changes
Commit your changes
Push your changes to your fork
Create a pull request to the main repository

## License

This project is licensed under the MIT License.

Acknowledgements
BookMyShow for the inspiration behind the project.
