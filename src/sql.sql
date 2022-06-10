CREATE TABLE post (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL
);

CREATE TABLE dept (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	code TEXT(4) NOT NULL,
	head_employee_id INTEGER,
    head_employee_post_id INTEGER,
    required_head_post_id INTEGER,
    CONSTRAINT dept_head_empl_FK FOREIGN KEY (head_employee_id) REFERENCES employee(id) ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT dept_head_post_empl_post_id_FK FOREIGN KEY (head_employee_post_id) REFERENCES employee(post_id) ON DELETE SET NULL ON UPDATE SET NULL,

);

CREATE TABLE promotion (
	from_post INTEGER NOT NULL,
	to_post INTEGER NOT NULL,
    is_promo INTEGER(1) NOT NULL,
	CONSTRAINT promotion_PK PRIMARY KEY (from_post, to_post),
	CONSTRAINT promo_from_post_FK FOREIGN KEY (from_post) REFERENCES post(id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT promo_to_post_FK FOREIGN KEY (to_post) REFERENCES post(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE employee (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	fullname TEXT NOT NULL,
	gender INTEGER(1) DEFAULT 0 NOT NULL,
	birthdate TEXT NOT NULL,
	post_fk INTEGER DEFAULT 1 NOT NULL,
	dept_fk INTEGER DEFAULT 6 NOT NULL,
	CONSTRAINT empl_post_FK FOREIGN KEY (post_fk) REFERENCES post(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	CONSTRAINT empl_dept_FK FOREIGN KEY (dept_fk) REFERENCES dept(id) ON DELETE SET DEFAULT ON UPDATE CASCADE
);

INSERT INTO dept (name, code, head_employee_id, hrequired_head_post_id) VALUES
('Главное управление', 'ГУ', 1, 6),
('Отдел технического контроля', NULL, 'ОТК', 3),
('Конструкторский отдел', 'КО', 23, 3),
('Отдел автоматизации', 'ОА', NULL, 3),
('Производственный цех', 'ПЦ', 13, 3),
('Вне подразделения', 'ВП', 8, 3);

INSERT INTO employee (fullname, gender, birthdate, post_fk, dept_fk) VALUES
('Морозов Филипп Федорович',0,'1986-05-17',6,1),
('Просветов Владлен Романович',0,'1991-07-12',5,1),
('Панова Алия Павловна',1,'1993-03-07',5,1),
('Шилов Владислав Лукич',0,'1988-09-21',1,6),
('Меркулов Лев Иванович',0,'1973-12-01',1,6),
('Архипов Илья Фёдорович',0,'1975-07-12',1,6),
('Кириллов Максим Арсентьевич',0,'1995-01-25',2,6),
('Шевелев Яков Александрович',0,'1980-09-03',3,6),
('Трофимов Илья Антонович',0,'1974-07-31',1,5),
('Яковлев Матвей Святославович',0,'1970-08-19',2,5),
('Соколов Даниэль Сергеевич',0,'1971-04-23',2,5),
('Пименов Фёдор Максимович',0,'1971-08-05',1,5),
('Медведев Артур Семёнович',0,'1985-02-14',3,5),
('Александров Тимур Матвеевич',0,'1989-06-13',1,5),
('Троицкий Константин Михайлович',0,'1971-08-12',1,5),
('Нечаев Леонид Матвеевич',0,'1978-06-24',1,5),
('Сорокин Александр Дмитриевич',0,'1981-07-08',1,4),
('Вдовин Даниил Дмитриевич',0,'1979-06-25',2,4),
('Никитин Максим Станиславович',0,'1987-08-12',1,4),
('Белоусов Давид Артёмович',0,'1975-10-20',1,4),
('Филимонов Илья Филиппович',0,'1992-08-21',2,3),
('Крючков Вячеслав Максимович',0,'1983-05-15',1,3),
('Ермолаев Михаил Миронович',0,'1987-06-24',3,3),
('Кузнецов Игорь Кириллович',0,'1974-06-14',1,5),
('Сергеев Алексей Ярославович',0,'1978-10-18',1,5),
('Осипов Мирослав Максимович',0,'1982-01-26',2,5),
('Никулин Дмитрий Максимович',0,'1980-04-08',1,6),
('Кузнецов Руслан Никитич',0,'1971-07-07',2,2),
('Егоров Данила Владимирович',0,'1972-05-27',1,2),
('Лукьянов Илья Александрович',0,'1973-08-10',1,2),
('Уваров Егор Тимофеевич',0,'1991-08-13',1,3),
('Зайцев Егор Александрович',0,'1989-04-26',2,4),
('Иванов Марк Никитич',0,'1972-03-30',1,5),
('Смирнов Никита Юрьевич',0,'1980-01-30',2,5),
('Смирнов Иван Алексеевич',0,'1990-07-30',1,2),
('Жукова Алина Никитична',1,'1999-01-27',4,2),
('Ларина Малика Павловна',1,'1992-09-21',4,3),
('Белякова Виктория Алексеевна',1,'2000-11-01',4,5);

INSERT INTO post (name) VALUES
('Рабочий'), -- 1
('Ст. рабочий'), -- 2
('Руководитель'), -- 3
('Контролер'), -- 4
('Секретарь'), -- 5
('Директор'); -- 6

INSERT INTO promotion VALUES
(1, 2, 1),
(2,3,1),
(3,2,0),
(2,1,0);

CREATE VIEW worker AS SELECT e.id, e.fullname, CASE WHEN e.gender == 0 THEN 'муж' ELSE 'жен' END AS gender, e.birthdate, post.name AS post_name, dept.name AS dept_name, h.fullname AS head_fullname FROM employee AS e
INNER JOIN dept ON e.dept_fk = dept.id
INNER JOIN post ON e.post_fk = post.id
LEFT JOIN employee AS h ON dept.head_employee_id = h.id;

PRAGMA foreign_keys = true;