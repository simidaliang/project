/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : cnr

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-02-20 16:29:41
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `cid` int(10) NOT NULL AUTO_INCREMENT,
  `goods_name1` varchar(255) NOT NULL,
  `goods_price` int(10) NOT NULL,
  `goods_stock` int(10) NOT NULL,
  `gid` int(10) NOT NULL,
  `buy_limit` int(10) NOT NULL,
  `shop` varchar(255) NOT NULL,
  `list_pic` varchar(255) NOT NULL,
  `contents` varchar(255) NOT NULL,
  `counts` varchar(255) NOT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=MyISAM AUTO_INCREMENT=124 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('120', '格林燕山栗子鸡秒杀组', '168', '579', '409', '10', '官方店铺', 'images/list_pic.jpg', '300', '4');
INSERT INTO `cart` VALUES ('121', '百年聚华驴腿肉套组', '268', '500', '410', '199', '中国农垦官方旗舰店', 'images/list_pic2.jpg', '270', '4');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `gid` int(11) NOT NULL AUTO_INCREMENT,
  `goods_name1` varchar(255) NOT NULL,
  `goods_name2` varchar(255) NOT NULL,
  `goods_price` float(10,2) NOT NULL,
  `goods_stock` float(255,0) NOT NULL,
  `buy_limit` int(50) NOT NULL,
  `list_pic` varchar(255) NOT NULL,
  `index_pic` varchar(255) NOT NULL,
  `goods_pic_show` varchar(255) NOT NULL,
  `sales` float(255,0) NOT NULL,
  `contents` float(255,0) NOT NULL,
  `shop` varchar(255) NOT NULL,
  `goods_pic_small1` varchar(255) NOT NULL,
  `goods_Pic_small2` varchar(255) NOT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM AUTO_INCREMENT=541 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('409', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '168.00', '579', '10', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '2000', '300', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('410', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '268.00', '500', '199', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '1980', '270', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('411', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '368.00', '100', '198', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '1960', '240', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('412', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '468.00', '90', '197', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '1940', '210', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('413', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '568.00', '579', '196', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '1920', '180', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('414', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '668.00', '500', '195', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '1900', '150', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('415', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '768.00', '100', '194', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '1880', '120', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('416', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '868.00', '90', '193', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '1860', '90', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('417', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '968.00', '579', '192', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '1840', '1000', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('418', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '1068.00', '500', '191', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '1820', '1001', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('419', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '1168.00', '100', '190', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '1800', '1002', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('420', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '1268.00', '90', '189', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '1780', '1003', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('421', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '1368.00', '579', '188', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '1760', '1004', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('422', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '1468.00', '500', '187', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '1740', '1005', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('423', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '1568.00', '100', '186', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '1720', '1006', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('424', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '1668.00', '90', '185', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '1700', '1007', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('425', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '1768.00', '579', '184', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '1680', '1008', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('426', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '1868.00', '500', '183', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '1660', '1009', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('427', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '1968.00', '100', '182', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '1640', '700', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('428', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '2068.00', '90', '181', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '1620', '680', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('429', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '2168.00', '579', '180', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '1600', '660', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('430', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '2268.00', '500', '179', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '800', '640', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('431', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '2368.00', '100', '178', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '801', '620', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('432', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '2468.00', '90', '177', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '802', '600', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('433', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '2568.00', '579', '176', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '803', '580', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('434', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '2668.00', '500', '175', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '804', '560', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('435', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '2768.00', '100', '174', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '805', '540', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('436', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '2868.00', '90', '173', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '806', '520', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('437', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '2968.00', '579', '172', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '807', '500', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('438', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '3068.00', '500', '171', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '808', '480', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('439', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '3168.00', '100', '170', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '809', '460', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('440', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '3268.00', '90', '169', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '810', '440', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('441', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '3368.00', '579', '168', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '811', '420', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('442', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '3468.00', '500', '167', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '812', '400', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('443', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '3568.00', '100', '166', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '813', '50', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('444', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '3668.00', '90', '165', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '814', '52', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('445', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '3768.00', '579', '164', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '815', '54', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('446', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '3868.00', '500', '163', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '816', '56', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('447', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '3968.00', '100', '162', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '817', '58', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('448', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '4068.00', '90', '161', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '818', '60', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('449', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '4168.00', '579', '160', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '819', '62', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('450', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '4268.00', '500', '159', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '820', '64', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('451', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '4368.00', '100', '158', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '821', '66', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('452', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '4468.00', '90', '157', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '822', '68', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('453', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '4568.00', '579', '156', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '823', '70', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('454', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '4668.00', '500', '155', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '824', '72', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('455', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '4768.00', '100', '154', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '825', '74', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('456', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '4868.00', '90', '153', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '826', '76', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('457', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '4968.00', '579', '152', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '827', '78', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('458', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '5068.00', '500', '151', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '828', '80', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('459', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '5168.00', '100', '150', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '829', '82', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('460', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '5268.00', '90', '149', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '830', '84', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('461', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '5368.00', '579', '148', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '831', '86', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('462', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '5468.00', '500', '147', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '832', '20', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('463', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '5568.00', '100', '146', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '833', '19', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('464', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '5668.00', '90', '145', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '834', '18', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('465', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '5768.00', '579', '144', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '835', '17', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('466', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '5868.00', '500', '143', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '836', '16', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('467', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '5968.00', '100', '142', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '837', '15', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('468', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '6068.00', '90', '141', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '838', '14', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('469', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '6168.00', '579', '140', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '839', '13', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('470', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '6268.00', '500', '139', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '840', '12', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('471', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '6368.00', '100', '138', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '841', '11', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('472', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '6468.00', '90', '137', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '842', '10', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('473', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '6568.00', '579', '136', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '843', '9', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('474', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '6668.00', '500', '135', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '844', '8', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('475', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '6768.00', '100', '134', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '845', '100', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('476', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '6868.00', '90', '133', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '846', '95', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('477', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '6968.00', '579', '132', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '847', '90', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('478', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '7068.00', '500', '131', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '848', '85', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('479', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '7168.00', '100', '130', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '849', '80', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('480', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '7268.00', '90', '129', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '850', '75', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('481', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '7368.00', '579', '128', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '851', '300', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('482', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '7468.00', '500', '127', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '852', '301', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('483', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '7568.00', '100', '126', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '853', '302', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('484', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '7668.00', '90', '125', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '854', '303', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('485', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '7768.00', '579', '124', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '855', '304', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('486', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '7868.00', '500', '123', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '856', '305', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('487', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '7968.00', '100', '122', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '857', '306', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('488', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '8068.00', '90', '121', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '858', '307', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('489', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '8168.00', '579', '120', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '859', '308', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('490', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '8268.00', '500', '119', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '860', '309', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('491', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '8368.00', '100', '118', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '861', '310', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('492', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '8468.00', '90', '117', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '862', '311', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('493', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '8568.00', '579', '116', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '863', '312', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('494', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '8668.00', '500', '115', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '864', '313', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('495', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '8768.00', '100', '114', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '865', '314', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('496', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '8868.00', '90', '113', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '866', '315', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('497', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '8968.00', '579', '112', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '867', '316', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('498', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '9068.00', '500', '111', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '868', '317', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('499', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '9168.00', '100', '110', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '869', '318', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('500', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '9268.00', '90', '109', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '870', '319', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('501', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '9368.00', '579', '108', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '871', '320', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('502', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '9468.00', '500', '107', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '872', '321', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('503', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '9568.00', '100', '106', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '873', '322', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('504', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '9668.00', '90', '105', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '874', '323', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('505', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '9768.00', '579', '104', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '875', '324', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('506', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '9868.00', '500', '103', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '876', '325', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('507', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '9968.00', '100', '102', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '877', '326', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('508', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '10068.00', '90', '101', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '878', '327', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('509', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '10168.00', '579', '100', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '879', '328', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('510', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '10268.00', '500', '99', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '880', '329', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('511', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '10368.00', '100', '98', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '881', '330', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('512', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '10468.00', '90', '97', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '882', '331', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('513', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '10568.00', '579', '96', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '883', '332', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('514', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '10668.00', '500', '95', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '884', '677', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('515', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '10768.00', '100', '94', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '885', '676', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('516', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '10868.00', '90', '93', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '886', '675', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('517', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '10968.00', '579', '92', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '887', '674', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('518', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '11068.00', '500', '91', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '888', '673', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('519', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '11168.00', '100', '90', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '889', '672', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('520', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '11268.00', '90', '89', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '890', '671', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('521', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '11368.00', '579', '88', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '891', '670', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('522', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '11468.00', '500', '87', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '892', '669', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('523', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '11568.00', '100', '86', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '893', '668', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('524', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '11668.00', '90', '85', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '894', '667', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('525', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '11768.00', '579', '84', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '895', '666', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('526', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '11868.00', '500', '83', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '896', '665', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('527', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '11968.00', '100', '82', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '897', '664', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('528', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '12068.00', '90', '81', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '898', '663', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('529', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '12168.00', '579', '80', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '899', '662', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('530', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '12268.00', '500', '79', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '900', '661', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('531', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '12368.00', '100', '78', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '901', '660', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('532', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '12468.00', '90', '77', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '902', '659', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('533', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '12568.00', '579', '76', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '903', '658', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('534', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '12668.00', '500', '75', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '904', '657', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('535', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '12768.00', '100', '74', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '905', '656', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('536', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '12868.00', '90', '73', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '906', '655', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');
INSERT INTO `goods` VALUES ('537', '格林燕山栗子鸡秒杀组', '粟子绵软 鸡肉嫩烂 味道香浓', '12968.00', '579', '72', 'images/list_pic.jpg', 'images/index_pic.jpg', 'images/fangda_middle3.jpg', '907', '654', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small2.jpg');
INSERT INTO `goods` VALUES ('538', '百年聚华驴腿肉套组', '采用老汤秘方 肉质鲜嫩 口感劲道', '13068.00', '500', '71', 'images/list_pic2.jpg', 'images/index_pic2.jpg', 'images/fangda_middle6.jpg', '908', '653', '中国农垦官方旗舰店', 'images/fangda_small3.jpg', 'images/fangda_small3.jpg');
INSERT INTO `goods` VALUES ('539', '【中国农垦】北大荒 黑龙江农垦 龙良长粒香米2.5kg', '东北大米 醇厚甘甜 唇齿留香 2018年秋收新米', '13168.00', '100', '70', 'images/list_pic3.jpg', 'images/index_pic3.jpg', 'images/fangda_middle3.jpg', '909', '652', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small4.jpg');
INSERT INTO `goods` VALUES ('540', 'PASSEZLA美白祛斑红毯霜', '淡化色斑 提亮肤色 舒缓修护 白皙紧致', '13268.00', '90', '69', 'images/list_pic4.jpg', 'images/index_pic4.jpg', 'images/fangda_middle3.jpg', '910', '651', '官方店铺', 'images/fangda_small.jpg', 'images/fangda_small5.jpg');

-- ----------------------------
-- Table structure for register
-- ----------------------------
DROP TABLE IF EXISTS `register`;
CREATE TABLE `register` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `psw` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of register
-- ----------------------------
INSERT INTO `register` VALUES ('1', 'aaa', '123');
INSERT INTO `register` VALUES ('5', '13032890253', '123456');
INSERT INTO `register` VALUES ('22', '321', '1');
INSERT INTO `register` VALUES ('20', '11111', '111');
INSERT INTO `register` VALUES ('21', '2', '2');
INSERT INTO `register` VALUES ('18', '1', '1');
INSERT INTO `register` VALUES ('17', '1231', '123');
INSERT INTO `register` VALUES ('16', '123', '111');
SET FOREIGN_KEY_CHECKS=1;
