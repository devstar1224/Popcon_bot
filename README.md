# Discord Popcon_bot

## Offical Website
  [Click_to_Offical_Web_site](http://popconbot.dothome.co.kr/)
## Donate
  [Click_to_Donate](https://www.paypal.me/popconbot)

  <!-- ![Alt text](https://user-images.githubusercontent.com/23352518/50390680-88dcf800-077d-11e9-99bc-091542c4d2a7.png) -->

***
## Useing library
```javascript
require('fs');
require('discord.js');
require("dblapi.js");
require('ytdl-core');
require('yt-search');
```
***
## CONFIG
#### Bot.js file
> near 10 line
```javascript
const prefix = ' '; // Setting prefix
const ownerID = ' '; // Setting ownerID
const token = ' '; //setting bot token
const dbl = new DBL(' ', bot);
```
#### db_config.js
> edit here

```javascript
var connection = mysql.createConnection({
    host : "localhost",
    port :  , // your mysql server port
    user : " ", // id
    password : " ", // password
    database : " " // database name
});
```

#### MYSQL exports sql
```sql
CREATE DATABASE  IF NOT EXISTS `discord_bot` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `discord_bot`;
-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: discord_bot
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `server_public_settings`
--

DROP TABLE IF EXISTS `server_public_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `server_public_settings` (
  `index` int(11) NOT NULL,
  `activity` longtext,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `server_public_settings`
--

LOCK TABLES `server_public_settings` WRITE;
/*!40000 ALTER TABLE `server_public_settings` DISABLE KEYS */;
/*!40000 ALTER TABLE `server_public_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `server_settings`
--

DROP TABLE IF EXISTS `server_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `server_settings` (
  `server_id` bigint(20) NOT NULL,
  `volume` int(100) DEFAULT NULL,
  PRIMARY KEY (`server_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `server_settings`
--

LOCK TABLES `server_settings` WRITE;
/*!40000 ALTER TABLE `server_settings` DISABLE KEYS */;
/*!40000 ALTER TABLE `server_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `server_user_permission`
--

DROP TABLE IF EXISTS `server_user_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `server_user_permission` (
  `index` int(100) NOT NULL AUTO_INCREMENT,
  `server_id` bigint(20) DEFAULT NULL,
  `user_id` longtext,
  `permission` longtext,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `server_user_permission`
--

LOCK TABLES `server_user_permission` WRITE;
/*!40000 ALTER TABLE `server_user_permission` DISABLE KEYS */;
/*!40000 ALTER TABLE `server_user_permission` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-31 18:31:28


```
***
## Version Info
> V.1.0.2
  * First upload github
  * Over 42 Server use
> V.1.1.0
  * New function setdj
  * fix bugs
  * New database MYSQL!
  * Over 150 Server use
> V.1.1.1 <= Now(31/12/2018 18:27 KST)
  * Modify use to setdj
  * fix bugs
  * Over 217 Server use
***
## Future
> We are programming now
  * Add user custom dj permission delete
  * Add select global language
    * Korean
    * English
    * Japanese
    * Other things..
