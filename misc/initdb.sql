insert into airport(name, city, country, search_match) values ('Kempegowda international', 'Bangalore', 'India', 'Bengaluru Bangalore Kempegowda');
insert into airport(name, city, country, search_match) values ('Indira Gandhi International', 'Delhi', 'India', 'Delhi Indira Gandhi');
insert into airport(name, city, country, search_match) values ('Sardar Vallabhbhai Patel International', 'Ahmedabad', 'India', 'Ahmedabad Gandhinagar Sardar Vallabhbhai Patel');
insert into airport(name, city, country, search_match) values ('Chennai International', 'Chennai', 'India', 'Chennai');
insert into airport(name, city, country, search_match) values ('Pakyong ', 'Gangtok', 'India', 'Gangtok Pakyong');

insert into flight(code, organization, total_seats) values ('indigo-1', 'Indigo', 100);
insert into flight(code, organization, total_seats) values ('indigo-2', 'Indigo', 100);
insert into flight(code, organization, total_seats) values ('jet-1', 'Jet Airways', 100);
insert into flight(code, organization, total_seats) values ('jet-2', 'Jet Airways', 100);
insert into flight(code, organization, total_seats) values ('spice-1', 'SpiceJet', 100);
insert into flight(code, organization, total_seats) values ('spice-2', 'SpiceJet', 100);


insert into flight_chart(origin_id, destination_id, start_time, travel_duration, flight_code, total_booked_seats) values (1, 2, '2019-03-01 07:00:00.00000', 160, 'indigo-1', 0);
insert into flight_chart(origin_id, destination_id, start_time, travel_duration, flight_code, total_booked_seats) values (2, 1, '2019-03-01 08:00:00.00000', 160, 'indigo-2', 0);
insert into flight_chart(origin_id, destination_id, start_time, travel_duration, flight_code, total_booked_seats) values (1, 2, '2019-03-01 14:30:00.00000', 160, 'indigo-2', 0);
insert into flight_chart(origin_id, destination_id, start_time, travel_duration, flight_code, total_booked_seats) values (2, 1, '2019-03-01 15:00:00.00000', 160, 'indigo-1', 0);
insert into flight_chart(origin_id, destination_id, start_time, travel_duration, flight_code, total_booked_seats) values (1, 2, '2019-03-01 07:00:00.00000', 160, 'spice-1', 0);
insert into flight_chart(origin_id, destination_id, start_time, travel_duration, flight_code, total_booked_seats) values (2, 1, '2019-03-01 08:00:00.00000', 160, 'spice-2', 0);
insert into flight_chart(origin_id, destination_id, start_time, travel_duration, flight_code, total_booked_seats) values (1, 2, '2019-03-01 14:30:00.00000', 160, 'spice-2', 0);
insert into flight_chart(origin_id, destination_id, start_time, travel_duration, flight_code, total_booked_seats) values (2, 1, '2019-03-01 15:00:00.00000', 160, 'spice-1', 0);
insert into flight_chart(origin_id, destination_id, start_time, travel_duration, flight_code, total_booked_seats) values (1, 2, '2019-03-02 07:00:00.00000', 160, 'indigo-1', 0);
insert into flight_chart(origin_id, destination_id, start_time, travel_duration, flight_code, total_booked_seats) values (2, 1, '2019-03-02 08:00:00.00000', 160, 'indigo-2', 0);
insert into flight_chart(origin_id, destination_id, start_time, travel_duration, flight_code, total_booked_seats) values (1, 2, '2019-03-02 14:30:00.00000', 160, 'indigo-2', 0);
insert into flight_chart(origin_id, destination_id, start_time, travel_duration, flight_code, total_booked_seats) values (2, 1, '2019-03-02 15:00:00.00000', 160, 'indigo-1', 0);
insert into flight_chart(origin_id, destination_id, start_time, travel_duration, flight_code, total_booked_seats) values (1, 2, '2019-03-02 07:00:00.00000', 160, 'spice-1', 0);
insert into flight_chart(origin_id, destination_id, start_time, travel_duration, flight_code, total_booked_seats) values (2, 1, '2019-03-02 08:00:00.00000', 160, 'spice-2', 0);
insert into flight_chart(origin_id, destination_id, start_time, travel_duration, flight_code, total_booked_seats) values (1, 2, '2019-03-02 14:30:00.00000', 160, 'spice-2', 0);
insert into flight_chart(origin_id, destination_id, start_time, travel_duration, flight_code, total_booked_seats) values (2, 1, '2019-03-02 15:00:00.00000', 160, 'spice-1', 0);

