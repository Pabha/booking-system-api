To test a table booking API using Postman, you can follow these general steps:

1.GET Request: Use Postman to send a GET request to http://localhost:3000/api/bookings to retrieve all bookings. Set the request type to GET and enter the URL.
2 . POST Request: To create a new booking, set the request type to POST and enter the URL http://localhost:3000/api/bookings. In the Body tab, select raw and choose JSON from the dropdown. Then, enter the booking details in JSON format, for example:
{
    "name": "John Doe",
    "date": "2023-10-01",
    "time": "19:00",
    "guests": 4
}
3.DELETE Request: To delete a booking, set the request type to DELETE and enter the URL http://localhost:3000/api/bookings/1, replacing 1 with the ID of the booking you want to delete.
