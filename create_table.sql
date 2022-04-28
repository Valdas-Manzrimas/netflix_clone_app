CREATE TABLE `users` (
	`email` VARCHAR(100) NOT NULL COLLATE 'latin1_swedish_ci',
	`password` VARCHAR(100) NOT NULL COLLATE 'latin1_swedish_ci',
	`date` DATETIME NULL DEFAULT current_timestamp(),
	`ID` INT(11) NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`ID`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;
