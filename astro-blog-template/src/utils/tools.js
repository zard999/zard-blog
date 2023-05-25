/*
 * @Author: zyh
 * @Date: 2023-05-24 16:44:09
 * @LastEditors: zyh
 * @LastEditTime: 2023-05-25 11:01:11
 * @FilePath: /astro-blog-template/src/utils/tools.js
 * @Description: 
 * 
 * Copyright (c) 2023 by 穿越, All Rights Reserved. 
 */

window.day = new Date();

export const JIJIEMAP = {
    chun: 'ying',
    xia: 'he',
    qiu: 'ju',
    dong: 'mei'
}

Date.prototype.Format = function (fmt) { //author: meizz 
  let o = {
    "M+": this.getMonth() + 1, //月份 
    "d+": this.getDate(), //日 
    "h+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds(), //秒 
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
    "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (let k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

/**
 * @description: 节日表
 */
export const lundarDayMap = {
  "正月初一": "春节",
  "正月十五": "元宵",
  "五月初五": "端午",
  "七月初七": "七夕",
  "七月十五": "中元",
  "八月十五": "中秋",
  "九月初九": "重阳",
  "十月初一": "寒衣",
  "十月十五": "下元",
  "腊月初八": "腊八",
  "腊月廿三": "北小年",
  "腊月廿四": "南小年"
}

export const solarDayMap = {
  "1.1": "元旦",
  "10.1": "国庆",
}

// 诗词表
export const weekPoetry = [
  {
    "title": "采桑子·恨君不似江楼月",
    "author": "宋·吕本中",
    "image": "polayoutu-yue-00005",
    "content": "恨君不似江楼月，\n南北东西，\n南北东西，\n只有相随无别离。\n恨君却似江楼月，\n暂满还亏，\n暂满还亏，\n待得团圆是几时？"
  },
  {
    "title": "问刘十九",
    "author": "唐·白居易",
    "image": "polayoutu-00006",
    "content": "绿蚁新醅酒，\n红泥小火炉。\n晚来天欲雪，\n能饮一杯无？"
  },
  {
    "title": "江城子·十年生死两茫茫",
    "author": "宋·苏轼",
    "image": "polayoutu-00021",
    "content": "十年生死两茫茫，\n不思量，自难忘。\n千里孤坟，无处话凄凉。\n纵使相逢应不识，\n尘满面，鬓如霜。\n夜来幽梦忽还乡，\n小轩窗，正梳妆。\n相顾无言，惟有泪千行。\n料得年年肠断处，\n明月夜，短松冈。"
  },
  {
    "title": "逢雪宿芙蓉山主人",
    "author": "唐·刘长卿",
    "image": "polayoutu-00040",
    "content": "日暮苍山远，\n天寒白屋贫。\n柴门闻犬吠，\n风雪夜归人。"
  },
  {
    "title": "次北固山下",
    "author": "唐·王湾",
    "image": "polayoutu-00078",
    "content": "客路青山外， 行舟绿水前。\n潮平两岸阔， 风正一帆悬。\n海日生残夜， 江春入旧年。\n乡书何处达？ 归雁洛阳边。"
  },
  {
    "title": "元日",
    "author": "宋·王安石",
    "image": "new-year",
    "content": "爆竹声中一岁除，\n春风送暖入屠苏。\n千门万户瞳瞳日，\n总把新桃换旧符。"
  },
  {
    "title": "菩萨蛮·风柔日薄春犹早",
    "author": "宋·李清照",
    "image": "polayoutu-00024",
    "content": "风柔日薄春犹早，\n夹衫乍着心情好。\n睡起觉微寒，\n梅花鬓上残。\n故乡何处是，\n忘了除非醉。\n沉水卧时烧，\n香消酒未消。"
  },
  {
    "title": "青玉案·元夕",
    "author": "宋·辛弃疾",
    "image": "polayoutu-00017",
    "content": "东风夜放花千树，\n更吹落，星如雨。\n宝马雕车香满路，\n凤萧声动，玉壶光转，\n一夜鱼龙舞。\n蛾儿雪柳黄金缕，\n笑语盈盈暗香去。\n众里寻他千百度，\n蓦然回首，那人却在，\n灯火阑珊处。"
  },
  {
    "title": "浪淘沙令·帘外雨潺潺",
    "author": "南唐·李煜",
    "image": "polayoutu-1127-00006",
    "content": "帘外雨潺潺，\n春意阑珊，\n罗衾不耐五更寒。\n梦里不知身是客，\n一饷贪欢。\n独自莫凭阑，\n无限江山，\n别时容易见时难。\n流水落花春去也，\n天上人间。"
  },
  {
    "title": "钗头凤·红酥手",
    "author": "宋·陆游",
    "image": "polayoutu-00070",
    "content": "红酥手，黄縢酒，\n满城春色宫墙柳。\n东风恶，欢情薄。\n一怀愁绪，几年离索。\n错、错、错。\n春如旧，人空瘦，\n泪痕红浥鲛绡透。\n桃花落，闲池阁。\n山盟虽在，锦书难托。\n莫、莫、莫！"
  },
  {
    "title": "破阵子·燕子来时新社",
    "author": "宋·晏殊",
    "image": "polayoutu-00071",
    "content": "燕子来时新社，\n梨花落后清明。\n池上碧苔三四点，\n叶底黄鹂一两声，\n日长飞絮轻。\n巧笑东邻女伴，\n采桑径里逢迎。\n疑怪昨宵春梦好，\n元是今朝斗草赢，\n笑从双脸生。"
  },
  {
    "title": "虞美人·听雨",
    "author": "宋·蒋捷",
    "image": "renrenxiaozhan-00026",
    "content": "少年听雨歌楼上。\n红烛昏罗帐。\n壮年听雨客舟中。\n江阔云低、断雁叫西风。\n而今听雨僧庐下。\n鬓已星星也。\n悲欢离合总无情。\n一任阶前、点滴到天明。"
  },
  {
    "title": "渔家傲·平岸小桥千嶂抱",
    "author": "宋·王安石",
    "image": "polayoutu-00037",
    "content": "平岸小桥千嶂抱，柔蓝一水萦花草。\n茅屋数间窗窈窕。\n尘不到，时时自有春风扫。\n午枕觉来闻语鸟，欹眠似听朝鸡早。\n忽忆故人今总老。\n贪梦好，茫然忘了邯郸道。"
  },
  {
    "title": "清明",
    "author": "唐·杜牧",
    "image": "polayoutu-00065",
    "content": "清明时节雨纷纷，\n路上行人欲断魂。\n借问酒家何处有，\n牧童遥指杏花村。"
  },
  {
    "title": "蝶恋花·春景",
    "author": "宋·苏轼",
    "image": "polayoutu-00068",
    "content": "花褪残红青杏小。\n燕子飞时，\n绿水人家绕。\n枝上柳绵吹又少，\n天涯何处无芳草！\n墙里秋千墙外道。\n墙外行人，\n墙里佳人笑。\n笑渐不闻声渐悄，\n多情却被无情恼。"
  },
  {
    "title": "江畔独步寻花·六七",
    "author": "唐·杜甫",
    "image": "polayoutu-00019",
    "content": "黄四娘家花满蹊，千朵万朵压枝低。\n留连戏蝶时时舞，自在娇莺恰恰啼。\n不是爱花即肯死，只恐花尽老相催。\n繁枝容易纷纷落，嫩蕊商量细细开。"
  },
  {
    "title": "婆罗门引·春尽夜",
    "author": "明·夏完淳",
    "image": "polayoutu-00034",
    "content": "晚鸦飞去，一枝花影送黄昏。\n春归不阻重门。\n辞却江南三月，何处梦堪温？\n更阶前新绿，空锁芳尘。\n随风摇曳云，不须兰棹朱轮。\n只有梧桐枝上，留得三分。\n多情皓魄，怕明宵、还照旧钗痕。\n登楼望、柳外销魂。"
  },
  {
    "title": "望江南·三月暮",
    "author": "宋·吴文英",
    "image": "polayoutu-00066",
    "content": "三月暮，花落更情浓。\n人去秋千闲挂月，\n马停杨柳倦嘶风。\n堤畔画船空。\n恹恹醉，长日小帘栊。\n宿燕夜归银烛外，\n啼莺声在绿阴中。\n无处觅残红。"
  },
  {
    "title": "蝶恋花",
    "author": "宋·欧阳修",
    "image": "renrenxiaozhan-00018",
    "content": "庭院深深深几许，\n杨柳堆烟，帘幕无重数。\n玉勒雕鞍游冶处，\n楼高不见章台路。 \n雨横风狂三月暮，\n门掩黄昏，无计留春住。\n泪眼问花花不语，\n乱红飞过秋千去。"
  },
  {
    "title": "大林寺桃花",
    "author": "唐·白居易",
    "image": "polayoutu-00072",
    "content": "人间四月芳菲尽，\n山寺桃花始盛开。\n长恨春归无觅处，\n不知转入此中来。"
  },
  {
    "title": "定风波·莫听穿林打叶声",
    "author": "宋·苏轼",
    "image": "polayoutu-00050",
    "content": "莫听穿林打叶声，\n何妨吟啸且徐行。\n竹杖芒鞋轻胜马，\n谁怕？一蓑烟雨任平生。\n料峭春风吹酒醒，\n微冷，山头斜照却相迎。\n回首向来萧瑟处，\n归去，也无风雨也无晴。"
  },
  {
    "title": "阮郎归•初夏 ",
    "author": "宋·苏轼",
    "image": "polayoutu-00025",
    "content": "绿槐高柳咽新蝉，\n薰风初入弦。\n碧纱窗下水沉烟，\n棋声惊昼眠。\n微雨过，\n小荷翻，\n榴花开欲燃。\n玉盆纤手弄清泉，\n琼珠碎却圆。"
  },
  {
    "title": "南乡子•端午",
    "author": "宋·李之仪",
    "image": "polayoutu-00028",
    "content": "小雨湿黄昏。\n重午佳辰独掩门。\n巢燕引雏浑去尽，销魂。\n空向梁间觅宿痕。\n客舍宛如村。\n好事无人载一樽。\n唯有莺声知此恨，殷勤。\n恰似当时枕上闻。"
  },
  {
    "title": "约客",
    "author": "宋·赵师秀",
    "image": "polayoutu-00033",
    "content": "黄梅时节家家雨，\n青草池塘处处蛙。\n有约不来过夜半，\n闲敲棋子落灯花。"
  },
  {
    "title": "青玉案•横塘路",
    "author": "宋·贺铸",
    "image": "polayoutu-00042",
    "content": "凌波不过横塘路，\n但目送，芳尘去。\n锦瑟华年谁与度？\n月桥花院，琐窗朱户，只有春知处。\n碧云冉冉蘅皋暮，\n彩笔新题断肠句。\n试问闲愁都几许？\n一川烟草，满城风絮，梅子黄时雨。"
  },
  {
    "title": "喜晴",
    "author": "宋·范成大",
    "image": "polayoutu-00030",
    "content": "窗间梅熟落蒂，\n墙下笋成出林。\n连雨不知春去，\n一晴方觉夏深。"
  },
  {
    "title": "西江月·夜行黄沙道中",
    "author": "宋·辛弃疾",
    "image": "polayoutu-yue-00007",
    "content": "明月别枝惊鹊，\n清风半夜鸣蝉。\n稻花香里说丰年，\n听取蛙声一片。 \n七八个星天外，\n两三点雨山前。\n旧时茅店社林边，\n路转溪桥忽见。"
  },
  {
    "title": "声声慢·寻寻觅觅",
    "author": "宋·李清照",
    "image": "polayoutu-00073",
    "content": "寻寻觅觅，冷冷清清，凄凄惨惨戚戚。\n乍暖还寒时候，最难将息。\n三杯两盏淡酒，怎敌他、晚来风急？\n雁过也，正伤心，却是旧时相识。\n满地黄花堆积。憔悴损，如今有谁堪摘？\n守着窗儿，独自怎生得黑？\n梧桐更兼细雨，到黄昏、点点滴滴。\n这次第，怎一个愁字了得！"
  },
  {
    "title": "更漏子·玉炉香",
    "author": "唐·温庭筠",
    "image": "renrenxiaozhan-00011",
    "content": "玉炉香，红蜡泪，\n偏照画堂秋思。\n眉翠薄，鬓云残，\n夜长衾枕寒。\n梧桐树，三更雨，\n不道离情正苦。\n一叶叶，一声声，\n空阶滴到明。"
  },
  {
    "title": "苔",
    "author": "清·袁枚",
    "image": "polayoutu-00074",
    "content": "白日不到处，青春恰自来。\n苔花如米小，亦学牡丹开。"
  },
  {
    "title": "如梦令·常记溪亭日暮",
    "author": "宋·李清照",
    "image": "polayoutu-00075",
    "content": "常记溪亭日暮，\n沉醉不知归路，\n兴尽晚回舟，\n误入藕花深处。\n争渡，争渡，\n惊起一滩鸥鹭。"
  },
  {
    "title": "浣溪沙·一曲新词酒一杯",
    "author": "宋·晏殊",
    "image": "jackeygao-ku-0001",
    "content": "一曲新词酒一杯，\n去年天气旧亭台，\n夕阳西下几时回。\n无可奈何花落去，\n似曾相识燕归来。\n小园香径独徘徊。"
  },
  {
    "title": "虞美人·春花秋月何时了",
    "author": "南唐·李煜",
    "image": "polayoutu-00052",
    "content": "春花秋月何时了？\n往事知多少。\n小楼昨夜又东风，\n故国不堪回首月明中。\n雕栏玉砌应犹在，\n只是朱颜改。\n问君能有几多愁？\n恰似一江春水向东流。"
  },
  {
    "title": "如梦令·谁伴明窗独坐",
    "author": "宋·李清照",
    "image": "polayoutu-00060",
    "content": "谁伴明窗独坐，\n我共影儿俩个。\n灯尽欲眠时，影也把人抛躲。\n无那，无那，\n好个凄凉的我。"
  },
  {
    "title": "清平乐·村居",
    "author": "宋·辛弃疾",
    "image": "polayoutu-00076",
    "content": "茅檐低小，\n溪上青青草。\n醉里吴音相媚好，\n白发谁家翁媪?\n大儿锄豆溪东，\n中儿正织鸡笼。\n最喜小儿亡赖，\n溪头卧剥莲蓬。"
  },
  {
    "title": "秋夕",
    "author": "唐·杜牧",
    "image": "polayoutu-yue-00008",
    "content": "红烛秋光冷画屏，\n轻罗小扇扑流萤。\n天阶夜色凉如水，\n坐看牵牛织女星。"
  },
  {
    "title": "水调歌头",
    "author": "宋·苏轼",
    "image": "polayoutu-yue-00001",
    "content": "明月几时有？把酒问青天。\n不知天上宫阙，今夕是何年？\n我欲乘风归去，又恐琼楼玉宇，高处不胜寒！\n起舞弄清影，何似在人间？ \n转朱阁，低绮户，照无眠。\n不应有恨，何事长向别时圆？\n人有悲欢离合，月有阴晴圆缺，此事古难全。\n但愿人长久，千里共婵娟。"
  },
  {
    "title": "赠刘景文",
    "author": "宋·苏轼",
    "image": "jackeygao-ku-0004",
    "content": "荷尽已无擎雨盖，\n菊残犹有傲霜枝。\n一年好景君须记，\n最是橙黄橘绿时。"
  },
  {
    "title": "秋词",
    "author": "唐·刘禹锡",
    "image": "polayoutu-00035",
    "content": "自古逢秋悲寂寥，\n我言秋日胜春朝。\n晴空一鹤排云上，\n便引诗情到碧霄。"
  },
  {
    "title": "宣州谢朓楼饯别校书叔云",
    "author": "唐·李白",
    "image": "polayoutu-1127-00002",
    "content": "弃我去者，昨日之日不可留。\n乱我心者，今日之日多烦忧。\n长风万里送秋雁，对此可以酣高楼。\n蓬莱文章建安骨，中间小谢又清发。\n俱怀逸兴壮思飞，欲上青天览明月。\n抽刀断水水更流，举杯消愁愁更愁。\n人生在世不称意，明朝散发弄扁舟。"
  },
  {
    "title": "九月九日忆山东兄弟",
    "author": "唐·王维",
    "image": "polayoutu-1127-00009",
    "content": "独在异乡为异客，\n每逢佳节倍思亲。\n遥知兄弟登高处，\n遍插茱萸少一人。"
  },
  {
    "title": "九日齐山登高",
    "author": "唐·杜牧",
    "image": "polayoutu-yue-00002",
    "content": "江涵秋影雁初飞，与客携壶上翠微。\n尘世难逢开口笑，菊花须插满头归。\n但将酩酊酬佳节，不用登临恨落晖。\n古往今来只如此，牛山何必独沾衣？"
  },
  {
    "title": "醉花阴·薄雾浓云愁永昼",
    "author": "宋·李清照",
    "image": "renrenxiaozhan-00004",
    "content": "薄雾浓云愁永昼，\n瑞脑消金兽。\n佳节又重阳，\n玉枕纱厨，\n半夜凉初透。\n\n东篱把酒黄昏后，\n有暗香盈袖。\n莫道不消魂。\n帘卷西风，\n人比黄花瘦。"
  },
  {
    "title": "苏幕遮·怀旧",
    "author": "宋·范仲淹",
    "image": "polayoutu-00077",
    "content": "碧云天，黄叶地，\n秋色连波，波上寒烟翠。\n山映斜阳天接水。\n芳草无情，更在斜阳外。\n黯乡魂，追旅思，\n夜夜除非，好梦留人睡。\n明月楼高休独倚。\n酒入愁肠，化作相思泪。"
  },
  {
    "title": "相见欢·无言独上西楼",
    "author": "南唐·李煜",
    "image": "polayoutu-yue-00010",
    "content": "无言独上西楼，月如钩，\n寂寞梧桐深院锁清秋。\n剪不断，理还乱，\n是离愁，别是一般滋味在心头。"
  },
  {
    "title": "夜雨寄北",
    "author": "唐·李商隐",
    "image": "renrenxiaozhan-00002",
    "content": "君问归期未有期，巴山夜雨涨秋池。\n何当共剪西窗烛，却话巴山夜雨时。"
  },
  {
    "title": "卜算子·黄州定慧院寓居作",
    "author": "宋·苏轼",
    "image": "polayoutu-00001",
    "content": "缺月挂疏桐，漏断人初静。\n时见幽人独往来，缥缈孤鸿影。\n惊起却回头，有恨无人省。\n拣尽寒枝不肯栖，寂寞沙洲冷。"
  },
  {
    "title": "长相思·惜梅",
    "author": "宋·刘克庄",
    "image": "jackeygao-taishan-00001",
    "content": "寒相催。暖相催。\n催了开时催谢时。\n丁宁花放迟。\n角声吹。笛声吹。\n吹了南枝吹北枝。\n明朝成雪飞。"
  },
  {
    "title": "别董大二首",
    "author": "唐·高适",
    "image": "polayoutu-00047",
    "content": "千里黄云白日曛，北风吹雁雪纷纷。\n莫愁前路无知己，天下谁人不识君。\n六翮飘飖私自怜，一离京洛十余年。\n丈夫贫贱应未足，今日相逢无酒钱。"
  },
  {
    "title": "长相思·山一程",
    "author": "清·纳兰性德",
    "image": "polayoutu-00069",
    "content": "山一程，水一程，\n身向榆关那畔行，\n夜深千帐灯。\n风一更，雪一更，\n聒碎乡心梦不成，\n故园无此声。"
  },
  {
    "title": "凉州词·其一",
    "author": "唐·王之涣",
    "image": "polayoutu-00054",
    "content": "黄河远上白云间，一片孤城万仞山。\n羌笛何须怨杨柳，春风不度玉门关。"
  },
  {
    "title": "定风波·南海归赠王定国侍人寓娘",
    "author": "宋·苏轼",
    "image": "renrenxiaozhan-00024",
    "content": "常羡人间琢玉郎，\n天应乞与点酥娘。\n尽道清歌传皓齿，\n风起，雪飞炎海变清凉。\n万里归来颜愈少，\n微笑，笑时犹带岭梅香。\n试问岭南应不好，\n却道：此心安处是吾乡。"
  },
]

/**
* @1900-2100区间内的公历、农历互转
* @charset UTF-8
* @Author  Jea杨(JJonline@JJonline.Cn) 
* @Time    2014-7-21
* @Time    2016-8-13 Fixed 2033hex、Attribution Annals
* @Time    2016-9-25 Fixed lunar LeapMonth Param Bug
* @Time    2017-7-24 Fixed use getTerm Func Param Error.use solar year,NOT lunar year
* @Version 1.0.3
* @公历转农历：calendar.solar2lunar(1987,11,01); //[you can ignore params of prefix 0]
* @农历转公历：calendar.lunar2solar(1987,09,10); //[you can ignore params of prefix 0]
*/
export const calendar = {

  /**
    * 农历1900-2100的润大小信息表
    * @Array Of Property
    * @return Hex 
    */
  lunarInfo: [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,//1900-1909
    0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,//1910-1919
    0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,//1920-1929
    0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,//1930-1939
    0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,//1940-1949
    0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0,//1950-1959
    0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,//1960-1969
    0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6,//1970-1979
    0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,//1980-1989
    0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0,//1990-1999
    0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,//2000-2009
    0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,//2010-2019
    0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,//2020-2029
    0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,//2030-2039
    0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,//2040-2049
    /**Add By JJonline@JJonline.Cn**/
    0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0,//2050-2059
    0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4,//2060-2069
    0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0,//2070-2079
    0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160,//2080-2089
    0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252,//2090-2099
    0x0d520],//2100

  /**
    * 公历每个月份的天数普通表
    * @Array Of Property
    * @return Number 
    */
  solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],

  /**
    * 天干地支之天干速查表
    * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
    * @return Cn string 
    */
  Gan: ["\u7532", "\u4e59", "\u4e19", "\u4e01", "\u620a", "\u5df1", "\u5e9a", "\u8f9b", "\u58ec", "\u7678"],

  /**
    * 天干地支之地支速查表
    * @Array Of Property 
    * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
    * @return Cn string 
    */
  Zhi: ["\u5b50", "\u4e11", "\u5bc5", "\u536f", "\u8fb0", "\u5df3", "\u5348", "\u672a", "\u7533", "\u9149", "\u620c", "\u4ea5"],

  /**
    * 天干地支之地支速查表<=>生肖
    * @Array Of Property 
    * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
    * @return Cn string 
    */
  Animals: ["\u9f20", "\u725b", "\u864e", "\u5154", "\u9f99", "\u86c7", "\u9a6c", "\u7f8a", "\u7334", "\u9e21", "\u72d7", "\u732a"],

  /**
    * 24节气速查表
    * @Array Of Property 
    * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
    * @return Cn string 
    */
  solarTerm: ["\u5c0f\u5bd2", "\u5927\u5bd2", "\u7acb\u6625", "\u96e8\u6c34", "\u60ca\u86f0", "\u6625\u5206", "\u6e05\u660e", "\u8c37\u96e8", "\u7acb\u590f", "\u5c0f\u6ee1", "\u8292\u79cd", "\u590f\u81f3", "\u5c0f\u6691", "\u5927\u6691", "\u7acb\u79cb", "\u5904\u6691", "\u767d\u9732", "\u79cb\u5206", "\u5bd2\u9732", "\u971c\u964d", "\u7acb\u51ac", "\u5c0f\u96ea", "\u5927\u96ea", "\u51ac\u81f3"],

  /**
    * 1900-2100各年的24节气日期速查表
    * @Array Of Property 
    * @return 0x string For splice
    */
  sTermInfo: ['9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f',
    '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
    '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f',
    'b027097bd097c36b0b6fc9274c91aa', '9778397bd19801ec9210c965cc920e', '97b6b97bd19801ec95f8c965cc920f',
    '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd197c36c9210c9274c91aa',
    '97b6b97bd19801ec95f8c965cc920e', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2',
    '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bcf97c3598082c95f8e1cfcc920f',
    '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e',
    '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f',
    '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
    '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd07f595b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9210c8dc2', '9778397bd19801ec9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f',
    '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e',
    '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2',
    '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bd07f1487f595b0b0bc920fb0722',
    '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
    '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
    '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
    '9778397bd097c36b0b6fc9210c91aa', '97b6b97bd197c36c9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e',
    '97b6b7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2',
    '9778397bd097c36b0b70c9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
    '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
    '97b6b7f0e47f531b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
    '9778397bd097c36b0b6fc9210c91aa', '97b6b7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '977837f0e37f149b0723b0787b0721',
    '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c35b0b6fc9210c8dc2',
    '977837f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
    '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd',
    '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
    '977837f0e37f14998082b0723b06bd', '7f07e7f0e37f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721',
    '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5',
    '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f531b0b0bb0b6fb0722',
    '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35',
    '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721',
    '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd',
    '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35',
    '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e37f14998083b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
    '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14898082b0723b02d5', '7f07e7f0e37f14998082b0787b0721',
    '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66aa89801e9808297c35', '665f67f0e37f14898082b0723b02d5',
    '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66a449801e9808297c35',
    '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721', '7f0e26665b66a449801e9808297c35', '665f67f0e37f1489801eb072297c35',
    '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722'],

  /**
    * 数字转中文速查表
    * @Array Of Property 
    * @trans ['日','一','二','三','四','五','六','七','八','九','十']
    * @return Cn string 
    */
  nStr1: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03", "\u516b", "\u4e5d", "\u5341"],

  /**
    * 日期转农历称呼速查表
    * @Array Of Property 
    * @trans ['初','十','廿','卅']
    * @return Cn string 
    */
  nStr2: ["\u521d", "\u5341", "\u5eff", "\u5345"],

  /**
    * 月份转农历称呼速查表
    * @Array Of Property 
    * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
    * @return Cn string 
    */
  nStr3: ["\u6b63", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03", "\u516b", "\u4e5d", "\u5341", "\u51ac", "\u814a"],

  /**
    * 返回农历y年一整年的总天数
    * @param lunar Year
    * @return Number
    * @eg:let count = calendar.lYearDays(1987) ;//count=387
    */
  lYearDays: function (y) {
    let i, sum = 348;
    for (i = 0x8000; i > 0x8; i >>= 1) { sum += (calendar.lunarInfo[y - 1900] & i) ? 1 : 0; }
    return (sum + calendar.leapDays(y));
  },

  /**
    * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
    * @param lunar Year
    * @return Number (0-12)
    * @eg:let leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
    */
  leapMonth: function (y) { //闰字编码 \u95f0
    return (calendar.lunarInfo[y - 1900] & 0xf);
  },

  /**
    * 返回农历y年闰月的天数 若该年没有闰月则返回0
    * @param lunar Year
    * @return Number (0、29、30)
    * @eg:let leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
    */
  leapDays: function (y) {
    if (calendar.leapMonth(y)) {
      return ((calendar.lunarInfo[y - 1900] & 0x10000) ? 30 : 29);
    }
    return (0);
  },

  /**
    * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
    * @param lunar Year
    * @return Number (-1、29、30)
    * @eg:let MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
    */
  monthDays: function (y, m) {
    if (m > 12 || m < 1) { return -1 }//月份参数从1至12，参数错误返回-1
    return ((calendar.lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29);
  },

  /**
    * 返回公历(!)y年m月的天数
    * @param solar Year
    * @return Number (-1、28、29、30、31)
    * @eg:let solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
    */
  solarDays: function (y, m) {
    if (m > 12 || m < 1) { return -1 } //若参数错误 返回-1
    let ms = m - 1;
    if (ms == 1) { //2月份的闰平规律测算后确认返回28或29
      return (((y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0)) ? 29 : 28);
    } else {
      return (calendar.solarMonth[ms]);
    }
  },

  /**
   * 农历年份转换为干支纪年
   * @param  lYear 农历年的年份数
   * @return Cn string
   */
  toGanZhiYear: function (lYear) {
    let ganKey = (lYear - 3) % 10;
    let zhiKey = (lYear - 3) % 12;
    if (ganKey == 0) ganKey = 10;//如果余数为0则为最后一个天干
    if (zhiKey == 0) zhiKey = 12;//如果余数为0则为最后一个地支
    return calendar.Gan[ganKey - 1] + calendar.Zhi[zhiKey - 1];

  },

  /**
   * 公历月、日判断所属星座
   * @param  cMonth [description]
   * @param  cDay [description]
   * @return Cn string
   */
  toAstro: function (cMonth, cDay) {
    let s = "\u9b54\u7faf\u6c34\u74f6\u53cc\u9c7c\u767d\u7f8a\u91d1\u725b\u53cc\u5b50\u5de8\u87f9\u72ee\u5b50\u5904\u5973\u5929\u79e4\u5929\u874e\u5c04\u624b\u9b54\u7faf";
    let arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
    return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "\u5ea7";//座
  },

  /**
    * 传入offset偏移量返回干支
    * @param offset 相对甲子的偏移量
    * @return Cn string
    */
  toGanZhi: function (offset) {
    return calendar.Gan[offset % 10] + calendar.Zhi[offset % 12];
  },

  /**
    * 传入公历(!)y年获得该年第n个节气的公历日期
    * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起 
    * @return day Number
    * @eg:let _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
    */
  getTerm: function (y, n) {
    if (y < 1900 || y > 2100) { return -1; }
    if (n < 1 || n > 24) { return -1; }
    let _table = calendar.sTermInfo[y - 1900];
    let _info = [
      parseInt('0x' + _table.substr(0, 5)).toString(),
      parseInt('0x' + _table.substr(5, 5)).toString(),
      parseInt('0x' + _table.substr(10, 5)).toString(),
      parseInt('0x' + _table.substr(15, 5)).toString(),
      parseInt('0x' + _table.substr(20, 5)).toString(),
      parseInt('0x' + _table.substr(25, 5)).toString()
    ];
    let _calday = [
      _info[0].substr(0, 1),
      _info[0].substr(1, 2),
      _info[0].substr(3, 1),
      _info[0].substr(4, 2),

      _info[1].substr(0, 1),
      _info[1].substr(1, 2),
      _info[1].substr(3, 1),
      _info[1].substr(4, 2),

      _info[2].substr(0, 1),
      _info[2].substr(1, 2),
      _info[2].substr(3, 1),
      _info[2].substr(4, 2),

      _info[3].substr(0, 1),
      _info[3].substr(1, 2),
      _info[3].substr(3, 1),
      _info[3].substr(4, 2),

      _info[4].substr(0, 1),
      _info[4].substr(1, 2),
      _info[4].substr(3, 1),
      _info[4].substr(4, 2),

      _info[5].substr(0, 1),
      _info[5].substr(1, 2),
      _info[5].substr(3, 1),
      _info[5].substr(4, 2),
    ];
    return parseInt(_calday[n - 1]);
  },

  /**
    * 传入农历数字月份返回汉语通俗表示法
    * @param lunar month
    * @return Cn string
    * @eg:let cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
    */
  toChinaMonth: function (m) { // 月 => \u6708
    if (m > 12 || m < 1) { return -1 } //若参数错误 返回-1
    let s = calendar.nStr3[m - 1];
    s += "\u6708";//加上月字
    return s;
  },

  /**
    * 传入农历日期数字返回汉字表示法
    * @param lunar day
    * @return Cn string
    * @eg:let cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
    */
  toChinaDay: function (d) { //日 => \u65e5
    let s;
    switch (d) {
      case 10:
        s = '\u521d\u5341'; break;
      case 20:
        s = '\u4e8c\u5341'; break;
        break;
      case 30:
        s = '\u4e09\u5341'; break;
        break;
      default:
        s = calendar.nStr2[Math.floor(d / 10)];
        s += calendar.nStr1[d % 10];
    }
    return (s);
  },

  /**
    * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
    * @param y year
    * @return Cn string
    * @eg:let animal = calendar.getAnimal(1987) ;//animal='兔'
    */
  getAnimal: function (y) {
    return calendar.Animals[(y - 4) % 12]
  },

  /**
    * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
    * @param y  solar year
    * @param m  solar month
    * @param d  solar day
    * @return JSON object
    * @eg:console.log(calendar.solar2lunar(1987,11,01));
    */
  solar2lunar: function (y, m, d) { //参数区间1900.1.31~2100.12.31
    //年份限定、上限
    if (y < 1900 || y > 2100) {
      return -1;// undefined转换为数字变为NaN
    }
    //公历传参最下限
    if (y == 1900 && m == 1 && d < 31) {
      return -1;
    }
    let objDate = null;
    //未传参  获得当天
    if (!y) {
      objDate = new Date();
    } else {
      objDate = new Date(y, parseInt(m) - 1, d)
    }
    let i, leap = 0, temp = 0;
    //修正ymd参数
    var y = objDate.getFullYear(),
      m = objDate.getMonth() + 1,
      d = objDate.getDate();
    let offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
    for (i = 1900; i < 2101 && offset > 0; i++) {
      temp = calendar.lYearDays(i);
      offset -= temp;
    }
    if (offset < 0) {
      offset += temp; i--;
    }

    //是否今天
    let isTodayObj = new Date(),
      isToday = false;
    if (isTodayObj.getFullYear() == y && isTodayObj.getMonth() + 1 == m && isTodayObj.getDate() == d) {
      isToday = true;
    }
    //星期几
    let nWeek = objDate.getDay(),
      cWeek = calendar.nStr1[nWeek];
    //数字表示周几顺应天朝周一开始的惯例
    if (nWeek == 0) {
      nWeek = 7;
    }
    //农历年
    let year = i;
    leap = calendar.leapMonth(i); //闰哪个月
    let isLeap = false;

    //效验闰月
    for (i = 1; i < 13 && offset > 0; i++) {
      //闰月
      if (leap > 0 && i == (leap + 1) && isLeap == false) {
        --i;
        isLeap = true; temp = calendar.leapDays(year); //计算农历闰月天数
      }
      else {
        temp = calendar.monthDays(year, i);//计算农历普通月天数
      }
      //解除闰月
      if (isLeap == true && i == (leap + 1)) { isLeap = false; }
      offset -= temp;
    }
    // 闰月导致数组下标重叠取反
    if (offset == 0 && leap > 0 && i == leap + 1) {
      if (isLeap) {
        isLeap = false;
      } else {
        isLeap = true; --i;
      }
    }
    if (offset < 0) {
      offset += temp; --i;
    }
    //农历月
    let month = i;
    //农历日
    let day = offset + 1;
    //天干地支处理
    let sm = m - 1;
    let gzY = calendar.toGanZhiYear(year);

    // 当月的两个节气
    // bugfix-2017-7-24 11:03:38 use lunar Year Param `y` Not `year`
    let firstNode = calendar.getTerm(y, (m * 2 - 1));//返回当月「节」为几日开始
    let secondNode = calendar.getTerm(y, (m * 2));//返回当月「节」为几日开始

    // 依据12节气修正干支月
    let gzM = calendar.toGanZhi((y - 1900) * 12 + m + 11);
    if (d >= firstNode) {
      gzM = calendar.toGanZhi((y - 1900) * 12 + m + 12);
    }

    //传入的日期的节气与否
    let isTerm = false;
    let Term = null;
    if (firstNode == d) {
      isTerm = true;
      Term = calendar.solarTerm[m * 2 - 2];
    }
    if (secondNode == d) {
      isTerm = true;
      Term = calendar.solarTerm[m * 2 - 1];
    }
    //日柱 当月一日与 1900/1/1 相差天数
    let dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
    let gzD = calendar.toGanZhi(dayCyclical + d - 1);
    //该日期所属的星座
    let astro = calendar.toAstro(m, d);

    return { 'lYear': year, 'lMonth': month, 'lDay': day, 'Animal': calendar.getAnimal(year), 'IMonthCn': (isLeap ? "\u95f0" : '') + calendar.toChinaMonth(month), 'IDayCn': calendar.toChinaDay(day), 'cYear': y, 'cMonth': m, 'cDay': d, 'gzYear': gzY, 'gzMonth': gzM, 'gzDay': gzD, 'isToday': isToday, 'isLeap': isLeap, 'nWeek': nWeek, 'ncWeek': "\u661f\u671f" + cWeek, 'isTerm': isTerm, 'Term': Term, 'astro': astro };
  },

  /**
    * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
    * @param y  lunar year
    * @param m  lunar month
    * @param d  lunar day
    * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
    * @return JSON object
    * @eg:console.log(calendar.lunar2solar(1987,9,10));
    */
  lunar2solar: function (y, m, d, isLeapMonth) {   //参数区间1900.1.31~2100.12.1
    isLeapMonth = !!isLeapMonth;
    let leapOffset = 0;
    let leapMonth = calendar.leapMonth(y);
    let leapDay = calendar.leapDays(y);
    if (isLeapMonth && (leapMonth != m)) { return -1; }//传参要求计算该闰月公历 但该年得出的闰月与传参的月份并不同
    if (y == 2100 && m == 12 && d > 1 || y == 1900 && m == 1 && d < 31) { return -1; }//超出了最大极限值 
    let day = calendar.monthDays(y, m);
    let _day = day;
    //bugFix 2016-9-25 
    //if month is leap, _day use leapDays method 
    if (isLeapMonth) {
      _day = calendar.leapDays(y, m);
    }
    if (y < 1900 || y > 2100 || d > _day) { return -1; }//参数合法性效验

    //计算农历的时间差
    let offset = 0;
    for (let i = 1900; i < y; i++) {
      offset += calendar.lYearDays(i);
    }
    let leap = 0, isAdd = false;
    for (let i = 1; i < m; i++) {
      leap = calendar.leapMonth(y);
      if (!isAdd) {//处理闰月
        if (leap <= i && leap > 0) {
          offset += calendar.leapDays(y); isAdd = true;
        }
      }
      offset += calendar.monthDays(y, i);
    }
    //转换闰月农历 需补充该年闰月的前一个月的时差
    if (isLeapMonth) { offset += day; }
    //1900年农历正月一日的公历时间为1900年1月30日0时0分0秒(该时间也是本农历的最开始起始点)
    let stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
    let calObj = new Date((offset + d - 31) * 86400000 + stmap);
    let cY = calObj.getUTCFullYear();
    let cM = calObj.getUTCMonth() + 1;
    let cD = calObj.getUTCDate();

    return calendar.solar2lunar(cY, cM, cD);
  }
};

// 周历图片
export const images = {
  "new-year": {
    "src": "new-year.jpg",
    "link": "#",
    "author": "互联网"
  },
  "renrenxiaozhan-00044": {
    "src": "renrenxiaozhan-00044.gif",
    "link": "http://zhan.renren.com/chinastyle?checked=true",
    "author": "人人小站"
  },
  "polayoutu-00042": {
    "src": "polayoutu-00042.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00043": {
    "src": "polayoutu-00043.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00040": {
    "src": "polayoutu-00040.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00041": {
    "src": "polayoutu-00041.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00046": {
    "src": "polayoutu-00046.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00047": {
    "src": "polayoutu-00047.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00044": {
    "src": "polayoutu-00044.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00045": {
    "src": "polayoutu-00045.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00048": {
    "src": "polayoutu-00048.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00049": {
    "src": "polayoutu-00049.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00037": {
    "src": "polayoutu-00037.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00036": {
    "src": "polayoutu-00036.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00035": {
    "src": "polayoutu-00035.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00034": {
    "src": "polayoutu-00034.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00033": {
    "src": "polayoutu-00033.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00032": {
    "src": "polayoutu-00032.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00031": {
    "src": "polayoutu-00031.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00030": {
    "src": "polayoutu-00030.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00039": {
    "src": "polayoutu-00039.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00038": {
    "src": "polayoutu-00038.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-1127-00014": {
    "src": "polayoutu-1127-00014.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-1127-00010": {
    "src": "polayoutu-1127-00010.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-1127-00011": {
    "src": "polayoutu-1127-00011.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-1127-00012": {
    "src": "polayoutu-1127-00012.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-1127-00013": {
    "src": "polayoutu-1127-00013.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "renrenxiaozhan-00004": {
    "src": "renrenxiaozhan-00004.jpg",
    "link": "http://zhan.renren.com/chinastyle?checked=true",
    "author": "人人小站"
  },
  "polayoutu-00024": {
    "src": "polayoutu-00024.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00025": {
    "src": "polayoutu-00025.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00026": {
    "src": "polayoutu-00026.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00027": {
    "src": "polayoutu-00027.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00020": {
    "src": "polayoutu-00020.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00021": {
    "src": "polayoutu-00021.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00022": {
    "src": "polayoutu-00022.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00023": {
    "src": "polayoutu-00023.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00028": {
    "src": "polayoutu-00028.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00029": {
    "src": "polayoutu-00029.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-1127-00007": {
    "src": "polayoutu-1127-00007.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-1127-00006": {
    "src": "polayoutu-1127-00006.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-1127-00005": {
    "src": "polayoutu-1127-00005.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-1127-00004": {
    "src": "polayoutu-1127-00004.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-1127-00003": {
    "src": "polayoutu-1127-00003.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-1127-00002": {
    "src": "polayoutu-1127-00002.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-1127-00001": {
    "src": "polayoutu-1127-00001.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-1127-00009": {
    "src": "polayoutu-1127-00009.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-1127-00008": {
    "src": "polayoutu-1127-00008.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "renrenxiaozhan-00011": {
    "src": "renrenxiaozhan-00011.jpg",
    "link": "http://zhan.renren.com/chinastyle?checked=true",
    "author": "人人小站"
  },
  "renrenxiaozhan-00018": {
    "src": "renrenxiaozhan-00018.jpg",
    "link": "http://zhan.renren.com/chinastyle?checked=true",
    "author": "人人小站"
  },
  "polayoutu-00011": {
    "src": "polayoutu-00011.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00010": {
    "src": "polayoutu-00010.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00013": {
    "src": "polayoutu-00013.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00012": {
    "src": "polayoutu-00012.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00015": {
    "src": "polayoutu-00015.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00014": {
    "src": "polayoutu-00014.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00017": {
    "src": "polayoutu-00017.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00016": {
    "src": "polayoutu-00016.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00019": {
    "src": "polayoutu-00019.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00018": {
    "src": "polayoutu-00018.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-yue-00010": {
    "src": "polayoutu-yue-00010.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "renrenxiaozhan-00002": {
    "src": "renrenxiaozhan-00002.jpg",
    "link": "http://zhan.renren.com/chinastyle?checked=true",
    "author": "人人小站"
  },
  "polayoutu-00008": {
    "src": "polayoutu-00008.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00009": {
    "src": "polayoutu-00009.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00006": {
    "src": "polayoutu-00006.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00007": {
    "src": "polayoutu-00007.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00004": {
    "src": "polayoutu-00004.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00005": {
    "src": "polayoutu-00005.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00002": {
    "src": "polayoutu-00002.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00003": {
    "src": "polayoutu-00003.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00001": {
    "src": "polayoutu-00001.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-yue-00002": {
    "src": "polayoutu-yue-00002.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-yue-00003": {
    "src": "polayoutu-yue-00003.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-yue-00001": {
    "src": "polayoutu-yue-00001.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-yue-00006": {
    "src": "polayoutu-yue-00006.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-yue-00007": {
    "src": "polayoutu-yue-00007.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-yue-00004": {
    "src": "polayoutu-yue-00004.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-yue-00005": {
    "src": "polayoutu-yue-00005.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-yue-00008": {
    "src": "polayoutu-yue-00008.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-yue-00009": {
    "src": "polayoutu-yue-00009.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "jackeygao-ku-0001": {
    "src": "jackeygao-ku-0001.jpg",
    "link": "https://jackeygao.io",
    "author": "JackeyGao"
  },
  "renrenxiaozhan-00037": {
    "src": "renrenxiaozhan-00037.jpg",
    "link": "http://zhan.renren.com/chinastyle?checked=true",
    "author": "人人小站"
  },
  "jackeygao-ku-0003": {
    "src": "jackeygao-ku-0003.jpg",
    "link": "https://jackeygao.io",
    "author": "JackeyGao"
  },
  "jackeygao-ku-0002": {
    "src": "jackeygao-ku-0002.jpg",
    "link": "https://jackeygao.io",
    "author": "JackeyGao"
  },
  "jackeygao-ku-0005": {
    "src": "jackeygao-ku-0005.jpg",
    "link": "https://jackeygao.io",
    "author": "JackeyGao"
  },
  "jackeygao-ku-0004": {
    "src": "jackeygao-ku-0004.jpg",
    "link": "https://jackeygao.io",
    "author": "JackeyGao"
  },
  "polayoutu-00068": {
    "src": "polayoutu-00068.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00069": {
    "src": "polayoutu-00069.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00070": {
    "src": "polayoutu-00070.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00071": {
    "src": "polayoutu-00071.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00072": {
    "src": "polayoutu-00072.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00073": {
    "src": "polayoutu-00073.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00074": {
    "src": "polayoutu-00074.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00075": {
    "src": "polayoutu-00075.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00076": {
    "src": "polayoutu-00076.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00077": {
    "src": "polayoutu-00077.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00078": {
    "src": "polayoutu-00078.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00060": {
    "src": "polayoutu-00060.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00061": {
    "src": "polayoutu-00061.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00062": {
    "src": "polayoutu-00062.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00063": {
    "src": "polayoutu-00063.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00064": {
    "src": "polayoutu-00064.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00065": {
    "src": "polayoutu-00065.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00066": {
    "src": "polayoutu-00066.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00067": {
    "src": "polayoutu-00067.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "renrenxiaozhan-00024": {
    "src": "renrenxiaozhan-00024.jpg",
    "link": "http://zhan.renren.com/chinastyle?checked=true",
    "author": "人人小站"
  },
  "renrenxiaozhan-00026": {
    "src": "renrenxiaozhan-00026.jpg",
    "link": "http://zhan.renren.com/chinastyle?checked=true",
    "author": "人人小站"
  },
  "renrenxiaozhan-00008": {
    "src": "renrenxiaozhan-00008.jpg",
    "link": "http://zhan.renren.com/chinastyle?checked=true",
    "author": "人人小站"
  },
  "polayoutu-00055": {
    "src": "polayoutu-00055.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00054": {
    "src": "polayoutu-00054.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00057": {
    "src": "polayoutu-00057.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00056": {
    "src": "polayoutu-00056.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00051": {
    "src": "polayoutu-00051.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00050": {
    "src": "polayoutu-00050.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00053": {
    "src": "polayoutu-00053.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00052": {
    "src": "polayoutu-00052.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00059": {
    "src": "polayoutu-00059.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "polayoutu-00058": {
    "src": "polayoutu-00058.jpg",
    "link": "http://www.polayoutu.com/collections",
    "author": "泼辣有图"
  },
  "jackeygao-taishan-00003": {
    "src": "jackeygao-taishan-00003.jpg",
    "link": "https://jackeygao.io",
    "author": "JackeyGao"
  },
  "jackeygao-taishan-00002": {
    "src": "jackeygao-taishan-00002.jpg",
    "link": "https://jackeygao.io",
    "author": "JackeyGao"
  },
  "jackeygao-taishan-00001": {
    "src": "jackeygao-taishan-00001.jpg",
    "link": "https://jackeygao.io",
    "author": "JackeyGao"
  },
  "jackeygao-taishan-00006": {
    "src": "jackeygao-taishan-00006.jpg",
    "link": "https://jackeygao.io",
    "author": "JackeyGao"
  },
  "jackeygao-taishan-00005": {
    "src": "jackeygao-taishan-00005.jpg",
    "link": "https://jackeygao.io",
    "author": "JackeyGao"
  },
  "jackeygao-taishan-00004": {
    "src": "jackeygao-taishan-00004.jpg",
    "link": "https://jackeygao.io",
    "author": "JackeyGao"
  }
}

// 周历诗词
export const poetrys = [
  {
    "title": "江南曲",
    "notes": [],
    "author": "李益",
    "paragraphs": [
      "嫁得瞿塘贾，朝朝误妾期。",
      "早知潮有信，嫁与弄潮儿。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "感遇·江南有丹橘",
    "notes": [],
    "author": "张九龄",
    "paragraphs": [
      "江南有丹橘，经冬犹绿林。",
      "岂伊地气暖？自有岁寒心。",
      "可以荐嘉客，奈何阻重深。",
      "运命惟所遇，循环不可寻。",
      "徒言树桃李，此木岂无阴？"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "终南望余雪",
    "notes": [],
    "author": "祖咏",
    "paragraphs": [
      "终南阴岭秀，积雪浮云端。",
      "林表明霁色，城中增暮寒。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "下终南山过斛斯山人宿置酒",
    "notes": [],
    "author": "李白",
    "paragraphs": [
      "暮从碧山下，山月随人归。",
      "却顾所来径，苍苍横翠微。",
      "相携及田家，童稚开荆扉。",
      "绿竹入幽径，青萝拂行衣。",
      "欢言得所憩，美酒聊共挥。",
      "长歌吟松风，曲尽河星稀。",
      "我醉君复乐，陶然共忘机。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "宫词·故国三千里",
    "notes": [],
    "author": "张祜",
    "paragraphs": [
      "故国三千里，深宫二十年。",
      "一声何满子，双泪落君前。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "琵琶行 / 琵琶引",
    "notes": [
      "不得志--一作 ：不得意",
      "六幺--一作 ：绿腰",
      "暂歇--一作 ：渐歇",
      "银篦--一作 ：云篦"
    ],
    "author": "白居易",
    "paragraphs": [
      "元和十年，予左迁九江郡司马。明年秋，送客湓浦口，闻舟中夜弹琵琶者，听其音，铮铮然有京都声。问其人，本长安倡女，尝学琵琶于穆、曹二善才，年长色衰，委身为贾人妇。遂命酒，使快弹数曲。曲罢悯然，自叙少小时欢乐事，今漂沦憔悴，转徙于江湖间。予出官二年，恬然自安，感斯人言，是夕始觉有迁谪意。因为长句，歌以赠之，凡六百一十六言，命曰《琵琶行》。",
      "",
      "浔阳江头夜送客，枫叶荻花秋瑟瑟。",
      "主人下马客在船，举酒欲饮无管弦。",
      "醉不成欢惨将别，别时茫茫江浸月。",
      "忽闻水上琵琶声，主人忘归客不发。",
      "寻声暗问弹者谁？琵琶声停欲语迟。",
      "移船相近邀相见，添酒回灯重开宴。",
      "千呼万唤始出来，犹抱琵琶半遮面。",
      "转轴拨弦三两声，未成曲调先有情。",
      "弦弦掩抑声声思，似诉平生不得志。",
      "低眉信手续续弹，说尽心中无限事。",
      "轻拢慢捻抹复挑，初为霓裳后六幺。",
      "大弦嘈嘈如急雨，小弦切切如私语。",
      "嘈嘈切切错杂弹，大珠小珠落玉盘。",
      "间关莺语花底滑，幽咽泉流冰下难。",
      "冰泉冷涩弦凝绝，凝绝不通声暂歇。",
      "别有幽愁暗恨生，此时无声胜有声。",
      "银瓶乍破水浆迸，铁骑突出刀枪鸣。",
      "曲终收拨当心画，四弦一声如裂帛。",
      "东船西舫悄无言，唯见江心秋月白。",
      "沉吟放拨插弦中，整顿衣裳起敛容。",
      "自言本是京城女，家在虾蟆陵下住。",
      "十三学得琵琶成，名属教坊第一部。",
      "曲罢曾教善才服，妆成每被秋娘妒。",
      "五陵年少争缠头，一曲红绡不知数。",
      "钿头银篦击节碎，血色罗裙翻酒污。",
      "今年欢笑复明年，秋月春风等闲度。",
      "弟走从军阿姨死，暮去朝来颜色故。",
      "门前冷落鞍马稀，老大嫁作商人妇。",
      "商人重利轻别离，前月浮梁买茶去。",
      "去来江口守空船，绕船月明江水寒。",
      "夜深忽梦少年事，梦啼妆泪红阑干。",
      "我闻琵琶已叹息，又闻此语重唧唧。",
      "同是天涯沦落人，相逢何必曾相识！",
      "我从去年辞帝京，谪居卧病浔阳城。",
      "浔阳地僻无音乐，终岁不闻丝竹声。",
      "住近湓江地低湿，黄芦苦竹绕宅生。",
      "其间旦暮闻何物？杜鹃啼血猿哀鸣。",
      "春江花朝秋月夜，往往取酒还独倾。",
      "岂无山歌与村笛？呕哑嘲哳难为听。",
      "今夜闻君琵琶语，如听仙乐耳暂明。",
      "莫辞更坐弹一曲，为君翻作《琵琶行》。",
      "感我此言良久立，却坐促弦弦转急。",
      "凄凄不似向前声，满座重闻皆掩泣。",
      "座中泣下谁最多？江州司马青衫湿。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "无题·昨夜星辰昨夜风",
    "notes": [],
    "author": "李商隐",
    "paragraphs": [
      "昨夜星辰昨夜风，画楼西畔桂堂东。",
      "身无彩凤双飞翼，心有灵犀一点通。",
      "隔座送钩春酒暖，分曹射覆蜡灯红。",
      "嗟余听鼓应官去，走马兰台类转蓬。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "梦游天姥吟留别 / 梦游天姥山别东鲁诸公",
    "notes": [
      "四万--一作 ：一万",
      "度--通 ：渡"
    ],
    "author": "李白",
    "paragraphs": [
      "海客谈瀛洲，烟涛微茫信难求；",
      "越人语天姥，云霞明灭或可睹。",
      "天姥连天向天横，势拔五岳掩赤城。",
      "天台四万八千丈，对此欲倒东南倾。",
      "我欲因之梦吴越，一夜飞度镜湖月。",
      "湖月照我影，送我至剡溪。",
      "谢公宿处今尚在，渌水荡漾清猿啼。",
      "脚著谢公屐，身登青云梯。",
      "半壁见海日，空中闻天鸡。",
      "千岩万转路不定，迷花倚石忽已暝。",
      "熊咆龙吟殷岩泉，栗深林兮惊层巅。",
      "云青青兮欲雨，水澹澹兮生烟。",
      "列缺霹雳，丘峦崩摧。",
      "洞天石扉，訇然中开。",
      "青冥浩荡不见底，日月照耀金银台。",
      "霓为衣兮风为马，云之君兮纷纷而来下。",
      "虎鼓瑟兮鸾回车，仙之人兮列如麻。",
      "忽魂悸以魄动，恍惊起而长嗟。",
      "惟觉时之枕席，失向来之烟霞。",
      "世间行乐亦如此，古来万事东流水。",
      "别君去兮何时还？且放白鹿青崖间，须行即骑访名山。",
      "安能摧眉折腰事权贵，使我不得开心颜!"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "老将行",
    "notes": [],
    "author": "王维",
    "paragraphs": [
      "少年十五二十时，步行夺得胡马骑。",
      "射杀山中白额虎，肯数邺下黄须儿！",
      "一身转战三千里，一剑曾当百万师。",
      "汉兵奋迅如霹雳，虏骑崩腾畏蒺藜。",
      "卫青不败由天幸，李广无功缘数奇。",
      "自从弃置便衰朽，世事蹉跎成白首。",
      "昔时飞箭无全目，今日垂杨生左肘。",
      "路旁时卖故侯瓜，门前学种先生柳。",
      "苍茫古木连穷巷，寥落寒山对虚牖。",
      "誓令疏勒出飞泉，不似颍川空使酒。",
      "贺兰山下阵如云，羽檄交驰日夕闻。",
      "节使三河募年少，诏书五道出将军。",
      "试拂铁衣如雪色，聊持宝剑动星文。",
      "愿得燕弓射大将，耻令越甲鸣吾君。",
      "莫嫌旧日云中守，犹堪一战取功勋。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "杂诗三首·其三",
    "notes": [],
    "author": "沈佺期",
    "paragraphs": [
      "闻道黄龙戍，频年不解兵。",
      "可怜闺里月，长在汉家营。",
      "少妇今春意，良人昨夜情。",
      "谁能将旗鼓，一为取龙城。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "新年作",
    "notes": [],
    "author": "刘长卿",
    "paragraphs": [
      "乡心新岁切，天畔独潸然。",
      "老至居人下，春归在客先。",
      "岭猿同旦暮，江柳共风烟。",
      "已似长沙傅，从今又几年。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "送梓州李使君",
    "notes": [],
    "author": "王维",
    "paragraphs": [
      "万壑树参天，千山响杜鹃。",
      "山中一夜雨，树杪百重泉。",
      "汉女输橦布，巴人讼芋田。",
      "文翁翻教授，不敢倚先贤。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "长恨歌",
    "notes": [
      "花开日--一作 ：花开夜",
      "南内--一作 ：南苑",
      "阑--通 ：栏",
      "飘飘--一作 ：飘飖"
    ],
    "author": "白居易",
    "paragraphs": [
      "汉皇重色思倾国，御宇多年求不得。",
      "杨家有女初长成，养在深闺人未识。",
      "天生丽质难自弃，一朝选在君王侧。",
      "回眸一笑百媚生，六宫粉黛无颜色。",
      "春寒赐浴华清池，温泉水滑洗凝脂。",
      "侍儿扶起娇无力，始是新承恩泽时。",
      "云鬓花颜金步摇，芙蓉帐暖度春宵。",
      "春宵苦短日高起，从此君王不早朝。",
      "",
      "承欢侍宴无闲暇，春从春游夜专夜。",
      "后宫佳丽三千人，三千宠爱在一身。",
      "金屋妆成娇侍夜，玉楼宴罢醉和春。",
      "姊妹弟兄皆列土，可怜光彩生门户。",
      "遂令天下父母心，不重生男重生女。",
      "骊宫高处入青云，仙乐风飘处处闻。",
      "缓歌慢舞凝丝竹，尽日君王看不足。",
      "渔阳鼙鼓动地来，惊破霓裳羽衣曲。",
      "",
      "九重城阙烟尘生，千乘万骑西南行。",
      "翠华摇摇行复止，西出都门百余里。",
      "六军不发无奈何，宛转蛾眉马前死。",
      "花钿委地无人收，翠翘金雀玉搔头。",
      "君王掩面救不得，回看血泪相和流。",
      "黄埃散漫风萧索，云栈萦纡登剑阁。",
      "峨嵋山下少人行，旌旗无光日色薄。",
      "蜀江水碧蜀山青，圣主朝朝暮暮情。",
      "",
      "行宫见月伤心色，夜雨闻铃肠断声。",
      "天旋地转回龙驭，到此踌躇不能去。",
      "马嵬坡下泥土中，不见玉颜空死处。",
      "君臣相顾尽沾衣，东望都门信马归。",
      "归来池苑皆依旧，太液芙蓉未央柳。",
      "芙蓉如面柳如眉，对此如何不泪垂。",
      "春风桃李花开日，秋雨梧桐叶落时。",
      "西宫南内多秋草，落叶满阶红不扫。",
      "",
      "梨园弟子白发新，椒房阿监青娥老。",
      "夕殿萤飞思悄然，孤灯挑尽未成眠。",
      "迟迟钟鼓初长夜，耿耿星河欲曙天。",
      "鸳鸯瓦冷霜华重，翡翠衾寒谁与共。",
      "悠悠生死别经年，魂魄不曾来入梦。",
      "临邛道士鸿都客，能以精诚致魂魄。",
      "为感君王辗转思，遂教方士殷勤觅。",
      "排空驭气奔如电，升天入地求之遍。",
      "",
      "上穷碧落下黄泉，两处茫茫皆不见。",
      "忽闻海上有仙山，山在虚无缥渺间。",
      "楼阁玲珑五云起，其中绰约多仙子。",
      "中有一人字太真，雪肤花貌参差是。",
      "金阙西厢叩玉扃，转教小玉报双成。",
      "闻道汉家天子使，九华帐里梦魂惊。",
      "揽衣推枕起徘徊，珠箔银屏迤逦开。",
      "云鬓半偏新睡觉，花冠不整下堂来。",
      "",
      "风吹仙袂飘飘举，犹似霓裳羽衣舞。",
      "玉容寂寞泪阑干，梨花一枝春带雨。",
      "含情凝睇谢君王，一别音容两渺茫。",
      "昭阳殿里恩爱绝，蓬莱宫中日月长。",
      "回头下望人寰处，不见长安见尘雾。",
      "惟将旧物表深情，钿合金钗寄将去。",
      "钗留一股合一扇，钗擘黄金合分钿。",
      "但教心似金钿坚，天上人间会相见。",
      "",
      "临别殷勤重寄词，词中有誓两心知。",
      "七月七日长生殿，夜半无人私语时。",
      "在天愿作比翼鸟，在地愿为连理枝。",
      "天长地久有时尽，此恨绵绵无绝期。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "隋宫",
    "notes": [],
    "author": "李商隐",
    "paragraphs": [
      "紫泉宫殿锁烟霞，欲取芜城作帝家。",
      "玉玺不缘归日角，锦帆应是到天涯。",
      "于今腐草无萤火，终古垂杨有暮鸦。",
      "地下若逢陈后主，岂宜重问后庭花。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "宿王昌龄隐居",
    "notes": [],
    "author": "常建",
    "paragraphs": [
      "清溪深不测，隐处唯孤云。",
      "松际露微月，清光犹为君。",
      "茅亭宿花影，药院滋苔纹。",
      "余亦谢时去，西山鸾鹤群。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "丹青引赠曹将军霸",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "将军魏武之子孙，于今为庶为清门。",
      "英雄割据虽已矣，文采风流今尚存。",
      "学书初学卫夫人，但恨无过王右军。",
      "丹青不知老将至，富贵于我如浮云。",
      "开元之中常引见，承恩数上南薰殿。",
      "凌烟功臣少颜色，将军下笔开生面。",
      "良相头上进贤冠，猛将腰间大羽箭。",
      "褒公鄂公毛发动，英姿飒爽来酣战。",
      "先帝御马五花骢，画工如山貌不同。",
      "是日牵来赤墀下，迥立阊阖生长风。",
      "诏谓将军拂绢素，意匠惨澹经营中。",
      "斯须九重真龙出，一洗万古凡马空。",
      "玉花却在御榻上，榻上庭前屹相向。",
      "至尊含笑催赐金，圉人太仆皆惆怅。",
      "弟子韩干早入室，亦能画马穷殊相。",
      "干惟画肉不画骨，忍使骅骝气凋丧。",
      "将军画善盖有神，必逢佳士亦写真。",
      "即今漂泊干戈际，屡貌寻常行路人。",
      "途穷反遭俗眼白，世上未有如公贫。",
      "但看古来盛名下，终日坎壈缠其身。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "题金陵渡",
    "notes": [],
    "author": "张祜",
    "paragraphs": [
      "金陵津渡小山楼，一宿行人自可愁。",
      "潮落夜江斜月里，两三星火是瓜州。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "隋宫",
    "notes": [],
    "author": "李商隐",
    "paragraphs": [
      "乘兴南游不戒严，九重谁省谏书函。",
      "春风举国裁宫锦，半作障泥半作帆。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "行经华阴",
    "notes": [
      "何--一作 ：无"
    ],
    "author": "崔颢",
    "paragraphs": [
      "岧峣太华俯咸京，天外三峰削不成。",
      "武帝祠前云欲散，仙人掌上雨初晴。",
      "河山北枕秦关险，驿路西连汉畤平。",
      "借问路傍名利客，何如此处学长生。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "旅宿",
    "notes": [],
    "author": "杜牧",
    "paragraphs": [
      "旅馆无良伴，凝情自悄然。",
      "寒灯思旧事，断雁警愁眠。",
      "远梦归侵晓，家书到隔年。",
      "沧江好烟月，门系钓鱼船。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "望蓟门",
    "notes": [
      "笳鼓--一作 ：箫鼓"
    ],
    "author": "祖咏",
    "paragraphs": [
      "燕台一望客心惊，笳鼓喧喧汉将营。",
      "万里寒光生积雪，三边曙色动危旌。",
      "沙场烽火侵胡月，海畔云山拥蓟城。",
      "少小虽非投笔吏，论功还欲请长缨。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "秋夜寄邱员外 / 秋夜寄丘二十二员外",
    "notes": [],
    "author": "韦应物",
    "paragraphs": [
      "怀君属秋夜，散步咏凉天。",
      "空山松子落，幽人应未眠。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "早发白帝城 / 白帝下江陵",
    "notes": [],
    "author": "李白",
    "paragraphs": [
      "朝辞白帝彩云间，千里江陵一日还。",
      "两岸猿声啼不住，轻舟已过万重山。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "落花",
    "notes": [],
    "author": "李商隐",
    "paragraphs": [
      "高阁客竟去，小园花乱飞。参差连曲陌，迢递送斜晖。",
      "肠断未忍扫，眼穿仍欲归。芳心向春尽，所得是沾衣。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "逢入京使",
    "notes": [],
    "author": "岑参",
    "paragraphs": [
      "故园东望路漫漫，双袖龙钟泪不干。",
      "马上相逢无纸笔，凭君传语报平安。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "春怨 / 伊州歌",
    "notes": [],
    "author": "金昌绪",
    "paragraphs": [
      "打起黄莺儿，莫教枝上啼。",
      "啼时惊妾梦，不得到辽西。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "送元二使安西 / 渭城曲",
    "notes": [
      "客舍青青柳色新--一作 ：客舍依依杨柳春"
    ],
    "author": "王维",
    "paragraphs": [
      "渭城朝雨浥轻尘，客舍青青柳色新。",
      "劝君更尽一杯酒，西出阳关无故人。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "梦李白二首·其二",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "浮云终日行，游子久不至。",
      "三夜频梦君，情亲见君意。",
      "告归常局促，苦道来不易。",
      "江湖多风波，舟楫恐失坠。",
      "出门搔白首，若负平生志。",
      "冠盖满京华，斯人独憔悴。",
      "孰云网恢恢，将老身反累。",
      "千秋万岁名，寂寞身后事。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "与高适薛据同登慈恩寺浮图",
    "notes": [
      "凑--一作 ：走",
      "似--一作 ：如",
      "馆--一作 ：观"
    ],
    "author": "岑参",
    "paragraphs": [
      "塔势如涌出，孤高耸天宫。",
      "登临出世界，磴道盘虚空。",
      "突兀压神州，峥嵘如鬼工。",
      "四角碍白日，七层摩苍穹。",
      "下窥指高鸟，俯听闻惊风。",
      "连山若波涛，奔凑似朝东。",
      "青槐夹驰道，宫馆何玲珑。",
      "秋色从西来，苍然满关中。",
      "五陵北原上，万古青濛濛。",
      "净理了可悟，胜因夙所宗。",
      "誓将挂冠去，觉道资无穷。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "奉济驿重送严公四韵",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "远送从此别，青山空复情。几时杯重把，昨夜月同行。",
      "列郡讴歌惜，三朝出入荣。江村独归处，寂寞养残生。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "金陵酒肆留别",
    "notes": [
      "劝客--一作 ：唤客"
    ],
    "author": "李白",
    "paragraphs": [
      "风吹柳花满店香，吴姬压酒唤客尝。",
      "金陵子弟来相送，欲行不行各尽觞。",
      "请君试问东流水，别意与之谁短长。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "游子吟",
    "notes": [],
    "author": "孟郊",
    "paragraphs": [
      "慈母手中线，游子身上衣。",
      "临行密密缝，意恐迟迟归。",
      "谁言寸草心，报得三春晖。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "清平调·其一",
    "notes": [],
    "author": "李白",
    "paragraphs": [
      "云想衣裳花想容，春风拂槛露华浓。",
      "若非群玉山头见，会向瑶台月下逢。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "锦瑟",
    "notes": [],
    "author": "李商隐",
    "paragraphs": [
      "锦瑟无端五十弦，一弦一柱思华年。",
      "庄生晓梦迷蝴蝶，望帝春心托杜鹃。",
      "沧海月明珠有泪，蓝田日暖玉生烟。",
      "此情可待成追忆，只是当时已惘然。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "无题·相见时难别亦难",
    "notes": [
      "蓬山--一作 ：蓬莱"
    ],
    "author": "李商隐",
    "paragraphs": [
      "相见时难别亦难，东风无力百花残。",
      "春蚕到死丝方尽，蜡炬成灰泪始干。",
      "晓镜但愁云鬓改，夜吟应觉月光寒。",
      "蓬山此去无多路，青鸟殷勤为探看。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "古意",
    "notes": [],
    "author": "李颀",
    "paragraphs": [
      "男儿事长征，少小幽燕客。",
      "赌胜马蹄下，由来轻七尺。",
      "杀人莫敢前，须如猬毛磔。",
      "黄云陇底白云飞，未得报恩不能归。",
      "辽东小妇年十五，惯弹琵琶解歌舞。",
      "今为羌笛出塞声，使我三军泪如雨。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "西塞山怀古",
    "notes": [],
    "author": "刘禹锡",
    "paragraphs": [
      "王濬楼船下益州，金陵王气黯然收。",
      "千寻铁锁沉江底，一片降幡出石头。",
      "人世几回伤往事，山形依旧枕寒流。",
      "今逢四海为家日，故垒萧萧芦荻秋。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "听蜀僧濬弹琴 / 听蜀僧浚弹琴",
    "notes": [],
    "author": "李白",
    "paragraphs": [
      "蜀僧抱绿绮，西下峨眉峰。",
      "为我一挥手，如听万壑松。",
      "客心洗流水，余响入霜钟。",
      "不觉碧山暮，秋云暗几重。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "筹笔驿",
    "notes": [],
    "author": "李商隐",
    "paragraphs": [
      "猿鸟犹疑畏简书，风云常为护储胥。",
      "徒令上将挥神笔，终见降王走传车。",
      "管乐有才原不忝，关张无命欲何如？",
      "他年锦里经祠庙，梁父吟成恨有余。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "咏怀古迹五首·其三",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "群山万壑赴荆门，生长明妃尚有村。",
      "一去紫台连朔漠，独留青冢向黄昏。",
      "画图省识春风面，环佩空归夜月魂。(夜月 一作：月夜 环",
      "佩",
      "一作：环",
      "珮",
      ")",
      "千载琵琶作胡语，分明怨恨曲中论。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "月夜",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "今夜鄜州月，闺中只独看。遥怜小儿女，未解忆长安。",
      "香雾云鬟湿，清辉玉臂寒。何时倚虚幌，双照泪痕干。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "石鼓歌",
    "notes": [],
    "author": "韩愈",
    "paragraphs": [
      "张生手持石鼓文，劝我试作石鼓歌。",
      "少陵无人谪仙死，才薄将奈石鼓何。",
      "周纲凌迟四海沸，宣王愤起挥天戈。",
      "大开明堂受朝贺，诸侯剑佩鸣相磨。",
      "蒐于岐阳骋雄俊，万里禽兽皆遮罗。",
      "镌功勒成告万世，凿石作鼓隳嵯峨。",
      "从臣才艺咸第一，拣选撰刻留山阿。",
      "雨淋日灸野火燎，鬼物守护烦撝呵。",
      "公从何处得纸本，毫发尽备无差讹。",
      "辞严义密读难晓，字体不类隶与蝌。",
      "年深岂免有缺画，快剑斫断生蛟鼍。",
      "鸾翔凤翥众仙下，珊瑚碧树交枝柯。",
      "金绳铁索锁钮壮，古鼎跃水龙腾梭。",
      "陋儒编诗不收入，二雅褊迫无委蛇。",
      "孔子西行不到秦，掎摭星宿遗羲娥。",
      "嗟余好古生苦晚，对此涕泪双滂沱。",
      "忆昔初蒙博士征，其年始改称元和。",
      "故人从军在右辅，为我度量掘臼科。",
      "濯冠沐浴告祭酒，如此至宝存岂多。",
      "毡包席裹可立致，十鼓只载数骆驼。",
      "荐诸太庙比郜鼎，光价岂止百倍过。",
      "圣恩若许留太学，诸生讲解得切磋。",
      "观经鸿都尚填咽，坐见举国来奔波。",
      "剜苔剔藓露节角，安置妥帖平不颇。",
      "大厦深檐与盖覆，经历久远期无佗。",
      "中朝大官老于事，讵肯感激徒媕婀。",
      "牧童敲火牛砺角，谁复著手为摩挲。",
      "日销月铄就埋没，六年西顾空吟哦。",
      "羲之俗书趁姿媚，数纸尚可博白鹅。",
      "继周八代争战罢，无人收拾理则那。",
      "方今太平日无事，柄任儒术崇丘轲。",
      "安能以此尚论列，愿借辩口如悬河。",
      "石鼓之歌止于此，呜呼吾意其蹉跎。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "送灵澈上人",
    "notes": [
      "斜阳--一作 ：夕阳"
    ],
    "author": "刘长卿",
    "paragraphs": [
      "苍苍竹林寺，杳杳钟声晚。",
      "荷笠带斜阳，青山独归远。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "早寒江上有怀 / 早寒有怀",
    "notes": [
      "孤帆--一作 ：归帆"
    ],
    "author": "孟浩然",
    "paragraphs": [
      "木落雁南度，北风江上寒。",
      "我家襄水曲，遥隔楚云端。",
      "乡泪客中尽，孤帆天际看。",
      "迷津欲有问，平海夕漫漫。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "子夜吴歌·春歌",
    "notes": [],
    "author": "李白",
    "paragraphs": [
      "秦地罗敷女，采桑绿水边。",
      "素手青条上，红妆白日鲜。",
      "蚕饥妾欲去，五马莫留连。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "桃源行",
    "notes": [],
    "author": "王维",
    "paragraphs": [
      "渔舟逐水爱山春，两岸桃花夹古津。",
      "坐看红树不知远，行尽青溪不见人。",
      "山口潜行始隈隩，山开旷望旋平陆。",
      "遥看一处攒云树，近入千家散花竹。",
      "樵客初传汉姓名，居人未改秦衣服。",
      "居人共住武陵源，还从物外起田园。",
      "月明松下房栊静，日出云中鸡犬喧。",
      "惊闻俗客争来集，竞引还家问都邑。",
      "平明闾巷扫花开，薄暮渔樵乘水入。",
      "初因避地去人间，及至成仙遂不还。",
      "峡里谁知有人事，世中遥望空云山。",
      "不疑灵境难闻见，尘心未尽思乡县。",
      "出洞无论隔山水，辞家终拟长游衍。",
      "自谓经过旧不迷，安知峰壑今来变。",
      "当时只记入山深，青溪几度到云林。",
      "春来遍是桃花水，不辨仙源何处寻。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "寻西山隐者不遇",
    "notes": [],
    "author": "丘为",
    "paragraphs": [
      "绝顶一茅茨，直上三十里。",
      "扣关无僮仆，窥室唯案几。",
      "若非巾柴车，应是钓秋水。",
      "差池不相见，黾勉空仰止。",
      "草色新雨中，松声晚窗里。",
      "及兹契幽绝，自足荡心耳。",
      "虽无宾主意，颇得清净理。",
      "兴尽方下山，何必待之子。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "寄扬州韩绰判官",
    "notes": [],
    "author": "杜牧",
    "paragraphs": [
      "青山隐隐水迢迢，秋尽江南草未凋。",
      "二十四桥明月夜，玉人何处教吹箫？"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "玉台体",
    "notes": [],
    "author": "权德舆",
    "paragraphs": [
      "昨夜裙带解，今朝蟢子飞。",
      "铅华不可弃，莫是藁砧归。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "瑶瑟怨",
    "notes": [],
    "author": "温庭筠",
    "paragraphs": [
      "冰簟银床梦不成，碧天如水夜云轻。",
      "雁声远过潇湘去，十二楼中月自明。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "清平调·名花倾国两相欢",
    "notes": [],
    "author": "李白",
    "paragraphs": [
      "名花倾国两相欢，常得君王带笑看。",
      "解释春风无限恨，沉香亭北倚栏杆。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "楚江怀古三首·其一",
    "notes": [],
    "author": "马戴",
    "paragraphs": [
      "露气寒光集，微阳下楚丘。猿啼洞庭树，人在木兰舟。",
      "广泽生明月，苍山夹乱流。云中君不见，竟夕自悲秋。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "宿桐庐江寄广陵旧游",
    "notes": [
      "闻--一作 ：听"
    ],
    "author": "孟浩然",
    "paragraphs": [
      "山暝闻猿愁，沧江急夜流。",
      "风鸣两岸叶，月照一孤舟。",
      "建德非吾土，维扬忆旧游。",
      "还将两行泪，遥寄海西头。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "已凉",
    "notes": [],
    "author": "韩偓",
    "paragraphs": [
      "碧阑干外绣帘垂，猩血屏风画折枝。",
      "八尺龙须方锦褥，已凉天气未寒时。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "宿业师山房期丁大不至 / 宿业师山房待丁大不至",
    "notes": [],
    "author": "孟浩然",
    "paragraphs": [
      "夕阳度西岭，群壑倏已暝。",
      "松月生夜凉，风泉满清听。",
      "樵人归欲尽，烟鸟栖初定。",
      "之子期宿来，孤琴候萝径。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "秋日登吴公台上寺远眺",
    "notes": [],
    "author": "刘长卿",
    "paragraphs": [
      "古台摇落后，秋日望乡心。",
      "野寺人来少，云峰水隔深。",
      "夕阳依旧垒，寒磬满空林。",
      "惆怅南朝事，长江独至今。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "庐山谣寄卢侍御虚舟",
    "notes": [],
    "author": "李白",
    "paragraphs": [
      "我本楚狂人，凤歌笑孔丘。",
      "手持绿玉杖，朝别黄鹤楼。",
      "五岳寻仙不辞远，一生好入名山游。",
      "庐山秀出南斗傍，屏风九叠云锦张。",
      "影落明湖青黛光，金阙前开二峰长，银河倒挂三石梁。",
      "香炉瀑布遥相望，回崖沓嶂凌苍苍。",
      "翠影红霞映朝日，鸟飞不到吴天长。",
      "登高壮观天地间，大江茫茫去不还。",
      "黄云万里动风色，白波九道流雪山。",
      "好为庐山谣，兴因庐山发。",
      "闲窥石镜清我心，谢公行处苍苔没。",
      "早服还丹无世情，琴心三叠道初成。",
      "遥见仙人彩云里，手把芙蓉朝玉京。",
      "先期汗漫九垓上，愿接卢敖游太清。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "无题·凤尾香罗薄几重",
    "notes": [
      "任--一作 ：待"
    ],
    "author": "李商隐",
    "paragraphs": [
      "凤尾香罗薄几重，碧文圆顶夜深缝。",
      "扇裁月魄羞难掩，车走雷声语未通。",
      "曾是寂寥金烬暗，断无消息石榴红。",
      "斑骓只系垂杨岸，何处西南任好风。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "春宿左省",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "花隐掖垣暮，啾啾栖鸟过。",
      "星临万户动，月傍九霄多。",
      "不寝听金钥，因风想玉珂。",
      "明朝有封事，数问夜如何。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "客至",
    "notes": [
      "馀--通 ：余"
    ],
    "author": "杜甫",
    "paragraphs": [
      "舍南舍北皆春水，但见群鸥日日来。",
      "花径不曾缘客扫，蓬门今始为君开。",
      "盘飧市远无兼味，樽酒家贫只旧醅。",
      "肯与邻翁相对饮，隔篱呼取尽馀杯。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "旅夜书怀",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "细草微风岸，危樯独夜舟。",
      "星垂平野阔，月涌大江流。",
      "名岂文章著，官应老病休。",
      "飘飘何所似，天地一沙鸥。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "月下独酌四首·其一",
    "notes": [
      "同交欢--一作 ：相交欢"
    ],
    "author": "李白",
    "paragraphs": [
      "花间一壶酒，独酌无相亲。",
      "举杯邀明月，对影成三人。",
      "月既不解饮，影徒随我身。",
      "暂伴月将影，行乐须及春。",
      "我歌月徘徊，我舞影零乱。",
      "醒时同交欢，醉后各分散。",
      "永结无情游，相期邈云汉。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "溪居",
    "notes": [],
    "author": "柳宗元",
    "paragraphs": [
      "久为簪组累，幸此南夷谪。闲依农圃邻，偶似山林客。",
      "晓耕翻露草，夜榜响溪石。来往不逢人，长歌楚天碧。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "经邹鲁祭孔子而叹之",
    "notes": [],
    "author": "李隆基",
    "paragraphs": [
      "夫子何为者，栖栖一代中。",
      "地犹鄹氏邑，宅即鲁王宫。",
      "叹凤嗟身否，伤麟怨道穷。",
      "今看两楹奠，当与梦时同。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "佳人",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "绝代有佳人，幽居在空谷。",
      "自云良家子，零落依草木。",
      "关中昔丧乱，兄弟遭杀戮。",
      "官高何足论，不得收骨肉。",
      "世情恶衰歇，万事随转烛。",
      "夫婿轻薄儿，新人美如玉。",
      "合昏尚知时，鸳鸯不独宿。",
      "但见新人笑，那闻旧人哭。",
      "在山泉水清，出山泉水浊。",
      "侍婢卖珠回，牵萝补茅屋。",
      "摘花不插发，采柏动盈掬。",
      "天寒翠袖薄，日暮倚修竹。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "将赴吴兴登乐游原一绝",
    "notes": [],
    "author": "杜牧",
    "paragraphs": [
      "清时有味是无能，闲爱孤云静爱僧。",
      "欲把一麾江海去，乐游原上望昭陵。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "寻南溪常山道人隐居 / 寻南溪常道士",
    "notes": [],
    "author": "刘长卿",
    "paragraphs": [
      "一路经行处，莓苔见履痕。",
      "白云依静渚，春草闭闲门。",
      "过雨看松色，随山到水源。",
      "溪花与禅意，相对亦忘言。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "咏怀古迹五首·其二",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "摇落深知宋玉悲，风流儒雅亦吾师。",
      "怅望千秋一洒泪，萧条异代不同时。",
      "江山故宅空文藻，云雨荒台岂梦思。",
      "最是楚宫俱泯灭，舟人指点到今疑。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "天末怀李白",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "凉风起天末，君子意如何。",
      "鸿雁几时到，江湖秋水多。",
      "文章憎命达，魑魅喜人过。",
      "应共冤魂语，投诗赠汨罗。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "凉州词二首·其一",
    "notes": [],
    "author": "王之涣",
    "paragraphs": [
      "黄河远上白云间，一片孤城万仞山。",
      "羌笛何须怨杨柳，春风不度玉门关。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "渔翁",
    "notes": [],
    "author": "柳宗元",
    "paragraphs": [
      "渔翁夜傍西岩宿，晓汲清湘燃楚竹。",
      "烟销日出不见人，欸乃一声山水绿。",
      "回看天际下中流，岩上无心云相逐。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "青溪 / 过青溪水作",
    "notes": [
      "磐石--一作 ：盘石"
    ],
    "author": "王维",
    "paragraphs": [
      "言入黄花川，每逐清溪水。",
      "随山将万转，趣途无百里。",
      "声喧乱石中，色静深松里。",
      "漾漾泛菱荇，澄澄映葭苇。",
      "我心素已闲，清川澹如此。",
      "请留磐石上，垂钓将已矣。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "丽人行",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "三月三日天气新，长安水边多丽人。",
      "态浓意远淑且真，肌理细腻骨肉匀。",
      "绣罗衣裳照暮春，蹙金孔雀银麒麟。",
      "头上何所有？翠微盍叶垂鬓唇。",
      "背后何所见？珠压腰衱稳称身。",
      "就中云幕椒房亲，赐名大国虢与秦。",
      "紫驼之峰出翠釜，水精之盘行素鳞。",
      "犀箸厌饫久未下，鸾刀缕切空纷纶。",
      "黄门飞鞚不动尘，御厨络绎送八珍。",
      "箫鼓哀吟感鬼神，宾从杂遝实要津。",
      "后来鞍马何逡巡，当轩下马入锦茵。",
      "杨花雪落覆白苹，青鸟飞去衔红巾。",
      "炙手可热势绝伦，慎莫近前丞相嗔！"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "利州南渡",
    "notes": [],
    "author": "温庭筠",
    "paragraphs": [
      "澹然空水对斜晖，曲岛苍茫接翠微。",
      "波上马嘶看棹去，柳边人歇待船归。",
      "数丛沙草群鸥散，万顷江田一鹭飞。",
      "谁解乘舟寻范蠡，五湖烟水独忘机。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "赤壁",
    "notes": [],
    "author": "杜牧",
    "paragraphs": [
      "折戟沉沙铁未销，自将磨洗认前朝。",
      "东风不与周郎便，铜雀春深锁二乔。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "金陵图",
    "notes": [],
    "author": "韦庄",
    "paragraphs": [
      "谁谓伤心画不成，画人心逐世人情。",
      "君看六幅南朝事，老木寒云满故城。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "清明日宴梅道士房",
    "notes": [],
    "author": "孟浩然",
    "paragraphs": [
      "林卧愁春尽，搴帷览物华。忽逢青鸟使，邀入赤松家。",
      "丹灶初开火，仙桃正落花。童颜若可驻，何惜醉流霞。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "过香积寺",
    "notes": [],
    "author": "王维",
    "paragraphs": [
      "不知香积寺，数里入云峰。",
      "古木无人径，深山何处钟。",
      "泉声咽危石，日色冷青松。",
      "薄暮空潭曲，安禅制毒龙。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "登幽州台歌",
    "notes": [],
    "author": "陈子昂",
    "paragraphs": [
      "前不见古人，后不见来者。",
      "念天地之悠悠，独怆然而涕下。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "赋得暮雨送李胄 / 赋得暮雨送李曹",
    "notes": [],
    "author": "韦应物",
    "paragraphs": [
      "楚江微雨里，建业暮钟时。漠漠帆来重，冥冥鸟去迟。",
      "海门深不见，浦树远含滋。相送情无限，沾襟比散丝。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "寻隐者不遇 / 孙革访羊尊师诗",
    "notes": [],
    "author": "贾岛",
    "paragraphs": [
      "松下问童子，言师采药去。",
      "只在此山中，云深不知处。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "寄令狐郎中",
    "notes": [],
    "author": "李商隐",
    "paragraphs": [
      "嵩云秦树久离居，双鲤迢迢一纸书。",
      "休问梁园旧宾客，茂陵秋雨病相如。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "遣怀",
    "notes": [
      "江南--一作 ：江湖",
      "纤细--一作 ：肠断"
    ],
    "author": "杜牧",
    "paragraphs": [
      "落魄江南载酒行，楚腰纤细掌中轻。",
      "十年一觉扬州梦，赢得青楼薄幸名。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "蝉",
    "notes": [],
    "author": "李商隐",
    "paragraphs": [
      "本以高难饱，徒劳恨费声。",
      "五更疏欲断，一树碧无情。",
      "薄宦梗犹泛，故园芜已平。",
      "烦君最相警，我亦举家清。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "陇西行四首·其二",
    "notes": [
      "春闺--一作 ：深闺"
    ],
    "author": "陈陶",
    "paragraphs": [
      "誓扫匈奴不顾身，五千貂锦丧胡尘。",
      "可怜无定河边骨，犹是春闺梦里人！"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "淮上喜会梁川故人 / 淮上喜会梁州故人",
    "notes": [],
    "author": "韦应物",
    "paragraphs": [
      "江汉曾为客，相逢每醉还。",
      "浮云一别后，流水十年间。",
      "欢笑情如旧，萧疏鬓已斑。",
      "何因不归去？淮上有秋山。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "贫女",
    "notes": [],
    "author": "秦韬玉",
    "paragraphs": [
      "蓬门未识绮罗香，拟托良媒益自伤。",
      "谁爱风流高格调，共怜时世俭梳妆。",
      "敢将十指夸针巧，不把双眉斗画长。",
      "苦恨年年压金线，为他人作嫁衣裳。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "白雪歌送武判官归京",
    "notes": [
      "难着--一作 ：犹著"
    ],
    "author": "岑参",
    "paragraphs": [
      "北风卷地白草折，胡天八月即飞雪。",
      "忽如一夜春风来，千树万树梨花开。",
      "散入珠帘湿罗幕，狐裘不暖锦衾薄。",
      "将军角弓不得控，都护铁衣冷难着。",
      "瀚海阑干百丈冰，愁云惨淡万里凝。",
      "中军置酒饮归客，胡琴琵琶与羌笛。",
      "纷纷暮雪下辕门，风掣红旗冻不翻。",
      "轮台东门送君去，去时雪满天山路。",
      "山回路转不见君，雪上空留马行处。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "山居秋暝",
    "notes": [],
    "author": "王维",
    "paragraphs": [
      "空山新雨后，天气晚来秋。",
      "明月松间照，清泉石上流。",
      "竹喧归浣女，莲动下渔舟。",
      "随意春芳歇，王孙自可留。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "杂诗",
    "notes": [],
    "author": "佚名",
    "paragraphs": [
      "近寒食雨草萋萋，著麦苗风柳映堤。",
      "等是有家归未得，杜鹃休向耳边啼。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "行宫",
    "notes": [],
    "author": "元稹",
    "paragraphs": [
      "寥落古行宫，宫花寂寞红。",
      "白头宫女在，闲坐说玄宗。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "金谷园",
    "notes": [],
    "author": "杜牧",
    "paragraphs": [
      "繁华事散逐香尘，流水无情草自春。",
      "日暮东风怨啼鸟，落花犹似坠楼人。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "梦李白二首·其一",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "死别已吞声，生别常恻恻。江南瘴疠地，逐客无消息。",
      "故人入我梦，明我长相忆。恐非平生魂，路远不可测。",
      "魂来枫林青，魂返关塞黑。君今在罗网，何以有羽翼。",
      "落月满屋梁，犹疑照颜色。水深波浪阔，无使蛟龙得。",
      "",
      "死别已吞声，生别常恻恻。江南瘴疠地，逐客无消息。",
      "故人入我梦，明我长相忆。君今在罗网，何以有羽翼。",
      "恐非平生魂，路远不可测。魂来枫林青，魂返关塞黑。",
      "落月满屋梁，犹疑照颜色。水深波浪阔，无使蛟龙得。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "秋夜曲",
    "notes": [],
    "author": "王维",
    "paragraphs": [
      "桂魄初生秋露微，轻罗已薄未更衣。",
      "银筝夜久殷勤弄，心怯空房不忍归。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "酬郭给事",
    "notes": [],
    "author": "王维",
    "paragraphs": [
      "洞门高阁霭馀辉，桃李阴阴柳絮飞。",
      "禁里疏钟官舍晚，省中啼鸟吏人稀。",
      "晨摇玉佩趋金殿，夕奉天书拜琐闱。",
      "强欲从君无那老，将因卧病解朝衣。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "竹里馆",
    "notes": [],
    "author": "王维",
    "paragraphs": [
      "独坐幽篁里，弹琴复长啸。",
      "深林人不知，明月来相照。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "和乐天春词",
    "notes": [],
    "author": "刘禹锡",
    "paragraphs": [
      "新妆宜面下朱楼，深锁春光一院愁。",
      "行到中庭数花朵，蜻蜓飞上玉搔头。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "古柏行",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "孔明庙前有老柏，柯如青铜根如石。",
      "霜皮溜雨四十围，黛色参天二千尺。",
      "君臣已与时际会，树木犹为人爱惜。",
      "云来气接巫峡长，月出寒通雪山白。",
      "忆昨路绕锦亭东，先主武侯同閟宫。",
      "崔嵬枝干郊原古，窈窕丹青户牖空。",
      "落落盘踞虽得地，冥冥孤高多烈风。",
      "扶持自是神明力，正直原因造化工。",
      "大厦如倾要梁栋，万牛回首丘山重。",
      "不露文章世已惊，未辞翦伐谁能送？",
      "苦心岂免容蝼蚁，香叶终经宿鸾凤。",
      "志士幽人莫怨嗟：古来材大难为用。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "东郊",
    "notes": [],
    "author": "韦应物",
    "paragraphs": [
      "吏舍跼终年，出郊旷清曙。",
      "杨柳散和风，青山澹吾虑。",
      "依丛适自憩，缘涧还复去。",
      "微雨霭芳原，春鸠鸣何处。",
      "乐幽心屡止，遵事迹犹遽。",
      "终罢斯结庐，慕陶直可庶。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "过故人庄",
    "notes": [],
    "author": "孟浩然",
    "paragraphs": [
      "故人具鸡黍，邀我至田家。",
      "绿树村边合，青山郭外斜。",
      "开轩面场圃，把酒话桑麻。",
      "待到重阳日，还来就菊花。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "清平调·其二",
    "notes": [],
    "author": "李白",
    "paragraphs": [
      "一枝红艳露凝香，云雨巫山枉断肠。",
      "借问汉宫谁得似，可怜飞燕倚新妆。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "燕歌行",
    "notes": [
      "常轻敌--一作 ：恒轻敌",
      "飘飖--一作 ：飘飘",
      "常轻敌--一作 ：恒轻敌",
      "飘飖--一作 ：飘飘"
    ],
    "author": "高适",
    "paragraphs": [
      "开元二十六年，客有从御史大夫张公出塞而还者；作《燕歌行》以示适，感征戍之事，因而和焉。",
      "",
      "汉家烟尘在东北，汉将辞家破残贼。",
      "男儿本自重横行，天子非常赐颜色。",
      "摐金伐鼓下榆关，旌旆逶迤碣石间。",
      "校尉羽书飞瀚海，单于猎火照狼山。",
      "山川萧条极边土，胡骑凭陵杂风雨。",
      "战士军前半死生，美人帐下犹歌舞。",
      "大漠穷秋塞草腓，孤城落日斗兵稀。",
      "身当恩遇常轻敌，力尽关山未解围。",
      "铁衣远戍辛勤久，玉箸应啼别离后。",
      "少妇城南欲断肠，征人蓟北空回首。",
      "边庭飘飖那可度，绝域苍茫更何有。",
      "杀气三时作阵云，寒声一夜传刁斗。",
      "相看白刃血纷纷，死节从来岂顾勋。",
      "君不见沙场征战苦，至今犹忆李将军。",
      "开元二十六年，客有从御史大夫张公出塞而还者；作《燕歌行》以示适，感征戍之事，因而和焉。",
      "",
      "汉家烟尘在东北，汉将辞家破残贼。",
      "男儿本自重横行，天子非常赐颜色。",
      "摐金伐鼓下榆关，旌旆逶迤碣石间。",
      "校尉羽书飞瀚海，单于猎火照狼山。",
      "山川萧条极边土，胡骑凭陵杂风雨。",
      "战士军前半死生，美人帐下犹歌舞。",
      "大漠穷秋塞草腓，孤城落日斗兵稀。",
      "身当恩遇常轻敌，力尽关山未解围。",
      "铁衣远戍辛勤久，玉箸应啼别离后。",
      "少妇城南欲断肠，征人蓟北空回首。",
      "边庭飘飖那可度，绝域苍茫更何有。",
      "杀气三时作阵云，寒声一夜传刁斗。",
      "相看白刃血纷纷，死节从来岂顾勋。",
      "君不见沙场征战苦，至今犹忆李将军。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "郡斋雨中与诸文士燕集",
    "notes": [],
    "author": "韦应物",
    "paragraphs": [
      "兵卫森画戟，宴寝凝清香。",
      "海上风雨至，逍遥池阁凉。",
      "烦疴近消散，嘉宾复满堂。",
      "自惭居处崇，未睹斯民康。",
      "理会是非遣，性达形迹忘。",
      "鲜肥属时禁，蔬果幸见尝。",
      "俯饮一杯酒，仰聆金玉章。",
      "神欢体自轻，意欲凌风翔。",
      "吴中盛文史，群彦今汪洋。",
      "方知大藩地，岂曰财赋强。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "行路难·其三",
    "notes": [],
    "author": "李白",
    "paragraphs": [
      "有耳莫洗颍川水，有口莫食首阳蕨。",
      "含光混世贵无名，何用孤高比云月？",
      "吾观自古贤达人，功成不退皆殒身。",
      "子胥既弃吴江上，屈原终投湘水滨。",
      "陆机雄才岂自保？李斯税驾苦不早。",
      "华亭鹤唳讵可闻？上蔡苍鹰何足道？",
      "君不见吴中张翰称达生，秋风忽忆江东行。",
      "且乐生前一杯酒，何须身后千载名？"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "渡汉江",
    "notes": [],
    "author": "宋之问",
    "paragraphs": [
      "岭外音书断，经冬复历春。",
      "近乡情更怯，不敢问来人。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "长干行·家临九江水",
    "notes": [],
    "author": "崔颢",
    "paragraphs": [
      "家临九江水，来去九江侧。",
      "同是长干人，生小不相识。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "江南逢李龟年",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "岐王宅里寻常见，崔九堂前几度闻。",
      "正是江南好风景，落花时节又逢君。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "谒衡岳庙遂宿岳寺题门楼",
    "notes": [],
    "author": "韩愈",
    "paragraphs": [
      "五岳祭秩皆三公，四方环镇嵩当中。",
      "火维地荒足妖怪，天假神柄专其雄。",
      "喷云泄雾藏半腹，虽有绝顶谁能穷？",
      "我来正逢秋雨节，阴气晦昧无清风。",
      "潜心默祷若有应，岂非正直能感通！",
      "须臾静扫众峰出，仰见突兀撑青空。",
      "紫盖连延接天柱，石廪腾掷堆祝融。",
      "森然魄动下马拜，松柏一径趋灵宫。",
      "粉墙丹柱动光彩，鬼物图画填青红。",
      "升阶伛偻荐脯酒，欲以菲薄明其衷。",
      "庙令老人识神意，睢盱侦伺能鞠躬。",
      "手持杯珓导我掷，云此最吉余难同。",
      "窜逐蛮荒幸不死，衣食才足甘长终。",
      "侯王将相望久绝，神纵欲福难为功。",
      "夜投佛寺上高阁，星月掩映云曈昽。",
      "猿鸣钟动不知曙，杲杲寒日生于东。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "闻官军收河南河北",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "剑外忽传收蓟北，初闻涕泪满衣裳。",
      "却看妻子愁何在，漫卷诗书喜欲狂。",
      "白日放歌须纵酒，青春作伴好还乡。",
      "即从巴峡穿巫峡，便下襄阳向洛阳。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "苏武庙",
    "notes": [],
    "author": "温庭筠",
    "paragraphs": [
      "苏武魂销汉使前，古祠高树两茫然。",
      "云边雁断胡天月，陇上羊归塞草烟。",
      "回日楼台非甲帐，去时冠剑是丁年。",
      "茂陵不见封侯印，空向秋波哭逝川。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "书边事",
    "notes": [],
    "author": "张乔",
    "paragraphs": [
      "调角断清秋，征人倚戍楼。春风对青冢，白日落梁州。",
      "大汉无兵阻，穷边有客游。蕃情似此水，长愿向南流。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "和晋陵陆丞早春游望",
    "notes": [],
    "author": "杜审言",
    "paragraphs": [
      "独有宦游人，偏惊物候新。",
      "云霞出海曙，梅柳渡江春。",
      "淑气催黄鸟，晴光转绿蘋。",
      "忽闻歌古调，归思欲沾巾。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "贼平后送人北归",
    "notes": [],
    "author": "司空曙",
    "paragraphs": [
      "世乱同南去，时清独北还。",
      "他乡生白发，旧国见青山。",
      "晓月过残垒，繁星宿故关。",
      "寒禽与衰草，处处伴愁颜。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "夜归鹿门山歌 / 夜归鹿门歌",
    "notes": [],
    "author": "孟浩然",
    "paragraphs": [
      "山寺钟鸣昼已昏，渔梁渡头争渡喧。",
      "人随沙岸向江村，余亦乘舟归鹿门。",
      "鹿门月照开烟树，忽到庞公栖隐处。",
      "岩扉松径长寂寥，惟有幽人自来去。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "古从军行",
    "notes": [],
    "author": "李颀",
    "paragraphs": [
      "白日登山望烽火，黄昏饮马傍交河。",
      "行人刁斗风沙暗，公主琵琶幽怨多。",
      "野云万里无城郭，雨雪纷纷连大漠。",
      "胡雁哀鸣夜夜飞，胡儿眼泪双双落。",
      "闻道玉门犹被遮，应将性命逐轻车。",
      "年年战骨埋荒外，空见蒲桃入汉家。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "送杜少府之任蜀州 / 送杜少府之任蜀川",
    "notes": [],
    "author": "王勃",
    "paragraphs": [
      "城阙辅三秦，风烟望五津。",
      "与君离别意，同是宦游人。",
      "海内存知己，天涯若比邻。",
      "无为在歧路，儿女共沾巾。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "送人东游",
    "notes": [],
    "author": "温庭筠",
    "paragraphs": [
      "荒戍落黄叶，浩然离故关。",
      "高风汉阳渡，初日郢门山。",
      "江上几人在，天涯孤棹还。",
      "何当重相见，樽酒慰离颜。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "江雪",
    "notes": [],
    "author": "柳宗元",
    "paragraphs": [
      "千山鸟飞绝，万径人踪灭。",
      "孤舟蓑笠翁，独钓寒江雪。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "新嫁娘词",
    "notes": [],
    "author": "王建",
    "paragraphs": [
      "三日入厨下，洗手作羹汤。",
      "未谙姑食性，先遣小姑尝。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "秋登兰山寄张五 / 九月九日岘山寄张子容",
    "notes": [
      "试--一作 始"
    ],
    "author": "孟浩然",
    "paragraphs": [
      "北山白云里，隐者自怡悦。",
      "相望试登高，心随雁飞灭。",
      "愁因薄暮起，兴是清秋发。",
      "时见归村人，沙行渡头歇。",
      "天边树若荠，江畔洲如月。",
      "何当载酒来，共醉重阳节。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "烈女操",
    "notes": [
      "古井水--一作 ：井中水"
    ],
    "author": "孟郊",
    "paragraphs": [
      "梧桐相待老，鸳鸯会双死。",
      "贞女贵殉夫，舍生亦如此。",
      "波澜誓不起，妾心古井水。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "与诸子登岘山",
    "notes": [
      "尚在--一作 ：字在"
    ],
    "author": "孟浩然",
    "paragraphs": [
      "人事有代谢，往来成古今。江山留胜迹，我辈复登临。",
      "水落鱼梁浅，天寒梦泽深。羊公碑尚在，读罢泪沾襟。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "哀江头",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "少陵野老吞声哭，春日潜行曲江曲。",
      "江头宫殿锁千门，细柳新蒲为谁绿？",
      "忆昔霓旌下南苑，苑中万物生颜色。",
      "昭阳殿里第一人，同辇随君侍君侧。",
      "辇前才人带弓箭，白马嚼啮黄金勒。",
      "翻身向天仰射云，一笑正坠双飞翼。",
      "明眸皓齿今何在？血污游魂归不得。",
      "清渭东流剑阁深，去住彼此无消息。",
      "人生有情泪沾臆，江水江花岂终极！",
      "黄昏胡骑尘满城，欲往城南望城北。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "蜀先主庙",
    "notes": [],
    "author": "刘禹锡",
    "paragraphs": [
      "天地英雄气，千秋尚凛然。势分三足鼎，业复五铢钱。",
      "得相能开国，生儿不象贤。凄凉蜀故妓，来舞魏宫前。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "灞上秋居",
    "notes": [],
    "author": "马戴",
    "paragraphs": [
      "灞原风雨定，晚见雁行频。",
      "落叶他乡树，寒灯独夜人。",
      "空园白露滴，孤壁野僧邻。",
      "寄卧郊扉久，何年致此身。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "望月有感",
    "notes": [],
    "author": "白居易",
    "paragraphs": [
      "自河南经乱，关内阻饥，兄弟离散，各在一处。因望月有感，聊书所怀，寄上浮梁大兄、於潜七兄、乌江十五兄，兼示符离及下邽弟妹。",
      "",
      "时难年荒世业空，弟兄羁旅各西东。",
      "田园寥落干戈后，骨肉流离道路中。",
      "吊影分为千里雁，辞根散作九秋蓬。",
      "共看明月应垂泪，一夜乡心五处同。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "感遇十二首·其二",
    "notes": [],
    "author": "张九龄",
    "paragraphs": [
      "幽人归独卧，滞虑洗孤清。",
      "持此谢高鸟，因之传远情。",
      "日夕怀空意，人谁感至精？",
      "飞沈理自隔，何所慰吾诚?"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "留别王侍御维 / 留别王维",
    "notes": [],
    "author": "孟浩然",
    "paragraphs": [
      "寂寂竟何待，朝朝空自归。欲寻芳草去，惜与故人违。",
      "当路谁相假，知音世所稀。只应守寂寞，还掩故园扉。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "同题仙游观",
    "notes": [],
    "author": "韩翃",
    "paragraphs": [
      "仙台初见五城楼，风物凄凄宿雨收。",
      "山色遥连秦树晚，砧声近报汉宫秋。",
      "疏松影落空坛静，细草香闲小洞幽。",
      "何用别寻方外去，人间亦自有丹丘。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "积雨辋川庄作 / 秋归辋川庄作",
    "notes": [],
    "author": "王维",
    "paragraphs": [
      "积雨空林烟火迟，蒸藜炊黍饷东菑。",
      "漠漠水田飞白鹭，阴阴夏木啭黄鹂。",
      "山中习静观朝槿，松下清斋折露葵。",
      "野老与人争席罢，海鸥何事更相疑。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "蜀相",
    "notes": [
      "频烦--一作 ：频繁"
    ],
    "author": "杜甫",
    "paragraphs": [
      "丞相祠堂何处寻，锦官城外柏森森。",
      "映阶碧草自春色，隔叶黄鹂空好音。",
      "三顾频烦天下计，两朝开济老臣心。",
      "出师未捷身先死，长使英雄泪满襟。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "送别 / 山中送别",
    "notes": [
      "明年--一作 ：年年"
    ],
    "author": "王维",
    "paragraphs": [
      "山中相送罢，日暮掩柴扉。",
      "春草明年绿，王孙归不归？"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "宿建德江",
    "notes": [],
    "author": "孟浩然",
    "paragraphs": [
      "移舟泊烟渚，日暮客愁新。",
      "野旷天低树，江清月近人。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "咏怀古迹五首·其四",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "蜀主窥吴幸三峡，崩年亦在永安宫。",
      "翠华想像空山里，玉殿虚无野寺中。",
      "古庙杉松巢水鹤，岁时伏腊走村翁。",
      "武侯祠堂常邻近，一体君臣祭祀同。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "没蕃故人",
    "notes": [],
    "author": "张籍",
    "paragraphs": [
      "前年伐月支，城下没全师。",
      "蕃汉断消息，死生长别离。",
      "无人收废帐，归马识残旗。",
      "欲祭疑君在，天涯哭此时。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "送魏万之京",
    "notes": [],
    "author": "李颀",
    "paragraphs": [
      "朝闻游子唱离歌，昨夜微霜初渡河。",
      "鸿雁不堪愁里听，云山况是客中过。",
      "关城树色催寒近，御苑砧声向晚多。(",
      "树",
      "色 一作：曙)",
      "莫见长安行乐处，空令岁月易蹉跎。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "怨情",
    "notes": [
      "颦--一作 ：蹙"
    ],
    "author": "李白",
    "paragraphs": [
      "美人卷珠帘，深坐颦蛾眉。",
      "但见泪痕湿，不知心恨谁。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "琴歌",
    "notes": [
      "万树--一作 ：万木"
    ],
    "author": "李颀",
    "paragraphs": [
      "主人有酒欢今夕，请奏鸣琴广陵客。",
      "月照城头乌半飞，霜凄万树风入衣。",
      "铜炉华烛烛增辉，初弹渌水后楚妃。",
      "一声已动物皆静，四座无言星欲稀。",
      "清淮奉使千馀里，敢告云山从此始。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "枫桥夜泊",
    "notes": [],
    "author": "张继",
    "paragraphs": [
      "月落乌啼霜满天，江枫渔火对愁眠。",
      "姑苏城外寒山寺，夜半钟声到客船。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "春思",
    "notes": [
      "层城--一作 ：秦城"
    ],
    "author": "皇甫冉",
    "paragraphs": [
      "莺啼燕语报新年，马邑龙堆路几千。",
      "家住层城临汉苑，心随明月到胡天。",
      "机中锦字论长恨，楼上花枝笑独眠。",
      "为问元戎窦车骑，何时返旆勒燕然。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "赠孟浩然",
    "notes": [],
    "author": "李白",
    "paragraphs": [
      "吾爱孟夫子，风流天下闻。",
      "红颜弃轩冕，白首卧松云。",
      "醉月频中圣，迷花不事君。",
      "高山安可仰，徒此揖清芬。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "咏怀古迹五首·其五",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "诸葛大名垂宇宙，宗臣遗像肃清高。",
      "三分割据纡筹策，万古云霄一羽毛。",
      "伯仲之间见伊吕，指挥若定失萧曹。",
      "运移汉祚终难复，志决身歼军务劳。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "次北固山下",
    "notes": [
      "青山外--一作 ：青山下"
    ],
    "author": "王湾",
    "paragraphs": [
      "客路青山外，行舟绿水前。",
      "潮平两岸阔，风正一帆悬。",
      "海日生残夜，江春入旧年。",
      "乡书何处达？归雁洛阳边。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "春思",
    "notes": [],
    "author": "李白",
    "paragraphs": [
      "燕草如碧丝，秦桑低绿枝。",
      "当君怀归日，是妾断肠时。",
      "春风不相识，何事入罗帏。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "后宫词",
    "notes": [],
    "author": "白居易",
    "paragraphs": [
      "泪湿罗巾梦不成，夜深前殿按歌声。",
      "红颜未老恩先断，斜倚薰笼坐到明。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "宣州谢脁楼饯别校书叔云",
    "notes": [
      "览--通 ：揽",
      "明月--一作 ：日月"
    ],
    "author": "李白",
    "paragraphs": [
      "弃我去者，昨日之日不可留；",
      "乱我心者，今日之日多烦忧。",
      "长风万里送秋雁，对此可以酣高楼。",
      "蓬莱文章建安骨，中间小谢又清发。",
      "俱怀逸兴壮思飞，欲上青天览明月。",
      "抽刀断水水更流，举杯销愁愁更愁。(销愁 一作 消愁）",
      "人生在世不称意，明朝散发弄扁舟。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "桃花溪",
    "notes": [],
    "author": "张旭",
    "paragraphs": [
      "隐隐飞桥隔野烟，石矶西畔问渔船。",
      "桃花尽日随流水，洞在清溪何处边。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "喜外弟卢纶见宿",
    "notes": [],
    "author": "司空曙",
    "paragraphs": [
      "静夜四无邻，荒居旧业贫。",
      "雨中黄叶树，灯下白头人。",
      "以我独沉久，愧君相见频。",
      "平生自有分，况是蔡家亲。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "石鱼湖上醉歌",
    "notes": [],
    "author": "元结",
    "paragraphs": [
      "序：漫叟以公田米酿酒，因休暇，则载酒于湖上，时取一醉。欢醉中，据湖岸，引臂向鱼取酒，使舫载之，偏饮坐者。意疑倚巴丘酌于君山之上，诸子环洞庭而坐，酒舫泛泛然触波涛而往来者。乃作歌以长之。",
      "",
      "石鱼湖，似洞庭，夏水欲满君山青。",
      "山为樽，水为沼，酒徒历历坐洲岛。",
      "长风连日作大浪，不能废人运酒舫。",
      "我持长瓢坐巴丘，酌饮四坐以散愁。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "韦讽录事宅观曹将军画马图",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "国初已来画鞍马，神妙独数江都王。",
      "将军得名三十载，人间又见真乘黄。",
      "曾貌先帝照夜白，龙池十日飞霹雳。",
      "内府殷红玛瑙盘，婕妤传诏才人索。",
      "盘赐将军拜舞归，轻纨细绮相追飞。",
      "贵戚权门得笔迹，始觉屏障生光辉。",
      "昔日太宗拳毛騧，近时郭家狮子花。",
      "今之新图有二马，复令识者久叹嗟。",
      "此皆骑战一敌万，缟素漠漠开风沙。",
      "其余七匹亦殊绝，迥若寒空动烟雪。",
      "霜蹄蹴踏长楸间，马官厮养森成列。",
      "可怜九马争神骏，顾视清高气深稳。",
      "借问苦心爱者谁，后有韦讽前支遁。",
      "忆昔巡幸新丰宫，翠华拂天来向东。",
      "腾骧磊落三万匹，皆与此图筋骨同。",
      "自从献宝朝河宗，无复射蛟江水中。",
      "君不见金粟堆前松柏里，龙媒去尽鸟呼风。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "韩碑",
    "notes": [],
    "author": "李商隐",
    "paragraphs": [
      "元和天子神武姿，彼何人哉轩与羲。",
      "誓将上雪列圣耻，坐法宫中朝四夷。",
      "淮西有贼五十载，封狼生貙貙生罴。",
      "不据山河据平地，长戈利矛日可麾。",
      "帝得圣相相曰度，贼斫不死神扶持。",
      "腰悬相印作都统，阴风惨澹天王旗。",
      "愬武古通作牙爪，仪曹外郎载笔随。",
      "行军司马智且勇，十四万众犹虎貔。",
      "入蔡缚贼献太庙，功无与让恩不訾。",
      "帝曰汝度功第一，汝从事愈宜为辞。",
      "愈拜稽首蹈且舞，金石刻画臣能为。",
      "古者世称大手笔，此事不系于职司。",
      "当仁自古有不让，言讫屡颔天子颐。",
      "公退斋戒坐小阁，濡染大笔何淋漓。",
      "点窜《尧典》《舜典》字，涂改《清庙》《生民》诗。",
      "文成破体书在纸，清晨再拜铺丹墀。",
      "表曰臣愈昧死上，咏神圣功书之碑。",
      "碑高三丈字如斗，负以灵鳌蟠以螭。",
      "句奇语重喻者少，谗之天子言其私。",
      "长绳百尺拽碑倒，粗砂大石相磨治。",
      "公之斯文若元气，先时已入人肝脾。",
      "汤盘孔鼎有述作，今无其器存其辞。",
      "呜呼圣王及圣相，相与烜赫流淳熙。",
      "公之斯文不示后，曷与三五相攀追。",
      "愿书万本诵万遍，口角流沫右手胝。",
      "传之七十有二代，以为封禅玉检明堂基。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "望月怀远 / 望月怀古",
    "notes": [],
    "author": "张九龄",
    "paragraphs": [
      "海上生明月，天涯共此时。",
      "情人怨遥夜，竟夕起相思。",
      "灭烛怜光满，披衣觉露滋。",
      "不堪盈手赠，还寝梦佳期。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "八月十五夜赠张功曹",
    "notes": [],
    "author": "韩愈",
    "paragraphs": [
      "纤云四卷天无河，清风吹空月舒波。",
      "沙平水息声影绝，一杯相属君当歌。",
      "君歌声酸辞且苦，不能听终泪如雨。",
      "洞庭连天九疑高，蛟龙出没猩鼯号。",
      "十生九死到官所，幽居默默如藏逃。",
      "下床畏蛇食畏药，海气湿蛰熏腥臊。",
      "昨者州前捶大鼓，嗣皇继圣登夔皋。",
      "赦书一日行万里，罪从大辟皆除死。",
      "迁者追回流者还，涤瑕荡垢清朝班。",
      "州家申名使家抑，坎轲只得移荆蛮。",
      "判司卑官不堪说，未免捶楚尘埃间。",
      "同时辈流多上道，天路幽险难追攀。",
      "君歌且休听我歌，我歌今与君殊科。",
      "一年明月今宵多，人生由命非由他。",
      "有酒不饮奈明何。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "岁暮归南山 / 归故园作 / 归终南山",
    "notes": [],
    "author": "孟浩然",
    "paragraphs": [
      "北阙休上书，南山归敝庐。不才明主弃，多病故人疏。",
      "白发催年老，青阳逼岁除。永怀愁不寐，松月夜窗虚。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "辋川闲居赠裴秀才迪",
    "notes": [
      "馀--一作 余"
    ],
    "author": "王维",
    "paragraphs": [
      "寒山转苍翠，秋水日潺湲。",
      "倚杖柴门外，临风听暮蝉。",
      "渡头馀落日，墟里上孤烟。",
      "复值接舆醉，狂歌五柳前。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "寻陆鸿渐不遇",
    "notes": [],
    "author": "皎然",
    "paragraphs": [
      "移家虽带郭，野径入桑麻。近种篱边菊，秋来未著花。",
      "扣门无犬吠，欲去问西家。报道山中去，归时每日斜。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "宫词",
    "notes": [],
    "author": "薛逢",
    "paragraphs": [
      "十二楼中尽晓妆，望仙楼上望君王。",
      "锁衔金兽连环冷，水滴铜龙昼漏长。",
      "云髻罢梳还对镜，罗衣欲换更添香。",
      "遥窥正殿帘开处，袍袴宫人扫御床。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "听弹琴",
    "notes": [
      "七弦--一作 ：七丝"
    ],
    "author": "刘长卿",
    "paragraphs": [
      "泠泠七弦上，静听松风寒。",
      "古调虽自爱，今人多不弹。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "晨诣超师院读禅经",
    "notes": [],
    "author": "柳宗元",
    "paragraphs": [
      "汲井漱寒齿，清心拂尘服。",
      "闲持贝叶书，步出东斋读。",
      "真源了无取，妄迹世所逐。",
      "遗言冀可冥，缮性何由熟。",
      "道人庭宇静，苔色连深竹。",
      "日出雾露馀，青松如膏沐。",
      "澹然离言说，悟悦心自足。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "寄左省杜拾遗",
    "notes": [],
    "author": "岑参",
    "paragraphs": [
      "联步趋丹陛，分曹限紫微。",
      "晓随天仗入，暮惹御香归。",
      "白发悲花落，青云羡鸟飞。",
      "圣朝无阙事，自觉谏书稀。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "送方外上人 / 送上人",
    "notes": [],
    "author": "刘长卿",
    "paragraphs": [
      "孤云将野鹤，岂向人间住。",
      "莫买沃洲山，时人已知处。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "行路难·其一",
    "notes": [
      "羞--通 ：馐",
      "直--通 ：值",
      "雪满山--一作 ：雪暗天",
      "碧--一作 ：坐"
    ],
    "author": "李白",
    "paragraphs": [
      "金樽清酒斗十千，玉盘珍羞直万钱。",
      "停杯投箸不能食，拔剑四顾心茫然。",
      "欲渡黄河冰塞川，将登太行雪满山。",
      "闲来垂钓碧溪上，忽复乘舟梦日边。",
      "行路难！行路难！多歧路，今安在？",
      "长风破浪会有时，直挂云帆济沧海。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "送杨氏女",
    "notes": [],
    "author": "韦应物",
    "paragraphs": [
      "永日方戚戚，出行复悠悠。",
      "女子今有行，大江溯轻舟。",
      "尔辈苦无恃，抚念益慈柔。",
      "幼为长所育，两别泣不休。",
      "对此结中肠，义往难复留。",
      "自小阙内训，事姑贻我忧。",
      "赖兹托令门，任恤庶无尤。",
      "贫俭诚所尚，资从岂待周。",
      "孝恭遵妇道，容止顺其猷。",
      "别离在今晨，见尔当何秋。",
      "居闲始自遣，临感忽难收。",
      "归来视幼女，零泪缘缨流。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "渭川田家",
    "notes": [
      "斜阳--一作 ：斜光"
    ],
    "author": "王维",
    "paragraphs": [
      "斜阳照墟落，穷巷牛羊归。",
      "野老念牧童，倚杖候荆扉。",
      "雉雊麦苗秀，蚕眠桑叶稀。",
      "田夫荷锄至，相见语依依。",
      "即此羡闲逸，怅然吟式微。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "登金陵凤凰台",
    "notes": [
      "二水--一作 ：一水"
    ],
    "author": "李白",
    "paragraphs": [
      "凤凰台上凤凰游，凤去台空江自流。",
      "吴宫花草埋幽径，晋代衣冠成古丘。",
      "三山半落青天外，二水中分白鹭洲。",
      "总为浮云能蔽日，长安不见使人愁。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "章台夜思",
    "notes": [],
    "author": "韦庄",
    "paragraphs": [
      "清瑟怨遥夜，绕弦风雨哀。孤灯闻楚角，残月下章台。",
      "芳草已云暮，故人殊未来。乡书不可寄，秋雁又南回。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "阙题",
    "notes": [],
    "author": "刘昚虚",
    "paragraphs": [
      "道由白云尽，春与青溪长。",
      "时有落花至，远随流水香。",
      "闲门向山路，深柳读书堂。",
      "幽映每白日，清辉照衣裳。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "春望",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "国破山河在，城春草木深。",
      "感时花溅泪，恨别鸟惊心。",
      "烽火连三月，家书抵万金。",
      "白头搔更短，浑欲不胜簪。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "春怨",
    "notes": [],
    "author": "刘方平",
    "paragraphs": [
      "纱窗日落渐黄昏，金屋无人见泪痕。",
      "寂寞空庭春欲晚，梨花满地不开门。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "乌衣巷",
    "notes": [],
    "author": "刘禹锡",
    "paragraphs": [
      "朱雀桥边野草花，乌衣巷口夕阳斜。",
      "旧时王谢堂前燕，飞入寻常百姓家。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "送陈章甫",
    "notes": [],
    "author": "李颀",
    "paragraphs": [
      "四月南风大麦黄，枣花未落桐叶长。",
      "青山朝别暮还见，嘶马出门思旧乡。",
      "陈侯立身何坦荡，虬须虎眉仍大颡。",
      "腹中贮书一万卷，不肯低头在草莽。",
      "东门酤酒饮我曹，心轻万事如鸿毛。",
      "醉卧不知白日暮，有时空望孤云高。",
      "长河浪头连天黑，津口停舟渡不得。",
      "郑国游人未及家，洛阳行子空叹息。",
      "闻道故林相识多，罢官昨日今如何。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "遣悲怀三首·其二",
    "notes": [
      "身后意--一作 ：身后事"
    ],
    "author": "元稹",
    "paragraphs": [
      "昔日戏言身后意，今朝都到眼前来。",
      "衣裳已施行看尽，针线犹存未忍开。",
      "尚想旧情怜婢仆，也曾因梦送钱财。",
      "诚知此恨人人有，贫贱夫妻百事哀。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "杂诗三首·其二",
    "notes": [],
    "author": "王维",
    "paragraphs": [
      "君自故乡来，应知故乡事。",
      "来日绮窗前，寒梅著花未？"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "九日登望仙台呈刘明府容",
    "notes": [],
    "author": "崔曙",
    "paragraphs": [
      "汉文皇帝有高台，此日登临曙色开。",
      "三晋云山皆北向，二陵风雨自东来。",
      "关门令尹谁能识，河上仙翁去不回。",
      "且欲近寻彭泽宰，陶然共醉菊花杯。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "泊秦淮",
    "notes": [],
    "author": "杜牧",
    "paragraphs": [
      "烟笼寒水月笼沙，夜泊秦淮近酒家。",
      "商女不知亡国恨，隔江犹唱《后庭花》。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "长相思·其一",
    "notes": [],
    "author": "李白",
    "paragraphs": [
      "长相思，在长安。",
      "络纬秋啼金井阑，微霜凄凄簟色寒。",
      "孤灯不明思欲绝，卷帷望月空长叹。",
      "美人如花隔云端！",
      "上有青冥之长天，下有渌水之波澜。",
      "天长路远魂飞苦，梦魂不到关山难。",
      "长相思，摧心肝！"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "听董大弹胡笳声兼寄语弄房给事",
    "notes": [
      "沈--通 ：沉"
    ],
    "author": "李颀",
    "paragraphs": [
      "蔡女昔造胡笳声，一弹一十有八拍。",
      "胡人落泪沾边草，汉使断肠对归客。",
      "古戍苍苍烽火寒，大荒沈沈飞雪白。",
      "先拂商弦后角羽，四郊秋叶惊摵摵。",
      "董夫子，通神明，深山窃听来妖精。",
      "言迟更速皆应手，将往复旋如有情。",
      "空山百鸟散还合，万里浮云阴且晴。",
      "嘶酸雏雁失群夜，断绝胡儿恋母声。",
      "川为静其波，鸟亦罢其鸣。",
      "乌孙部落家乡远，逻娑沙尘哀怨生。",
      "幽音变调忽飘洒，长风吹林雨堕瓦。",
      "迸泉飒飒飞木末，野鹿呦呦走堂下。",
      "长安城连东掖垣，凤凰池对青琐门。",
      "高才脱略名与利，日夕望君抱琴至。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "夏日南亭怀辛大",
    "notes": [],
    "author": "孟浩然",
    "paragraphs": [
      "山光忽西落，池月渐东上。",
      "散发乘夕凉，开轩卧闲敞。",
      "荷风送香气，竹露滴清响。",
      "欲取鸣琴弹，恨无知音赏。",
      "感此怀故人，中宵劳梦想。(",
      "中",
      "宵 一作：终)"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "凉州词二首·其一",
    "notes": [],
    "author": "王翰",
    "paragraphs": [
      "葡萄美酒夜光杯，欲饮琵琶马上催。",
      "醉卧沙场君莫笑，古来征战几人回？"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "北青萝",
    "notes": [],
    "author": "李商隐",
    "paragraphs": [
      "残阳西入崦，茅屋访孤僧。落叶人何在，寒云路几层。",
      "独敲初夜磬，闲倚一枝藤。世界微尘里，吾宁爱与憎。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "征人怨 / 征怨",
    "notes": [],
    "author": "柳中庸",
    "paragraphs": [
      "岁岁金河复玉关，朝朝马策与刀环。",
      "三春白雪归青冢，万里黄河绕黑山。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "和张仆射塞下曲·其二",
    "notes": [],
    "author": "卢纶",
    "paragraphs": [
      "林暗草惊风，将军夜引弓。",
      "平明寻白羽，没在石棱中。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "哥舒歌",
    "notes": [],
    "author": "西鄙人",
    "paragraphs": [
      "北斗七星高，哥舒夜带刀。",
      "至今窥牧马，不敢过临洮。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "行路难·其二",
    "notes": [],
    "author": "李白",
    "paragraphs": [
      "大道如青天，我独不得出。",
      "羞逐长安社中儿，赤鸡白雉赌梨栗。",
      "弹剑作歌奏苦声，曳裾王门不称情。",
      "淮阴市井笑韩信，汉朝公卿忌贾生。",
      "君不见昔时燕家重郭隗，拥篲折节无嫌猜。",
      "剧辛乐毅感恩分，输肝剖胆效英才。",
      "昭王白骨萦蔓草，谁人更扫黄金台？",
      "行路难，归去来！"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "赠卫八处士",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "人生不相见，动如参与商。",
      "今夕复何夕，共此灯烛光。",
      "少壮能几时，鬓发各已苍。",
      "访旧半为鬼，惊呼热中肠。",
      "焉知二十载，重上君子堂。",
      "昔别君未婚，儿女忽成行。",
      "怡然敬父执，问我来何方。",
      "问答未及已，儿女罗酒浆。",
      "夜雨剪春韭，新炊间黄粱。",
      "主称会面难，一举累十觞。",
      "十觞亦不醉，感子故意长。",
      "明日隔山岳，世事两茫茫。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "奉和圣制从蓬莱向兴庆阁道中留春雨中春望之作应制",
    "notes": [],
    "author": "王维",
    "paragraphs": [
      "渭水自萦秦塞曲，黄山旧绕汉宫斜。",
      "銮舆迥出千门柳，阁道回看上苑花。",
      "云里帝城双凤阙，雨中春树万人家。",
      "为乘阳气行时令，不是宸游玩物华。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "兵车行",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "车辚辚，马萧萧，行人弓箭各在腰。",
      "耶娘妻子走相送，尘埃不见咸阳桥。(",
      "耶",
      "娘 一作：“爷”)",
      "牵衣顿足拦道哭，哭声直上干云霄。",
      "道旁过者问行人，行人但云点行频。",
      "或从十五北防河，便至四十西营田。",
      "去时里正与裹头，归来头白还戍边。",
      "边庭流血成海水，武皇开边意未已。",
      "君不闻汉家山东二百州，千村万落生荆杞。",
      "纵有健妇把锄犁，禾生陇亩无东西。",
      "况复秦兵耐苦战，被驱不异犬与鸡。",
      "长者虽有问，役夫敢申恨？",
      "且如今年冬，未休关西卒。",
      "县官急索租，租税从何出？",
      "信知生男恶，反是生女好。",
      "生女犹得嫁比邻，生男埋没随百草。",
      "君不见，青海头，古来白骨无人收。",
      "新鬼烦冤旧鬼哭，天阴雨湿声啾啾！"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "喜见外弟又言别",
    "notes": [],
    "author": "李益",
    "paragraphs": [
      "十年离乱后，长大一相逢。",
      "问姓惊初见，称名忆旧容。",
      "别来沧海事，语罢暮天钟。",
      "明日巴陵道，秋山又几重。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "寄李儋元锡",
    "notes": [],
    "author": "韦应物",
    "paragraphs": [
      "去年花里逢君别，今日花开又一年。",
      "世事茫茫难自料，春愁黯黯独成眠。",
      "身多疾病思田里，邑有流亡愧俸钱。",
      "闻道欲来相问讯，西楼望月几回圆。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "春泛若耶溪",
    "notes": [],
    "author": "綦毋潜",
    "paragraphs": [
      "幽意无断绝，此去随所偶。",
      "晚风吹行舟，花路入溪口。",
      "际夜转西壑，隔山望南斗。",
      "潭烟飞溶溶，林月低向后。",
      "生事且弥漫，愿为持竿叟。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "夕次盱眙县",
    "notes": [],
    "author": "韦应物",
    "paragraphs": [
      "落帆逗淮镇，停舫临孤驿。浩浩风起波，冥冥日沉夕。",
      "人归山郭暗，雁下芦洲白。独夜忆秦关，听钟未眠客。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "初发扬子寄元大校书",
    "notes": [],
    "author": "韦应物",
    "paragraphs": [
      "凄凄去亲爱，泛泛入烟雾。",
      "归棹洛阳人，残钟广陵树。",
      "今朝此为别，何处还相遇。",
      "世事波上舟，沿洄安得住。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "和张仆射塞下曲·其三",
    "notes": [],
    "author": "卢纶",
    "paragraphs": [
      "月黑雁飞高，单于夜遁逃。",
      "欲将轻骑逐，大雪满弓刀。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "春雨",
    "notes": [],
    "author": "李商隐",
    "paragraphs": [
      "怅卧新春白袷衣，白门寥落意多违。",
      "红楼隔雨相望冷，珠箔飘灯独自归。",
      "远路应悲春晼晚，残霄犹得梦依稀。",
      "玉珰缄札何由达，万里云罗一雁飞。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "轮台歌奉送封大夫出师西征",
    "notes": [
      "雪片阔--一作 ：云片阔"
    ],
    "author": "岑参",
    "paragraphs": [
      "轮台城头夜吹角，轮台城北旄头落。",
      "羽书昨夜过渠黎，单于已在金山西。",
      "戍楼西望烟尘黑，汉军屯在轮台北。",
      "上将拥旄西出征，平明吹笛大军行。",
      "四边伐鼓雪海涌，三军大呼阴山动。",
      "虏塞兵气连云屯，战场白骨缠草根。",
      "剑河风急雪片阔，沙口石冻马蹄脱。",
      "亚相勤王甘苦辛，誓将报主静边尘。",
      "古来青史谁不见，今见功名胜古人。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "八阵图",
    "notes": [
      "名成--一作 ：名高"
    ],
    "author": "杜甫",
    "paragraphs": [
      "功盖三分国，名成八阵图。",
      "江流石不转，遗恨失吞吴。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "风雨",
    "notes": [],
    "author": "李商隐",
    "paragraphs": [
      "凄凉宝剑篇，羁泊欲穷年。",
      "黄叶仍风雨，青楼自管弦。",
      "新知遭薄俗，旧好隔良缘。",
      "心断新丰酒，销愁斗几千。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "早秋三首·其一",
    "notes": [],
    "author": "许浑",
    "paragraphs": [
      "遥夜泛清瑟，西风生翠萝。",
      "残萤栖玉露，早雁拂金河。",
      "高树晓还密，远山晴更多。",
      "淮南一叶下，自觉洞庭波。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "长信怨",
    "notes": [],
    "author": "王昌龄",
    "paragraphs": [
      "金井梧桐秋叶黄，珠帘不卷夜来霜。",
      "熏笼玉枕无颜色，卧听南宫清漏长。",
      "",
      "高殿秋砧响夜阑，霜深犹忆御衣寒。",
      "银灯青琐裁缝歇，还向金城明主看。",
      "",
      "奉帚平明金殿开，暂将团扇共徘徊。",
      "玉颜不及寒鸦色，犹带昭阳日影来。",
      "",
      "真成薄命久寻思，梦见君王觉后疑。",
      "火照西宫知夜饮，分明复道奉恩时。",
      "",
      "长信宫中秋月明，昭阳殿下捣衣声。",
      "白露堂中细草迹，红罗帐里不胜情。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "赠别二首",
    "notes": [],
    "author": "杜牧",
    "paragraphs": [
      "娉娉袅袅十三余，豆蔻梢头二月初。",
      "春风十里扬州路，卷上珠帘总不如。",
      "",
      "多情却似总无情，唯觉樽前笑不成。",
      "蜡烛有心还惜别，替人垂泪到天明。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "马嵬坡",
    "notes": [],
    "author": "郑畋",
    "paragraphs": [
      "玄宗回马杨妃死，云雨难忘日月新。",
      "终是圣明天子事，景阳宫井又何人。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "宿府",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "清秋幕府井梧寒，独宿江城蜡炬残。",
      "永夜角声悲自语，中天月色好谁看。",
      "风尘荏苒音书绝，关塞萧条行路难。",
      "已忍伶俜十年事，强移栖息一枝安。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "归嵩山作",
    "notes": [],
    "author": "王维",
    "paragraphs": [
      "清川带长薄，车马去闲闲。",
      "流水如有意，暮禽相与还。",
      "荒城临古渡，落日满秋山。",
      "迢递嵩高下，归来且闭关。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "塞下曲",
    "notes": [],
    "author": "王昌龄",
    "paragraphs": [
      "饮马渡秋水，水寒风似刀。",
      "平沙日未没，黯黯见临洮。",
      "昔日长城战，咸言意气高。",
      "黄尘足今古，白骨乱蓬蒿。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "孤雁二首·其二",
    "notes": [],
    "author": "崔涂",
    "paragraphs": [
      "几行归塞尽，念尔独何之。",
      "暮雨相呼失，寒塘欲下迟。",
      "渚云低暗度，关月冷相随。",
      "未必逢矰缴，孤飞自可疑。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "赠内人",
    "notes": [],
    "author": "张祜",
    "paragraphs": [
      "禁门宫树月痕过，媚眼惟看宿鹭窠。",
      "斜拔玉钗灯影畔，剔开红焰救飞蛾。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "集灵台·其一",
    "notes": [],
    "author": "张祜",
    "paragraphs": [
      "日光斜照集灵台，红树花迎晓露开。",
      "昨夜上皇新授箓，太真含笑入帘来。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "长沙过贾谊宅",
    "notes": [],
    "author": "刘长卿",
    "paragraphs": [
      "三年谪宦此栖迟，万古惟留楚客悲。",
      "秋草独寻人去后，寒林空见日斜时。",
      "汉文有道恩犹薄，湘水无情吊岂知。",
      "寂寂江山摇落处，怜君何事到天涯。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "秦中感秋寄远上人 / 秦中寄远上人",
    "notes": [],
    "author": "孟浩然",
    "paragraphs": [
      "一丘常欲卧，三径苦无资。",
      "北土非吾愿，东林怀我师。",
      "黄金燃桂尽，壮志逐年衰。",
      "日夕凉风至，闻蝉但益悲。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "观公孙大娘弟子舞剑器行",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "大历二年十月十九日，夔府别驾元持宅，见临颍李十二娘 舞剑器，壮其蔚跂，问其所师，曰：“余公孙大娘弟子也。” 开元三载，余尚童稚，记于郾城观公孙氏，舞剑器浑脱， 浏漓顿挫，独出冠时，自高头宜春梨园二伎坊内人洎外供奉， 晓是舞者，圣文神武皇帝初，公孙一人而已。 玉貌锦衣，况余白首，今兹弟子，亦非盛颜。 既辨其由来，知波澜莫二，抚事慷慨，聊为《剑器行》。 昔者吴人张旭，善草书帖，数常于邺县见公孙大娘舞西河剑器，自此草书长进，豪荡感激，即公孙可知矣。",
      "",
      "昔有佳人公孙氏，一舞剑器动四方。",
      "观者如山色沮丧，天地为之久低昂。",
      "霍如羿射九日落，矫如群帝骖龙翔。",
      "来如雷霆收震怒，罢如江海凝清光。",
      "绛唇珠袖两寂寞，晚有弟子传芬芳。",
      "临颍美人在白帝，妙舞此曲神扬扬。",
      "与余问答既有以，感时抚事增惋伤。",
      "先帝侍女八千人，公孙剑器初第一。",
      "五十年间似反掌，风尘倾动昏王室。",
      "梨园弟子散如烟，女乐余姿映寒日。",
      "金粟堆前木已拱，瞿唐石城草萧瑟。",
      "玳筵急管曲复终，乐极哀来月东出。",
      "老夫不知其所往，足茧荒山转愁疾。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "春宫曲",
    "notes": [],
    "author": "王昌龄",
    "paragraphs": [
      "昨夜风开露井桃，未央前殿月轮高。",
      "平阳歌舞新承宠，帘外春寒赐锦袍。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "走马川行奉送出师西征 / 走马川行奉送封大夫出师西征",
    "notes": [],
    "author": "岑参",
    "paragraphs": [
      "君不见走马川行雪海边，平沙莽莽黄入天。",
      "轮台九月风夜吼，一川碎石大如斗，随风满地石乱走。",
      "匈奴草黄马正肥，金山西见烟尘飞，汉家大将西出师。",
      "将军金甲夜不脱，半夜军行戈相拨，风头如刀面如割。",
      "马毛带雪汗气蒸，五花连钱旋作冰，幕中草檄砚水凝。",
      "虏骑闻之应胆慑，料知短兵不敢接，车师西门伫献捷。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "月夜忆舍弟",
    "notes": [
      "边秋--一作 :秋边"
    ],
    "author": "杜甫",
    "paragraphs": [
      "戍鼓断人行，边秋一雁声。",
      "露从今夜白，月是故乡明。",
      "有弟皆分散，无家问死生。",
      "寄书长不达，况乃未休兵。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "望洞庭湖赠张丞相 / 临洞庭湖赠张丞相",
    "notes": [],
    "author": "孟浩然",
    "paragraphs": [
      "八月湖水平，涵虚混太清。",
      "气蒸云梦泽，波撼岳阳城。",
      "欲济无舟楫，端居耻圣明。",
      "坐观垂钓者，徒有羡鱼情。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "酬张少府",
    "notes": [],
    "author": "王维",
    "paragraphs": [
      "晚年唯好静，万事不关心。自顾无长策，空知返旧林。",
      "松风吹解带，山月照弹琴。君问穷通理，渔歌入浦深。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "饯别王十一南游",
    "notes": [],
    "author": "刘长卿",
    "paragraphs": [
      "望君烟水阔，挥手泪沾巾。",
      "飞鸟没何处，青山空向人。",
      "长江一帆远，落日五湖春。",
      "谁见汀洲上，相思愁白蘋。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "黄鹤楼 / 登黄鹤楼",
    "notes": [],
    "author": "崔颢",
    "paragraphs": [
      "昔人已乘黄鹤去，此地空余黄鹤楼。",
      "黄鹤一去不复返，白云千载空悠悠。",
      "晴川历历汉阳树，芳草萋萋鹦鹉洲。",
      "日暮乡关何处是？烟波江上使人愁。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "贼退示官吏",
    "notes": [],
    "author": "元结",
    "paragraphs": [
      "癸卯岁，西原贼入道州，焚烧杀掠，几尽而去。明年，贼又攻永破邵，不犯此州边鄙而退。岂力能制敌与？盖蒙其伤怜而已。诸使何为忍苦征敛，故作诗一篇以示官吏。",
      "",
      "昔岁逢太平，山林二十年。",
      "泉源在庭户，洞壑当门前。",
      "井税有常期，日晏犹得眠。",
      "忽然遭世变，数岁亲戎旃。",
      "今来典斯郡，山夷又纷然。",
      "城小贼不屠，人贫伤可怜。",
      "是以陷邻境，此州独见全。",
      "使臣将王命，岂不如贼焉？",
      "今彼征敛者，迫之如火煎。",
      "谁能绝人命，以作时世贤！",
      "思欲委符节，引竿自刺船。",
      "将家就鱼麦，归老江湖边。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "晚次鄂州",
    "notes": [],
    "author": "卢纶",
    "paragraphs": [
      "云开远见汉阳城，犹是孤帆一日程。",
      "估客昼眠知浪静，舟人夜语觉潮生。",
      "三湘愁鬓逢秋色，万里归心对月明。",
      "旧业已随征战尽，更堪江上鼓鼙声。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "关山月",
    "notes": [
      "望边邑--一作 ：望边色"
    ],
    "author": "李白",
    "paragraphs": [
      "明月出天山，苍茫云海间。",
      "长风几万里，吹度玉门关。",
      "汉下白登道，胡窥青海湾。",
      "由来征战地，不见有人还。",
      "戍客望边邑，思归多苦颜。",
      "高楼当此夜，叹息未应闲。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "秋日赴阙题潼关驿楼 / 行次潼关逢魏扶东归",
    "notes": [],
    "author": "许浑",
    "paragraphs": [
      "红叶晚萧萧，长亭酒一瓢。",
      "残云归太华，疏雨过中条。",
      "树色随山迥，河声入海遥。",
      "帝乡明日到，犹自梦渔樵。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "终南山",
    "notes": [],
    "author": "王维",
    "paragraphs": [
      "太乙近天都，连山接海隅。",
      "白云回望合，青霭入看无。",
      "分野中峰变，阴晴众壑殊。",
      "欲投人处宿，隔水问樵夫。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "赠别",
    "notes": [],
    "author": "杜牧",
    "paragraphs": [
      "多情却似总无情，唯觉樽前笑不成。",
      "蜡烛有心还惜别，替人垂泪到天明。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "子夜吴歌·夏歌",
    "notes": [],
    "author": "李白",
    "paragraphs": [
      "镜湖三百里，菡萏发荷花。",
      "五月西施采，人看隘若耶。",
      "回舟不待月，归去越王家。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "草 / 赋得古原草送别",
    "notes": [],
    "author": "白居易",
    "paragraphs": [
      "离离原上草，一岁一枯荣。",
      "野火烧不尽，春风吹又生。",
      "远芳侵古道，晴翠接荒城。",
      "又送王孙去，萋萋满别情。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "集灵台·其二",
    "notes": [],
    "author": "张祜",
    "paragraphs": [
      "虢国夫人承主恩，平明骑马入宫门。",
      "却嫌脂粉污颜色，淡扫蛾眉朝至尊。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "近试上张籍水部 / 近试上张水部 / 闺意献张水部",
    "notes": [],
    "author": "朱庆馀",
    "paragraphs": [
      "洞房昨夜停红烛，待晓堂前拜舅姑。",
      "妆罢低声问夫婿，画眉深浅入时无。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "谷口书斋寄杨补阙",
    "notes": [],
    "author": "钱起",
    "paragraphs": [
      "泉壑带茅茨，云霞生薜帷。",
      "竹怜新雨后，山爱夕阳时。",
      "闲鹭栖常早，秋花落更迟。",
      "家僮扫萝径，昨与故人期。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "出塞二首·其一",
    "notes": [],
    "author": "王昌龄",
    "paragraphs": [
      "秦时明月汉时关，万里长征人未还。",
      "但使龙城飞将在，不教胡马度阴山。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "酬程延秋夜即事见赠",
    "notes": [],
    "author": "韩翃",
    "paragraphs": [
      "长簟迎风早，空城澹月华。",
      "星河秋一雁，砧杵夜千家。",
      "节候看应晚，心期卧亦赊。",
      "向来吟秀句，不觉已鸣鸦。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "秋夕",
    "notes": [
      "天阶--一作 ：天街",
      "卧看--一作 ：坐看"
    ],
    "author": "杜牧",
    "paragraphs": [
      "银烛秋光冷画屏，轻罗小扇扑流萤。",
      "天阶夜色凉如水，卧看牵牛织女星。",
      ""
    ],
    "dynasty": "唐代"
  },
  {
    "title": "为有",
    "notes": [],
    "author": "李商隐",
    "paragraphs": [
      "为有云屏无限娇，凤城寒尽怕春宵。",
      "无端嫁得金龟婿，辜负香衾事早朝。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "寄全椒山中道士",
    "notes": [],
    "author": "韦应物",
    "paragraphs": [
      "今朝郡斋冷，忽念山中客。",
      "涧底束荆薪，归来煮白石。",
      "欲持一瓢酒，远慰风雨夕。",
      "落叶满空山，何处寻行迹。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "闺怨",
    "notes": [],
    "author": "王昌龄",
    "paragraphs": [
      "闺中少妇不知愁，春日凝妆上翠楼。",
      "忽见陌头杨柳色，悔教夫婿觅封侯。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "夜泊牛渚怀古",
    "notes": [
      "挂帆席--一作 “洞庭去”， 扬帆驶船。"
    ],
    "author": "李白",
    "paragraphs": [
      "牛渚西江夜，青天无片云。",
      "登舟望秋月，空忆谢将军。",
      "余亦能高咏，斯人不可闻。",
      "明朝挂帆席，枫叶落纷纷。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "登岳阳楼",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "昔闻洞庭水，今上岳阳楼。",
      "吴楚东南坼，乾坤日夜浮。",
      "亲朋无一字，老病有孤舟。",
      "戎马关山北，凭轩涕泗流。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "登柳州城楼寄漳汀封连四州",
    "notes": [],
    "author": "柳宗元",
    "paragraphs": [
      "城上高楼接大荒，海天愁思正茫茫。",
      "惊风乱飐芙蓉水，密雨斜侵薜荔墙。",
      "岭树重遮千里目，江流曲似九回肠。",
      "共来百越文身地，犹自音书滞一乡。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "野望",
    "notes": [
      "惟--通 ：唯"
    ],
    "author": "杜甫",
    "paragraphs": [
      "西山白雪三城戍，南浦清江万里桥。",
      "海内风尘诸弟隔，天涯涕泪一身遥。",
      "惟将迟暮供多病，未有涓埃答圣朝。",
      "跨马出郊时极目，不堪人事日萧条。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "遣悲怀三首·其一",
    "notes": [
      "荩箧--一作 ：画箧"
    ],
    "author": "元稹",
    "paragraphs": [
      "谢公最小偏怜女，自嫁黔娄百事乖。",
      "顾我无衣搜荩箧，泥他沽酒拔金钗。",
      "野蔬充膳甘长藿，落叶添薪仰古槐。",
      "今日俸钱过十万，与君营奠复营斋。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "除夜 / 巴山道中除夜书怀",
    "notes": [],
    "author": "崔涂",
    "paragraphs": [
      "迢递三巴路，羁危万里身。",
      "乱山残雪夜，孤烛异乡人。",
      "渐与骨肉远，转于僮仆亲。",
      "那堪正飘泊，明日岁华新。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "送友人",
    "notes": [],
    "author": "李白",
    "paragraphs": [
      "青山横北郭，白水绕东城。",
      "此地一为别，孤蓬万里征。",
      "浮云游子意，落日故人情。",
      "挥手自兹去，萧萧班马鸣。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "静夜思",
    "notes": [],
    "author": "李白",
    "paragraphs": [
      "床前明月光，疑是地上霜。",
      "举头望明月，低头思故乡。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "长安遇冯著",
    "notes": [],
    "author": "韦应物",
    "paragraphs": [
      "客从东方来，衣上灞陵雨。问客何为来，采山因买斧。",
      "冥冥花正开，飏飏燕新乳。昨别今已春，鬓丝生几缕。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "山石",
    "notes": [
      "鞿--一作 ：靰"
    ],
    "author": "韩愈",
    "paragraphs": [
      "山石荦确行径微，黄昏到寺蝙蝠飞。",
      "升堂坐阶新雨足，芭蕉叶大栀子肥。",
      "僧言古壁佛画好，以火来照所见稀。",
      "铺床拂席置羹饭，疏粝亦足饱我饥。",
      "夜深静卧百虫绝，清月出岭光入扉。",
      "天明独去无道路，出入高下穷烟霏。",
      "山红涧碧纷烂漫，时见松枥皆十围。",
      "当流赤足踏涧石，水声激激风吹衣。",
      "人生如此自可乐，岂必局束为人鞿？",
      "嗟哉吾党二三子，安得至老不更归。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "春宫怨",
    "notes": [],
    "author": "杜荀鹤",
    "paragraphs": [
      "早被婵娟误，欲妆临镜慵。承恩不在貌，教妾若为容。",
      "风暖鸟声碎，日高花影重。年年越溪女，相忆采芙蓉。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "至德二载甫自京金光门出问道归凤翔乾元初…有悲往事",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "此道昔归顺，西郊胡正繁。",
      "至今残破胆，应有未招魂。",
      "近得归京邑，移官岂至尊。",
      "无才日衰老，驻马望千门。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "同从弟南斋玩月忆山阴崔少府",
    "notes": [],
    "author": "王昌龄",
    "paragraphs": [
      "高卧南斋时，开帷月初吐。",
      "清辉澹水木，演漾在窗户。",
      "冉冉几盈虚，澄澄变今古。",
      "美人清江畔，是夜越吟苦。",
      "千里共如何，微风吹兰杜。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "哀王孙",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "长安城头头白乌，夜飞延秋门上呼。",
      "又向人家啄大屋，屋底达官走避胡。",
      "金鞭断折九马死，骨肉不得同驰驱。",
      "腰下宝玦青珊瑚，可怜王孙泣路隅。",
      "问之不肯道姓名，但道困苦乞为奴。",
      "已经百日窜荆棘，身上无有完肌肤。",
      "高帝子孙尽隆准，龙种自与常人殊。",
      "豺狼在邑龙在野，王孙善保千金躯。",
      "不敢长语临交衢，且为王孙立斯须。",
      "昨夜东风吹血腥，东来橐驼满旧都。",
      "朔方健儿好身手，昔何勇锐今何愚。",
      "窃闻天子已传位，圣德北服南单于。",
      "花门剺面请雪耻，慎勿出口他人狙。",
      "哀哉王孙慎勿疏，五陵佳气无时无。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "登鹳雀楼",
    "notes": [],
    "author": "王之涣",
    "paragraphs": [
      "白日依山尽，黄河入海流。",
      "欲穷千里目，更上一层楼。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "听安万善吹觱篥歌",
    "notes": [],
    "author": "李颀",
    "paragraphs": [
      "南山截竹为觱篥，此乐本自龟兹出。",
      "流传汉地曲转奇，凉州胡人为我吹。",
      "傍邻闻者多叹息，远客思乡皆泪垂。",
      "世人解听不解赏，长飙风中自来往。",
      "枯桑老柏寒飕飗，九雏鸣凤乱啾啾。",
      "龙吟虎啸一时发，万籁百泉相与秋。",
      "忽然更作渔阳掺，黄云萧条白日暗。",
      "变调如闻杨柳春，上林繁花照眼新。",
      "岁夜高堂列明烛，美酒一杯声一曲。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "无题·重帏深下莫愁堂",
    "notes": [],
    "author": "李商隐",
    "paragraphs": [
      "重帏深下莫愁堂，卧后清宵细细长。",
      "神女生涯原是梦，小姑居处本无郎。",
      "风波不信菱枝弱，月露谁教桂叶香。",
      "直道相思了无益，未妨惆怅是清狂。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "嫦娥",
    "notes": [],
    "author": "李商隐",
    "paragraphs": [
      "云母屏风烛影深，长河渐落晓星沉。",
      "嫦娥应悔偷灵药，碧海青天夜夜心。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "月夜",
    "notes": [],
    "author": "刘方平",
    "paragraphs": [
      "更深月色半人家，北斗阑干南斗斜。",
      "今夜偏知春气暖，虫声新透绿窗纱。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "春晓",
    "notes": [],
    "author": "孟浩然",
    "paragraphs": [
      "春眠不觉晓，处处闻啼鸟。",
      "夜来风雨声，花落知多少。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "终南别业",
    "notes": [],
    "author": "王维",
    "paragraphs": [
      "中岁颇好道，晚家南山陲。",
      "兴来每独往，胜事空自知。",
      "行到水穷处，坐看云起时。",
      "偶然值林叟，谈笑无还期。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "贾生",
    "notes": [],
    "author": "李商隐",
    "paragraphs": [
      "宣室求贤访逐臣，贾生才调更无伦。",
      "可怜夜半虚前席，不问苍生问鬼神。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "和张仆射塞下曲·其四",
    "notes": [],
    "author": "卢纶",
    "paragraphs": [
      "野幕敞琼筵，羌戎贺劳旋。",
      "醉和金甲舞，雷鼓动山川。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "咏蝉 / 在狱咏蝉",
    "notes": [
      "客思深--一作 ：客思侵",
      "不堪--一作 ：那堪"
    ],
    "author": "骆宾王",
    "paragraphs": [
      "西陆蝉声唱，南冠客思深。",
      "不堪玄鬓影，来对白头吟。",
      "露重飞难进，风多响易沉。",
      "无人信高洁，谁为表予心？"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "问刘十九",
    "notes": [],
    "author": "白居易",
    "paragraphs": [
      "绿蚁新醅酒，红泥小火炉。",
      "晚来天欲雪，能饮一杯无？"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "汉江临泛 / 汉江临眺",
    "notes": [],
    "author": "王维",
    "paragraphs": [
      "楚塞三湘接，荆门九派通。",
      "江流天地外，山色有无中。",
      "郡邑浮前浦，波澜动远空。",
      "襄阳好风日，留醉与山翁。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "黄鹤楼送孟浩然之广陵",
    "notes": [
      "唯--通 ：惟"
    ],
    "author": "李白",
    "paragraphs": [
      "故人西辞黄鹤楼，烟花三月下扬州。",
      "孤帆远影碧空尽，唯见长江天际流。 "
    ],
    "dynasty": "唐代"
  },
  {
    "title": "渡荆门送别",
    "notes": [],
    "author": "李白",
    "paragraphs": [
      "渡远荆门外，来从楚国游。",
      "山随平野尽，江入大荒流。",
      "月下飞天镜，云生结海楼。",
      "仍怜故乡水，万里送行舟。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "感遇十二首·其一",
    "notes": [],
    "author": "张九龄",
    "paragraphs": [
      "兰叶春葳蕤，桂华秋皎洁。",
      "欣欣此生意，自尔为佳节。",
      "谁知林栖者，闻风坐相悦。",
      "草木有本心，何求美人折！"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "蜀道难",
    "notes": [
      "攀援--一作 ：攀缘",
      "也如此--一作 ：也若此"
    ],
    "author": "李白",
    "paragraphs": [
      "噫吁嚱，危乎高哉！蜀道之难，难于上青天！",
      "蚕丛及鱼凫，开国何茫然！",
      "尔来四万八千岁，不与秦塞通人烟。",
      "西当太白有鸟道，可以横绝峨眉巅。",
      "地崩山摧壮士死，然后天梯石栈相钩连。",
      "上有六龙回日之高标，下有冲波逆折之回川。",
      "黄鹤之飞尚不得过，猿猱欲度愁攀援。",
      "青泥何盘盘，百步九折萦岩峦。",
      "扪参历井仰胁息，以手抚膺坐长叹。",
      "问君西游何时还？畏途巉岩不可攀。",
      "但见悲鸟号古木，雄飞雌从绕林间。",
      "又闻子规啼夜月，愁空山。",
      "蜀道之难,难于上青天，使人听此凋朱颜！",
      "连峰去天不盈尺，枯松倒挂倚绝壁。",
      "飞湍瀑流争喧豗，砯崖转石万壑雷。",
      "其险也如此，嗟尔远道之人胡为乎来哉！",
      "剑阁峥嵘而崔嵬，一夫当关，万夫莫开。",
      "所守或匪亲，化为狼与豺。",
      "朝避猛虎，夕避长蛇；磨牙吮血，杀人如麻。",
      "锦城虽云乐，不如早还家。",
      "蜀道之难,难于上青天，侧身西望长咨嗟！"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "金缕衣",
    "notes": [
      "惜取--一作 ：须取",
      "花开--一作 ：有花"
    ],
    "author": "佚名",
    "paragraphs": [
      "劝君莫惜金缕衣，劝君惜取少年时。",
      "花开堪折直须折，莫待无花空折枝。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "九月九日忆山东兄弟",
    "notes": [],
    "author": "王维",
    "paragraphs": [
      "独在异乡为异客，每逢佳节倍思亲。",
      "遥知兄弟登高处，遍插茱萸少一人。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "凉思",
    "notes": [],
    "author": "李商隐",
    "paragraphs": [
      "客去波平槛，蝉休露满枝。永怀当此节，倚立自移时。",
      "北斗兼春远，南陵寓使迟。天涯占梦数，疑误有新知。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "咏怀古迹五首·其一",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "支离东北风尘际，漂泊西南天地间。",
      "三峡楼台淹日月，五溪衣服共云山。",
      "羯胡事主终无赖，词客哀时且未还。",
      "庾信平生最萧瑟，暮年诗赋动江关。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "夜上受降城闻笛",
    "notes": [],
    "author": "李益",
    "paragraphs": [
      "回乐峰前沙似雪，受降城外月如霜。(回乐",
      "峰",
      "一作：回乐",
      "烽",
      "）",
      "不知何处吹芦管，一夜征人尽望乡。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "客夜与故人偶集 / 江乡故人偶集客舍",
    "notes": [],
    "author": "戴叔伦",
    "paragraphs": [
      "天秋月又满，城阙夜千重。",
      "还作江南会，翻疑梦里逢。",
      "风枝惊暗鹊，露草覆寒蛩。",
      "羁旅长堪醉，相留畏晓钟。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "崔九欲往南山马上口号与别 / 留别王维 / 送崔九",
    "notes": [],
    "author": "裴迪",
    "paragraphs": [
      "归山深浅去，须尽丘壑美。",
      "莫学武陵人，暂游桃源里。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "送别",
    "notes": [],
    "author": "王维",
    "paragraphs": [
      "下马饮君酒，问君何所之？",
      "君言不得意，归卧南山陲。",
      "但去莫复问，白云无尽时。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "江州重别薛六柳八二员外",
    "notes": [],
    "author": "刘长卿",
    "paragraphs": [
      "生涯岂料承优诏，世事空知学醉歌。",
      "江上月明胡雁过，淮南木落楚山多。",
      "寄身且喜沧洲近，顾影无如白发何。",
      "今日龙钟人共弃，愧君犹遣慎风波。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "送綦毋潜落第还乡",
    "notes": [],
    "author": "王维",
    "paragraphs": [
      "圣代无隐者，英灵尽来归。",
      "遂令东山客，不得顾采薇。",
      "既至金门远，孰云吾道非。",
      "江淮度寒食，京洛缝春衣。",
      "置酒长安道，同心与我违。",
      "行当浮桂棹，未几拂荆扉。",
      "远树带行客，孤城当落晖。",
      "吾谋适不用，勿谓知音稀。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "送僧归日本",
    "notes": [],
    "author": "钱起",
    "paragraphs": [
      "上国随缘住，来途若梦行。",
      "浮天沧海远，去世法舟轻。",
      "水月通禅寂，鱼龙听梵声。",
      "惟怜一灯影，万里眼中明。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "长干行·君家何处住",
    "notes": [],
    "author": "崔颢",
    "paragraphs": [
      "君家何处住，妾住在横塘。",
      "停船暂借问，或恐是同乡。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "题破山寺后禅院",
    "notes": [
      "惟--一作 但",
      "俱--一作 都"
    ],
    "author": "常建",
    "paragraphs": [
      "清晨入古寺，初日照高林。",
      "曲径通幽处，禅房花木深。",
      "山光悦鸟性，潭影空人心。",
      "万籁此俱寂，惟余钟磬音。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "洛阳女儿行",
    "notes": [],
    "author": "王维",
    "paragraphs": [
      "洛阳女儿对门居，才可颜容十五余。",
      "良人玉勒乘骢马，侍女金盘脍鲤鱼。",
      "画阁朱楼尽相望，红桃绿柳垂檐向。",
      "罗帷送上七香车，宝扇迎归九华帐。",
      "狂夫富贵在青春，意气骄奢剧季伦。",
      "自怜碧玉亲教舞，不惜珊瑚持与人。",
      "春窗曙灭九微火，九微片片飞花琐。",
      "戏罢曾无理曲时，妆成祗是熏香坐。",
      "城中相识尽繁华，日夜经过赵李家。",
      "谁怜越女颜如玉，贫贱江头自浣纱。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "奉和中书舍人贾至早朝大明宫",
    "notes": [],
    "author": "岑参",
    "paragraphs": [
      "鸡鸣紫陌曙光寒，莺啭皇州春色阑。",
      "金阙晓钟开万户，玉阶仙仗拥千官。",
      "花迎剑珮星初落，柳拂旌旗露未干。",
      "独有凤凰池上客，阳春一曲和皆难。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "夜雨寄北",
    "notes": [],
    "author": "李商隐",
    "paragraphs": [
      "君问归期未有期，巴山夜雨涨秋池。",
      "何当共剪西窗烛，却话巴山夜雨时。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "自夏口至鹦鹉洲夕望岳阳寄源中丞",
    "notes": [
      "独树--一作 ：独戍"
    ],
    "author": "刘长卿",
    "paragraphs": [
      "汀洲无浪复无烟，楚客相思益渺然。",
      "汉口夕阳斜渡鸟，洞庭秋水远连天。",
      "孤城背岭寒吹角，独树临江夜泊船。",
      "贾谊上书忧汉室，长沙谪去古今怜。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "送李少府贬峡中王少府贬长沙",
    "notes": [],
    "author": "高适",
    "paragraphs": [
      "嗟君此别意何如，驻马衔杯问谪居。",
      "巫峡啼猿数行泪，衡阳归雁几封书。",
      "青枫江上秋帆远，白帝城边古木疏。",
      "圣代即今多雨露，暂时分手莫踌躇。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "鹿柴",
    "notes": [],
    "author": "王维",
    "paragraphs": [
      "空山不见人，但闻人语响。",
      "返景入深林，复照青苔上。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "寄人",
    "notes": [],
    "author": "张泌",
    "paragraphs": [
      "别梦依依到谢家，小廊回合曲阑斜。",
      "多情只有春庭月，犹为离人照落花。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "无题·飒飒东风细雨来",
    "notes": [],
    "author": "李商隐",
    "paragraphs": [
      "飒飒东风细雨来，芙蓉塘外有轻雷。",
      "金蟾啮锁烧香入，玉虎牵丝汲井回。",
      "贾氏窥帘韩掾少，宓妃留枕魏王才。",
      "春心莫共花争发，一寸相思一寸灰！"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "子夜吴歌·秋歌",
    "notes": [],
    "author": "李白",
    "paragraphs": [
      "长安一片月，万户捣衣声。",
      "秋风吹不尽，总是玉关情。",
      "何日平胡虏，良人罢远征。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "听筝",
    "notes": [],
    "author": "李端",
    "paragraphs": [
      "鸣筝金粟柱，素手玉房前。",
      "欲得周郎顾，时时误拂弦。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "长相思·其二",
    "notes": [
      "欲素--一作 ：如素",
      "断肠--一作 ：肠断"
    ],
    "author": "李白",
    "paragraphs": [
      "日色欲尽花含烟，月明欲素愁不眠。",
      "赵瑟初停凤凰柱，蜀琴欲奏鸳鸯弦。",
      "此曲有意无人传，愿随春风寄燕然。",
      "忆君迢迢隔青天，昔日横波目，今作流泪泉。",
      "不信妾断肠，归来看取明镜前。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "云阳馆与韩绅宿别",
    "notes": [],
    "author": "司空曙",
    "paragraphs": [
      "故人江海别，几度隔山川。",
      "乍见翻疑梦，相悲各问年。",
      "孤灯寒照雨，深竹暗浮烟。",
      "更有明朝恨，离杯惜共传。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "将进酒",
    "notes": [
      "倾耳听--一作 ：侧耳听",
      "不足贵--一作 ：何足贵",
      "不复醒--一作 ：不愿醒/不用醒",
      "古来--一作 ：自古",
      "惟--通 ：唯"
    ],
    "author": "李白",
    "paragraphs": [
      "君不见，黄河之水天上来，奔流到海不复回。",
      "君不见，高堂明镜悲白发，朝如青丝暮成雪。",
      "人生得意须尽欢，莫使金樽空对月。",
      "天生我材必有用，千金散尽还复来。",
      "烹羊宰牛且为乐，会须一饮三百杯。",
      "岑夫子，丹丘生，将进酒，杯莫停。",
      "与君歌一曲，请君为我倾耳听。",
      "钟鼓馔玉不足贵，但愿长醉不复醒。",
      "古来圣贤皆寂寞，惟有饮者留其名。",
      "陈王昔时宴平乐，斗酒十千恣欢谑。",
      "主人何为言少钱，径须沽取对君酌。",
      "五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "乐游原 / 登乐游原",
    "notes": [],
    "author": "李商隐",
    "paragraphs": [
      "向晚意不适，驱车登古原。",
      "夕阳无限好，只是近黄昏。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "登高",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "风急天高猿啸哀，渚清沙白鸟飞回。",
      "无边落木萧萧下，不尽长江滚滚来。",
      "万里悲秋常作客，百年多病独登台。",
      "艰难苦恨繁霜鬓，潦倒新停浊酒杯。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "望岳",
    "notes": [
      "曾--通 ：层"
    ],
    "author": "杜甫",
    "paragraphs": [
      "岱宗夫如何？齐鲁青未了。",
      "造化钟神秀，阴阳割昏晓。",
      "荡胸生曾云，决眦入归鸟。",
      "会当凌绝顶，一览众山小。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "宫词 / 宫中词",
    "notes": [],
    "author": "朱庆馀",
    "paragraphs": [
      "寂寂花时闭院门，美人相并立琼轩。",
      "含情欲说宫中事，鹦鹉前头不敢言。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "寄韩谏议注",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "今我不乐思岳阳，身欲奋飞病在床。",
      "美人娟娟隔秋水，濯足洞庭望八荒。",
      "鸿飞冥冥日月白，青枫叶赤天雨霜。",
      "玉京群帝集北斗，或骑麒麟翳凤凰。",
      "芙蓉旌旗烟雾落，影动倒景摇潇湘。",
      "星宫之君醉琼浆，羽人稀少不在旁。",
      "似闻昨者赤松子，恐是汉代韩张良。",
      "昔随刘氏定长安，帷幄未改神惨伤。",
      "国家成败吾岂敢，色难腥腐餐枫香。",
      "周南留滞古所惜，南极老人应寿昌。",
      "美人胡为隔秋水，焉得置之贡玉堂。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "玉阶怨",
    "notes": [
      "水晶--一作 水精"
    ],
    "author": "李白",
    "paragraphs": [
      "玉阶生白露，夜久侵罗袜。",
      "却下水晶帘，玲珑望秋月。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "赠阙下裴舍人",
    "notes": [],
    "author": "钱起",
    "paragraphs": [
      "二月黄莺飞上林，春城紫禁晓阴阴。",
      "长乐钟声花外尽，龙池柳色雨中深。",
      "阳和不散穷途恨，霄汉长怀捧日心。",
      "献赋十年犹未遇，羞将白发对华簪。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "题大庾岭北驿",
    "notes": [],
    "author": "宋之问",
    "paragraphs": [
      "阳月南飞雁，传闻至此回。",
      "我行殊未已，何日复归来。",
      "江静潮初落，林昏瘴不开。",
      "明朝望乡处，应见陇头梅。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "寒食",
    "notes": [],
    "author": "韩翃",
    "paragraphs": [
      "春城无处不飞花，寒食东风御柳斜。",
      "日暮汉宫传蜡烛，轻烟散入五侯家。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "无题·来是空言去绝踪",
    "notes": [],
    "author": "李商隐",
    "paragraphs": [
      "来是空言去绝踪，月斜楼上五更钟。",
      "梦为远别啼难唤，书被催成墨未浓。",
      "蜡照半笼金翡翠，麝熏微度绣芙蓉。",
      "刘郎已恨蓬山远，更隔蓬山一万重！"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "相思",
    "notes": [],
    "author": "王维",
    "paragraphs": [
      "红豆生南国，春来发几枝。",
      "愿君多采撷，此物最相思。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "阁夜",
    "notes": [
      "依依--一作 音书",
      "几家--一作 千家"
    ],
    "author": "杜甫",
    "paragraphs": [
      "岁暮阴阳催短景，天涯霜雪霁寒宵。",
      "五更鼓角声悲壮，三峡星河影动摇。",
      "野哭几家闻战伐，夷歌数处起渔樵。",
      "卧龙跃马终黄土，人事依依漫寂寥。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "芙蓉楼送辛渐",
    "notes": [],
    "author": "王昌龄",
    "paragraphs": [
      "寒雨连江夜入吴，平明送客楚山孤。",
      "洛阳亲友如相问，一片冰心在玉壶。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "回乡偶书二首·其一",
    "notes": [
      "鬓毛衰--一作 ：鬓毛催"
    ],
    "author": "贺知章",
    "paragraphs": [
      "少小离家老大回，乡音无改鬓毛衰。",
      "儿童相见不相识，笑问客从何处来。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "古意呈补阙乔知之 / 独不见",
    "notes": [],
    "author": "沈佺期",
    "paragraphs": [
      "卢家少妇郁金堂，海燕双栖玳瑁梁。",
      "九月寒砧催木叶，十年征戍忆辽阳。",
      "白狼河北音书断，丹凤城南秋夜长。",
      "谁谓含愁独不见，更教明月照流黄。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "感遇十二首·其四",
    "notes": [],
    "author": "张九龄",
    "paragraphs": [
      "孤鸿海上来，池潢不敢顾。",
      "侧见双翠鸟，巢在三珠树。",
      "矫矫珍木巅，得无金丸惧？",
      "美服患人指，高明逼神恶。",
      "今我游冥冥，弋者何所慕！"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "瑶池",
    "notes": [],
    "author": "李商隐",
    "paragraphs": [
      "瑶池阿母绮窗开，黄竹歌声动地哀。",
      "八骏日行三万里，穆王何事不重来。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "登楼",
    "notes": [
      "梁甫--一作 ：梁父"
    ],
    "author": "杜甫",
    "paragraphs": [
      "花近高楼伤客心，万方多难此登临。",
      "锦江春色来天地，玉垒浮云变古今。",
      "北极朝廷终不改，西山寇盗莫相侵。",
      "可怜后主还祠庙，日暮聊为《梁甫吟》。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "别房太尉墓",
    "notes": [],
    "author": "杜甫",
    "paragraphs": [
      "他乡复行役，驻马别孤坟。",
      "近泪无干土，低空有断云。",
      "对棋陪谢傅，把剑觅徐君。",
      "唯见林花落，莺啼送客闻。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "和张仆射塞下曲·其一",
    "notes": [],
    "author": "卢纶",
    "paragraphs": [
      "鹫翎金仆姑，燕尾绣蝥弧。",
      "独立扬新令，千营共一呼。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "滁州西涧",
    "notes": [],
    "author": "韦应物",
    "paragraphs": [
      "独怜幽草涧边生，上有黄鹂深树鸣。",
      "春潮带雨晚来急，野渡无人舟自横。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "西施咏",
    "notes": [],
    "author": "王维",
    "paragraphs": [
      "艳色天下重，西施宁久微。",
      "朝为越溪女，暮作吴宫妃。",
      "贱日岂殊众，贵来方悟稀。",
      "邀人傅香粉，不自著罗衣。",
      "君宠益娇态，君怜无是非。",
      "当时浣纱伴，莫得同车归。",
      "持谢邻家子，效颦安可希。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "和贾舍人早朝大明宫之作",
    "notes": [],
    "author": "王维",
    "paragraphs": [
      "绛帻鸡人送晓筹，尚衣方进翠云裘。",
      "九天阊阖开宫殿，万国衣冠拜冕旒。",
      "日色才临仙掌动，香烟欲傍衮龙浮。",
      "朝罢须裁五色诏，佩声归向凤池头。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "塞上曲·其一",
    "notes": [],
    "author": "王昌龄",
    "paragraphs": [
      "蝉鸣空桑林，八月萧关道。",
      "出塞入塞寒，处处黄芦草。",
      "从来幽并客，皆共尘沙老。",
      "莫学游侠儿，矜夸紫骝好。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "李端公 / 送李端",
    "notes": [
      "自堪悲--一作 ：正堪悲"
    ],
    "author": "卢纶",
    "paragraphs": [
      "故关衰草遍，离别自堪悲。",
      "路出寒云外，人归暮雪时。",
      "少孤为客早，多难识君迟。",
      "掩泪空相向，风尘何处期。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "子夜吴歌·冬歌",
    "notes": [],
    "author": "李白",
    "paragraphs": [
      "明朝驿使发，一夜絮征袍。",
      "素手抽针冷，那堪把剪刀。",
      "裁缝寄远道，几日到临洮。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "遣悲怀三首·其三",
    "notes": [],
    "author": "元稹",
    "paragraphs": [
      "闲坐悲君亦自悲，百年都是几多时。",
      "邓攸无子寻知命，潘岳悼亡犹费词。",
      "同穴窅冥何所望，他生缘会更难期。",
      "惟将终夜常开眼，报答平生未展眉。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "长相思·惜梅",
    "notes": [],
    "author": "刘克庄",
    "paragraphs": [
      "寒相催。暖相催。催了开时催谢时。丁宁花放迟。",
      "角声吹。笛声吹。吹了南枝吹北枝。明朝成雪飞。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "浪淘沙·莫上玉楼看",
    "notes": [],
    "author": "韩疁",
    "paragraphs": [
      "莫上玉楼看。花雨斑斑。四垂罗幕护朝寒。燕子不知人去也，飞认阑干。",
      "回首几关山。后会应难。相逢祗有梦魂间，可奈梦随春漏短，不到江南。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "浣溪沙·蓼岸风多橘柚香",
    "notes": [],
    "author": "孙光宪",
    "paragraphs": [
      "蓼岸风多橘柚香。江边一望楚天长。片帆烟际闪孤光。",
      "目送征鸿飞杳杳，思随流水去茫茫。兰红波碧忆潇湘。"
    ],
    "dynasty": "五代"
  },
  {
    "title": "清平乐·村居",
    "notes": [
      "亡--通 ：无"
    ],
    "author": "辛弃疾",
    "paragraphs": [
      "茅檐低小，溪上青青草。",
      "醉里吴音相媚好，白发谁家翁媪？",
      "大儿锄豆溪东，中儿正织鸡笼。",
      "最喜小儿亡赖，溪头卧剥莲蓬。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "燕山亭·北行见杏花",
    "notes": [
      "闲院--一作 ：问院"
    ],
    "author": "赵佶",
    "paragraphs": [
      "裁剪冰绡，轻叠数重，淡著胭脂匀注。新样靓妆，艳溢香融，羞杀蕊珠宫女。易得凋零，更多少、无情风雨。愁苦。闲院落凄凉，几番春暮。",
      "凭寄离恨重重，者双燕，何曾会人言语。天遥地远，万水千山，知他故宫何处。怎不思量，除梦里、有时曾去。无据，和梦也新来不做。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "清平乐·雨晴烟晚",
    "notes": [],
    "author": "冯延巳",
    "paragraphs": [
      "雨晴烟晚。绿水新池满。双燕飞来垂柳院，小阁画帘高卷。",
      "黄昏独倚朱阑。西南新月眉弯。砌下落花风起，罗衣特地春寒。"
    ],
    "dynasty": "五代"
  },
  {
    "title": "思帝乡·春日游",
    "notes": [],
    "author": "韦庄",
    "paragraphs": [
      "春日游，杏花吹满头。陌上谁家年少足风流？",
      "妾拟将身嫁与一生休。纵被无情弃，不能羞。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "霜天晓角·题采石蛾眉亭",
    "notes": [],
    "author": "韩元吉",
    "paragraphs": [
      "倚天绝壁，直下江千尺。天际两蛾凝黛，愁与恨，几时极！",
      "暮潮风正急，酒阑闻塞笛。试问谪仙何处？青山外，远烟碧。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "浪淘沙令·帘外雨潺潺",
    "notes": [],
    "author": "李煜",
    "paragraphs": [
      "帘外雨潺潺，春意阑珊。罗衾不耐五更寒。梦里不知身是客，一晌贪欢。",
      "独自莫凭栏，无限江山，别时容易见时难。流水落花春去也，天上人间。"
    ],
    "dynasty": "五代"
  },
  {
    "title": "贺新郎·西湖",
    "notes": [],
    "author": "文及翁",
    "paragraphs": [
      "一勺西湖水。渡江来、百年歌舞，百年酣醉。回首洛阳花世界，烟渺黍离之地。更不复、新亭堕泪。簇乐红妆摇画艇，问中流、击楫谁人是。千古恨，几时洗。(花世界 一作：花石尽）",
      "余生自负澄清志。更有谁、磻溪未遇，傅岩未起。国事如今谁倚仗，衣带一江而已。便都道、江神堪恃。借问孤山林处士，但掉头、笑指梅花蕊。天下事，可知矣。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "贺新郎·甚矣吾衰矣",
    "notes": [],
    "author": "辛弃疾",
    "paragraphs": [
      "邑中园亭，仆皆为赋此词。一日，独坐停云，水声山色，竞来相娱。意溪山欲援例者，遂作数语，庶几仿佛渊明思亲友之意云。",
      "",
      "甚矣吾衰矣。怅平生、交游零落，只今馀几！白发空垂三千丈，一笑人间万事。问何物、能令公喜？我见青山多妩媚，料青山见我应如是。情与貌，略相似。",
      "一尊搔首东窗里。想渊明《停云》诗就，此时风味。江左沉酣求名者，岂识浊醪妙理。回首叫、云飞风起。不恨古人吾不见，恨古人不见吾狂耳。知我者，二三子。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "苏幕遮·怀旧",
    "notes": [
      "留人睡--一作 ：留人醉"
    ],
    "author": "范仲淹",
    "paragraphs": [
      "碧云天，黄叶地。秋色连波，波上寒烟翠。山映斜阳天接水。芳草无情，更在斜阳外。",
      "黯乡魂，追旅思。夜夜除非，好梦留人睡。明月楼高休独倚。酒入愁肠，化作相思泪。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "诉衷情·宝月山作",
    "notes": [],
    "author": "仲殊",
    "paragraphs": [
      "清波门外拥轻衣。杨花相送飞。西湖又还春晚，水树乱莺啼。闲院宇，小帘帏。晚初归。钟声已过，篆香才点，月到门时。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "凤箫吟·锁离愁",
    "notes": [],
    "author": "韩缜",
    "paragraphs": [
      "锁离愁，连绵无际，来时陌上初熏。绣帏人念远，暗垂珠泪，泣送征轮。长亭长在眼，更重重、远水孤云。但望极楼高，尽日目断王孙。",
      "消魂。池塘别后，曾行处、绿妒轻裙。恁时携素手，乱花飞絮里，缓步香茵。朱颜空自改，向年年、芳意长新。遍绿野，嬉游醉眠，莫负青春。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "临江仙·饮散离亭西去",
    "notes": [],
    "author": "徐昌图",
    "paragraphs": [
      "饮散离亭西去，浮生长恨飘蓬。回头烟柳渐重重。淡云孤雁远，寒日暮天红。",
      "今夜画船何处？潮平淮月朦胧。酒醒人静奈愁浓。残灯孤枕梦，轻浪五更风。"
    ],
    "dynasty": "五代"
  },
  {
    "title": "安公子·远岸收残雨",
    "notes": [],
    "author": "柳永",
    "paragraphs": [
      "远岸收残雨。雨残稍觉江天暮。拾翠汀洲人寂静，立双双鸥鹭。望几点、渔灯隐映蒹葭浦。停画桡、两两舟人语。道去程今夜，遥指前村烟树。",
      "游宦成羁旅。短樯吟倚闲凝伫。万水千山迷远近，想乡关何处。自别后、风亭月榭孤欢聚。刚断肠、惹得离情苦。听杜宇声声，劝人不如归去。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "忆江南·衔泥燕",
    "notes": [],
    "author": "牛峤",
    "paragraphs": [
      "衔泥燕，飞到画堂前。占得杏梁安稳处，体轻唯有主人怜，堪羡好因缘。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "摊破浣溪沙·菡萏香销翠叶残",
    "notes": [
      "栏--通 ：阑",
      "何限恨--一作 ：无限恨"
    ],
    "author": "李璟",
    "paragraphs": [
      "菡萏香销翠叶残，西风愁起绿波间。还与韶光共憔悴，不堪看。",
      "细雨梦回鸡塞远，小楼吹彻玉笙寒。多少泪珠何限恨，倚栏干。 "
    ],
    "dynasty": "五代"
  },
  {
    "title": "虞美人·听雨",
    "notes": [],
    "author": "蒋捷",
    "paragraphs": [
      "少年听雨歌楼上。红烛昏罗帐。壮年听雨客舟中。江阔云低、断雁叫西风。",
      "而今听雨僧庐下。鬓已星星也。悲欢离合总无情。一任阶前、点滴到天明。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "长相思·汴水流",
    "notes": [],
    "author": "白居易",
    "paragraphs": [
      "汴水流，泗水流，流到瓜州古渡头。吴山点点愁。",
      "思悠悠，恨悠悠，恨到归时方始休。月明人倚楼。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "菩萨蛮·劝君今夜须沉醉",
    "notes": [],
    "author": "韦庄",
    "paragraphs": [
      "劝君今夜须沉醉，尊前莫话明朝事。珍重主人心，酒深情亦深。",
      "须愁春漏短，莫诉金杯满。遇酒且呵呵，人生能几何。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "永遇乐·京口北固亭怀古",
    "notes": [],
    "author": "辛弃疾",
    "paragraphs": [
      "千古江山，英雄无觅，孙仲谋处。舞榭歌台，风流总被雨打风吹去。斜阳草树，寻常巷陌，人道寄奴曾住。想当年，金戈铁马，气吞万里如虎。",
      "元嘉草草，封狼居胥，赢得仓皇北顾。四十三年，望中犹记，烽火扬州路。可堪回首，佛狸祠下，一片神鸦社鼓。凭谁问，廉颇老矣，尚能饭否？"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "眼儿媚·迟迟春日弄轻柔",
    "notes": [],
    "author": "朱淑真",
    "paragraphs": [
      "迟迟春日弄轻柔，花径暗香流。清明过了，不堪回首，云锁朱楼。",
      "午窗睡起莺声巧，何处唤春愁？绿杨影里，海棠亭畔，红杏梢头。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "浪淘沙·借问江潮与海水",
    "notes": [],
    "author": "白居易",
    "paragraphs": [
      "借问江潮与海水，何似君情与妾心？",
      "相恨不如潮有信，相思始觉海非深。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "摸鱼儿·更能消几番风雨",
    "notes": [
      "怕--一作 ：恨"
    ],
    "author": "辛弃疾",
    "paragraphs": [
      "淳熙己亥，自湖北漕移湖南，同官王正之置酒小山亭，为赋。",
      "",
      "更能消、几番风雨，匆匆春又归去。惜春长怕花开早，何况落红无数。春且住，见说道、天涯芳草无归路。怨春不语。算只有殷勤，画檐蛛网，尽日惹飞絮。 (无归路 一作：迷归路）",
      "长门事，准拟佳期又误。蛾眉曾有人妒。千金纵买相如赋，脉脉此情谁诉？君莫舞，君不见、玉环飞燕皆尘土！闲愁最苦！休去倚危栏，斜阳正在，烟柳断肠处。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "暗香·旧时月色",
    "notes": [],
    "author": "姜夔",
    "paragraphs": [
      "辛亥之冬，余载雪诣石湖。止既月，授简索句，且征新声，作此两曲，石湖把玩不已，使二妓肆习之，音节谐婉，乃名之曰《暗香》、《疏影》。",
      "",
      "旧时月色，算几番照我，梅边吹笛？唤起玉人，不管清寒与攀摘。何逊而今渐老，都忘却春风词笔。但怪得竹外疏花，香冷入瑶席。",
      "江国，正寂寂，叹寄与路遥，夜雪初积。翠尊易泣，红萼无言耿相忆。长记曾携手处，千树压、西湖寒碧。又片片、吹尽也，几时见得？"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "三五七言 / 秋风词",
    "notes": [],
    "author": "李白",
    "paragraphs": [
      "秋风清，秋月明，",
      "落叶聚还散，寒鸦栖复惊。",
      "相思相见知何日？此时此夜难为情！"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "天仙子·水调数声持酒听",
    "notes": [],
    "author": "张先",
    "paragraphs": [
      "水调数声持酒听，午醉醒来愁未醒。送春春去几时回？临晚镜，伤流景，往事后期空记省。",
      "沙上并禽池上瞑，云破月来花弄影。重重帘幕密遮灯，风不定，人初静，明日落红应满径。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "桂枝香·金陵怀古",
    "notes": [
      "归帆--一作 ：征帆"
    ],
    "author": "王安石",
    "paragraphs": [
      "登临送目，正故国晚秋，天气初肃。千里澄江似练，翠峰如簇。归帆去棹残阳里，背西风，酒旗斜矗。彩舟云淡，星河鹭起，画图难足。",
      "念往昔，繁华竞逐，叹门外楼头，悲恨相续。千古凭高对此，谩嗟荣辱。六朝旧事随流水，但寒烟衰草凝绿。至今商女，时时犹唱，后庭遗曲。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "满江红·写怀",
    "notes": [
      "栏--通 ：阑",
      "壮志--一作 ：壮士",
      "兰山缺--一作 ：兰山阙"
    ],
    "author": "岳飞",
    "paragraphs": [
      "怒发冲冠，凭栏处、潇潇雨歇。抬望眼，仰天长啸，壮怀激烈。三十功名尘与土，八千里路云和月。莫等闲，白了少年头，空悲切！",
      "靖康耻，犹未雪。臣子恨，何时灭！驾长车，踏破贺兰山缺。壮志饥餐胡虏肉，笑谈渴饮匈奴血。待从头、收拾旧山河，朝天阙。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "摸鱼儿·东皋寓居",
    "notes": [],
    "author": "晁补之",
    "paragraphs": [
      "买陂塘、旋栽杨柳，依稀淮岸江浦。东皋嘉雨新痕涨，沙觜鹭来鸥聚。堪爱处最好是、一川夜月光流渚。无人独舞。任翠幄张天，柔茵藉地，酒尽未能去。",
      "青绫被，莫忆金闺故步。儒冠曾把身误。弓刀千骑成何事，荒了邵平瓜圃。君试觑。满青镜、星星鬓影今如许。功名浪语。便似得班超，封侯万里，归计恐迟暮。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "卜算子·见也如何暮",
    "notes": [],
    "author": "石孝友",
    "paragraphs": [
      "见也如何暮。别也如何遽。别也应难见也难，后会难凭据。",
      "去也如何去。住也如何住。住也应难去也难，此际难分付。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "水调歌头·和庞佑父",
    "notes": [],
    "author": "张孝祥",
    "paragraphs": [
      "雪洗虏尘静，风约楚云留。何人为写悲壮，吹角古城楼。湖海平生豪气，关塞如今风景，剪烛看吴钩。剩喜燃犀处，骇浪与天浮。",
      "忆当年，周与谢，富春秋，小乔初嫁，香囊未解，勋业故优游。赤壁矶头落照，肥水桥边衰草，渺渺唤人愁。我欲乘风去，击楫誓中流。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "饮马歌·边头春未到",
    "notes": [],
    "author": "曹勋",
    "paragraphs": [
      "兀术每遇对阵之际，吹此则鏖战无还期也",
      "边头春未到。雪满交河道。暮沙明残照。塞烽云间小。断鸿悲。陇月低。泪湿征衣悄。岁华老。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "临江仙·暮春",
    "notes": [],
    "author": "赵长卿",
    "paragraphs": [
      "过尽征鸿来尽燕，故园消息茫然。一春憔悴有谁怜。怀家寒食夜，中酒落花天。",
      "见说江头春浪渺，殷勤欲送归船。别来此处最萦牵。短篷南浦雨，疏柳断桥烟。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "虞美人·疏篱曲径田家小",
    "notes": [],
    "author": "周邦彦",
    "paragraphs": [
      "疏篱曲径田家小。云树开清晓。天寒山色有无中。野外一声钟起、送孤蓬。",
      "添衣策马寻亭堠。愁抱惟宜酒。菰蒲睡鸭占陂塘。纵被行人惊散、又成双。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "水调歌头·游览",
    "notes": [],
    "author": "黄庭坚",
    "paragraphs": [
      "瑶草一何碧，春入武陵溪。溪上桃花无数，枝上有黄鹂。我欲穿花寻路，直入白云深处，浩气展虹霓。只恐花深里，红露湿人衣。",
      "坐玉石，倚玉枕，拂金徽。谪仙何处？无人伴我白螺杯。我为灵芝仙草，不为朱唇丹脸，长啸亦何为？醉舞下山去，明月逐人归。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "湘春夜月·近清明",
    "notes": [],
    "author": "黄孝迈",
    "paragraphs": [
      "近清明。翠禽枝上消魂。可惜一片清歌，都付与黄昏。欲共柳花低诉，怕柳花轻薄，不解伤春。念楚乡旅宿，柔情别绪，谁与温存。",
      "空樽夜泣，青山不语，残月当门。翠玉楼前，惟是有、一波湘水，摇荡湘云。天长梦短，问甚时、重见桃根。这次第，算人间没个并刀，剪断心上愁痕。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "浣溪沙·簌簌衣巾落枣花",
    "notes": [
      "缲--通 ：缫"
    ],
    "author": "苏轼",
    "paragraphs": [
      "徐门石潭谢雨，道上作五首。潭在城东二十里，常与泗水增减清浊相应。",
      "",
      "簌簌衣巾落枣花，村南村北响缲车，牛衣古柳卖黄瓜。",
      "酒困路长惟欲睡，日高人渴漫思茶。敲门试问野人家。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "西江月·顷在黄州",
    "notes": [
      "由肱--一作 ：曲肱"
    ],
    "author": "苏轼",
    "paragraphs": [
      "顷在黄州，春夜行蕲水中，过酒家饮，酒醉，乘月至一溪桥上，解鞍，由肱醉卧少休。及觉已晓，乱山攒拥，流水锵然，疑非尘世也。书此语桥柱上。",
      "",
      "照野弥弥浅浪，横空隐隐层霄。障泥未解玉骢骄，我欲醉眠芳草。",
      "可惜一溪风月，莫教踏碎琼瑶。解鞍欹枕绿杨桥，杜宇一声春晓。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "八六子·倚危亭",
    "notes": [],
    "author": "秦观",
    "paragraphs": [
      "倚危亭。恨如芳草，萋萋刬尽还生。念柳外青骢别后，水边红袂分时，怆然暗惊。",
      "无端天与娉婷。夜月一帘幽梦，春风十里柔情。怎奈向、欢娱渐随流水，素弦声断，翠绡香减，那堪片片飞花弄晚，蒙蒙残雨笼晴。正销凝。黄鹂又啼数声。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "夜游宫·叶下斜阳照水",
    "notes": [],
    "author": "周邦彦",
    "paragraphs": [
      "叶下斜阳照水。卷轻浪、沈沈千里。桥上酸风射眸子。立多时，看黄昏，灯火市。",
      "古屋寒窗底。听几片、井桐飞坠。不恋单衾再三起。有谁知，为萧娘，书一纸。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "卜算子·咏梅",
    "notes": [],
    "author": "陆游",
    "paragraphs": [
      "驿外断桥边，寂寞开无主。已是黄昏独自愁，更著风和雨。",
      "无意苦争春，一任群芳妒。零落成泥碾作尘，只有香如故。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "巫山一段云·古庙依青嶂",
    "notes": [],
    "author": "李珣",
    "paragraphs": [
      "古庙依青嶂，行宫枕碧流。水声山色锁妆楼。往事思悠悠。",
      "云雨朝还暮，烟花春复秋。啼猿何必近孤舟。行客自多愁。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "诉衷情·当年万里觅封侯",
    "notes": [],
    "author": "陆游",
    "paragraphs": [
      "当年万里觅封侯，匹马戍梁州。关河梦断何处？尘暗旧貂裘。",
      "胡未灭，鬓先秋，泪空流。此生谁料，心在天山，身老沧洲。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "长相思·一重山",
    "notes": [],
    "author": "李煜",
    "paragraphs": [
      "一重山，两重山。山远天高烟水寒，相思枫叶丹。",
      "菊花开，菊花残。塞雁高飞人未还，一帘风月闲。"
    ],
    "dynasty": "五代"
  },
  {
    "title": "少年游·并刀如水",
    "notes": [],
    "author": "周邦彦",
    "paragraphs": [
      "并刀如水，吴盐胜雪，纤手破新橙。锦幄初温，兽烟不断，相对坐调笙。",
      "低声问向谁行宿，城上已三更。马滑霜浓，不如休去，直是少人行。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "鹧鸪天·一点残红欲尽时",
    "notes": [],
    "author": "周紫芝",
    "paragraphs": [
      "一点残红欲尽时。乍凉秋气满屏帏。梧桐叶上三更雨，叶叶声声是别离。",
      "调宝瑟，拨金猊。那时同唱鹧鸪词。如今风雨西楼夜，不听清歌也泪垂。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "沁园春·答九华叶贤良",
    "notes": [],
    "author": "刘克庄",
    "paragraphs": [
      "一卷阴符，二石硬弓，百斤宝刀。更玉花骢喷，鸣鞭电抹，乌丝阑展，醉墨龙跳。牛角书生，虬髯豪客，谈笑皆堪折简招。依稀记，曾请缨系粤，草檄征辽。",
      "当年目视云霄。谁信道凄凉今折腰。怅燕然未勒，南归草草，长安不见，北望迢迢。老去胸中，有些磊块，歌罢犹须著酒浇。休休也，但帽边鬓改，镜里颜凋。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "青门饮·寄宠人",
    "notes": [],
    "author": "时彦",
    "paragraphs": [
      "胡马嘶风，汉旗翻雪，彤云又吐，一竿残照。古木连空，乱山无数，行尽暮沙衰草。星斗横幽馆，夜无眠、灯花空老。雾浓香鸭，冰凝泪烛，霜天难晓。",
      "长记小妆才了，一杯未尽，离怀多少。醉里秋波，梦中朝雨，都是醒时烦恼。料有牵情处，忍思量、耳边曾道。甚时跃马归来，认得迎门轻笑。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "玉楼春·桃溪不作从容住",
    "notes": [],
    "author": "周邦彦",
    "paragraphs": [
      "桃溪不作从容住，秋藕绝来无续处。当时相候赤阑桥，今日独寻黄叶路。",
      "烟中列岫青无数，雁背夕阳红欲暮。人如风后入江云，情似雨馀粘地絮。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "杵声齐·砧面莹",
    "notes": [],
    "author": "贺铸",
    "paragraphs": [
      "砧面莹，杵声齐。捣就征衣泪墨题。寄到玉关应万里，戍人犹在玉关西。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "减字木兰花·竞渡",
    "notes": [],
    "author": "黄裳",
    "paragraphs": [
      "红旗高举，飞出深深杨柳渚。鼓击春雷，直破烟波远远回。",
      "欢声震地，惊退万人争战气。金碧楼西，衔得锦标第一归。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "相见欢·林花谢了春红",
    "notes": [
      "相留--一作 ：留人"
    ],
    "author": "李煜",
    "paragraphs": [
      "林花谢了春红，太匆匆。无奈朝来寒雨晚来风。",
      "胭脂泪，相留醉，几时重。自是人生长恨水长东。"
    ],
    "dynasty": "五代"
  },
  {
    "title": "风入松·听风听雨过清明",
    "notes": [],
    "author": "吴文英",
    "paragraphs": [
      "听风听雨过清明。愁草瘗花铭。楼前绿暗分携路，一丝柳、一寸柔情。料峭春寒中酒，交加晓梦啼莺。",
      "西园日日扫林亭。依旧赏新晴。黄蜂频扑秋千索，有当时、纤手香凝。惆怅双鸳不到，幽阶一夜苔生。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "丑奴儿·书博山道中壁",
    "notes": [],
    "author": "辛弃疾",
    "paragraphs": [
      "少年不识愁滋味，爱上层楼。爱上层楼。为赋新词强说愁。",
      "而今识尽愁滋味，欲说还休。欲说还休。却道天凉好个秋。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "洞仙歌·雪云散尽",
    "notes": [],
    "author": "李元膺",
    "paragraphs": [
      "一年春物，惟梅柳间意味最深。至莺花烂漫时，则春已衰迟，使人无复新意。予作《洞仙歌》，使探春者歌之，无后时之悔。",
      "",
      "雪云散尽，放晓晴池院。杨柳于人便青眼。更风流多处，一点梅心，相映远，约略颦轻笑浅。",
      "一年春好处，不在浓芳，小艳疏香最娇软。到清明时候，百紫千红，花正乱，已失春风一半。早占取韶光共追游，但莫管春寒，醉红自暖。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "清平乐·春归何处",
    "notes": [],
    "author": "黄庭坚",
    "paragraphs": [
      "春归何处。寂寞无行路。若有人知春去处。唤取归来同住。",
      "春无踪迹谁知。除非问取黄鹂。百啭无人能解，因风飞过蔷薇。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "醉花阴·薄雾浓云愁永昼",
    "notes": [
      "橱--通 ：厨",
      "人比--一作 ：人似",
      "销--一作 ：消"
    ],
    "author": "李清照",
    "paragraphs": [
      "薄雾浓云愁永昼，瑞脑消金兽。佳节又重阳，玉枕纱橱，半夜凉初透。",
      "东篱把酒黄昏后，有暗香盈袖。莫道不销魂，帘卷西风，人比黄花瘦。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "蝶恋花·伫倚危楼风细细",
    "notes": [
      "阑--通 栏"
    ],
    "author": "柳永",
    "paragraphs": [
      "伫倚危楼风细细，望极春愁，黯黯生天际。草色烟光残照里，无言谁会凭阑意。",
      "拟把疏狂图一醉，对酒当歌，强乐还无味。衣带渐宽终不悔，为伊消得人憔悴。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "临江仙·夜饮东坡醒复醉",
    "notes": [],
    "author": "苏轼",
    "paragraphs": [
      "夜饮东坡醒复醉，归来仿佛三更。家童鼻息已雷鸣。敲门都不应，倚杖听江声。",
      "长恨此身非我有，何时忘却营营。夜阑风静縠纹平。小舟从此逝，江海寄余生。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "玉楼春·春思",
    "notes": [],
    "author": "严仁",
    "paragraphs": [
      "春风只在园西畔。荠菜花繁胡蝶乱。冰池晴绿照还空，香径落红吹已断。",
      "意长翻恨游丝短。尽日相思罗带缓。宝奁明月不欺人，明日归来君试看。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "虞美人·春花秋月何时了",
    "notes": [],
    "author": "李煜",
    "paragraphs": [
      "春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。",
      "雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流。"
    ],
    "dynasty": "五代"
  },
  {
    "title": "捣练子令·深院静",
    "notes": [],
    "author": "李煜",
    "paragraphs": [
      "深院静，小庭空，断续寒砧断续风。",
      "无奈夜长人不寐，数声和月到帘栊。"
    ],
    "dynasty": "五代"
  },
  {
    "title": "定风波·自春来",
    "notes": [],
    "author": "柳永",
    "paragraphs": [
      "自春来、惨绿愁红，芳心是事可可。日上花梢，莺穿柳带，犹压香衾卧。暖酥消、腻云亸，终日厌厌倦梳裹。无那。恨薄情一去，音书无个。",
      "早知恁么，悔当初、不把雕鞍锁。向鸡窗，只与蛮笺象管，拘束教吟课。镇相随、莫抛躲，针线闲拈伴伊坐。和我，免使年少，光阴虚过。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "一剪梅·舟过吴江",
    "notes": [
      "渡--一作 ：度",
      "桥--一作 ：渡"
    ],
    "author": "蒋捷",
    "paragraphs": [
      "一片春愁待酒浇。江上舟摇，楼上帘招。秋娘渡与泰娘桥，风又飘飘，雨又萧萧。",
      "何日归家洗客袍？银字笙调，心字香烧。流光容易把人抛，红了樱桃，绿了芭蕉。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "南乡子·登京口北固亭有怀",
    "notes": [],
    "author": "辛弃疾",
    "paragraphs": [
      "何处望神州？满眼风光北固楼。千古兴亡多少事？悠悠。不尽长江滚滚流。",
      "年少万兜鍪，坐断东南战未休。天下英雄谁敌手？曹刘。生子当如孙仲谋。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "石州引·薄雨初寒",
    "notes": [],
    "author": "贺铸",
    "paragraphs": [
      "薄雨初寒，斜照弄晴，春意空阔。长亭柳色才黄，远客一枝先折。烟横水际，映带几点归鸦，东风销尽龙沙雪。还记出关来，恰而今时节。",
      "将发。画楼芳酒，红泪清歌，顿成轻别。已是经年，杳杳音尘多绝。欲知方寸，共有几许清愁，芭蕉不展丁香结。枉望断天涯，两厌厌风月。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "如梦令·常记溪亭日暮",
    "notes": [],
    "author": "李清照",
    "paragraphs": [
      "常记溪亭日暮，沉醉不知归路。",
      "兴尽晚回舟，误入藕花深处。",
      "争渡，争渡，惊起一滩鸥鹭。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "浪淘沙·把酒祝东风",
    "notes": [],
    "author": "欧阳修",
    "paragraphs": [
      "把酒祝东风，且共从容。垂杨紫陌洛城东。总是当时携手处，游遍芳丛。",
      "聚散苦匆匆，此恨无穷。今年花胜去年红。可惜明年花更好，知与谁同？"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "如梦令·昨夜雨疏风骤",
    "notes": [],
    "author": "李清照",
    "paragraphs": [
      "昨夜雨疏风骤，浓睡不消残酒。试问卷帘人，却道海棠依旧。知否，知否？应是绿肥红瘦。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "念奴娇·闹红一舸",
    "notes": [
      "愁人--一作 ：愁入"
    ],
    "author": "姜夔",
    "paragraphs": [
      "余客武陵。湖北宪治在焉：古城野水，乔木参天。余与二三友，日荡舟其间。薄荷花而饮，意象幽闲，不类人境。秋水且涸。荷叶出地寻丈，因列坐其下，上不见日。清风徐来，绿云自动。间于疏处，窥见游人画船，亦一乐也。朅来吴兴。数得相羊荷花中，又夜泛西湖，光景奇绝。故以此句写之。",
      "",
      "闹红一舸，记来时，尝与鸳鸯为侣，三十六陂人未到，水佩风裳无数。翠叶吹凉，玉容消酒，更洒菇蒲雨。嫣然摇动，冷香飞上诗句。",
      "日暮，青盖亭亭，情人不见，争忍凌波去？只恐舞衣寒易落，愁人西风南浦。高柳垂阴，老鱼吹浪，留我花间住。田田多少，几回沙际归路。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "忆秦娥·与君别",
    "notes": [],
    "author": "房舜卿",
    "paragraphs": [
      "与君别。相思一夜梅花发。梅花发。凄凉南浦，断桥斜月。",
      "盈盈微步凌波袜。东风笑倚天涯阔。天涯阔。一声羌管，暮云愁绝。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "南歌子·天上星河转",
    "notes": [],
    "author": "李清照",
    "paragraphs": [
      "天上星河转，人间帘幕垂。凉生枕簟泪痕滋。起解罗衣聊问、夜何其。",
      "翠贴莲蓬小，金销藕叶稀。旧时天气旧时衣。只有情怀不似、旧家时。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "莺啼序·春晚感怀",
    "notes": [],
    "author": "吴文英",
    "paragraphs": [
      "残寒正欺病酒，掩沉香绣户。燕来晚、飞入西城，似说春事迟暮。画船载、清明过却，晴烟冉冉吴宫树。念羁情、游荡随风，化为轻絮。",
      "",
      "十载西湖，傍柳系马，趁娇尘软雾。溯红渐招入仙溪，锦儿偷寄幽素，倚银屏、春宽梦窄，断红湿、歌纨金缕。暝堤空，轻把斜阳，总还鸥鹭。",
      "",
      "幽兰旋老，杜若还生，水乡尚寄旅。别后访、六桥无信，事往花委，瘗玉埋香，几番风雨。长波妒盼，遥山羞黛，渔灯分影春江宿。记当时、短楫桃根渡，青楼仿佛，临分败壁题诗，泪墨惨淡尘土。危亭望极，草色天涯，叹鬓侵半苎。暗点检、离痕欢唾，尚染鲛绡，亸凤迷归，破鸾慵舞。殷勤待写，书中长恨，蓝霞辽海沉过雁。漫相思、弹入哀筝柱。伤心千里江南，怨曲重招，断魂在否？"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "江神子·杏花村馆酒旗风",
    "notes": [],
    "author": "谢逸",
    "paragraphs": [
      "杏花村馆酒旗风。水溶溶。扬残红。野渡舟横，杨柳绿阴浓。望断江南山色远，人不见，草连空。",
      "夕阳楼外晚烟笼。粉香融。淡眉峰。记得年时，相见画屏中。只有关山今夜月，千里外，素光同。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "兰陵王·丙子送春",
    "notes": [],
    "author": "刘辰翁",
    "paragraphs": [
      "送春去。春去人间无路。秋千外，芳草连天，谁遣风沙暗南浦。依依甚意绪。漫忆海门飞絮。乱鸦过，斗转城荒，不见来时试灯处。",
      "春去。最谁苦。但箭雁沈边，梁燕无主。杜鹃声里长门暮。想玉树凋土，泪盘如露。咸阳送客屡回顾。斜日未能度。",
      "春去。尚来否。正江令恨别，庾信愁赋。二人皆北去。苏堤尽日风和雨。叹神游故国，花记前度。人生流落，顾孺子，共夜语。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "临江仙·梦后楼台高锁",
    "notes": [
      "蘋--通 ：苹"
    ],
    "author": "晏几道",
    "paragraphs": [
      "梦后楼台高锁，酒醒帘幕低垂。去年春恨却来时。落花人独立，微雨燕双飞。",
      "记得小蘋初见，两重心字罗衣。琵琶弦上说相思。当时明月在，曾照彩云归。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "西江月·新秋写兴",
    "notes": [],
    "author": "刘辰翁",
    "paragraphs": [
      "天上低昂仰旧，人间儿女成狂。夜来处处试新妆。却是人间天上。",
      "不觉新凉似水，相思两鬓如霜。梦从海底跨枯桑。阅尽银河风浪。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "满江红·题南京夷山驿",
    "notes": [],
    "author": "王清惠",
    "paragraphs": [
      "太液芙蓉，浑不似、旧时颜色。 曾记得、春风雨露，玉楼金阙。名播兰馨妃后里，晕潮莲脸君王侧。忽一声、鼙鼓揭天来，繁华歇。",
      "龙虎散，风云灭。千古恨，凭谁说。对山河百二，泪盈襟血。客馆夜惊尘土梦，宫车晓碾关山月。问嫦娥、于我肯从容，同圆缺？"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "清平乐·红笺小字",
    "notes": [],
    "author": "晏殊",
    "paragraphs": [
      "红笺小字。说尽平生意。鸿雁在云鱼在水。惆怅此情难寄。",
      "斜阳独倚西楼。遥山恰对帘钩。人面不知何处，绿波依旧东流。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "西江月·阻风山峰下",
    "notes": [],
    "author": "张孝祥",
    "paragraphs": [
      "满载一船秋色，平铺十里湖光。波神留我看斜阳，放起鳞鳞细浪。",
      "明日风回更好，今宵露宿何妨？水晶宫里奏霓裳，准拟岳阳楼上。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "鹧鸪天·己酉之秋苕溪记所见",
    "notes": [],
    "author": "姜夔",
    "paragraphs": [
      "京洛风流绝代人。因何风絮落溪津。笼鞋浅出鸦头袜，知是凌波缥缈身。",
      "红乍笑，绿长嚬。与谁同度可怜春。鸳鸯独宿何曾惯，化作西楼一缕云。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "西江月·世事一场大梦",
    "notes": [
      "秋凉--一作 ：新凉"
    ],
    "author": "苏轼",
    "paragraphs": [
      "世事一场大梦，人生几度秋凉？夜来风叶已鸣廊。看取眉头鬓上。",
      "酒贱常愁客少，月明多被云妨。中秋谁与共孤光。把盏凄然北望。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "雨霖铃·寒蝉凄切",
    "notes": [
      "好景--一作 ：美景"
    ],
    "author": "柳永",
    "paragraphs": [
      "寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。",
      "多情自古伤离别，更那堪，冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "水调歌头·送章德茂大卿使虏",
    "notes": [],
    "author": "陈亮",
    "paragraphs": [
      "不见南师久，漫说北群空。当场只手，毕竟还我万夫雄。自笑堂堂汉使，得似洋洋河水，依旧只流东？且复穹庐拜，会向藁街逢！",
      "尧之都，舜之壤，禹之封。于中应有，一个半个耻臣戎！万里腥膻如许，千古英灵安在，磅礴几时通？胡运何须问，赫日自当中！"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "花非花",
    "notes": [],
    "author": "白居易",
    "paragraphs": [
      "花非花，雾非雾。",
      "夜半来，天明去。",
      "来如春梦几多时？",
      "去似朝云无觅处。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "青玉案·元夕",
    "notes": [],
    "author": "辛弃疾",
    "paragraphs": [
      "东风夜放花千树。更吹落、星如雨。宝马雕车香满路。凤箫声动，玉壶光转，一夜鱼龙舞。",
      "蛾儿雪柳黄金缕。笑语盈盈暗香去。众里寻他千百度。蓦然回首，那人却在，灯火阑珊处。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "江城子·乙卯正月二十日夜记梦",
    "notes": [
      "肠断--一作 ：断肠"
    ],
    "author": "苏轼",
    "paragraphs": [
      "十年生死两茫茫，不思量，自难忘。千里孤坟，无处话凄凉。纵使相逢应不识，尘满面，鬓如霜。",
      "夜来幽梦忽还乡，小轩窗，正梳妆。相顾无言，惟有泪千行。料得年年肠断处，明月夜，短松冈。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "青玉案·年年社日停针线",
    "notes": [],
    "author": "黄公绍",
    "paragraphs": [
      "年年社日停针线。怎忍见、双飞燕。今日江城春已半。一身犹在，乱山深处，寂寞溪桥畔。",
      "春衫著破谁针线。点点行行泪痕满。落日解鞍芳草岸。花无人戴，酒无人劝，醉也无人管。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "潇湘神·斑竹枝",
    "notes": [],
    "author": "刘禹锡",
    "paragraphs": [
      "斑竹枝，斑竹枝，泪痕点点寄相思。楚客欲听瑶瑟怨，潇湘深夜月明时。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "乌夜啼·昨夜风兼雨",
    "notes": [
      "一梦--一作 ：梦里"
    ],
    "author": "李煜",
    "paragraphs": [
      "昨夜风兼雨，帘帏飒飒秋声。烛残漏断频欹枕，起坐不能平。",
      "世事漫随流水，算来一梦浮生。醉乡路稳宜频到，此外不堪行。"
    ],
    "dynasty": "五代"
  },
  {
    "title": "菩萨蛮·枕前发尽千般愿",
    "notes": [],
    "author": "佚名",
    "paragraphs": [
      "枕前发尽千般愿，要休且待青山烂。水面上秤锤浮，直待黄河彻底枯。",
      "白日参辰现，北斗回南面。休即未能休，且待三更见日头。"
    ],
    "dynasty": "五代"
  },
  {
    "title": "半死桐·重过阊门万事非",
    "notes": [],
    "author": "贺铸",
    "paragraphs": [
      "重过阊门万事非。同来何事不同归。梧桐半死清霜后，头白鸳鸯失伴飞。",
      "原上草，露初晞。旧栖新垅两依依。空床卧听南窗雨，谁复挑灯夜补衣。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "柳梢青·茅舍疏篱",
    "notes": [],
    "author": "杨无咎",
    "paragraphs": [
      "茅舍疏篱。半飘残雪，斜卧低枝。可更相宜，烟笼修竹，月在寒溪。",
      "宁宁伫立移时。判瘦损、无妨为伊。谁赋才情，画成幽思，写入新诗。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "念奴娇·赤壁怀古",
    "notes": [
      "樯橹--一作 ：强虏",
      "人生--一作 ：人间",
      "尊--通 ：樽"
    ],
    "author": "苏轼",
    "paragraphs": [
      "大江东去，浪淘尽，千古风流人物。",
      "故垒西边，人道是，三国周郎赤壁。",
      "乱石穿空，惊涛拍岸，卷起千堆雪。",
      "江山如画，一时多少豪杰。",
      "遥想公瑾当年，小乔初嫁了，雄姿英发。",
      "羽扇纶巾，谈笑间，樯橹灰飞烟灭。",
      "故国神游，多情应笑我，早生华发。",
      "人生如梦，一尊还酹江月。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "女冠子·昨夜夜半",
    "notes": [],
    "author": "韦庄",
    "paragraphs": [
      "昨夜夜半，枕上分明梦见。语多时。依旧桃花面，频低柳叶眉。",
      "半羞还半喜，欲去又依依。觉来知是梦，不胜悲。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "风入松·一春长费买花钱",
    "notes": [],
    "author": "俞国宝",
    "paragraphs": [
      "一春长费买花钱，日日醉湖边。玉骢惯识西湖路，骄嘶过、沽酒楼前。红杏香中箫鼓，绿杨影里秋千。",
      "暖风十里丽人天，花压鬓云偏。画船载取春归去，馀情付、湖水湖烟。明日重扶残醉，来寻陌上花钿。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "水龙吟·次韵章质夫杨花词",
    "notes": [],
    "author": "苏轼",
    "paragraphs": [
      "似花还似非花，也无人惜从教坠。抛家傍路，思量却是，无情有思。萦损柔肠，困酣娇眼，欲开还闭。梦随风万里，寻郎去处，又还被、莺呼起。",
      "不恨此花飞尽，恨西园、落红难缀。晓来雨过，遗踪何在？一池萍碎。春色三分，二分尘土，一分流水。细看来，不是杨花，点点是离人泪。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "水龙吟·过南剑双溪楼",
    "notes": [],
    "author": "辛弃疾",
    "paragraphs": [
      "举头西北浮云，倚天万里须长剑。人言此地，夜深长见，斗牛光焰。我觉山高，潭空水冷，月明星淡。待燃犀下看，凭栏却怕，风雷怒，鱼龙惨。",
      "峡束苍江对起，过危楼，欲飞还敛。元龙老矣！不妨高卧，冰壶凉簟。千古兴亡，百年悲笑，一时登览。问何人又卸，片帆沙岸，系斜阳缆？"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "水调歌头·明月几时有",
    "notes": [
      "何似--一作 ：何时",
      "又恐--一作 ：惟 / 唯恐",
      "长向--一作 ：偏向"
    ],
    "author": "苏轼",
    "paragraphs": [
      "丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。",
      "",
      "明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间？",
      "转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "点绛唇·蹴罢秋千",
    "notes": [],
    "author": "李清照",
    "paragraphs": [
      "蹴罢秋千，起来慵整纤纤手。露浓花瘦，薄汗轻衣透。",
      "见客入来，袜刬金钗溜。和羞走，倚门回首，却把青梅嗅。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "惜分飞·泪湿阑干花著露",
    "notes": [],
    "author": "毛滂",
    "paragraphs": [
      "泪湿阑干花著露。愁到眉峰碧聚。此恨平分取。更无言语。空相觑。",
      "短雨残云无意绪。寂寞朝朝暮暮。今夜山深处。断魂分付。潮回去。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "长亭怨慢·渐吹尽",
    "notes": [],
    "author": "姜夔",
    "paragraphs": [
      "余颇喜自制曲。初率意为长短句，然后协以律，故前后阕多不同。桓大司马云：“昔年种柳，依依汉南。今看摇落，凄怆江潭：树犹如此，人何以堪？”此语余深爱之。",
      "",
      "渐吹尽，枝头香絮，是处人家，绿深门户。远浦萦回，暮帆零乱向何许？阅人多矣，谁得似长亭树？树若有情时，不会得青青如此！",
      "日暮，望高城不见，只见乱山无数。韦郎去也，怎忘得、玉环分付：第一是早早归来，怕红萼无人为主。算空有并刀，难剪离愁千缕。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "浪淘沙令·伊吕两衰翁",
    "notes": [],
    "author": "王安石",
    "paragraphs": [
      "伊吕两衰翁，历遍穷通。一为钓叟一耕佣。若使当时身不遇，老了英雄。",
      "汤武偶相逢，风虎云龙。兴王只在谈笑中。直至如今千载后，谁与争功！"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "蝶恋花·春景",
    "notes": [],
    "author": "苏轼",
    "paragraphs": [
      "花褪残红青杏小。燕子飞时，绿水人家绕。枝上柳绵吹又少。天涯何处无芳草！",
      "墙里秋千墙外道。墙外行人，墙里佳人笑。笑渐不闻声渐悄。多情却被无情恼。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "梦江南·兰烬落",
    "notes": [],
    "author": "皇甫松",
    "paragraphs": [
      "兰烬落，屏上暗红蕉。闲梦江南梅熟日，夜船吹笛雨萧萧。人语驿边桥。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "忆江南·江南好",
    "notes": [],
    "author": "白居易",
    "paragraphs": [
      "江南好，风景旧曾谙。日出江花红胜火，春来江水绿如蓝。能不忆江南？"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "定风波·莫听穿林打叶声",
    "notes": [],
    "author": "苏轼",
    "paragraphs": [
      "三月七日，沙湖道中遇雨。雨具先去，同行皆狼狈，余独不觉，已而遂晴，故作此词。",
      "",
      "莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。",
      "料峭春风吹酒醒，微冷，山头斜照却相迎。回首向来萧瑟处，归去，也无风雨也无晴。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "小重山·昨夜寒蛩不住鸣",
    "notes": [],
    "author": "岳飞",
    "paragraphs": [
      "昨夜寒蛩不住鸣。惊回千里梦，已三更。起来独自绕阶行。人悄悄，帘外月胧明。",
      "白首为功名。旧山松竹老，阻归程。欲将心事付瑶琴。知音少，弦断有谁听。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "六州歌头·长淮望断",
    "notes": [],
    "author": "张孝祥",
    "paragraphs": [
      "长淮望断，关塞莽然平。征尘暗，霜风劲，悄边声。黯销凝。追想当年事，殆天数，非人力，洙泗上，弦歌地，亦膻腥。隔水毡乡，落日牛羊下，区脱纵横。看名王宵猎，骑火一川明。笳鼓悲鸣。遣人惊。",
      "念腰间箭，匣中剑，空埃蠹，竟何成。时易失，心徒壮，岁将零。渺神京。干羽方怀远，静烽燧，且休兵。冠盖使，纷驰骛，若为情。闻道中原遗老，常南望、翠葆霓旌。使行人到此，忠愤气填膺。有泪如倾。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "青门引·春思",
    "notes": [],
    "author": "张先",
    "paragraphs": [
      "乍暖还轻冷。风雨晚来方定。庭轩寂寞近清明，残花中酒，又是去年病。",
      "楼头画角风吹醒。入夜重门静。那堪更被明月，隔墙送过秋千影。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "望江南·梳洗罢",
    "notes": [],
    "author": "温庭筠",
    "paragraphs": [
      "梳洗罢，独倚望江楼。过尽千帆皆不是，斜晖脉脉水悠悠。肠断白蘋洲。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "酒泉子·长忆观潮",
    "notes": [],
    "author": "潘阆",
    "paragraphs": [
      "长忆观潮，满郭人争江上望。来疑沧海尽成空。万面鼓声中。",
      "弄潮儿向涛头立。手把红旗旗不湿。别来几向梦中看。梦觉尚心寒。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "玉楼春·春景",
    "notes": [],
    "author": "宋祁",
    "paragraphs": [
      "东城渐觉风光好。縠皱波纹迎客棹。绿杨烟外晓寒轻，红杏枝头春意闹。",
      "浮生长恨欢娱少。肯爱千金轻一笑。为君持酒劝斜阳，且向花间留晚照。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "芳心苦·杨柳回塘",
    "notes": [],
    "author": "贺铸",
    "paragraphs": [
      "杨柳回塘，鸳鸯别浦。绿萍涨断莲舟路。断无蜂蝶慕幽香，红衣脱尽芳心苦。",
      "返照迎潮，行云带雨。依依似与骚人语。当年不肯嫁春风，无端却被秋风误。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "蝶恋花·送春",
    "notes": [],
    "author": "朱淑真",
    "paragraphs": [
      "楼外垂杨千万缕。欲系青春，少住春还去。犹自风前飘柳絮。随春且看归何处。",
      "绿满山川闻杜宇。便做无情，莫也愁人苦。把酒送春春不语。黄昏却下潇潇雨。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "洞仙歌·冰肌玉骨",
    "notes": [],
    "author": "苏轼",
    "paragraphs": [
      "仆七岁时，见眉州老尼，姓朱，忘其名，年九十岁。自言尝随其师入蜀主孟昶宫中，一日大热，蜀主与花蕊夫人夜纳凉摩诃池上，作一词，朱具能记之。今四十年，朱已死久矣，人无知此词者，但记其首两句，暇日寻味，岂《洞仙歌》令乎？乃为足之云。",
      "",
      "冰肌玉骨，自清凉无汗。水殿风来暗香满。绣帘开，一点明月窥人，人未寝，欹枕钗横鬓乱。",
      "起来携素手，庭户无声，时见疏星渡河汉。试问夜如何？夜已三更，金波淡，玉绳低转。但屈指西风几时来，又不道流年暗中偷换。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "蓦山溪·自述",
    "notes": [],
    "author": "宋自逊",
    "paragraphs": [
      "壶山居士，未老心先懒。爱学道人家，办竹几、蒲团茗碗。青山可买，小结屋三间，开一径，俯清溪，修竹栽教满。 客来便请，随分家常饭。若肯小留连，更薄酒，三杯两盏，吟诗度曲，风月任招呼。身外事，不关心，自有天公管。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "迷仙引·才过笄年",
    "notes": [],
    "author": "柳永",
    "paragraphs": [
      "才过笄年，初绾云鬟，便学歌舞。席上尊前，王孙随分相许。算等闲、酬一笑，便千金慵觑。常只恐、容易蕣华偷换，光阴虚度。",
      "已受君恩顾，好与花为主。万里丹霄，何妨携手同归去。永弃却、烟花伴侣。免教人见妾，朝云暮雨。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "菩萨蛮·人人尽说江南好",
    "notes": [],
    "author": "韦庄",
    "paragraphs": [
      "人人尽说江南好，游人只合江南老。春水碧于天，画船听雨眠。",
      "垆边人似月，皓腕凝霜雪。未老莫还乡，还乡须断肠。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "鹧鸪天·彩袖殷勤捧玉钟",
    "notes": [],
    "author": "晏几道",
    "paragraphs": [
      "彩袖殷勤捧玉钟，当年拚却醉颜红。舞低杨柳楼心月，歌尽桃花扇底风。",
      "从别后，忆相逢，几回魂梦与君同。今宵剩把银釭照，犹恐相逢是梦中。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "长相思·花深深",
    "notes": [],
    "author": "陈东甫",
    "paragraphs": [
      "花深深。柳阴阴。度柳穿花觅信音。君心负妾心。",
      "怨呜琴。恨孤衾。钿誓钗盟何处寻。当初谁料今。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "渔家傲·秋思",
    "notes": [],
    "author": "范仲淹",
    "paragraphs": [
      "塞下秋来风景异，衡阳雁去无留意。四面边声连角起，千嶂里，长烟落日孤城闭。",
      "浊酒一杯家万里，燕然未勒归无计。羌管悠悠霜满地，人不寐，将军白发征夫泪。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "鹧鸪天·有客慨然谈功名因追念少年时事戏作",
    "notes": [],
    "author": "辛弃疾",
    "paragraphs": [
      "壮岁旌旗拥万夫，锦襜突骑渡江初。燕兵夜娖银胡觮，汉箭朝飞金仆姑。",
      "追往事，叹今吾，春风不染白髭须。却将万字平戎策，换得东家种树书。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "唐多令·芦叶满汀洲",
    "notes": [
      "在否--一作 ：在不"
    ],
    "author": "刘过",
    "paragraphs": [
      "安远楼小集，侑觞歌板之姬黄其姓者，乞词于龙洲道人，为赋此《唐多令》。同柳阜之、刘去非、石民瞻、周嘉仲、陈孟参、孟容。时八月五日也。",
      "",
      "芦叶满汀洲，寒沙带浅流。二十年重过南楼。柳下系船犹未稳，能几日，又中秋。",
      "黄鹤断矶头，故人今在否？旧江山浑是新愁。欲买桂花同载酒，终不似，少年游。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "江城子·示表侄刘国华",
    "notes": [],
    "author": "吴潜",
    "paragraphs": [
      "家园十亩屋头边。正春妍，酿花天。杨柳多情，拂拂带轻烟。别馆闲亭随分有，时策杖，小盘旋。",
      "采山钓水美而鲜。饮中仙，醉中禅。闲处光阴，赢得日高眠。一品高官人道好，多少事，碎心田。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "千秋岁·数声鶗鴂",
    "notes": [
      "凝残月--一作 ：孤灯灭"
    ],
    "author": "张先",
    "paragraphs": [
      "数声鶗鴂，又报芳菲歇。惜春更把残红折。雨轻风色暴，梅子青时节。永丰柳，无人尽日花飞雪。",
      "莫把幺弦拨，怨极弦能说。天不老，情难绝。心似双丝网，中有千千结。夜过也，东窗未白凝残月。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "瑞鹤仙·郊原初过雨",
    "notes": [],
    "author": "袁去华",
    "paragraphs": [
      "郊原初过雨。见败叶零乱，风定犹舞。斜阳挂深树。映浓愁浅黛，遥山眉妩。来时旧路。尚岩花、娇黄半吐。到而今，唯有溪边流水，见人如故。",
      "无语。邮亭深静，下马还寻，旧曾题处。无聊倦旅。伤离恨，最愁苦。纵收香藏镜，他年重到，人面桃花在否。念沈沈、小阁幽窗，有时梦去。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "双双燕·咏燕",
    "notes": [],
    "author": "史达祖",
    "paragraphs": [
      "过春社了，度帘幕中间，去年尘冷。差池欲住，试入旧巢相并。还相雕梁藻井。又软语、商量不定。飘然快拂花梢，翠尾分开红影。",
      "芳径。芹泥雨润。爱贴地争飞，竞夸轻俊。红楼归晚，看足柳昏花暝。应自栖香正稳。便忘了、天涯芳信。愁损翠黛双蛾，日日画阑独凭。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "齐天乐·蟋蟀",
    "notes": [],
    "author": "姜夔",
    "paragraphs": [
      "丙辰岁，与张功父会饮张达可之堂。闻屋壁间蟋蟀有声，功父约予同赋，以授歌者。功父先成，辞甚美。予裴回末利花间，仰见秋月，顿起幽思，寻亦得此。蟋蟀，中都呼为促织，善斗。好事者或以三二十万钱致一枚，镂象齿为楼观以贮之。",
      "",
      "庾郎先自吟愁赋，凄凄更闻私语。露湿铜铺，苔侵石井，都是曾听伊处。哀音似诉。正思妇无眠，起寻机杼。曲曲屏山，夜凉独自甚情绪？",
      "西窗又吹暗雨。为谁频断续，相和砧杵？候馆迎秋，离宫吊月，别有伤心无数。豳诗漫与。笑篱落呼灯，世间儿女。写入琴丝，一声声更苦。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "贺新郎·寄李伯纪丞相",
    "notes": [],
    "author": "张元干",
    "paragraphs": [
      "曳杖危楼去。斗垂天、沧波万顷，月流烟渚。扫尽浮云风不定，未放扁舟夜渡。宿雁落、寒芦深处。怅望关河空吊影，正人间、鼻息鸣鼍鼓。谁伴我，醉中舞。",
      "十年一梦扬州路。倚高寒、愁生故国，气吞骄虏。要斩楼兰三尺剑，遗恨琵琶旧语。谩暗涩铜华尘土。唤取谪仙平章看，过苕溪、尚许垂纶否。风浩荡，欲飞举。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "清平乐·春晚",
    "notes": [],
    "author": "王安国",
    "paragraphs": [
      "留春不住，费尽莺儿语。满地残红宫锦污，昨夜南园风雨。",
      "小怜初上琵琶，晓来思绕天涯。不肯画堂朱户，春风自在杨花。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "蝶恋花·醉别西楼醒不记",
    "notes": [],
    "author": "晏几道",
    "paragraphs": [
      "醉别西楼醒不记。春梦秋云，聚散真容易。斜月半窗还少睡。画屏闲展吴山翠。",
      "衣上酒痕诗里字。点点行行，总是凄凉意。红烛自怜无好计。夜寒空替人垂泪。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "满庭芳·山抹微云",
    "notes": [
      "万点--一作 ：数点"
    ],
    "author": "秦观",
    "paragraphs": [
      "山抹微云，天连衰草，画角声断谯门。暂停征棹，聊共引离尊。多少蓬莱旧事，空回首、烟霭纷纷。斜阳外，寒鸦万点，流水绕孤村。",
      "销魂。当此际，香囊暗解，罗带轻分。谩赢得、青楼薄幸名存。此去何时见也，襟袖上、空惹啼痕。伤情处，高城望断，灯火已黄昏。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "行香子·树绕村庄",
    "notes": [],
    "author": "秦观",
    "paragraphs": [
      "树绕村庄，水满陂塘。倚东风、豪兴徜徉。小园几许，收尽春光。有桃花红，李花白，菜花黄。",
      "远远围墙，隐隐茅堂。飏青旗、流水桥旁。偶然乘兴、步过东冈。正莺儿啼，燕儿舞，蝶儿忙。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "相见欢·无言独上西楼",
    "notes": [
      "一般--一作 ：一番"
    ],
    "author": "李煜",
    "paragraphs": [
      "无言独上西楼，月如钩。寂寞梧桐深院锁清秋。",
      "剪不断，理还乱，是离愁。别是一般滋味在心头。"
    ],
    "dynasty": "五代"
  },
  {
    "title": "清平乐·别来春半",
    "notes": [],
    "author": "李煜",
    "paragraphs": [
      "别来春半，触目柔肠断。砌下落梅如雪乱，拂了一身还满。(",
      "柔",
      "肠断 一作：愁肠断)",
      "雁来音信无凭，路遥归梦难成。离恨恰如春草，更行更远还生。"
    ],
    "dynasty": "五代"
  },
  {
    "title": "蝶恋花·春涨一篙添水面",
    "notes": [],
    "author": "范成大",
    "paragraphs": [
      "春涨一篙添水面。芳草鹅儿，绿满微风岸。画舫夷犹湾百转。横塘塔近依前远。",
      "江国多寒农事晚。村北村南，谷雨才耕遍。秀麦连冈桑叶贱。看看尝面收新茧。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "清平乐·年年雪里",
    "notes": [],
    "author": "李清照",
    "paragraphs": [
      "年年雪里，常插梅花醉。挼尽梅花无好意，赢得满衣清泪。",
      "今年海角天涯，萧萧两鬓生华。看取晚来风势，故应难看梅花。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "千秋岁·水边沙外",
    "notes": [],
    "author": "秦观",
    "paragraphs": [
      "水边沙外。城郭春寒退。花影乱，莺声碎。飘零疏酒盏，离别宽衣带。人不见，碧云暮合空相对。",
      "忆昔西池会。鹓鹭同飞盖。携手处，今谁在。日边清梦断，镜里朱颜改。春去也，飞红万点愁如海。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "江城子·密州出猎",
    "notes": [],
    "author": "苏轼",
    "paragraphs": [
      "老夫聊发少年狂，左牵黄，右擎苍，锦帽貂裘，千骑卷平冈。为报倾城随太守，亲射虎，看孙郎。",
      "酒酣胸胆尚开张，鬓微霜，又何妨！持节云中，何日遣冯唐？会挽雕弓如满月，西北望，射天狼。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "踏莎行·自沔东来丁未元日至金陵江上感梦而作",
    "notes": [],
    "author": "姜夔",
    "paragraphs": [
      "燕燕轻盈，莺莺娇软，分明又向华胥见。夜长争得薄情知？春初早被相思染。",
      "别后书辞，别时针线，离魂暗逐郎行远。淮南皓月冷千山，冥冥归去无人管。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "渔家傲·近日门前溪水涨",
    "notes": [],
    "author": "欧阳修",
    "paragraphs": [
      "近日门前溪水涨。郎船几度偷相访。船小难开红斗帐。无计向。合欢影里空惆怅。",
      "愿妾身为红菡萏。年年生在秋江上。重愿郎为花底浪。无隔障。随风逐雨长来往。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "摊破浣溪沙·手卷真珠上玉钩",
    "notes": [],
    "author": "李璟",
    "paragraphs": [
      "手卷真珠上玉钩，依前春恨锁重楼。风里落花谁是主？思悠悠。",
      "青鸟不传云外信，丁香空结雨中愁。回首绿波三楚暮，接天流。"
    ],
    "dynasty": "五代"
  },
  {
    "title": "浣溪沙·五两竿头风欲平",
    "notes": [],
    "author": "佚名",
    "paragraphs": [
      "五两竿头风欲平，长风举棹觉船轻。柔橹不施停却棹，是船行。",
      "满眼风波多闪烁，看山恰似走来迎。仔细看山山不动，是船行。"
    ],
    "dynasty": "五代"
  },
  {
    "title": "鹧鸪天·寒日萧萧上琐窗",
    "notes": [],
    "author": "李清照",
    "paragraphs": [
      "寒日萧萧上琐窗，梧桐应恨夜来霜。酒阑更喜团茶苦，梦断偏宜瑞脑香。",
      "秋已尽，日犹长，仲宣怀远更凄凉。不如随分尊前醉，莫负东篱菊蕊黄。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "鹊桥仙·华灯纵博",
    "notes": [],
    "author": "陆游",
    "paragraphs": [
      "华灯纵博，雕鞍驰射，谁记当年豪举。酒徒一半取封侯，独去作、江边渔父。",
      "轻舟八尺，低篷三扇，占断苹洲烟雨。镜湖元自属闲人，又何必、君恩赐与。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "浣溪沙·漠漠轻寒上小楼",
    "notes": [],
    "author": "秦观",
    "paragraphs": [
      "漠漠轻寒上小楼，晓阴无赖似穷秋。淡烟流水画屏幽。",
      "自在飞花轻似梦，无边丝雨细如愁。宝帘闲挂小银钩。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "秋蕊香·帘幕疏疏风透",
    "notes": [],
    "author": "张耒",
    "paragraphs": [
      "帘幕疏疏风透。一线香飘金兽。朱阑倚遍黄昏后。廊上月华如昼。",
      "别离滋味浓于酒。著人瘦。此情不及墙东柳。春色年年如旧。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "念奴娇·过洞庭",
    "notes": [
      "玉界--一作 ：玉鉴",
      "沧浪--一作 ：沧冥",
      "岭表--一作 ：岭海"
    ],
    "author": "张孝祥",
    "paragraphs": [
      "洞庭青草，近中秋，更无一点风色。玉界琼田三万顷，着我扁舟一叶。素月分辉，明河共影，表里俱澄澈。悠然心会，妙处难与君说。",
      "应念岭表经年，孤光自照，肝胆皆冰雪。短发萧骚襟袖冷，稳泛沧浪空阔。尽挹西江，细斟北斗，万象为宾客。扣舷独啸，不知今夕何夕。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "霜天晓角·仪真江上夜泊",
    "notes": [],
    "author": "黄机",
    "paragraphs": [
      "寒江夜宿。长啸江之曲。水底鱼龙惊动，风卷地、浪翻屋。",
      "诗情吟未足。酒兴断还续。草草兴亡休问，功名泪、欲盈掬。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "水龙吟·春恨",
    "notes": [],
    "author": "陈亮",
    "paragraphs": [
      "闹花深处层楼，画帘半卷东风软。春归翠陌，平莎茸嫩，垂杨金浅。迟日催花，淡云阁雨，轻寒轻暖。恨芳菲世界，游人未赏，都付与、莺和燕。",
      "寂寞凭高念远。向南楼、一声归雁。金钗斗草，青丝勒马，风流云散。罗绶分香，翠绡对泪，几多幽怨。正销魂，又是疏烟淡月，子规声断。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "点绛唇·绍兴乙卯登绝顶小亭",
    "notes": [],
    "author": "叶梦得",
    "paragraphs": [
      "缥缈危亭，笑谈独在千峰上。与谁同赏。万里横烟浪。",
      "老去情怀，犹作天涯想。空惆怅。少年豪放。莫学衰翁样。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "蝶恋花·槛菊愁烟兰泣露",
    "notes": [
      "双飞去--一作 ：双来去",
      "离恨苦--一作 ：离别苦"
    ],
    "author": "晏殊",
    "paragraphs": [
      "槛菊愁烟兰泣露，罗幕轻寒，燕子双飞去。明月不谙离恨苦，斜光到晓穿朱户。",
      "昨夜西风凋碧树，独上高楼，望尽天涯路。欲寄彩笺兼尺素，山长水阔知何处？"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "永遇乐·彭城夜宿燕子楼",
    "notes": [],
    "author": "苏轼",
    "paragraphs": [
      "彭城夜宿燕子楼，梦盼盼，因作此词。",
      "",
      "明月如霜，好风如水，清景无限。曲港跳鱼，圆荷泻露，寂寞无人见。紞如三鼓，铿然一叶，黯黯梦云惊断。夜茫茫，重寻无处，觉来小园行遍。",
      "天涯倦客，山中归路，望断故园心眼。燕子楼空，佳人何在，空锁楼中燕。古今如梦，何曾梦觉，但有旧欢新怨。异时对，黄楼夜景，为余浩叹。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "贺新郎·送陈真州子华",
    "notes": [],
    "author": "刘克庄",
    "paragraphs": [
      "北望神州路。试平章、这场公事，怎生分付。记得太行山百万，曾入宗爷驾驭。今把作、握蛇骑虎。君去京东豪杰喜，想投戈、下拜真吾父。谈笑里，定齐鲁。",
      "两河萧瑟惟狐兔。问当年、祖生去后，有人来否。多少新亭挥泪客，谁梦中原块土。算事业、须由人做。应笑书生心胆怯，向车中、闭置如新妇。空目送，塞鸿去。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "菩萨蛮·小山重叠金明灭",
    "notes": [],
    "author": "温庭筠",
    "paragraphs": [
      "小山重叠金明灭，鬓云欲度香腮雪。懒起画蛾眉，弄妆梳洗迟。",
      "照花前后镜，花面交相映。新帖绣罗襦，双双金鹧鸪。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "浣溪沙·门隔花深梦旧游",
    "notes": [],
    "author": "吴文英",
    "paragraphs": [
      "门隔花深梦旧游。夕阳无语燕归愁。玉纤香动小帘钩。",
      "落絮无声春堕泪，行云有影月含羞。东风临夜冷于秋。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "菩萨蛮·书江西造口壁",
    "notes": [
      "愁余--一作 ：愁予"
    ],
    "author": "辛弃疾",
    "paragraphs": [
      "郁孤台下清江水，中间多少行人泪。西北望长安，可怜无数山。",
      "青山遮不住，毕竟东流去。江晚正愁余，山深闻鹧鸪。 "
    ],
    "dynasty": "宋代"
  },
  {
    "title": "减字木兰花·题雄州驿",
    "notes": [],
    "author": "蒋氏女",
    "paragraphs": [
      "朝云横度。辘辘车声如水去。白草黄沙。月照孤村三两家。",
      "飞鸿过也。万结愁肠无昼夜。渐近燕山。回首乡关归路难。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "凤凰台上忆吹箫·香冷金猊",
    "notes": [],
    "author": "李清照",
    "paragraphs": [
      "香冷金猊，被翻红浪，起来慵自梳头。任宝奁尘满，日上帘钩。生怕离怀别苦，多少事、欲说还休。新来瘦，非干病酒，不是悲秋。",
      "休休，这回去也，千万遍《阳关》，也则难留。念武陵人远，烟锁秦楼。惟有楼前流水，应念我、终日凝眸。凝眸处，从今又添，一段新愁。",
      "版本二",
      "香冷金猊，被翻红浪，起来人未梳头。任宝奁闲掩，日上帘钩。生怕闲愁暗恨，多少事、欲说还休。今年瘦，非干病酒，不是悲秋。",
      "明朝，者回去也，千万遍阳关，也即难留。念武陵春晚，云锁重楼。记取楼前绿水，应念我、终日凝眸。凝眸处，从今更数，几段新愁。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "采桑子·恨君不似江楼月",
    "notes": [],
    "author": "吕本中",
    "paragraphs": [
      "恨君不似江楼月，南北东西，南北东西，只有相随无别离。",
      "恨君却似江楼月，暂满还亏，暂满还亏，待得团圆是几时？"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "破阵子·为陈同甫赋壮词以寄之",
    "notes": [],
    "author": "辛弃疾",
    "paragraphs": [
      "醉里挑灯看剑，梦回吹角连营。八百里分麾下炙，五十弦翻塞外声。沙场秋点兵。",
      "马作的卢飞快，弓如霹雳弦惊。了却君王天下事，赢得生前身后名。可怜白发生！"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "宫中调笑·团扇",
    "notes": [],
    "author": "王建",
    "paragraphs": [
      "团扇，团扇，美人病来遮面。",
      "玉颜憔悴三年，谁复商量管弦。",
      "弦管，弦管，春草昭阳路断。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "绮罗香·咏春雨",
    "notes": [],
    "author": "史达祖",
    "paragraphs": [
      "做冷欺花，将烟困柳，千里偷催春暮。尽日冥迷，愁里欲飞还住。惊粉重、蝶宿西园，喜泥润、燕归南浦。最妨它、佳约风流，钿车不到杜陵路。",
      "沉沉江上望极，还被春潮晚急，难寻官渡。隐约遥峰，和泪谢娘眉妩。临断岸、新绿生时，是落红、带愁流处。记当日、门掩梨花，剪灯深夜语。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "调笑令·边草",
    "notes": [],
    "author": "戴叔伦",
    "paragraphs": [
      "边草，边草，边草尽来兵老。山南山北雪晴，",
      "千里万里月明。明月，明月，胡笳一声愁绝。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "太常引·建康中秋夜为吕叔潜赋",
    "notes": [],
    "author": "辛弃疾",
    "paragraphs": [
      "一轮秋影转金波，飞镜又重磨。把酒问姮娥：被白发、欺人奈何？",
      "乘风好去，长空万里，直下看山河。斫去桂婆娑，人道是、清光更多。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "贺新郎·九日",
    "notes": [],
    "author": "刘克庄",
    "paragraphs": [
      "湛湛长空黑。更那堪、斜风细雨，乱愁如织。老眼平生空四海，赖有高楼百尺。看浩荡、千崖秋色。白发书生神州泪，尽凄凉、不向牛山滴。追往事，去无迹。",
      "少年自负凌云笔。到而今、春华落尽，满怀萧瑟。常恨世人新意少，爱说南朝狂客。把破帽、年年拈出。若对黄花孤负酒，怕黄花、也笑人岑寂。鸿北去，日西匿。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "青玉案·凌波不过横塘路",
    "notes": [],
    "author": "贺铸",
    "paragraphs": [
      "凌波不过横塘路，但目送、芳尘去。锦瑟华年谁与度？月桥花院，琐窗朱户，只有春知处。",
      "飞云冉冉蘅皋暮，彩笔新题断肠句。试问闲情都几许？一川烟草，满城风絮，梅子黄时雨。",
      "版本二",
      "凌波不过横塘路，但目送、芳尘去。锦瑟华年谁与度？月台花榭，琐窗朱户，只有春知处。",
      "碧云冉冉蘅皋暮，彩笔新题断肠句。试问闲愁都几许？一川烟草，满城风絮，梅子黄时雨。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "西江月·遣兴",
    "notes": [
      "著--通 ：着"
    ],
    "author": "辛弃疾",
    "paragraphs": [
      "醉里且贪欢笑，要愁那得工夫。",
      "近来始觉古人书。信著全无是处。",
      "昨夜松边醉倒，问松我醉何如。",
      "只疑松动要来扶。以手推松曰去。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "醉垂鞭·双蝶绣罗裙",
    "notes": [],
    "author": "张先",
    "paragraphs": [
      "双蝶绣罗裙。东池宴。初相见。朱粉不深匀。闲花淡淡春。",
      "细看诸处好。人人道。柳腰身。昨日乱山昏。来时衣上云。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "清平乐·独宿博山王氏庵",
    "notes": [],
    "author": "辛弃疾",
    "paragraphs": [
      "绕床饥鼠，蝙蝠翻灯舞。屋上松风吹急雨，破纸窗间自语。",
      "平生塞北江南，归来华发苍颜。布被秋宵梦觉，眼前万里江山。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "忆秦娥·箫声咽",
    "notes": [],
    "author": "李白",
    "paragraphs": [
      "箫声咽，秦娥梦断秦楼月。秦楼月，年年柳色，灞陵伤别。",
      "乐游原上清秋节，咸阳古道音尘绝。音尘绝，西风残照，汉家陵阙。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "忆王孙·春词",
    "notes": [],
    "author": "李重元",
    "paragraphs": [
      "萋萋芳草忆王孙。柳外楼高空断魂。杜宇声声不忍闻。欲黄昏。雨打梨花深闭门。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "踏莎行·秋入云山",
    "notes": [],
    "author": "张抡",
    "paragraphs": [
      "秋入云山，物情潇洒。百般景物堪图画。丹枫万叶碧云边，黄花千点幽岩下。",
      "已喜佳辰，更怜清夜。一轮明月林梢挂。松醪常与野人期，忘形共说清闲话。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "生查子·新月曲如眉",
    "notes": [],
    "author": "牛希济",
    "paragraphs": [
      "新月曲如眉，未有团圞意。红豆不堪看，满眼相思泪。",
      "终日劈桃穰，人在心儿里。两朵隔墙花，早晚成连理。"
    ],
    "dynasty": "五代"
  },
  {
    "title": "相见欢·金陵城上西楼",
    "notes": [],
    "author": "朱敦儒",
    "paragraphs": [
      "金陵城上西楼，倚清秋。万里夕阳垂地，大江流。",
      "中原乱，簪缨散，几时收？试倩悲风吹泪，过扬州。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "清平乐·宫怨",
    "notes": [],
    "author": "黄升",
    "paragraphs": [
      "珠帘寂寂。愁背银缸泣。记得少年初选入。三十六宫第一。",
      "当年掌上承恩。而今冷落长门。又是羊车过也，月明花落黄昏。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "望海潮·东南形胜",
    "notes": [],
    "author": "柳永",
    "paragraphs": [
      "东南形胜，三吴都会，钱塘自古繁华，烟柳画桥，风帘翠幕，参差十万人家。云树绕堤沙，怒涛卷霜雪，天堑无涯。市列珠玑，户盈罗绮，竞豪奢。",
      "重湖叠巘清嘉。有三秋桂子，十里荷花。羌管弄晴，菱歌泛夜，嬉嬉钓叟莲娃。千骑拥高牙。乘醉听箫鼓，吟赏烟霞。异日图将好景，归去凤池夸。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "渔家傲·小雨纤纤风细细",
    "notes": [],
    "author": "朱服",
    "paragraphs": [
      "小雨纤纤风细细，万家杨柳青烟里。恋树湿花飞不起，愁无比，和春付与东流水。",
      "九十光阴能有几？金龟解尽留无计。寄语东阳沽酒市，拼一醉，而今乐事他年泪。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "眼儿媚·杨柳丝丝弄轻柔",
    "notes": [],
    "author": "王雱",
    "paragraphs": [
      "杨柳丝丝弄轻柔，烟缕织成愁。海棠未雨，梨花先雪，一半春休。",
      "而今往事难重省，归梦绕秦楼。相思只在：丁香枝上，豆蔻梢头。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "踏莎行·候馆梅残",
    "notes": [],
    "author": "欧阳修",
    "paragraphs": [
      "候馆梅残，溪桥柳细。草薰风暖摇征辔。离愁渐远渐无穷，迢迢不断如春水。",
      "寸寸柔肠，盈盈粉泪。楼高莫近危阑倚。平芜尽处是春山，行人更在春山外。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "鹧鸪天·座中有眉山隐客史应之和前韵即席答之",
    "notes": [],
    "author": "黄庭坚",
    "paragraphs": [
      "黄菊枝头生晓寒。人生莫放酒杯干。风前横笛斜吹雨，醉里簪花倒著冠。",
      "身健在，且加餐。舞裙歌板尽清欢。黄花白发相牵挽，付与时人冷眼看。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "西江月·堂上谋臣尊俎",
    "notes": [],
    "author": "刘过",
    "paragraphs": [
      "堂上谋臣尊俎，边头将士干戈。天时地利与人和，“燕可伐欤？”曰：“可”。",
      "今日楼台鼎鼐，明年带砺山河。大家齐唱《大风歌》，不日四方来贺。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "扬州慢·淮左名都",
    "notes": [],
    "author": "姜夔",
    "paragraphs": [
      "淳熙丙申至日，予过维扬。夜雪初霁，荠麦弥望。入其城，则四顾萧条，寒水自碧，暮色渐起，戍角悲吟。予怀怆然，感慨今昔，因自度此曲。千岩老人以为有“黍离”之悲也。",
      "",
      "淮左名都，竹西佳处，解鞍少驻初程。过春风十里。尽荠麦青青。自胡马窥江去后，废池乔木，犹厌言兵。渐黄昏，清角吹寒。都在空城。",
      "杜郎俊赏，算而今、重到须惊。纵豆蔻词工，青楼梦好，难赋深情。二十四桥仍在，波心荡、冷月无声。念桥边红药，年年知为谁生。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "浣溪沙·游蕲水清泉寺",
    "notes": [
      "潇潇--一作 ：萧萧"
    ],
    "author": "苏轼",
    "paragraphs": [
      "游蕲水清泉寺，寺临兰溪，溪水西流。",
      "",
      "山下兰芽短浸溪，松间沙路净无泥，潇潇暮雨子规啼。",
      "谁道人生无再少？门前流水尚能西！休将白发唱黄鸡。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "好事近·七月十三日夜登万花川谷望月作",
    "notes": [],
    "author": "杨万里",
    "paragraphs": [
      "月未到诚斋，先到万花川谷。不是诚斋无月，隔一林修竹。",
      "如今才是十三夜，月色已如玉。未是秋光奇绝，看十五十六。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "阮郎归·旧香残粉似当初",
    "notes": [],
    "author": "晏几道",
    "paragraphs": [
      "旧香残粉似当初。人情恨不如。一春犹有数行书。秋来书更疏。",
      "衾凤冷，枕鸳孤。愁肠待酒舒。梦魂纵有也成虚。那堪和梦无。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "鹊踏枝·几日行云何处去",
    "notes": [
      "依依--一作 ：悠悠"
    ],
    "author": "冯延巳",
    "paragraphs": [
      "几日行云何处去？忘却归来，不道春将暮。百草千花寒食路，香车系在谁家树？",
      "泪眼倚楼频独语。双燕来时，陌上相逢否？撩乱春愁如柳絮，依依梦里无寻处。"
    ],
    "dynasty": "五代"
  },
  {
    "title": "夜游宫·记梦寄师伯浑",
    "notes": [],
    "author": "陆游",
    "paragraphs": [
      "雪晓清笳乱起。梦游处、不知何地。铁骑无声望似水。想关河，雁门西，青海际。",
      "睡觉寒灯里。漏声断、月斜窗纸。自许封侯在万里。有谁知，鬓虽残，心未死。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "鹧鸪天·小令尊前见玉箫",
    "notes": [],
    "author": "晏几道",
    "paragraphs": [
      "小令尊前见玉箫。银灯一曲太妖娆。歌中醉倒谁能恨，唱罢归来酒未消。",
      "春悄悄，夜迢迢。碧云天共楚宫遥。梦魂惯得无拘检，又踏杨花过谢桥。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "临江仙·夜登小阁忆洛中旧游",
    "notes": [],
    "author": "陈与义",
    "paragraphs": [
      "忆昔午桥桥上饮，坐中多是豪英。长沟流月去无声。杏花疏影里，吹笛到天明。",
      "二十余年如一梦，此身虽在堪惊。闲登小阁看新晴。古今多少事，渔唱起三更。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "谒金门·花过雨",
    "notes": [],
    "author": "李好古",
    "paragraphs": [
      "花过雨，又是一番红素。燕子归来愁不语，旧巢无觅处。",
      "谁在玉关劳苦？谁在玉楼歌舞？若使胡尘吹得去，东风侯万户。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "西江月·问讯湖边春色",
    "notes": [],
    "author": "张孝祥",
    "paragraphs": [
      "问讯湖边春色，重来又是三年。东风吹我过湖船，杨柳丝丝拂面。",
      "世路如今已惯，此心到处悠然。寒光亭下水如天，飞起沙鸥一片。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "瑞龙吟·大石春景",
    "notes": [],
    "author": "周邦彦",
    "paragraphs": [
      "章台路。还见褪粉梅梢，试花桃树。愔愔坊陌人家，定巢燕子，归来旧处。",
      "黯凝伫。因念个人痴小，乍窥门户。侵晨浅约宫黄，障风映袖，盈盈笑语。",
      "前度刘郎重到，访邻寻里，同时歌舞。唯有旧家秋娘，声价如故。吟笺赋笔，犹记燕台句。知谁伴、名园露饮，东城闲步。事与孤鸿去。探春尽是，伤离意绪。官柳低金缕。归骑晚、纤纤池塘飞雨。断肠院落，一帘风絮。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "卖花声·题岳阳楼",
    "notes": [],
    "author": "张舜民",
    "paragraphs": [
      "木叶下君山。空水漫漫。十分斟酒敛芳颜。不是渭城西去客，休唱阳关。",
      "醉袖抚危栏。天淡云闲。何人此路得生还。回首夕阳红尽处，应是长安。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "西河·大石金陵",
    "notes": [],
    "author": "周邦彦",
    "paragraphs": [
      "佳丽地。南朝盛事谁记。山围故国绕清江，髻鬟对起。怒涛寂寞打孤城，风樯遥度天际。",
      "断崖树，犹倒倚。莫愁艇子曾系。空余旧迹郁苍苍，雾沈半垒。夜深月过女墙来，伤心东望淮水。",
      "酒旗戏鼓甚处市。想依稀、王谢邻里。燕子不知何世。入寻常、巷陌人家，相对如说兴亡，斜阳里。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "更漏子·柳丝长",
    "notes": [],
    "author": "晏几道",
    "paragraphs": [
      "柳丝长，桃叶小。深院断无人到。红日淡，绿烟晴。流莺三两声。",
      "雪香浓，檀晕少。枕上卧枝花好。春思重，晓妆迟。寻思残梦时。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "八声甘州·对潇潇暮雨洒江天",
    "notes": [
      "阑--一作 ：栏"
    ],
    "author": "柳永",
    "paragraphs": [
      "对潇潇暮雨洒江天，一番洗清秋。渐霜风凄紧，关河冷落，残照当楼。是处红衰翠减，苒苒物华休。唯有长江水，无语东流。",
      "不忍登高临远，望故乡渺邈，归思难收。叹年来踪迹，何事苦淹留？想佳人妆楼颙望，误几回、天际识归舟。争知我，倚阑杆处，正恁凝愁！"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "江城子·画楼帘幕卷新晴",
    "notes": [],
    "author": "卢祖皋",
    "paragraphs": [
      "画楼帘幕卷新晴。掩银屏。晓寒轻。坠粉飘香，日日唤愁生。暗数十年湖上路，能几度，著娉婷。",
      "年华空自感飘零。拥春酲。对谁醒。天阔云间，无处觅箫声。载酒买花年少事，浑不似，旧心情。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "清平乐·留人不住",
    "notes": [],
    "author": "晏几道",
    "paragraphs": [
      "留人不住，醉解兰舟去。一棹碧涛春水路，过尽晓莺啼处。",
      "渡头杨柳青青，枝枝叶叶离情。此后锦书休寄，画楼云雨无凭。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "玉楼春·戏林推",
    "notes": [],
    "author": "刘克庄",
    "paragraphs": [
      "年年跃马长安市。客舍似家家似寄。青钱换酒日无何，红烛呼卢宵不寐。",
      "易挑锦妇机中字。难得玉人心下事。男儿西北有神州，莫滴水西桥畔泪。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "思越人·紫府东风放夜时",
    "notes": [],
    "author": "贺铸",
    "paragraphs": [
      "紫府东风放夜时。步莲秾李伴人归。五更钟动笙歌散，十里月明灯火稀。",
      "香苒苒，梦依依。天涯寒尽减春衣。凤凰城阙知何处，寥落星河一雁飞。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "忆江南三首",
    "notes": [],
    "author": "白居易",
    "paragraphs": [
      "江南好，风景旧曾谙；日出江花红胜火，春来江水绿如蓝。能不忆江南？",
      "",
      "江南忆，最忆是杭州；山寺月中寻桂子，郡亭枕上看潮头。何日更重游！",
      "",
      "江南忆，其次忆吴宫；吴酒一杯春竹叶，吴娃双舞醉芙蓉。早晚复相逢！"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "卜算子·独自上层楼",
    "notes": [],
    "author": "程垓",
    "paragraphs": [
      "独自上层楼，楼外青山远。望以斜阳欲尽时，不见西飞雁。",
      "独自下层楼，楼下蛩声怨。待到黄昏月上时，依旧柔肠断。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "渔家傲·平岸小桥千嶂抱",
    "notes": [],
    "author": "王安石",
    "paragraphs": [
      "平岸小桥千嶂抱。柔蓝一水萦花草。茅屋数间窗窈窕。尘不到。时时自有春风扫。",
      "午枕觉来闻语鸟。欹眠似听朝鸡早。忽忆故人今总老。贪梦好。茫然忘了邯郸道。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "谒金门·风乍起",
    "notes": [],
    "author": "冯延巳",
    "paragraphs": [
      "风乍起，吹皱一池春水。闲引鸳鸯香径里，手挼红杏蕊。",
      "斗鸭阑干独倚，碧玉搔头斜坠。终日望君君不至，举头闻鹊喜。"
    ],
    "dynasty": "五代"
  },
  {
    "title": "昭君怨·赋松上鸥",
    "notes": [],
    "author": "杨万里",
    "paragraphs": [
      "晚饮诚斋，忽有一鸥来泊松上，已而复去，感而赋之。",
      "",
      "偶听松梢扑鹿，知是沙鸥来宿。稚子莫喧哗，恐惊他。",
      "俄倾忽然飞去，飞去不知何处？我已乞归休，报沙鸥。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "卜算子·不是爱风尘",
    "notes": [],
    "author": "严蕊",
    "paragraphs": [
      "不是爱风尘，似被前缘误。花落花开自有时，总赖东君主。",
      "去也终须去，住也如何住！若得山花插满头，莫问奴归处。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "满江红·送李御带珙",
    "notes": [],
    "author": "吴潜",
    "paragraphs": [
      "红玉阶前，问何事、翩然引去。湖海上、一汀鸥鹭，半帆烟雨。报国无门空自怨，济时有策从谁吐。过垂虹亭下系扁舟，鲈堪煮。",
      "拚一醉，留君住。歌一曲，送君路。遍江南江北，欲归何处。世事悠悠浑未了，年光冉冉今如许。试举头、一笑问青天，天无语。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "一剪梅·红藕香残玉簟秋",
    "notes": [],
    "author": "李清照",
    "paragraphs": [
      "红藕香残玉簟秋。轻解罗裳，独上兰舟。云中谁寄锦书来，雁字回时，月满西楼。",
      "花自飘零水自流。一种相思，两处闲愁。此情无计可消除，才下眉头，却上心头。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "蝶恋花·庭院深深深几许",
    "notes": [],
    "author": "欧阳修",
    "paragraphs": [
      "庭院深深深几许，杨柳堆烟，帘幕无重数。玉勒雕鞍游冶处，楼高不见章台路。",
      "雨横风狂三月暮，门掩黄昏，无计留春住。泪眼问花花不语，乱红飞过秋千去。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "点绛唇·新月娟娟",
    "notes": [],
    "author": "汪藻",
    "paragraphs": [
      "新月娟娟，夜寒江静山衔斗。起来搔首，梅影横窗瘦。",
      "好个霜天，闲却传杯手。君知否？乱鸦啼后，归兴浓于酒。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "虞美人·风回小院庭芜绿",
    "notes": [],
    "author": "李煜",
    "paragraphs": [
      "风回小院庭芜绿，柳眼春相续。凭阑半日独无言，依旧竹声新月似当年。",
      "笙歌未散尊罍在，池面冰初解。烛明香暗画堂深，满鬓青霜残雪思难任。"
    ],
    "dynasty": "五代"
  },
  {
    "title": "鹊踏枝·谁道闲情抛掷久",
    "notes": [
      "敢辞--一作 ：不辞"
    ],
    "author": "冯延巳",
    "paragraphs": [
      "谁道闲情抛掷久？每到春来，惆怅还依旧。日日花前常病酒，敢辞镜里朱颜瘦。",
      "河畔青芜堤上柳，为问新愁，何事年年有？独立小桥风满袖，平林新月人归后。"
    ],
    "dynasty": "五代"
  },
  {
    "title": "解语花·上元",
    "notes": [],
    "author": "周邦彦",
    "paragraphs": [
      "风消绛蜡，露浥红莲，灯市光相射。桂华流瓦。纤云散，耿耿素娥欲下。衣裳淡雅。看楚女纤腰一把。箫鼓喧，人影参差，满路飘香麝。",
      "因念都城放夜。望千门如昼，嬉笑游冶。钿车罗帕。相逢处，自有暗尘随马。年光是也。唯只见、旧情衰谢。清漏移，飞盖归来，从舞休歌罢。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "鹧鸪天·西都作",
    "notes": [],
    "author": "朱敦儒",
    "paragraphs": [
      "我是清都山水郎，天教分付与疏狂。曾批给雨支风券，累上留云借月章。",
      "诗万首，酒千觞。几曾着眼看侯王？玉楼金阙慵归去，且插梅花醉洛阳。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "菩萨蛮·红楼别夜堪惆怅",
    "notes": [],
    "author": "韦庄",
    "paragraphs": [
      "红楼别夜堪惆怅，香灯半卷流苏帐。",
      "残月出门时，美人和泪辞。",
      "琵琶金翠羽，弦上黄莺语。",
      "劝我早还家，绿窗人似花。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "秦楼月·芳菲歇",
    "notes": [],
    "author": "向子諲",
    "paragraphs": [
      "芳菲歇，故园目断伤心切。伤心切，无边烟水，无穷山色。",
      "可堪更近乾龙节，眼中泪尽空啼血。空啼血，子规声外，晓风残月。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "点绛唇·丁未冬过吴松作",
    "notes": [],
    "author": "姜夔",
    "paragraphs": [
      "燕雁无心，太湖西畔随云去。数峰清苦。商略黄昏雨。",
      "第四桥边，拟共天随住。今何许。凭阑怀古。残柳参差舞。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "卜算子·黄州定慧院寓居作",
    "notes": [
      "时见--一作 ：谁见"
    ],
    "author": "苏轼",
    "paragraphs": [
      "缺月挂疏桐，漏断人初静。时见幽人独往来，缥缈孤鸿影。",
      "惊起却回头，有恨无人省。拣尽寒枝不肯栖，寂寞沙洲冷。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "离亭燕·一带江山如画",
    "notes": [],
    "author": "张昪",
    "paragraphs": [
      "一带江山如画，风物向秋潇洒。水浸碧天何处断？霁色冷光相射。蓼屿荻花洲，掩映竹篱茅舍。",
      "云际客帆高挂，烟外酒旗低亚。多少六朝兴废事，尽入渔樵闲话。怅望倚层楼，寒日无言西下。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "蓦山溪·梅",
    "notes": [],
    "author": "曹组",
    "paragraphs": [
      "洗妆真态，不作铅花御。竹外一枝斜，想佳人，天寒日暮。黄昏院落，无处著清香，风细细，雪垂垂，何况江头路。",
      "月边疏影，梦到消魂处。梅子欲黄时，又须作，廉纤细雨。孤芳一世，供断有情愁，消瘦损，东阳也，试问花知否？"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "女冠子·四月十七",
    "notes": [],
    "author": "韦庄",
    "paragraphs": [
      "四月十七，正是去年今日，别君时。忍泪佯低面，含羞半敛眉。",
      "不知魂已断，空有梦相随。除却天边月，没人知。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "生查子·元夕",
    "notes": [],
    "author": "欧阳修",
    "paragraphs": [
      "去年元夜时，花市灯如昼。",
      "月上柳梢头，人约黄昏后。",
      "今年元夜时，月与灯依旧。",
      "不见去年人，泪湿春衫袖。(泪",
      "湿",
      "：一作：满)"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "蝶恋花·暖雨晴风初破冻",
    "notes": [],
    "author": "李清照",
    "paragraphs": [
      "暖雨晴风初破冻，柳眼梅腮，已觉春心动。酒意诗情谁与共？泪融残粉花钿重。",
      "乍试夹衫金缕缝，山枕斜欹，枕损钗头凤。独抱浓愁无好梦，夜阑犹剪灯花弄。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "谒金门·春半",
    "notes": [],
    "author": "朱淑真",
    "paragraphs": [
      "春已半。触目此情无限。十二阑干闲倚遍。愁来天不管。",
      "好是风和日暖。输与莺莺燕燕。满院落花帘不卷。断肠芳草远。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "望江南·天上月",
    "notes": [],
    "author": "佚名",
    "paragraphs": [
      "天上月，遥望似一团银。夜久更阑风渐紧。与奴吹散月边云。照见负心人。"
    ],
    "dynasty": "五代"
  },
  {
    "title": "南柯子·十里青山远",
    "notes": [],
    "author": "仲殊",
    "paragraphs": [
      "十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。",
      "白露收残月，清风散晓霞。绿杨堤畔问荷花：记得年时沽酒，那人家？"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "武陵春·春晚",
    "notes": [],
    "author": "李清照",
    "paragraphs": [
      "风住尘香花已尽，日晚倦梳头。物是人非事事休，欲语泪先流。",
      "闻说双溪春尚好，也拟泛轻舟。只恐双溪舴艋舟，载不动许多愁。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "疏影·苔枝缀玉",
    "notes": [],
    "author": "姜夔",
    "paragraphs": [
      "辛亥之冬，余载雪诣石湖。止既月，授简索句，且征新声，作此两曲，石湖把玩不已，使二妓肆习之，音节谐婉，乃名之曰《暗香》、《疏影》。",
      "",
      "苔枝缀玉，有翠禽小小，枝上同宿。客里相逢，篱角黄昏，无言自倚修竹。昭君不惯胡沙远，但暗忆、江南江北。想佩环、月夜归来，化作此花幽独。",
      "犹记深宫旧事，那人正睡里，飞近蛾绿。莫似春风，不管盈盈，早与安排金屋。还教一片随波去，又却怨、玉龙哀曲。等恁时、重觅幽香，已入小窗横幅。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "诉衷情·永夜抛人何处去",
    "notes": [],
    "author": "顾夐",
    "paragraphs": [
      "永夜抛人何处去？绝来音。香阁掩，眉敛，月将沉。",
      "争忍不相寻？怨孤衾。换我心，为你心，始知相忆深。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "江城子·西城杨柳弄春柔",
    "notes": [],
    "author": "秦观",
    "paragraphs": [
      "西城杨柳弄春柔，动离忧，泪难收。犹记多情、曾为系归舟。碧野朱桥当日事，人不见，水空流。",
      "韶华不为少年留，恨悠悠，几时休？飞絮落花时候、一登楼。便作春江都是泪，流不尽，许多愁。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "唐多令·惜别",
    "notes": [],
    "author": "吴文英",
    "paragraphs": [
      "何处合成愁。离人心上秋。纵芭蕉、不雨也飕飕。都道晚凉天气好，有明月、怕登楼。",
      "年事梦中休。花空烟水流。燕辞归、客尚淹留。垂柳不萦裙带住。漫长是、系行舟。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "卜算子·我住长江头",
    "notes": [],
    "author": "李之仪",
    "paragraphs": [
      "我住长江头，君住长江尾。日日思君不见君，共饮长江水。",
      "此水几时休，此恨何时已。只愿君心似我心，定不负相思意。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "南柯子·山冥云阴重",
    "notes": [],
    "author": "王炎",
    "paragraphs": [
      "山冥云阴重，天寒雨意浓。数枝幽艳湿啼红。莫为惜花惆怅对东风。",
      "蓑笠朝朝出，沟塍处处通。人间辛苦是三农。要得一犁水足望年丰。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "蝶恋花·早行",
    "notes": [],
    "author": "周邦彦",
    "paragraphs": [
      "月皎惊乌栖不定，更漏将残，辘轳牵金井。唤起两眸清炯炯。泪花落枕红绵冷。",
      "执手霜风吹鬓影。去意徊徨，别语愁难听。楼上阑干横斗柄，露寒人远鸡相应。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "钗头凤·红酥手",
    "notes": [],
    "author": "陆游",
    "paragraphs": [
      "红酥手，黄縢酒，满城春色宫墙柳。东风恶，欢情薄。一怀愁绪，几年离索。错、错、错。",
      "春如旧，人空瘦，泪痕红浥鲛绡透。桃花落，闲池阁。山盟虽在，锦书难托。莫、莫、莫！"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "采莲子·菡萏香莲十顷陂",
    "notes": [],
    "author": "皇甫松",
    "paragraphs": [
      "菡萏香连十顷陂，小姑贪戏采莲迟。",
      "晚来弄水船头湿，更脱红裙裹鸭儿。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "诉衷情·眉意",
    "notes": [],
    "author": "欧阳修",
    "paragraphs": [
      "清晨帘幕卷轻霜。呵手试梅妆。都缘自有离恨，故画作远山长。",
      "思往事，惜流芳。易成伤。拟歌先敛，欲笑还颦，最断人肠。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "柳梢青·岳阳楼",
    "notes": [],
    "author": "戴复古",
    "paragraphs": [
      "袖剑飞吟。洞庭青草，秋水深深。万顷波光，岳阳楼上，一快披襟。",
      "不须携酒登临。问有酒、何人共斟。变尽人间，君山一点，自古如今。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "六州歌头·少年侠气",
    "notes": [
      "闲呼--一作 ：间呼"
    ],
    "author": "贺铸",
    "paragraphs": [
      "少年侠气，交结五都雄。肝胆洞。毛发耸。立谈中。死生同。一诺千金重。推翘勇。矜豪纵。轻盖拥。联飞鞚。斗城东。轰饮酒垆，春色浮寒瓮。吸海垂虹。闲呼鹰嗾犬，白羽摘雕弓。狡穴俄空。乐匆匆。",
      "似黄粱梦。辞丹凤。明月共。漾孤篷。官冗從。怀倥偬。落尘笼。簿书丛。鹖弁如云众。供粗用。忽奇功。笳鼓动。渔阳弄。思悲翁。不请长缨，系取天骄种。剑吼西风。恨登山临水，手寄七弦桐。目送归鸿。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "浣溪沙·一向年光有限身",
    "notes": [],
    "author": "晏殊",
    "paragraphs": [
      "一向年光有限身，等闲离别易销魂，酒筵歌席莫辞频。",
      "满目山河空念远，落花风雨更伤春，不如怜取眼前人。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "八声甘州·记玉关踏雪事清游",
    "notes": [],
    "author": "张炎",
    "paragraphs": [
      "辛卯岁，沈尧道同余北归，各处杭、越。逾岁，尧道来问寂寞，语笑数日。又复别去。赋此曲，并寄赵学舟。",
      "",
      "记玉关踏雪事清游，寒气脆貂裘。傍枯林古道，长河饮马，此意悠悠。短梦依然江表，老泪洒西州。一字无题处，落叶都愁。",
      "载取白云归去，问谁留楚佩，弄影中洲？折芦花赠远，零落一身秋。向寻常、野桥流水，待招来，不是旧沙鸥。空怀感，有斜阳处，却怕登楼。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "清平乐·候蛩凄断",
    "notes": [],
    "author": "张炎",
    "paragraphs": [
      "候蛩凄断，人语西风岸。月落沙平江似练，望尽芦花无雁。",
      "暗教愁损兰成，可怜夜夜关情。只有一枝梧叶，不知多少秋声！"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "望海潮·洛阳怀古",
    "notes": [],
    "author": "秦观",
    "paragraphs": [
      "梅英疏淡，冰澌溶泄，东风暗换年华。金谷俊游，铜驼巷陌，新晴细履平沙。长记误随车。正絮翻蝶舞，芳思交加。柳下桃蹊，乱分春色到人家。",
      "西园夜饮鸣笳。有华灯碍月，飞盖妨花。兰苑未空，行人渐老，重来是事堪嗟。烟暝酒旗斜。但倚楼极目，时见栖鸦。无奈归心，暗随流水到天涯。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "山亭柳·赠歌者",
    "notes": [],
    "author": "晏殊",
    "paragraphs": [
      "家住西秦。赌博艺随身。花柳上、斗尖新。偶学念奴声调，有时高遏行云。蜀锦缠头无数，不负辛勤。",
      "数年来往咸京道，残杯冷炙谩消魂。衷肠事、托何人。若有知音见采，不辞遍唱阳春。一曲当筵落泪，重掩罗巾。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "盐角儿·亳社观梅",
    "notes": [],
    "author": "晁补之",
    "paragraphs": [
      "开时似雪。谢时似雪。花中奇绝。香非在蕊，香非在萼，骨中香彻。",
      "占溪风，留溪月。堪羞损、山桃如血。直饶更、疏疏淡淡，终有一般情别。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "鹊踏枝·叵耐灵鹊多谩语",
    "notes": [],
    "author": "佚名",
    "paragraphs": [
      "叵耐灵鹊多谩语，送喜何曾有凭据？几度飞来活捉取，锁上金笼休共语。",
      "比拟好心来送喜，谁知锁我在金笼里。欲他征夫早归来，腾身却放我向青云里。"
    ],
    "dynasty": "五代"
  },
  {
    "title": "踏莎行·郴州旅舍",
    "notes": [],
    "author": "秦观",
    "paragraphs": [
      "雾失楼台，月迷津渡。桃源望断无寻处。可堪孤馆闭春寒，杜鹃声里斜阳暮。",
      "驿寄梅花，鱼传尺素。砌成此恨无重数。郴江幸自绕郴山，为谁流下潇湘去。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "六丑·落花",
    "notes": [],
    "author": "周邦彦",
    "paragraphs": [
      "正单衣试酒，恨客里、光阴虚掷。愿春暂留，春归如过翼。一去无迹。为问花何在，夜来风雨，葬楚宫倾国。钗钿堕处遗香泽。乱点桃蹊，轻翻柳陌。多情为谁追惜。但蜂媒蝶使，时叩窗隔。",
      "东园岑寂。渐蒙笼暗碧。静绕珍丛底，成叹息。长条故惹行客。似牵衣待话，别情无极。残英小、强簪巾帻。终不似一朵，钗头颤袅，向人欹侧。漂流处、莫趁潮汐。恐断红、尚有相思字，何由见得。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "好事近·摇首出红尘",
    "notes": [],
    "author": "朱敦儒",
    "paragraphs": [
      "摇首出红尘，醒醉更无时节。活计绿蓑青笠，惯披霜冲雪。",
      "晚来风定钓丝闲，上下是新月。千里水天一色，看孤鸿明灭。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "鹊桥仙·纤云弄巧",
    "notes": [
      "度--通 ：渡"
    ],
    "author": "秦观",
    "paragraphs": [
      "纤云弄巧，飞星传恨，银汉迢迢暗度。金风玉露一相逢，便胜却人间无数。",
      "柔情似水，佳期如梦，忍顾鹊桥归路。两情若是久长时，又岂在朝朝暮暮。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "贺圣朝·留别",
    "notes": [],
    "author": "叶清臣",
    "paragraphs": [
      "满斟绿醑留君住。莫匆匆归去。三分春色二分愁，更一分风雨。",
      "花开花谢、都来几许。且高歌休诉。不知来岁牡丹时，再相逢何处。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "水调歌头·平山堂用东坡韵",
    "notes": [],
    "author": "方岳",
    "paragraphs": [
      "秋雨一何碧，山色倚晴空。江南江北愁思，分付酒螺红。芦叶蓬舟千重，菰菜莼羹一梦，无语寄归鸿。醉眼渺河洛，遗恨夕阳中。",
      "苹洲外，山欲暝，敛眉峰。人间俯仰陈迹，叹息两仙翁。不见当时杨柳，只是从前烟雨，磨灭几英雄。天地一孤啸，匹马又西风。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "水调歌头·秋色渐将晚",
    "notes": [],
    "author": "叶梦得",
    "paragraphs": [
      "秋色渐将晚，霜信报黄花。小窗低户深映，微路绕欹斜。为问山翁何事，坐看流年轻度，拚却鬓双华。徙倚望沧海，天净水明霞。",
      "念平昔，空飘荡，遍天涯。归来三径重扫，松竹本吾家。却恨悲风时起，冉冉云间新雁，边马怨胡笳。谁似东山老，谈笑静胡沙。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "点绛唇·感兴",
    "notes": [
      "栏--通 ：阑"
    ],
    "author": "王禹偁",
    "paragraphs": [
      "雨恨云愁，江南依旧称佳丽。水村渔市。一缕孤烟细。",
      "天际征鸿，遥认行如缀。平生事。此时凝睇。谁会凭栏意。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "鹤冲天·黄金榜上",
    "notes": [],
    "author": "柳永",
    "paragraphs": [
      "黄金榜上，偶失龙头望。明代暂遗贤，如何向。未遂风云便，争不恣狂荡。何须论得丧？才子词人，自是白衣卿相。",
      "烟花巷陌，依约丹青屏障。幸有意中人，堪寻访。且恁偎红倚翠，风流事，平生畅。青春都一饷。忍把浮名，换了浅斟低唱！"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "渔家傲·花底忽闻敲两桨",
    "notes": [],
    "author": "欧阳修",
    "paragraphs": [
      "花底忽闻敲两桨。逡巡女伴来寻访。酒盏旋将荷叶当。莲舟荡。时时盏里生红浪。",
      "花气酒香清厮酿。花腮酒面红相向。醉倚绿阴眠一饷。惊起望。船头阁在沙滩上。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "浣溪沙·一曲新词酒一杯",
    "notes": [],
    "author": "晏殊",
    "paragraphs": [
      "一曲新词酒一杯，去年天气旧亭台。夕阳西下几时回？",
      "无可奈何花落去，似曾相识燕归来。小园香径独徘徊。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "满庭芳·夏日溧水无想山作",
    "notes": [],
    "author": "周邦彦",
    "paragraphs": [
      "风老莺雏，雨肥梅子，午阴嘉树清圆。地卑山近，衣润费炉烟。人静乌鸢自乐，小桥外、新绿溅溅。凭阑久，黄芦苦竹，拟泛九江船。",
      "年年。如社燕，飘流瀚海，来寄修椽。且莫思身外，长近尊前。憔悴江南倦客，不堪听、急管繁弦。歌筵畔，先安簟枕，容我醉时眠。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "卜算子·送鲍浩然之浙东",
    "notes": [],
    "author": "王观",
    "paragraphs": [
      "水是眼波横，山是眉峰聚。欲问行人去那边？眉眼盈盈处。",
      "才始送春归，又送君归去。若到江南赶上春，千万和春住。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "临江仙·未遇行藏谁肯信",
    "notes": [],
    "author": "侯蒙",
    "paragraphs": [
      "未遇行藏谁肯信，如今方表名踪。无端良匠画形容。当风轻借力，一举入高空。",
      "才得吹嘘身渐稳，只疑远赴蟾宫。雨馀时候夕阳红。几人平地上，看我碧霄中。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "渔歌子·西塞山前白鹭飞",
    "notes": [],
    "author": "张志和",
    "paragraphs": [
      "西塞山前白鹭飞，桃花流水鳜鱼肥。",
      "青箬笠，绿蓑衣，斜风细雨不须归。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "兰陵王·柳",
    "notes": [],
    "author": "周邦彦",
    "paragraphs": [
      "柳阴直，烟里丝丝弄碧。隋堤上、曾见几番，拂水飘绵送行色。登临望故国，谁识京华倦客？长亭路，年去岁来，应折柔条过千尺。",
      "闲寻旧踪迹，又酒趁哀弦，灯照离席。梨花榆火催寒食。愁一箭风快，半篙波暖，回头迢递便数驿，望人在天北。",
      "凄恻，恨堆积！渐别浦萦回，津堠岑寂，斜阳冉冉春无极。念月榭携手，露桥闻笛。沉思前事，似梦里，泪暗滴。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "定风波·南海归赠王定国侍人寓娘",
    "notes": [],
    "author": "苏轼",
    "paragraphs": [
      "常羡人间琢玉郎，天应乞与点酥娘。尽道清歌传皓齿，风起，雪飞炎海变清凉。",
      "万里归来颜愈少，微笑，笑时犹带岭梅香。试问岭南应不好，却道：此心安处是吾乡。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "西江月·夜行黄沙道中",
    "notes": [
      "溪桥--一作 ：溪头"
    ],
    "author": "辛弃疾",
    "paragraphs": [
      "明月别枝惊鹊，清风半夜鸣蝉。稻花香里说丰年，听取蛙声一片。",
      "七八个星天外，两三点雨山前。旧时茅店社林边，路转溪桥忽见。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "踏莎行·春暮",
    "notes": [],
    "author": "寇准",
    "paragraphs": [
      "春色将阑，莺声渐老，红英落尽青梅小。画堂人静雨蒙蒙，屏山半掩余香袅。",
      "密约沉沉，离情杳杳，菱花尘满慵将照。倚楼无语欲销魂，长空黯淡连芳草。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "相思令·吴山青",
    "notes": [],
    "author": "林逋",
    "paragraphs": [
      "吴山青，越山青，两岸青山相送迎，争忍有离情？",
      "君泪盈，妾泪盈，罗带同心结未成，江边潮已平。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "浣溪沙·红蓼渡头秋正雨",
    "notes": [],
    "author": "薛昭蕴",
    "paragraphs": [
      "红蓼渡头秋正雨，印沙鸥迹自成行，整鬟飘袖野风香。",
      "不语含嚬深浦里，几回愁煞棹船郎，燕归帆尽水茫茫。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "钗头凤·世情薄",
    "notes": [],
    "author": "唐婉",
    "paragraphs": [
      "世情薄，人情恶，雨送黄昏花易落。晓风干，泪痕残。欲笺心事，独语斜阑。难，难，难！",
      "人成各，今非昨，病魂常似秋千索。角声寒，夜阑珊。怕人寻问，咽泪装欢。瞒，瞒，瞒！(",
      "装",
      "欢 通：妆)"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "长命女·春日宴",
    "notes": [],
    "author": "冯延巳",
    "paragraphs": [
      "春日宴，绿酒一杯歌一遍。再拜陈三愿：一愿郎君千岁，二愿妾身常健，三愿如同梁上燕，岁岁长相见。"
    ],
    "dynasty": "五代"
  },
  {
    "title": "菩萨蛮·平林漠漠烟如织",
    "notes": [
      "连短亭--一作 ：更短亭"
    ],
    "author": "李白",
    "paragraphs": [
      "平林漠漠烟如织，寒山一带伤心碧。暝色入高楼，有人楼上愁。",
      "玉阶空伫立，宿鸟归飞急。何处是归程？长亭连短亭。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "竹枝词·山桃红花满上头",
    "notes": [],
    "author": "刘禹锡",
    "paragraphs": [
      "山桃红花满上头，蜀江春水拍山流。",
      "花红易衰似郎意，水流无限似侬愁。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "渔家傲·天接云涛连晓雾",
    "notes": [],
    "author": "李清照",
    "paragraphs": [
      "天接云涛连晓雾，星河欲转千帆舞。仿佛梦魂归帝所。闻天语，殷勤问我归何处。",
      "我报路长嗟日暮，学诗谩有惊人句。九万里风鹏正举。风休住，蓬舟吹取三山去！"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "贺新郎·送胡邦衡待制赴新州",
    "notes": [],
    "author": "张元干",
    "paragraphs": [
      "梦绕神州路。怅秋风、连营画角，故宫离黍。底事昆仑倾砥柱，九地黄流乱注。聚万落千村狐兔。天意从来高难问，况人情老易悲难诉。更南浦，送君去。",
      "凉生岸柳催残暑。耿斜河，疏星残月，断云微度。万里江山知何处？回首对床夜语。雁不到，书成谁与？目尽青天怀今古，肯儿曹恩怨相尔汝！举大白，听《金缕》。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "苍梧谣·天",
    "notes": [],
    "author": "蔡伸",
    "paragraphs": [
      "天。休使圆蟾照客眠。人何在，桂影自婵娟。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "声声慢·寻寻觅觅",
    "notes": [
      "守着窗儿--一作 ：守著窗儿"
    ],
    "author": "李清照",
    "paragraphs": [
      "寻寻觅觅，冷冷清清，凄凄惨惨戚戚。乍暖还寒时候，最难将息。三杯两盏淡酒，怎敌他、晚来风急？雁过也，正伤心，却是旧时相识。",
      "满地黄花堆积。憔悴损，如今有谁堪摘？守着窗儿，独自怎生得黑？梧桐更兼细雨，到黄昏、点点滴滴。这次第，怎一个愁字了得！"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "减字木兰花·莎衫筠笠",
    "notes": [],
    "author": "卢炳",
    "paragraphs": [
      "莎衫筠笠。正是村村农务急。绿水千畦。惭愧秧针出得齐。",
      "风斜雨细。麦欲黄时寒又至。馌妇耕夫。画作今年稔岁图。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "三台·清明应制",
    "notes": [],
    "author": "万俟咏",
    "paragraphs": [
      "见梨花初带夜月，海棠半含朝雨。内苑春、不禁过青门，御沟涨、潜通南浦。东风静、细柳垂金缕。望凤阙、非烟非雾。好时代、朝野多欢，遍九陌、太平箫鼓。",
      "乍莺儿百啭断续，燕子飞来飞去。近绿水、台榭映秋千，斗草聚、双双游女。饧香更、酒冷踏青路。会暗识、夭桃朱户。向晚骤、宝马雕鞍，醉襟惹、乱花飞絮。",
      "正轻寒轻暖漏永，半阴半晴云暮。禁火天、已是试新妆，岁华到、三分佳处。清明看、汉宫传蜡炬。散翠烟、飞入槐府。敛兵卫、阊阖门开，住传宣、又还休务。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "八声甘州·灵岩陪庾幕诸公游",
    "notes": [],
    "author": "吴文英",
    "paragraphs": [
      "渺空烟四远，是何年、青天坠长星？幻苍崖云树，名娃金屋，残霸宫城。箭径酸风射眼，腻水染花腥。时靸双鸳响，廊叶秋声。",
      "宫里吴王沉醉，倩五湖倦客，独钓醒醒。问苍波无语，华发奈山青。水涵空、阑干高处，送乱鸦斜日落渔汀。连呼酒、上琴台去，秋与云平。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "苏幕遮·燎沉香",
    "notes": [],
    "author": "周邦彦",
    "paragraphs": [
      "燎沉香，消溽暑。鸟雀呼晴，侵晓窥檐语。叶上初阳干宿雨、水面清圆，一一风荷举。",
      "故乡遥，何日去。家住吴门，久作长安旅。五月渔郎相忆否。小楫轻舟，梦入芙蓉浦。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "破阵子·四十年来家国",
    "notes": [],
    "author": "李煜",
    "paragraphs": [
      "四十年来家国，三千里地山河。凤阁龙楼连霄汉，玉树琼枝作烟萝，几曾识干戈？",
      "一旦归为臣虏，沈腰潘鬓消磨。最是仓皇辞庙日，教坊犹奏别离歌，垂泪对宫娥。"
    ],
    "dynasty": "五代"
  },
  {
    "title": "破阵子·春景",
    "notes": [],
    "author": "晏殊",
    "paragraphs": [
      "燕子来时新社，梨花落后清明。池上碧苔三四点，叶底黄鹂一两声。日长飞絮轻。",
      "巧笑东邻女伴，采桑径里逢迎。疑怪昨宵春梦好，元是今朝斗草赢。笑从双脸生。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "念奴娇·断虹霁雨",
    "notes": [],
    "author": "黄庭坚",
    "paragraphs": [
      "八月十七日，同诸生步自永安城楼，过张宽夫园待月。偶有名酒，因以金荷酌众客。客有孙彦立，善吹笛。援笔作乐府长短句，文不加点。",
      "",
      "断虹霁雨，净秋空，山染修眉新绿。桂影扶疏，谁便道，今夕清辉不足？万里青天，姮娥何处，驾此一轮玉。寒光零乱，为谁偏照醽醁？",
      "年少从我追游，晚凉幽径，绕张园森木。共倒金荷，家万里，难得尊前相属。老子平生，江南江北，最爱临风笛。孙郎微笑，坐来声喷霜竹。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "宴清都·初春",
    "notes": [],
    "author": "卢祖皋",
    "paragraphs": [
      "春讯飞琼管。风日薄、度墙啼鸟声乱。江城次第，笙歌翠合，绮罗香暖。溶溶涧渌冰泮。醉梦里、年华暗换。料黛眉重锁隋堤，芳心还动梁苑。",
      "新来雁阔云音，鸾分鉴影，无计重见。啼春细雨，笼愁澹月，恁时庭院。离肠未语先断。算犹有、凭高望眼。更那堪、芳草连天，飞梅弄晚。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "南乡子·乘彩舫",
    "notes": [],
    "author": "李珣",
    "paragraphs": [
      "乘彩舫，过莲塘，棹歌惊起睡鸳鸯。游女带花偎伴笑，争窈窕，竞折团荷遮晚照。"
    ],
    "dynasty": "唐代"
  },
  {
    "title": "卜算子·片片蝶衣轻",
    "notes": [],
    "author": "刘克庄",
    "paragraphs": [
      "片片蝶衣轻，点点猩红小。道是天公不惜花，百种千般巧。",
      "朝见树头繁，暮见枝头少。道是天公果惜花，雨洗风吹了。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "秋波媚·七月十六日晚登高兴亭望长安南山",
    "notes": [],
    "author": "陆游",
    "paragraphs": [
      "秋到边城角声哀，烽火照高台。悲歌击筑，凭高酹酒，此兴悠哉。",
      "多情谁似南山月，特地暮云开。灞桥烟柳，曲江池馆，应待人来。"
    ],
    "dynasty": "宋代"
  },
  {
    "title": "贺新郎·别茂嘉十二弟",
    "notes": [],
    "author": "辛弃疾",
    "paragraphs": [
      "别茂嘉十二弟。鹈鴂、杜鹃实两种，见《离骚补注》",
      "绿树听鹈鴂。更那堪、鹧鸪声住，杜鹃声切。啼到春归无寻处，苦恨芳菲都歇。算未抵、人间离别。马上琵琶关塞黑，更长门、翠辇辞金阙。看燕燕，送归妾。",
      "将军百战身名裂。向河梁、回头万里，故人长绝。易水萧萧西风冷，满座衣冠似雪。正壮士、悲歌未彻。啼鸟还知如许恨，料不啼清泪长啼血。谁共我，醉明月。"
    ],
    "dynasty": "宋代"
  }
]

export function weekDays(current) {
  let week = new Array();
  // Starting Monday not Sunday
  current.setDate((current.getDate() - current.getDay() + 1));
  for (let i = 0; i < 7; i++) {
    week.push(
      new Date(current)
    );
    current.setDate(current.getDate() + 1);
  }
  return week;
}

export function monDay(d) {
  d = new Date(d);
  let day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6 : 1);
  return new Date(d.setDate(diff));
}

export function weekNumber(d) {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  // Get first day of year
  let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  // Calculate full weeks to nearest Thursday
  let weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  // Return array of year and week number
  return [d.getUTCFullYear(), weekNo];
}

export function closeOther(ids, current) {
  ids.forEach(function (id) {

    if (id === current) {
      return
    }

    let x = document.getElementById(id);

    x.style.display = "none";
  })
}

export function toggleWechat() {
  let x = document.getElementById("wx");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

export function useWechat() {
  let wechat = document.getElementById("wechat");
  let alipay = document.getElementById("alipay");
  let wechatImage = document.getElementById("wechat-qrcode-image");
  let alipayImage = document.getElementById("alipay-qrcode-image");

  wechat.classList.add("active")
  alipay.classList.remove("active")

  wechatImage.style.display = "block"
  alipayImage.style.display = "none"
}

export function useAlipay() {
  let wechat = document.getElementById("wechat");
  let alipay = document.getElementById("alipay");
  let wechatImage = document.getElementById("wechat-qrcode-image");
  let alipayImage = document.getElementById("alipay-qrcode-image");

  alipay.classList.add("active")
  wechat.classList.remove("active")

  wechatImage.style.display = "none"
  alipayImage.style.display = "block"
}

export function toggleById(ids, id) {
  closeOther(ids, id)

  let x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

export function setContentP(content) {
  let ps = null;
  if (content instanceof Array) {
    ps = content
  } else {
    ps = content.split('\n');
  }
  let root = document.getElementById("pcontent");

  root.innerHTML = '';

  for (let i in ps) {
    let p = ps[i]
    let element = document.createElement('p');
    let text = document.createTextNode(p);
    element.appendChild(text);
    root.appendChild(element);
  }
}

export function pad(d) {
  return (d < 10) ? '0' + d.toString() : d.toString();
}

export function datediff(first, second) {
  // Take the difference between the dates and divide by milliseconds per day.
  // Round to nearest whole number to deal with DST.
  return Math.abs(Math.round((second - first) / (1000 * 60 * 60 * 24)));
}

export function getJijie(today) {
  let year = today.getFullYear();
  let midYear = new Date(year, 0o5, 30)
  let cf, dz = null;
  if (today > midYear) {
    cf = new Date(year + 1, 0o2, calendar.getTerm(2019, 6));
    dz = new Date(year, 11, calendar.getTerm(2019, 24));
  } else {
    cf = new Date(year, 0o2, calendar.getTerm(2019, 6));
    dz = new Date(year - 1, 11, calendar.getTerm(2019, 24));
  }

  let xz = new Date(year, 5, calendar.getTerm(2019, 12));
  let qf = new Date(year, 8, calendar.getTerm(2019, 18));

  let siJi = {
    cf: datediff(cf, today),
    xz: datediff(xz, today),
    qf: datediff(qf, today),
    dz: datediff(dz, today)
  }

  let min = Math.min(siJi.cf, siJi.xz, siJi.qf, siJi.dz);

  if (min === siJi.cf) {
    return 'chun'
  } else if (min === siJi.xz) {
    return 'xia'
  } else if (min === siJi.qf) {
    return 'qiu'
  } else if (min === siJi.dz) {
    return 'dong'
  }
  return 'chun'
}

export function getProgress(today) {
  let year = today.getFullYear();
  let firstDay = new Date(year, 0, 1)

  return datediff(today, firstDay) / 365 * 100;
}



