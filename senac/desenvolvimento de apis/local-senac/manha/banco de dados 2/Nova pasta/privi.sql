1.
CREATE DATABASE aula13;
USE aula13;



2.

CREATE TABLE usuario (
  id INT NOT NULL AUTO_INCREMENT, 
  nome VARCHAR(45) NOT NULL, 
  email VARCHAR(45) NOT NULL, 
  fone VARCHAR(45) , 
  PRIMARY KEY (id)
);

CREATE TABLE forum (
  id INT NOT NULL AUTO_INCREMENT, 
  titulo VARCHAR(45) NOT NULL, 
  data_criacao  DATE, 
  PRIMARY KEY (id)
);


CREATE TABLE postagem (
  id INT NOT NULL AUTO_INCREMENT, 
  usuario_id   INT NOT NULL,
  forum_id   INT NOT NULL,
  mensagem TEXT NOT NULL, 
  data_postagem DATE, 
  PRIMARY KEY (id),
  CONSTRAINT fk_postagem_usuario FOREIGN KEY (usuario_id) REFERENCES usuario (id),
  CONSTRAINT fk_postagem_forum FOREIGN KEY (forum_id) REFERENCES forum (id)
);



3.

CREATE USER 'moderador'@'localhost' IDENTIFIED BY '123teste'; 

GRANT CREATE, SELECT,DELETE ON aula13.postagem TO 'moderador'@'localhost';
GRANT CREATE, SELECT,DELETE ON aula13.forumm TO 'moderador'@'localhost';
GRANT CREATE, SELECT,DELETE ON aula13.usuario TO 'moderador'@'localhost';


4.
CREATE USER 'pikachu'@'localhost' IDENTIFIED BY 'teste123'; 


GRANT SELECT  (mensagem) ON aula13.postagem TO 'pikachu'@'localhost'; 

5.


CREATE USER 'maverick'@'localhost' IDENTIFIED BY 'topgun'; 


GRANT CREATE, SELECT,DELETE ON aula13.postagem TO 'maverick'@'localhost';
GRANT CREATE, SELECT,DELETE ON aula13.forum TO 'maverick'@'localhost';
GRANT SELECT ON aula13.usuario TO 'maverick'@'localhost';



6.
INSERT INTO usuario (nome,email,fone) VALUES('Andre','andreR@yahoo.com','539831538785');
INSERT INTO usuario (nome,email,fone) VALUES('Laura',"LauraY@yahoo.com","1295657688787");
INSERT INTO usuario (nome,email,fone) VALUES('Jessica',"jessicaF@gmail.com","404356547687");
INSERT INTO usuario (nome,email,fone) VALUES('Pedro',"PedroC@yhotmail.com","577687968476");
INSERT INTO usuario (nome,email,fone) VALUES('Leonardo',"LeoT@gmail.com","45432546576");
INSERT INTO usuario (nome,email,fone) VALUES('Vicktor',"Vicktor@yahoo.com","1354657676878");
INSERT INTO usuario (nome,email,fone) VALUES('Cleide',"cleideG@hotmail.com","565465768");
INSERT INTO usuario (nome,email,fone) VALUES('Terezinha',"terezinhaS@outlook.com","54784350945");

7.

INSERT INTO forum (titulo,data_criacao) VALUES('Forum 1','2023-05-27');
INSERT INTO forum (titulo,data_criacao) VALUES('Forum 2','2023-09-17');
INSERT INTO forum (titulo,data_criacao) VALUES('Forum 3','2023-07-07');
INSERT INTO forum (titulo,data_criacao) VALUES('Forum 4','2023-02-08');
INSERT INTO forum (titulo,data_criacao) VALUES('Forum 5','2023-10-09');


8.

INSERT INTO postagem (mensagem,data_postagem,usuario_id,forum_id) VALUES('vendo canguru a pilha','2023-05-27',2,5);
INSERT INTO postagem (mensagem,data_postagem,usuario_id,forum_id) VALUES('compro laranja azeda','2023-05-27',1,1);
INSERT INTO postagem (mensagem,data_postagem,usuario_id,forum_id) VALUES('amo muito tudo isso','2023-05-27',2,1);
INSERT INTO postagem (mensagem,data_postagem,usuario_id,forum_id) VALUES('SENAC RS','2023-05-27',8,3);
INSERT INTO postagem (mensagem,data_postagem,usuario_id,forum_id) VALUES('Faculdade Senac Pelotas','2023-05-27',7,4);
INSERT INTO postagem (mensagem,data_postagem,usuario_id,forum_id) VALUES('Que a força esteja conosco','2023-05-27',6,4);
INSERT INTO postagem (mensagem,data_postagem,usuario_id,forum_id) VALUES('Por onde anda o obi-Wan','2023-05-27',5,5);
INSERT INTO postagem (mensagem,data_postagem,usuario_id,forum_id) VALUES('YODA!','2023-05-27',2,3);
INSERT INTO postagem (mensagem,data_postagem,usuario_id,forum_id) VALUES('Satolep','2023-05-27',2,3);
INSERT INTO postagem (mensagem,data_postagem,usuario_id,forum_id) VALUES('Locurage','2023-05-27',1,5);


8.

SELECT forum.titulo, usuario.nome, postagem.data_postagem
FROM postagem
JOIN forum ON postagem.forum_id = forum.id
JOIN usuario ON postagem.usuario_id = usuario.id;

9. 
-- agora como o usuario pikachu
SELECT forum.titulo, usuario.nome, postagem.data_postagem
FROM postagem
JOIN forum ON postagem.forum_id = forum.id
JOIN usuario ON postagem.usuario_id = usuario.id;

11.
-- como usuario  root
SHOW VARIABLES LIKE 'autocommit';

12.
SET autocommit = 0;


13. 
SELECT * FROM postagem;

14. 
START TRANSACTION;

16.

INSERT INTO postagem (mensagem,data_postagem,usuario_id,forum_id) VALUES('brasil 2026','2023-05-27',1,3);


17.
SELECT * FROM postagem;

19.
ROLLBACK;


21,22,23,24,25

START TRANSACTION; 

SELECT * FROM postagem;
INSERT INTO postagem (mensagem,data_postagem,usuario_id,forum_id) VALUES('brasil 2026','2023-05-27',1,3);
SELECT * FROM postagem;
COMMIT; 

26.

SELECT * FROM postagem;


28.
SET autocommit = 1;


29,30,31
DROP USER 'maverick'@'localhost';
DROP USER 'pikachu'@'localhost';
DROP USER 'moderador'@'localhost';

32.
SELECT p.mensagem
FROM usuario u
JOIN postagem p ON u.id = p.usuario_id
WHERE u.nome LIKE '%a%';
