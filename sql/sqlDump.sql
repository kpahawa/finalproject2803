-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 30, 2014 at 06:36 PM
-- Server version: 5.6.16
-- PHP Version: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: 'hackathon'
--

-- --------------------------------------------------------

--
-- Table structure for table 'budget'
--

CREATE TABLE IF NOT EXISTS 'User' (
  'id' int(11) NOT NULL AUTO_INCREMENT,
  'Username' varchar(18) NOT NULL,
  'Password' varchar(18) NOT NULL,
  'Firstname' varchar(50) NOT NULL,
  'Lastname' varchar(50) NOT NULL,
  'Email' varchar(50) NOT NULL,
  'City' varchar(50),
  'Color' varchar(50),
  PRIMARY KEY ('Username')
) ENGINE=MySQL  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Dumping data for table 'budget'
--

INSERT INTO 'finalproject'.'user' ('Username', 'Password', 'FirstName',
'Lastname','Email','City','Color') VALUES ('Username1', 'Password1', 'bob2','bob2','bob2@bob.com','Atlanta','000000');

-- --------------------------------------------------------

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
