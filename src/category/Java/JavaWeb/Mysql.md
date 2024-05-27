---
icon: pen-to-square
date: 2024-05-22
category:
  - Mysql
tag:
  - Mysql
star: true
---

# Mysql 基础

## Mysql 概述

> 什么是数据库？
>
> - 数据库：DataBase（DB），是存储和管理数据的仓库
> - 数据库管理系统:DataBase ManagementSystem(DBMS)，操纵和管理数据库的大型软件。
> - SQL:Structured QueryLanguage，操作关系型数据库的编程语言，定义了一套操作关系型数据库统一标准。

![Mysql-企业开发使用方式](./images/Mysql-企业开发使用方式.png)

### 数据模型

- 关系型数据库(RDBMS):建立在关系模型基础上，由多张相互连接的 `二维表 ` 组成的数据库

### MYSQL 数据模型

- 创建数据库： `create database 数据库名字`

### SQL 简介

- SQL:一门操作关系型数据库的编程语言，定义操作所有关系型数据库的统一标准。

![SQL通用语法](./images/SQL通用语法.png)

- SQL 语句通常被分为四大类：

![SQL分类](./images/SQL分类.png)

## 数据库设计—DDL

### 数据库

![DDL（数据库操作）](./images/DDL（数据库操作）.png)

> 上述语法中的 database，也可以替换成 schema。如:create schema db01;

### 表（创建、查询、修改、删除）

#### 创建

![表（创建）](./images/表（创建）.png)

> 约束
>
> - 概念约束是作用于表中字段上的规则，用于限制存储在表中的数据，
> - 目的:保证数据库中数据的正确性、有效性和完整性。
>
> ![表（约束）](./images/表（约束）.png)

#### 数据类型

- MySQL 中的数据类型有很多，主要分为三类:数值类型、字符串类型、
  日期时间类型

> - 日期时间类型
> - date：YYYY-MM-DD 日期值
> - datetime：YYYY-MM-DD HH:MM:SS 混合日期和时间值
> - 字符串类型
> - char：`char(10):最多只能存10个字特,不足10个字符,占用10个字符空间   AB   性能高   浪费空间`
> - varchar：`varchar(10):最多只能存10个字符,不足10个字符,按照实际长度存储   ABC   性能低   节省空间`
>
> - 数值类型
> - tinyint：小整数值
> - int：大整数值
> - bigint：极大整数值
> - double：双精度浮点数值

#### 查询

![表（查询）](./images/表（查询）.png)

#### 修改

![表（修改）](./images/表（修改）.png)

#### 删除

![表（删除）](./images/表（删除）.png)

> 再删除表时，表中的全部数据也会被删除

## 数据库操作-DML

> DML
>
> - DML 英文全称是 Data Manipulation Language(数据操作语言)，用来对数据库中表的数据记录进行增、删、改操作。
>
> 添加数据（INSERT）
>
> 修改数据（UPDATE）
>
> 删除数据（DELETE）

#### 添加数据

![DML（insert）](./images/DML（insert）.png)

```sql
-- 插入新数据
insert into tb_emp(username,name,gender,create_date,update_date) values ('zhangwuji','张无忌',1,now(),now());

-- 为emp表的所有字段插入值
insert into tb_emp(id, username, password, name, gender, image, job, entry_date, create_date, update_date)
values (null,'zhiruo','123','周芷若',2,'1.jpg',1,'2021-01-01',now(),now());

insert into tb_emp values (null,'zhiruo2','123','周芷若2',2,'1.jpg',1,'2021-01-01',now(),now());

-- 批量插入数据
insert into tb_emp(username,name,gender,create_date,update_date)
values
    ('zhangsan','张三',1,now(),now()),
    ('lisi','李四',1,now(),now()),
    ('wangwu','王五',1,now(),now());
```

> 1、插入数据时，指定的字段顺序需要与值的顺序是一一对应的。
>
> 2、字符串和日期型数据应该包含在引号中。
>
> 3、插入的数据大小，应该在字段的规定范围内。

#### 修改数据

![DML（update）](./images/DML（update）.png)

```sql
-- 将emp表的 ID为1的员工 的姓名 name 改为"张三"
update tb_emp set name = '张三',update_date = now() where id = 1;

-- 将emp表的所有员工的入职日期改为 "2010-01-01"
update tb_emp set entry_date = '2010-01-01',update_date = now();
```

> 修改语句的条件可以有，也可以没有，如果没有条件，则会修改整张表的数据

#### 删除数据

![DML（delete）](./images/DML（delete）.png)

```sql
-- 删除emp表中ID为1的员工
delete from tb_emp where id = 1;

-- 删除emp表的所有员工
delete from tb_emp;
```

> 1、DELETE语句的条件可以有，也可以没有，如果没有条件，则会删除整张表的数据
>
> 2、DELETE语句不能删除某一个字段的值（如果要操作，可以使用UPDATE，将该字段的值为NULL）

## 数据库操作—DQL

> DQL
>
> - DQL英文全称是Data Query Language(数据查询语言)，用来查询数据库表中的记录。
> - 关键字:SELECT

![DQL语法](./images/DQL语法.png)

### 基本查询

![DQL（基本查询）](./images/DQL（基本查询）.png)

> `*`   号代表查询所有字段，在实际开发中尽量少用（不直观，影响效率）

```sql
-- 查询指定字段 name,entrydate 并返回
select name,entrydate from tb_emp;

-- 查询返回所有字段
select * from tb_emp;

-- 查询所有员工的 name， entrydate 并起别名（姓名，入职日期）
select name as 姓名, entrydate as 入职日期 from tb_emp;

select name  姓名, entrydate  入职日期 from tb_emp;

select name as "姓 名", entrydate as 入职日期 from tb_emp;

-- 查询已有的员工关联了哪几种职位（不要重复）
select distinct job from tb_emp;
```

### 条件查询

![DQL（条件查询）](./images/DQL（条件查询）.png)

```sql
-- =================== DOL:条件查询 =========================
-- 1.查询 姓名 为 杨逍 的员工
select * from tb_emp where name = '杨逍';

-- 2、查询 id小于等于5 的员工信息
select * from tb_emp where id <= 5;

-- 3、查询 没有分配职位 的员工信息
select * from tb_emp where job is null;

-- 4、查询 有职位 的员工信息
select * from tb_emp where job is not null ;

-- 5.查询 密码不等于'123456' 的员工信息
select * from tb_emp where password != '123456';
或
select * from tb_emp where password <> '123456';

-- 6、查询 入职日期在2000-01-01'(包含)到·2010-01-01'(包含)之间的员工信息
select * from tb_emp where entrydate >= '2000-01-01' and entrydate <= '2010-01-01';
或
select * from tb_emp where entrydate between '2000-01-01' and '2010-01-01';

-- 7、查询 入职日期在2000-01-01'(包含)到·2010-01-01'(包含)之间 且 性别为女 的员工信息
select * from tb_emp where entrydate between '2000-01-01' and '2010-01-01'and gender = 2;

-- 8、査询 职位是2(讲师)，3(学工主管)，4(教研主管)的员工信息
select * from tb_emp where job = 2 or job = 3 or job = 4;
或
select * from tb_emp where job in (2,3,4);

-- 9、查询 姓名 为两个字的员工信息
select * from tb_emp where name like '__';

-- 10、查询 姓'张”的员工信息
select * from tb_emp where name like '张%';
```

### 分组查询

#### 集合函数

![聚合函数](./images/聚合函数.png)

> - null值不参与所有聚合函数运算。
> - 统计数量可以使用:`count(*)`  `count(字段)`   `count(常量)`，推荐使用`count(*)`。

```sql
-- 1、统计该企业员工数量
select count(id) from tb_emp;

select count(1) from tb_emp;

-- 推荐使用
select count(*) from tb_emp;

-- 2、统计该企业最早入职的员工
select min(entrydate) from tb_emp;

-- 3、统计该企业最迟入职的员工
select max(entrydate) from tb_emp;

-- 4、统计该企业员工 ID 的平均值
select avg(id) from tb_emp;

-- 5、统计该企业员工的 ID 之和
select sum(id) from tb_emp;
```

#### 分组查询

![DQL（分组查询）](./images/DQL（分组查询）.png)

> where与having区别
>
> - 执行时机不同：where 是分组之前进行过滤，不满足where条件，不参与分组；而having是分组之后对结果进行过滤。
> - 判断条件不同：where不能对聚合函数进行判断，而having可以。

> 注意事项：
>
> - 分组之后，查询的字段一般为聚合函数和分组字段，查询其他字段无任何意义。
> - 执行顺序：where > 聚合函数 > having。

```sql
-- 根据性别分组，统计男性和女性员工的数量
select gender,count(*) from tb_emp group by gender;

-- 先查询入职时间在 '2015-01-01' (包含) 以前的员工，并对结果根据职位分组，获取员工数量大于等于2的职位
select job,count(*) from tb_emp where entrydate <= '2015-01-01' group by job having count(*) >= 2;
```

### 排序查询

![DQL（排序查询）](./images/DQL（排序查询）.png)

![DQL（排序方式）](./images/DQL（排序方式）.png)

> 注意事项：如果是多字段排序，当第一个字段值相同时，才会根据第二个字段进行排序

```sql
-- 1。根据入期时间，对员工进行开序排序
select * from tb_emp order by entrydate asc;

-- 2、粮据入联时间，对员工进行降序排序
select * from tb_emp order by entrydate desc ;

-- 3.根据 入职时间 对公司的员工进行 升序排序, 入期时间相同，再按照 更新时间 进行降序排序
select * from tb_emp order by entrydate,update_time desc;
```

### 分页查询

![DQL（分页查询）](./images/DQL（分页查询）.png)

> 起始索引 = （页码 - 1）* 每页展示记录数

> 注意事项
>
> - 1、起始索引从0开始，起始索引=(查询页码-1)*每页显示记录数。
> - 2、分页查询是数据库的方言，不同的数据库有不同的实现，MySQL中是LIMIT。
> - 3、如果查询的是第一页数据，起始索引可以省略，直接简写为limit 10。

```sql
-- 1、从 起始索引0开始查询员工数据，每贝展示5条记录
select * from tb_emp limit 0,5;

-- 2、查询 第1页 员工数据，每页展示5条记录
select * from tb_emp limit 0,5;

-- 3、查询第2页员工数据，每页展示5条记录
select * from tb_emp limit 5,5;

-- 4、查询 第3页 员工数据，每页展示5条记录
select * from tb_emp limit 10,5;
```

### 注意

![DQL函数](./images/DQL函数.png)

```sql

select if(gender = 1,'男性员工','女性员工') as 性别,count(*) from tb_emp group by gender;


select case job when 1 then '班主任' when 2 then '讲师' when 3 then '学工主管' when 4 then '教研主管' else '未分配角色' end as 职位,
       count(*)
from tb_emp
group by job;
```



## 多表设计

## 事务

## 多表查询

## 索引
