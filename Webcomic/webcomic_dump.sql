-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: webcomic
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comic`
--

DROP TABLE IF EXISTS `comic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comic` (
  `precio` double NOT NULL,
  `stock` int NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `autor` varchar(255) DEFAULT NULL,
  `genero` varchar(255) DEFAULT NULL,
  `imagen_url` varchar(255) DEFAULT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `descripcion` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comic`
--

LOCK TABLES `comic` WRITE;
/*!40000 ALTER TABLE `comic` DISABLE KEYS */;
INSERT INTO `comic` VALUES (1000,10,8,'Hajime Isayama','Manga, Acción, fantasía oscura, drama post-apocalíptico','/imagenes/1731155245654_aot-1.jpg','Attack on Titan Vol.1','La humanidad vive rodeada de enormes murallas para protegerse de los titanes, gigantes que devoran a los humanos. Eren Jaeger, su hermana adoptiva Mikasa, y su amigo Armin son testigos de la devastadora invasión de los titanes, lo que los lleva a unirse al ejército para luchar por su supervivencia.'),(1000,8,9,'Hajime Isayama','Manga, Acción, fantasía oscura, drama post-apocalíptico','/imagenes/1731155282381_aot2.jpg','Attack on Titan Vol.2','Los protagonistas comienzan su entrenamiento en el ejército, donde enfrentan difíciles pruebas físicas y emocionales. Mientras tanto, el misterio de los titanes sigue creciendo, y una nueva amenaza surge en la forma de un titán aparentemente diferente a los demás.\n'),(1000,9,10,'Hajime Isayama','Manga, Acción, fantasía oscura, drama post-apocalíptico','/imagenes/1731155344533_aot3.jpg','Attack on Titan Vol.3','La historia sigue el caos que se desata después de la aparición de un titán anormal que demuestra ser sorprendentemente diferente de los demás: el Titán de Eren. Este descubrimiento impacta profundamente al Cuerpo de Exploración y las fuerzas militares, quienes enfrentan el dilema de cómo manejar esta inesperada revelación. ¿Es Eren un aliado o una amenaza?\n\nMientras tanto, el Distrito de Trost sigue siendo el epicentro de la batalla. Los soldados luchan por recuperar terreno y salvar a la humanidad mientras enfrentan pérdidas devastadoras. Mikasa, Armin y los demás cadetes intentan proteger a Eren mientras las tensiones internas entre los soldados y las fuerzas superiores aumentan debido al miedo y la incertidumbre sobre el nuevo poder de Eren.'),(1000,12,11,'Hajime Isayama','Manga, Acción, fantasía oscura, drama post-apocalíptico','/imagenes/1731155401977_aot4.jpg','Attack on Titan Vol.4','El grupo de Eren y sus amigos enfrentan nuevas batallas contra los titanes, mientras investigan la verdadera razón detrás de la aparición de estos gigantes. A lo largo de este volumen, surgen secretos oscuros y los personajes se ven obligados a tomar decisiones difíciles.'),(1000,10,12,'Hajime Isayama','Acción, fantasía oscura, drama post-apocalíptico','/imagenes/1731155438300_aot5.jpg','Attack on Titan Vol.5','Los titanes se acercan aún más a la humanidad. Eren comienza a comprender mejor su poder, pero los enemigos no solo son los titanes, sino también dentro de su propio ejército. Surgen nuevos conflictos mientras la lucha por la supervivencia se intensifica.'),(1000,7,14,'Hajime Isayama','Manga, Acción, fantasía oscura, drama post-apocalíptico','/imagenes/1731155618300_aot6.jpg','Attack on Titan Vol.6',' La guerra contra los titanes se intensifica y el grupo se enfrenta a situaciones más peligrosas. Además, los personajes empiezan a cuestionar lo que saben sobre los titanes, desvelándose más enigmas sobre el origen de los mismos y la verdad oculta en su mundo.'),(1000,13,15,'Hajime Isayama','Manga, Acción, fantasía oscura, drama post-apocalíptico','/imagenes/1731155648693_aot7.jpg','Attack on Titan Vol.7',' A medida que la batalla continúa, se revelan más aspectos del mundo de los titanes y de los propios personajes. Los esfuerzos por encontrar respuestas los conducen a situaciones más extremas y a nuevas alianzas. La amenaza de los titanes se vuelve aún más impredecible.'),(1000,10,16,'Hajime Isayama','Manga, Acción, fantasía oscura, drama post-apocalíptico','/imagenes/1731155705598_aot8.jpg','Attack on Titan Vol.8','La lucha por la supervivencia se complica aún más. Los personajes están al borde de descubrir la verdad detrás de los misteriosos titanes y el mundo en el que viven. Las consecuencias de sus acciones y decisiones comienzan a tener un peso más grande, con una tensión creciente entre aliados y enemigos.'),(1100,6,17,'Donny Cates','comics','/imagenes/1731155822878_KIB-1.jpg','Venom: King in Black','Knull, el dios de los simbiontes, llega a la Tierra con su ejército de criaturas oscuras, poniendo al mundo entero en peligro. Eddie Brock (Venom) se enfrenta a una situación desesperada mientras su simbionte y él luchan por sobrevivir al poder imparable de Knull. Esta primera parte establece la amenaza cósmica que se avecina y prepara el escenario para la batalla de Eddie.'),(1100,5,18,'Donny Cates','Comics, SuperHeroes, Accion','/imagenes/1731155940527_KIB-2.jpg','Venom King in Black 2','La lucha contra Knull intensifica mientras Venom intenta resistir el poder de su simbionte y de las criaturas que Knull controla. Eddie y su aliado Spider-Man se ven atrapados en una guerra imposible, pero Eddie tiene un destino mucho más grande que debe aceptar. Se revelan más detalles sobre la conexión de Eddie con los simbiontes y el rol crucial que jugará en la guerra contra Knull.'),(1100,5,19,'Donny Cates','Comics, SuperHeroes, Accion','/imagenes/1731156382515_KIB-3.jpg','Venom: King in Black 3','A medida que la invasión de Knull avanza, Venom se enfrenta a enemigos aún más temibles. Eddie se ve obligado a tomar decisiones difíciles mientras intenta proteger a los inocentes y encontrar una forma de derrotar al dios de los simbiontes. Sin embargo, las fuerzas oscuras de Knull parecen estar siempre un paso adelante, y la esperanza comienza a desvanecerse.'),(1100,8,20,'Donny Cates','Comics, SuperHeroes, Accion','/imagenes/1731156494003_KIB-4.jpg','Venom: King in Black 4','Venom y sus aliados luchan con todas sus fuerzas, pero las hordas de Knull continúan ganando terreno. Eddie comienza a comprender el verdadero alcance del poder de Knull y la naturaleza de su conexión con el simbionte. En un intento desesperado, se embarca en una misión peligrosa para obtener una ventaja, pero el costo podría ser más alto de lo que esperaba.'),(1100,9,21,'Donny Cates','Comics, SuperHeroes, Accion','/imagenes/1731156570185_KIB-5.jpg','Venom: King in Black 5','La batalla final contra Knull llega a su punto culminante. Venom y sus aliados enfrentan la oscuridad en su forma más pura, y Eddie Brock debe decidir hasta dónde está dispuesto a llegar para salvar la Tierra. El destino de los simbiontes y el futuro de Venom se definen en esta explosiva conclusión, mientras Eddie descubre un poder que podría cambiarlo todo.'),(1200,3,22,'Alan Moore','Comics, SuperHeroes, Accion, Thriller psicológico','/imagenes/1731156814824_killing-joke.jpg','Batman: The Killing Joke','La batalla final contra Knull llega a su punto culminante. Venom y sus aliados enfrentan la oscuridad en su forma más pura, y Eddie Brock debe decidir hasta dónde está dispuesto a llegar para salvar la Tierra. El destino de los simbiontes y el futuro de Venom se definen en esta explosiva conclusión, mientras Eddie descubre un poder que podría cambiarlo todo.'),(1300,1,23,'Jeph Loeb','Comics, SuperHeroes, Accion','/imagenes/1731156952269_TLH-batman-1.jpg','Batman: The Long Halloween','Escrita por Jeph Loeb y con ilustraciones de Tim Sale, El Largo Halloween es una de las historias más influyentes de Batman. Ambientada en los primeros años de carrera de Batman como vigilante, la historia gira en torno a una serie de asesinatos cometidos en días festivos, lo que lleva al Caballero Oscuro a investigar un misterioso asesino conocido como \"Holiday\". La obra presenta una trama de crimen y misterio al estilo de un thriller policial, donde Batman debe lidiar con una galería de villanos que incluyen a Harvey Dent (antes de su transformación en Dos Caras), el Joker, el Pingüino y Catwoman. A medida que avanza la historia, Batman debe confrontar la delgada línea entre el bien y el mal, y enfrentarse a su propia moralidad mientras desentraña un misterio cada vez más complejo. El Largo Halloween es fundamental en la mitología de Batman, influyendo en eventos posteriores, como la creación de Harvey Dent/Dos Caras.'),(900,15,24,'Sue Ishida','Manga, Fantasía oscura, horror, thriller​ acción, drama, romance','/imagenes/1731157051638_tokio-ghoul-1.jpg','Tokyo Ghoul Vol.1','Ken Kaneki, un joven estudiante universitario, se ve envuelto en un horrible accidente con una ghoul, una criatura carnívora que se alimenta de humanos. Tras el accidente, Kaneki sobrevive, pero su vida da un giro inesperado cuando se convierte en mitad humano, mitad ghoul. Ahora, debe aprender a vivir con su nueva naturaleza mientras lidia con la amenaza de los ghouls y su lucha por mantener su humanidad.'),(900,10,25,'Sue Ishida','Manga, Fantasía oscura, horror, thriller​ acción, drama, romance','/imagenes/1731157089133_tokio-ghoul-2.jpg','Tokyo Ghoul Vol.2 ','Kaneki se enfrenta a las dificultades de su nueva vida como híbrido y empieza a comprender mejor la peligrosa sociedad de los ghouls. Se encuentra atrapado entre los dos mundos, intentando encajar en un grupo de ghouls que intentan vivir sin matar humanos. Mientras tanto, los cazadores de ghouls lo siguen de cerca, y Kaneki debe encontrar un equilibrio entre su identidad humana y ghoul.'),(900,16,26,'Sue Ishida','Manga, Fantasía oscura, horror, thriller​ acción, drama, romance','/imagenes/1731157733761_tokio-ghoul-3.jpg','Tokyo Ghoul Vol.3','Kaneki se adentra más en el mundo de los ghouls, mientras que su lucha interna por mantener su humanidad se intensifica. Al mismo tiempo, la amenaza de los cazadores se hace más fuerte, y el conflicto con otros ghouls se agudiza. Kaneki comienza a confrontar más directamente su nueva naturaleza y los sacrificios que tendrá que hacer para sobrevivir.'),(900,12,28,'Sue Ishida','Manga, Fantasía oscura, horror, thriller​ acción, drama, romance','/imagenes/1731157896167_tokio-ghoul-4.jpg','Tokyo Ghoul Vol.4','Kaneki se encuentra atrapado en una serie de confrontaciones violentas con otros ghouls y cazadores, lo que pone a prueba su capacidad para controlar su lado ghoul. Los eventos lo empujan a tomar decisiones difíciles, y se enfrenta a nuevas revelaciones sobre los ghouls y su sociedad secreta. En este volumen, se profundiza en las motivaciones de varios personajes, incluyendo algunos ghouls que tienen sus propios ideales.'),(900,7,29,'Sue Ishida','Manga, Fantasía oscura, horror, thriller​ acción, drama, romance','/imagenes/1731158009851_tokio-ghoul-5.jpg','Tokyo Ghoul Vol.5','Las tensiones aumentan y la lucha por el poder dentro de la comunidad ghoul se intensifica. Kaneki, aunque más fuerte, empieza a cuestionar aún más su existencia. La historia se enfoca en su creciente relación con otros personajes, como Touka, quien también es un ghoul, y cómo ambos se enfrentan a sus propios dilemas morales y existenciales.'),(900,9,30,'Sue Ishida','Manga, Fantasía oscura, horror, thriller​ acción, drama, romance','/imagenes/1731158051657_tokio-ghoul-6.jpg','Tokyo Ghoul Vol.6','El mundo de los ghouls y los cazadores de ghouls se encuentra en un estado de caos, con Kaneki siendo un elemento clave en los conflictos. La violencia alcanza niveles más altos, y Kaneki tiene que tomar decisiones extremas mientras se enfrenta a las consecuencias de sus actos. Nuevas alianzas se forjan, pero también surgen nuevas amenazas que ponen en peligro la vida de Kaneki y sus amigos.'),(900,9,31,'Sue Ishida','Manga, Fantasía oscura, horror, thriller​ acción, drama, romance','/imagenes/1731158109668_tokio-ghoul-7.jpg','Tokyo Ghoul Vol.7','Kaneki se ve envuelto en una guerra abierta entre los ghouls y los cazadores, donde las lealtades se ponen a prueba y las vidas humanas se ven amenazadas. A medida que la lucha se intensifica, Kaneki se enfrenta a desafíos internos y externos que lo empujan a una evolución que cambiará su destino. Este volumen también profundiza en la compleja naturaleza de los ghouls y los conflictos dentro de su sociedad.'),(900,6,32,'Sue Ishida','Manga, Fantasía oscura, horror, thriller​ acción, drama, romance','/imagenes/1731158306487_tokio-ghoul-8.jpg','Tokyo Ghoul Vol.8','La batalla final contra los cazadores de ghouls llega a su punto álgido. Kaneki debe confrontar sus propios demonios mientras las líneas entre la humanidad y los ghouls se difuminan. Las consecuencias de la guerra entre ambos bandos se vuelven inevitables, y Kaneki debe hacer frente a la magnitud de su poder y el futuro incierto que lo aguarda.'),(1350,1,33,'Greg Pak, John Romita Sr','Comics, SuperHeroes, Accion,Crossover ficcional','/imagenes/1731158466051_wwhulk.jpg','World War Hulk','null'),(1600,2,34,'J. M. DeMatteis y Mike Zeck','Comics, SuperHeroes, Accion','/imagenes/1731158608508_spider-kraven.jpg',' Amazing Spider-Man: Kraven\'s Last Hunt Novela','null'),(1000,14,35,'Dan Slott','Comics, SuperHeroes, Accion','/imagenes/1731158782440_supspider-1.jpg','The Superior Spider-Man','El Dr. Otto Octavius (el Doctor Octopus) ha logrado transferir su conciencia al cuerpo de Peter Parker, y ahora está al mando de la vida de Spider-Man. Con su intelecto superior y su enfoque más brutal, Octavius decide tomar una nueva dirección en su lucha contra el crimen, con la intención de ser un Spider-Man \"mejor\". A pesar de sus esfuerzos por mejorar la vida de Peter, sus métodos poco convencionales lo ponen en conflicto con aquellos que alguna vez fueron aliados de Spider-Man.'),(1000,8,37,'Dan Slott','Comics, SuperHeroes, Accion','/imagenes/1731159014294_supspider-2.jpg','The Superior Spider-Man 2','Otto Octavius, ahora como Spider-Man, sigue estableciendo su propio código moral mientras enfrenta amenazas como el \"Escorpión\" y otros villanos de Nueva York. Mientras tanto, la verdadera identidad de Spider-Man sigue siendo un secreto para la mayoría, y la vida de Peter Parker, aunque alterada, se sigue desarrollando de una manera impactante para sus seres queridos.'),(1000,10,38,'Dan Slott','Comics, SuperHeroes, Accion','/imagenes/1731159386522_supspider-3.jpg','The Superior Spider-Man 3','Otto continúa tratando de mejorar la vida de Peter Parker desde su posición como Spider-Man, pero sus métodos empiezan a mostrar la grieta entre su visión del mundo y la de Peter. Enfrentando enemigos como el \"Vulture\", Otto va tomando decisiones más arriesgadas, todo mientras trata de mantener el secreto de su identidad. Su visión de lo que significa ser un héroe se pone a prueba mientras se enfrenta a la moralidad de sus actos.'),(1000,6,41,'Dan Slott','Comics, SuperHeroes, Accion','/imagenes/1731162482414_supspider-4.jpg','The Superior Spider-Man 4','La historia de Otto como Spider-Man se complica aún más cuando se enfrenta a nuevos villanos y empieza a cuestionar su propio sentido de justicia. Mientras mantiene su control sobre la vida de Peter, Otto debe lidiar con las consecuencias de sus acciones, como la tensión creciente con los compañeros de Peter, como Mary Jane, y la inesperada aparición de un viejo enemigo que pone en peligro todo lo que Otto ha construido.'),(1000,13,42,'Dan Slott','Comics, SuperHeroes, Accion','/imagenes/1731162552639_supspider-5.jpg','The Superior Spider-Man 5','Otto sigue consolidando su poder como Spider-Man, pero su control empieza a tambalear cuando las cosas se complican con villanos como el \"Green Goblin\". Los intentos de Otto por eliminar a la competencia y gobernar como un héroe más eficiente comienzan a generar consecuencias negativas. En el proceso, Otto también debe lidiar con los recuerdos y la moralidad de Peter, que lo persiguen de manera inesperada.'),(1000,13,43,'Dan Slott','Comics, SuperHeroes, Accion','/imagenes/1731162668538_supspider-6.jpg','The Superior Spider-Man 6','La historia se adentra en las luchas internas de Otto como Spider-Man, mientras enfrenta la oposición tanto de villanos como de otros héroes. El conflicto entre la visión de Otto de ser un \"mejor\" Spider-Man y la moral de Peter Parker alcanza un punto crítico, lo que pone a Spider-Man y a sus seres queridos en una situación de peligro inminente. La dinámica entre Otto y los personajes clave, como Mary Jane y J. Jonah Jameson, sigue evolucionando de manera dramática.'),(1000,10,44,'Dan Slott','Comics, SuperHeroes, Accion','/imagenes/1731162734419_supspider-7.jpg','The Superior Spider-Man 7','Otto sigue llevando a cabo su visión de un Spider-Man más eficiente y despiadado, lo que lleva a un enfrentamiento con antiguos aliados de Peter, como el \"Spider-Man 2099\". Además, las tensiones dentro del \"Daily Bugle\" y con las personas cercanas a Peter aumentan, a medida que Otto se va alejando más del verdadero espíritu de lo que significaba ser Spider-Man.'),(1000,8,45,'Dan Slott','Comics, SuperHeroes, Accion','/imagenes/1731162789247_supspider-8.jpg','The Superior Spider-Man 8',' El \"Superior Spider-Man\" se enfrenta a uno de sus mayores desafíos cuando se enfrenta a su más grande rival, el \"Green Goblin\". A medida que la lucha se intensifica, Otto debe tomar decisiones que pondrán a prueba no solo su papel como Spider-Man, sino también su humanidad. En este volumen, las consecuencias de sus acciones alcanzan un punto crítico, y la verdadera naturaleza de su control sobre la vida de Peter llega a una conclusión devastadora.');
/*!40000 ALTER TABLE `comic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalles_pedido`
--

DROP TABLE IF EXISTS `detalles_pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalles_pedido` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `cantidad` int NOT NULL,
  `precio` double NOT NULL,
  `comic_id` bigint DEFAULT NULL,
  `pedido_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKiv0xyrcewus2u5cq6qobi8gbj` (`comic_id`),
  KEY `FK5875kv3gljnkl5npw65x2ytx4` (`pedido_id`),
  CONSTRAINT `FK5875kv3gljnkl5npw65x2ytx4` FOREIGN KEY (`pedido_id`) REFERENCES `pedido` (`id`),
  CONSTRAINT `FKiv0xyrcewus2u5cq6qobi8gbj` FOREIGN KEY (`comic_id`) REFERENCES `comic` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalles_pedido`
--

LOCK TABLES `detalles_pedido` WRITE;
/*!40000 ALTER TABLE `detalles_pedido` DISABLE KEYS */;
INSERT INTO `detalles_pedido` VALUES (2,1,1000,9,2);
/*!40000 ALTER TABLE `detalles_pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `estado` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime(6) DEFAULT NULL,
  `usuario_id` bigint DEFAULT NULL,
  `total` double NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK6uxomgomm93vg965o8brugt00` (`usuario_id`),
  CONSTRAINT `FK6uxomgomm93vg965o8brugt00` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
INSERT INTO `pedido` VALUES (1,'CARRITO',NULL,4,0),(2,'CARRITO',NULL,1,1000);
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `fecha_registro` date DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `calle` varchar(255) DEFAULT NULL,
  `ciudad` varchar(255) DEFAULT NULL,
  `codigo_postal` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `roles` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `puntos` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('2024-11-07',1,NULL,NULL,NULL,'admin@example.com','$2a$10$O.uaQvR4bPHC0rN8QpAG0u645UcUDvp99OIlGvnZPBjWHUDaP0Ddu','ADMIN','admin',0),('2024-11-07',2,'calahorra','Madrid','28032','james200327@gmail.com','$2a$10$mgBeZ9TolZRUX0IWcAqsAuwdaZ.I3K1w3jtYvkZvNdbsTZk.GY/Nq','USER','james',0),('2024-11-09',3,'Calahorra','Madrid','28032','johan2003@gmail.com','$2a$10$7Jh5n8hyIa.RhGfnm9rLnuEPIQebTr1ohEONMA2Xh2G6mST8v5eWW','USER','Johan',0),('2024-11-12',4,'calle','madrid','28017','javi@gmail.com','$2a$10$FNQQwlI1pz5tzPAuy8LaVeK5UbAsUExut2TgKPXnGfoMzWE6y8a86','USER','javi',2000),('2024-11-14',5,'calle','madrid','28017','kkkkl@msn.com','$2a$10$AnV4pcQqCgSrf0K.LnrDIeanCWSf8yyvVAXhUcACIMaBUyMyUcssm','USER','javikkkk',0),('2024-11-17',6,'violetera','madrid','28018','jorgeucheee97@gmail.com','$2a$10$1156zdRAzOtuTI.V1R23BeXjEoAyGM6AqmLeiO3EwBYARc4wzEczK','USER','jorge',0);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-24 22:40:03