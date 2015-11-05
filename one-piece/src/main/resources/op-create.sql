CREATE DATABASE one_piece;

USE one_piece;

CREATE TABLE one_piece.devil_fruit ( 
	def_id               int UNSIGNED NOT NULL  AUTO_INCREMENT,
	def_name             varchar(100)  NOT NULL  ,
	def_type             varchar(100)    ,
	CONSTRAINT pk_devil_fruit PRIMARY KEY ( def_id )
 );



CREATE TABLE one_piece.manga_episode ( 
	mae_id               int UNSIGNED NOT NULL  AUTO_INCREMENT,
	mae_name             varchar(100)    ,
	CONSTRAINT pk_manga_episode PRIMARY KEY ( mae_id )
 );

CREATE TABLE one_piece.anime_episode ( 
	ane_id               int UNSIGNED NOT NULL  AUTO_INCREMENT,
	ane_name             varchar(100)    ,
	CONSTRAINT pk_episode PRIMARY KEY ( ane_id )
 );

CREATE TABLE one_piece.gang ( 
	gan_id               int UNSIGNED NOT NULL  AUTO_INCREMENT,
	gan_name             varchar(30)    ,
	CONSTRAINT pk_gang PRIMARY KEY ( gan_id )
 );

CREATE TABLE one_piece.pirate ( 
	fig_id               int UNSIGNED NOT NULL  ,
	gan_id               int UNSIGNED NOT NULL  ,
	pir_position         varchar(30)    ,
	pir_bounty           int    ,
	CONSTRAINT pk_pirate_0 UNIQUE ( fig_id ) 
 );

CREATE INDEX idx_pirate ON one_piece.pirate ( gan_id );


CREATE TABLE one_piece.marine ( 
	mar_rank             varchar(100)    ,
	fig_id               int UNSIGNED NOT NULL  
 );

CREATE INDEX idx_marine ON one_piece.marine ( fig_id );

CREATE TABLE one_piece.figure ( 
	fig_id               int UNSIGNED NOT NULL  AUTO_INCREMENT,
	fig_name             varchar(50)  NOT NULL  ,
	fig_race             varchar(100)    ,
	fig_gender           enum('m','f','o')   NOT NULL  ,
	fig_age              int UNSIGNED   ,
	fig_origin           varchar(200)    ,
	fig_first_occur_manga int UNSIGNED   ,
	fig_first_occur_anime int UNSIGNED   ,
	fig_picture          blob    ,
	def_id               int UNSIGNED   ,
	CONSTRAINT pk_figure PRIMARY KEY ( fig_id )
 );

CREATE INDEX idx_figure ON one_piece.figure ( fig_first_occur_anime );

CREATE INDEX idx_figure_0 ON one_piece.figure ( fig_first_occur_manga );

CREATE INDEX idx_figure_1 ON one_piece.figure ( def_id );

ALTER TABLE one_piece.figure ADD CONSTRAINT fk_figure_anime_episode FOREIGN KEY ( fig_first_occur_anime ) REFERENCES one_piece.anime_episode( ane_id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE one_piece.figure ADD CONSTRAINT fk_figure_manga_episode FOREIGN KEY ( fig_first_occur_manga ) REFERENCES one_piece.manga_episode( mae_id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE one_piece.figure ADD CONSTRAINT fk_figure_devil_fruit FOREIGN KEY ( def_id ) REFERENCES one_piece.devil_fruit( def_id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE one_piece.marine ADD CONSTRAINT fk_marine_figure FOREIGN KEY ( fig_id ) REFERENCES one_piece.figure( fig_id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE one_piece.pirate ADD CONSTRAINT fk_pirate_figure FOREIGN KEY ( fig_id ) REFERENCES one_piece.figure( fig_id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE one_piece.pirate ADD CONSTRAINT fk_pirate_gang FOREIGN KEY ( gan_id ) REFERENCES one_piece.gang( gan_id ) ON DELETE CASCADE ON UPDATE CASCADE;
