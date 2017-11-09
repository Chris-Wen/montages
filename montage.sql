SET NAMES UTF8;
DROP DATABASE IF EXISTS montage;
CREATE DATABASE montage CHARSET UTF8;
USE montage;


#用户表
CREATE TABLE mtq_user(
    uid INT(11) PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32) NOT NULL,
    upwd VARCHAR(32) NOT NULL,
    email VARCHAR(64),
    phone VARCHAR(16),
    avatar VARCHAR(64) DEFAULT NULL,
    user_name VARCHAR(32) DEFAULT NULL,
    gender INT(1) DEFAULT NULL

);


INSERT INTO mtq_user VALUES
(NULL,"montage","123456","montage@163.com","13902948239","img/avatar/default.jpg","蒙奇",1),
(NULL,"dingding","123456","dingding@163.com","13902941213","img/avatar/default.jpg","叮叮",0),
(NULL,"dangdang","123456","dangdang@163.com","13912558239","img/avatar/default.jpg","铛铛",1),
(NULL, 'dingding', '123456', 'ding@qq.com', '13511011000', 'img/avatar/default.png', '丁春秋', 0),
(NULL, 'dang', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '当当喵', 1),
(NULL, 'dou', '123456', 'dou@qq.com', '13501234569', 'img/avatar/default.png', '窦志强', 1),
(NULL, 'yaya', '123456', 'ya@qq.com', '13501234560', 'img/avatar/default.png', '秦小雅', 0),
(NULL, '1111', '111111', '441977193@qq.com', '18357100796', NULL, NULL, NULL),
(NULL, 'ABCD', '123456', '123@qq.com', '13538894495', NULL, NULL, NULL),
(NULL, 'mohk', '123456', '11@qq.com', '13512312312', NULL, NULL, NULL),
(NULL, '121123', 'w13945128995', '491000888@qq.com', '13213389258', NULL, NULL, NULL),
(NULL, '555555', '5555555', '55555555@163.com', '13400000000', NULL, NULL, NULL),
(NULL, 'xuyong', '123456', '123456789@qq.com', '15525623622', NULL, NULL, NULL),
(NULL, 'admin', 'cxy930123', 'mail@xingyu1993.cn', '13580510164', NULL, NULL, NULL),
(NULL, 'siyongbo', '900427', '616188545@qq.com', '18447103998', NULL, NULL, NULL),
(NULL, 'qwerty', '123456', '1091256014@qq.com', '15617152367', NULL, NULL, NULL),
(NULL, 'dingziqiang', '456456', '996534706@qq.com', '15567502520', NULL, NULL, NULL),
(NULL, 'hdb2264068', 'huang123', '471062503@qq.com', '18898405759', NULL, NULL, NULL),
(NULL, 'wenhua', '654321', 'liwenhua@tedu.cn', '15012345678', NULL, NULL, NULL),
(NULL, '<img>', 'cxy930123', 'mail@xingyu1993.cn.1', '11111111111', NULL, NULL, NULL),
(NULL, '</body>', 'cxy930123', 'mail@xingyu1993.cn.2', '22222222222', NULL, NULL, NULL),
(NULL, '<img src=@>', 'cxy930123', 'mail@xingyu1993.cn.3', '33333333333', NULL, NULL, NULL),
(NULL, '气航航', 'wyh961130', '1419591926@qq.com', '15927204115', NULL, NULL, NULL),
(NULL, 'Jessy', 'ac210921', '123456@qq.com', '13523456789', NULL, NULL, NULL),
(NULL, 'yuanxf', '123456', 'yuanxf@tedu.cn', '13537763301', NULL, NULL, NULL),
(NULL, '查安军', '025520', '27514172112@qq.com', '18158899905', NULL, NULL, NULL),
(NULL, '123456', '123456', '123456@1.com', '13815668132', NULL, NULL, NULL),
(NULL, '1234', '111111', '734713428@qq.com', '18061920422', NULL, NULL, NULL),
(NULL, 'qwe12345', '123123', '1191769510@qq.com', '15234010643', NULL, NULL, NULL),
(NULL, '海贼王', '5124457', 'hxxcrocky@qq.com', '18826450879', NULL, NULL, NULL),
(NULL, 'hanrufuyun00', 'hanrufuyun11', '458205630@qq.com', '13853114827', NULL, NULL, NULL),
(NULL, 'li999999', 'li999999', 'limingdir@163.com', '18557512341', NULL, NULL, NULL),
(NULL, '111111111111', '123456', '1057631733@qq.com', '15275106677', NULL, NULL, NULL),
(NULL, 'tom', '123456', 'tom@tedu.cn', '13801234568', NULL, NULL, NULL);



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
    sale INT(1) DEFAULT 0,              #上架类型  0--已下架 1--正在出售  2--预售
    box_office VARCHAR(10),             #票房
    poster_pic VARCHAR(128),            #海报
    subtitle VARCHAR(32),               #影片简介
    synopsis VARCHAR(512)               #剧情
);


INSERT INTO mtq_details VALUES
(NULL,"羞羞的铁拳","Never Say Die","喜剧",100,"9月30日",2017,"宋阳 张吃鱼","宋阳 张吃鱼","中国","北京开心麻花娱乐文化传媒有限公司",7.4,31,1,"21.31亿元","img/movie/onsale/onsale1.jpg","艾伦玛丽互换身体引发爆笑故事","艾伦饰演的靠打假拳混日子的艾迪生，和马丽饰演的正义感十足的体育记者马小，本来是一对冤家。但因为一场意外的电击，两人的身体发生了互换。之后两人互坑互害，引发拳坛大地震，揭开了假拳界的秘密，随之也引来了一堆麻烦。"),
(NULL,"雷神3：诸神黄昏","Thor: Ragnarok"," 动作/冒险/喜剧",130,"11月3日",2017,"塔伊加·维迪提","克雷格·凯尔 克里斯托弗·约斯特","美国","华特·迪士尼电影工作室",7.8,26,1,"4.73亿元","img/movie/onsale/onsale3.jpg","超级英雄界的-开心麻花-电影","失去雷霆之锤的索尔被囚禁在宇宙的另一端，他不得不想方设法尽早赶回阿斯加德，阻止家园的毁灭和阿斯加德文明的终结，即所谓的诸神黄昏。整个事件背后的主谋是无情的死神海拉，她威力无穷，对整个宇宙造成了全新威胁。但首先，他必须要在一场致命的角斗士决斗中幸存下来，而他要面对的正是他曾经的战友、同为复仇者联盟成员的浩克。"),
(NULL,"全球风暴","Geostorm","动作/科幻/惊悚",109,"10月27日",2017,"迪安·德夫林","迪安·德夫林 Paul Guyot","美国","华纳兄弟影片公司",6.5,26,1,"4.06亿元","img/movie/onsale/onsale4.jpg","天灾远不如人祸","在一系列史无前例的自然灾害席卷地球之后，全球领袖携手创建了一个复杂的卫星网络来控制全球气候并保证所有人的安全。但现在，本该保护地球的系统却出了错，开始攻击地球，要赶在一场席卷整个世界的全球风暴摧毁一切前发现真正的威胁，这无疑是一场与时间的赛跑。"),
(NULL,"相爱相亲","Love Education","爱情/剧情 ",121,"11月3日",2017,"张艾嘉","游晓颖 张艾嘉","中国 | 中国台湾","北京海润影业有限公司",8.4,26,1,"1,107.9万","img/movie/onsale/onsale5.jpg","张艾嘉聚焦三代女人情感故事","《相爱相亲》讲述三位不同年龄段的女人的爱情故事，已到结婚年龄的薇薇（郎月婷饰）与酒吧驻唱歌手阿达（宋宁峰饰）正处热恋，看似不会被家人支持的爱情，却先迎来了“过去”的挑战。薇薇的母亲（张艾嘉饰）面临退休，又因各种生活巨变..."),
(NULL,"密战","Eternal Wave"," 战争/动作/剧情 ",100,"11月3日",2017,"钟少雄","张炭","中国","上影集团",5.8,26,1,"1,109.0万","img/movie/onsale/onsale6.jpg","郭富城赵丽颖组革命CP","淞沪会战后上海沦陷，地下工作者林翔（郭富城饰）受命来到危机四伏的上海，重建惨遭敌人破坏的地下抗日战线。在这里他遇到单纯却很有正义感的兰芳（赵丽颖饰），这对临时组成的“地下党夫妇”将在战火纷飞中，携手亦正亦邪的梁栋（张翰饰）与日本侵略者及伪政府特务展开惊险刺激的生死较量……"),
(NULL,"七十七天","Seventy-Seven Days","剧情/冒险",110,"11月3日",2017,"赵汉唐","赵汉唐 曹金玲","中国","浙江红珊瑚影视股份有限公司",7.0,26,1,"2,499.8万","img/movie/onsale/onsale7.jpg","徒步穿越 ‘生命禁区——极地羌塘’","淞沪会战后上海沦陷，地下工作者林翔（郭富城饰）受命来到危机四伏的上海，重建惨遭敌人破坏的地下抗日战线。在这里他遇到单纯却很有正义感的兰芳（赵丽颖饰），这对临时组成的“地下党夫妇”将在战火纷飞中，携手亦正亦邪的梁栋（张翰饰）与日本侵略者及伪政府特务展开惊险刺激的生死较量……"),
(NULL,"银翼杀手2049","Blade Runner 2049","科幻/惊悚",163,"10月27日",2017,"丹尼斯·维伦纽瓦","菲利普·K·迪克 汉普顿·范彻","英国 | 美国 | 加拿大","华纳兄弟影片公司",8.2,21,1,"7,466.0万元","img/movie/onsale/onsale8.jpg","延续前作的故事线索，30年后新的银翼杀手","在人类与复制人共生的2049年，两个种族之间的矛盾已上升到不可调和的地位，战争一触即发，人类存亡危在旦夕。新一代银翼杀手K（瑞恩·高斯林饰），寻找到已销声匿迹多年的前代银翼杀手-里克·迪卡德（哈里森·福特饰），共同破解即将颠覆人类社会的惊天阴谋，并联手，再次制止了人类与复制人的命运之战。"),
(NULL,"王牌特工2：黄金圈","Kingsman: The Golden Circle","动作/冒险/喜剧",141,"10月20日",2017,"马修·沃恩","马修·沃恩 戴夫·吉布森","英国 | 美国","二十世纪福斯电影公司",7.5,26,1,"4.67亿元","img/movie/onsale/onsale9.jpg","王牌特工将与联邦特工联手，共同对抗神秘组织——黄金圈","王牌特工总部惨遭秘密组织炸毁，世界也再次陷入巨大危机，人类生命岌岌可危。艾格西在神秘信息的指引下踏上了美国之旅。在那里，他们发现了另一个与王牌特工同时成立、被称为“联邦特工”的秘密特工组织。联邦特工以酒厂作为日常掩护，令人意外的是，已经死去的王牌特工哈利竟神秘复活并休养在联邦特工总部，身份成谜。在这场考验力量和智慧的全新冒险中，王牌特工将与联邦特工联手，共同对抗神秘组织——黄金圈"),
(NULL,"天才枪手","Bad Genius","喜剧/犯罪/剧情",130,"10月13日",2017,"纳塔吾·彭皮里亚","Tanida Hantaweewatana","泰国","Golden Village Pictures",8.4,21,1,"2.68亿元","img/movie/onsale/onsale10.jpg","天才高中生小琳策划一场跨时区的完美作弊","改编自真实事件，讲述天才高中生小琳专门为同学作弊牟取暴利，她接下一个天价委托，要在国际会考上跨国为富家公子作弊，小琳找另一名记忆力极佳的天才学生班克，策划一场跨时区的完美作弊！"),
(NULL,"精灵宝可梦：波尔凯尼恩与机巧的玛机雅娜(2016)","Pokémon the Movie XY&Z: Volcanion and the Ingenious Magearna","动画/奇幻/冒险",90,"11月11日",2017,"汤山邦彦","富冈淳广 Carter Cathcart","日本","东宝国际","",21,2,"...待上映","img/movie/presale/presale2.jpg",NULL,"小智和皮卡丘等一行伙伴在旅途中前行。某日，宝可梦波尔凯尼恩从天而降并被迫与小智锁在了一起。波尔凯尼恩与被人类伤害过的宝可梦们共同生活，因此非常讨厌人类，但这条神奇的锁链却让他们无法分开，奇妙的故事就此开始。小智与皮卡丘又将一起开始新的冒险…… 500 年前诞生于阿佐特王国的人造宝可梦玛机雅娜。据说在玛机雅娜体内，有被称为“魂心”的未知力量，贪婪又邪恶的贾维斯企图利用这股力量来统治王国。"),
(NULL,"正义联盟","Justice League","动作/冒险/奇幻",120,"11月17日",2017,"扎克·施奈德","比尔·芬格 克里斯·特里奥","美国","华纳兄弟影片公司","",26,2,"...待上映","img/movie/presale/presale3.jpg",NULL,"在对人性重新燃起的希望所驱使，以及被超人的英勇之举所感染，布鲁斯·韦恩与他最新的盟友戴安娜·普林斯一起，组建了一支超强队伍，应对更强劲敌的来袭。虽然这队联盟的各个超级英雄都大有来头——蝙蝠侠、神奇女侠、海王、钢骨与闪电侠，他们首度集结，力挽狂澜，拯救地球免遭灭顶之灾。"),
(NULL,"降魔传","The Golden Monk","奇幻/动作/喜剧 ",100,"11月17日",2017,"王晶 钟少雄","钟少雄","中国","北京海润影业有限公司","",26,2,"...待上映","img/movie/presale/presale4.jpg",NULL,"南宋年间，杭州城妖怪肆虐，百姓困苦不堪。玄光寺不通和尚（郑恺饰）下山降妖除魔，邂逅女降魔师菁菁（张雨绮饰）。原来二人前世实为天庭金童玉女，因触犯天条被贬人间，至此已轮回百世，却始终未能相认。不通与菁菁协力铲除天山老.."),
(NULL,"恐袭波士顿(2016)","Patriots Day","剧情/犯罪",130,"11月17日",2017,"彼得·博格","乔舒亚·泽图默 埃里克·约翰森","美国 | 中国香港","狮门影业","",26,2,"...待上映","img/movie/presale/presale5.jpg",NULL,"影片聚焦于2013年的波士顿马拉松爆炸事件，马克·沃尔伯格饰演警长汤米·桑德斯（Tommy Saunders）。他和幸存者、第一线应变人员和调查员一起追捕制造爆炸案的恐怖分子，以防他们再一次袭击。"),
(NULL,"暴雪将至","The Looming Storm","剧情/悬疑/犯罪",118,"11月17日",2017,"董越","董越","中国","世纪百年影业（天津）有限公司","",27,2,"...待上映","img/movie/presale/presale6.jpg",NULL,"上世纪九十年代某个小城，天气预报中一场百年不遇的暴雪即将侵袭此地，人心惶惶时骤然发生了一起残忍的连环杀人案。一心想进入体制内的保卫科干事余国伟（段奕宏饰）渴望借此机会，一展自己颇为得意的“神探”技能，并破格进入体制内成为真正的警察及模范。面对“探案”欲望与燕子（江一燕饰）的感情，余神探越陷越深，付出的代价也越来越大。然而宿命因果，万事皆有定数……"),
(NULL,"不成问题的问题 (2016)","Mr.No Problem","剧情",133,"11月21日",2017,"梅峰","梅峰 黄石","中国","北京电影学院青年电影制片厂","",27,2,"...待上映","img/movie/presale/presale7.jpg",NULL,"故事改编自著名作家老舍先生发表于1943年的同名短篇小说，是一部背景设定在战时重庆的三幕寓言黑白片，讲述的是中国抗日战争时期大后方的树华农场在主任丁务源的管理下走向衰败的故事。"),
(NULL,"寻梦环游记","Coco","动画/冒险/喜剧",109,"11月24日",2017,"李·昂克里奇 阿德里安·莫里纳","阿德里安·莫里纳 李·昂克里奇","美国","华特·迪士尼电影工作室","",26,2,"...待上映","img/movie/presale/presale8.jpg",NULL,"影片讲述一个鞋匠家庭出身的12岁小男孩米格尔，自幼有一个音乐梦，但音乐却是被家庭所禁止的，他们认为自己被音乐诅咒了。在米格尔秘密追寻音乐梦时，不小心进入了死亡之地，在这里他遇见了家人们的灵魂，并得到了他们的祝福去歌唱，最终重返人间。"),
(NULL,"烟花","打ち上げ花火下、から見るか？横から見るか？","动画/剧情/爱情",91,"12月1日",2017,"新房昭之 Nobuyuki Takeuchi","大根仁 岩井俊二","日本","东宝国际","",21,2,"...待上映","img/movie/presale/presale1.jpg",NULL,"影片讲述一群学生在夏天因为烟花展开了争论，他们打算趁着夏季烟花大会去探寻烟花的秘密。同时，他们的同学少女奈砂因为父母离异而决定离家出走。于是他们在烟花表演的夜晚，一起爬山去那个灯塔。");


#comments
CREATE TABLE mtq_comments(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    film_id INT,               
    c_uname VARCHAR(16),                                        #评论用户名
    agrees INT DEFAULT 0 ,                                      #点赞数
    c_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,        #时间
    content  VARCHAR(256)                                       #内容
);
#reply
CREATE TABLE mtq_reply(
    rid INT PRIMARY KEY AUTO_INCREMENT,
    topic_id INT,                                           #关联评论id
    r_uname VARCHAR(16),                                    #评论用户名
    r_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,    #时间
    r_content  VARCHAR(256)                                 #内容
);


INSERT INTO mtq_comments VALUES
(NULL,1,"montage",10,"2016-09-19 16:52","很有趣的喜剧电影，它所讨论的成人话题一直是幽默而严肃的，没有流于色情或艳俗。《四十岁的老处男》擅长从日常生活中寻找笑料，剧本非常真实。尽管电影有些剧情的缺陷，比如男主角接受改变等转折处都不具备充足的铺垫，但整体流畅，史蒂夫·卡瑞尔更是难得一见的喜剧明星。"),
(NULL,1,"dingding",6,"2016-09-20 12:52","很有趣的喜剧"),
(NULL,1,"dingding",1,"2016-01-19 12:52","喜剧"),
(NULL,1,"dingding","","2017-09-19 12:52","很有趣");


INSERT INTO mtq_reply VALUES
(NULL,1,"dangdang","2016-09-19 20:33","你讲的好有道理，我竟无言以对"),
(NULL,1,"dingding",NOW(),"this is a test");



