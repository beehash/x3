set names utf8;
drop table if exists closedisc;
create table closedisc(id int primary key AUTO_INCREMENT,
closename varchar(500),imgsrc varchar(200),price varchar(100));
insert into closedisc values(null,"森马 冬季服装宽口针织衫青少年潮款","close01.jpg","￥569"),
(null,"贵人鸟 冬季服装窄口羊毛衫青少年潮款","close02.jpg","￥740"),
(null,"黑蝠社 冬季服装宽口纯棉青少年潮款","close03.jpg","￥123.99"),
(null,"真维斯 针织衫女 2018春季新品女士混纺贴袋套头毛衣","close04.jpg","￥99"),
(null,"鳄鱼恤 女100%山羊绒净色前短后长高领毛衣裙毛衣","close05.jpg","￥799"),
(null,"米皇 堆领夹条100%纯羊毛女士毛衣高领保暖羊毛衣","close06.jpg","￥980"),
(null,"维多拉斯 女士羊绒时尚气质套删保暖羊绒衫毛衣","close07.jpg","￥468"),
(null,"兆君 女款简约樽领100%纯山羊绒衫 女款高领羊绒毛衣","close08.jpg","￥559");