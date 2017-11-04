SET NAMES UTF8;
DROP DATABASE IF EXISTS montage;
CREATE DATABASE montage CHARSET UTF8;
USE montage;


#用户表
CREATE TABLE mtq_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(16) NOT NULL,
    upwd VARCHAR(32) NOT NULL,
    email VARCHAR(32),
    phone VARCHAR(32),
    avatar VARCHAR(64),
    user_name VARCHAR(32),
    gender INT(1) DEFAULT 1
);
INSERT INTO mtq_user VALUES
(NULL,'montage','123456','montage@163.com','13902948239','img/avatar/default.jpg','蒙奇',1),
(NULL,'dingding','123456','dingding@163.com','13902941213','img/avatar/default.jpg','叮叮',0),
(NULL,'dangdang','123456','dangdang@163.com','13912558239','img/avatar/default.jpg','铛铛',1);

#film infos
CREATE TABLE mtq_details(
    fid INT PRIMARY KEY AUTO_INCREMENT, 
    fname VARCHAR(32) NOT NULL,         #片名
    sub_name VARCHAR(64),               #别名
    types VARCHAR(64),                  #类型
    duration INT,                       #时长
    release_time VARCHAR(10),           #上映日期
    fage INT(4),                        #上映年份
    director VARCHAR(16),               #导演
    wirter VARCHAR(16),                 #编剧
    zone VARCHAR(8),                    #地区
    distributor VARCHAR(64),            #制作方
    film_score FLOAT DEFAULT 7.1,       #影片得分
    price INT,                          #价格
    box_office VARCHAR(10),             #票房
    poster_pic VARCHAR(128),            #海报
    subtitle VARCHAR(32),               #影片简介
    synopsis VARCHAR(512)               #剧情
);
INSERT INTO mtq_details VALUES
(NULL,'羞羞的铁拳','Never Say Die','喜剧',100,'9月30日',2017,'宋阳 张吃鱼','宋阳 张吃鱼','中国','北京开心麻花娱乐文化传媒有限公司',7.4,31,'21.31亿元','img/movie/onsale/onsale1.jpg','艾伦玛丽互换身体引发爆笑故事','艾伦饰演的靠打假拳混日子的艾迪生，和马丽饰演的正义感十足的体育记者马小，本来是一对冤家。但因为一场意外的电击，两人的身体发生了互换。之后两人互坑互害，引发拳坛大地震，揭开了假拳界的秘密，随之也引来了一堆麻烦。');


#comments
CREATE TABLE mtq_comments(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    film_id INT,         #评论电影Id
    c_uname VARCHAR(16),        #评论用户名
    agrees INT DEFAULT 0 ,      #点赞数
    c_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,  #时间
    content  VARCHAR(256)      #内容
);
#reply
CREATE TABLE mtq_reply(
    rid INT PRIMARY KEY AUTO_INCREMENT,
    topic_id INT,        #关联评论id
    r_uname VARCHAR(16),        #评论用户名
    r_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,  #时间
    r_content  VARCHAR(256)      #内容
);

INSERT INTO mtq_comments VALUES
(NULL,1,'montage',10,'2016-09-19 16:52','很有趣的喜剧电影，它所讨论的成人话题一直是幽默而严肃的，没有流于色情或艳俗。《四十岁的老处男》擅长从日常生活中寻找笑料，剧本非常真实。尽管电影有些剧情的缺陷，比如男主角接受改变等转折处都不具备充足的铺垫，但整体流畅，史蒂夫·卡瑞尔更是难得一见的喜剧明星。'),
(NULL,1,'dingding',6,'2016-09-20 12:52','很有趣的喜剧'),
(NULL,1,'dingding',1,'2016-01-19 12:52','喜剧'),
(NULL,1,'dingding','','2017-09-19 12:52','很有趣');


INSERT INTO mtq_reply VALUES
(NULL,1,'dangdang','2016-09-19 20:33','你讲的好有道理，我竟无言以对'),
(NULL,1,'dingding',NOW(),'this is a test');



