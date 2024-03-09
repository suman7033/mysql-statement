create database suman
use suman,

create table test(
    test_coloum int
),
create table test1(
   test_coloum1 int
),

create table test2(
  test_coloum2 int
),
create table test3(
   test_coloum3 int
),

Alter table test
alter table test1
add another_coloum varchar(255);
alter table test3
add another_coloum varchar(255)
alter table test
add another_test_coloum int

create table bands(
   id int not null auto_increment,
   name varchar(255) not null,
   primary key(id)
);

create table albums(
   id int not null auto_increment,
   name varchar(255) not null,
   relase_years int,
   band_id int not null,
   primary key(id),
   foreign key(band_id) references bands(id)
);

insert into bands (name)
values ('iron maiden');

select * from bands
insert into bands (name)
values ('suman'),('sumo'),('su');
select * from bands

select * from bands limit 2;
select name form bands;

select id as 'ID', name as 'band name' from bands;
select * from bands order by name;
select * from bands order by name desc;
select * from bands order by name asc;
insert into albums(name , relase_year, band_id)
   values ('a',1984,1),
         ('b',2018,2),
         ('c',2019,3);
select * from albums;
INSERT INTO albums (name, relase_years, band_id)
VALUES 
  ('a', 1984, 1),
  ('b', 2018, 2),
  ('c', 2019, 3);
select * from albums
select name from albums;
insert into albums(name, relase_years,band_id)
  values('a',2000,4);
select name from albums;
select distinct name from albums;
update albums 
set relase_years = 1982 
where id=1;

update albums
set name='suman'
where id=1;

update albums
 set name='Power slave'
where id=2;
select * from albums
select * from albums
where relase_years> 2000;
select * from albums
where name like '%er%' OR band_id=2;
select * from albums
where relase_years =1982 and band_id=1;

select * from albums
where relase_years between 2000 and 2018;

select * from albums
where relase_years is null
select * from albums
where name is null

delete from albums where id=4;
select * from albums

select * from bands
join albums on bands.id=albums.band_id

select * from bands
inner join albums on bands.id=albums.band_id;

select * from bands
left join albums on bands.id=albums.band_id;

select * from bands
right join albums on bands.id=albums.band_id;

select avg(relase_years) from albums

select sum(relase_years) from albums

select band_id, count(band_id) from albums
group by band_id;
 
