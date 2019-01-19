//页面数据

//首页链接推荐
export const links=[
    {title:'鑫空间，鑫生活',url:'https://www.zhangxinxu.com/'},
    {title:'志文工作室',url:'https://lzw.me/cate/art/ued'},
    {title:'阮一峰的个人网站',url:'http://www.ruanyifeng.com/home.html'},
]
//首页图片滚动
export const pictures=[
   {'title':'布达拉宫',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547444773979&di=1098411d7559f656fcc93f62fd520cb3&imgtype=0&src=http%3A%2F%2Fbpic.ooopic.com%2F15%2F14%2F62%2F15146299-3f41f443c76c2252fed4b41deb874805.jpg'},
   {'title':'日照金山',url:'https://5b0988e595225.cdn.sohucs.com/images/20171114/f1904d5a397c490cada13f7c1842bbb2.jpg'},
   {'title':'纳木错--天湖',url:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2309665317,1499710035&fm=173&app=25&f=JPG?w=640&h=410&s=BB326084F60931473C87CD8903006099'},
   {'title':'林芝--西藏江南',url:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2730363537,1039270330&fm=173&app=25&f=JPEG?w=640&h=400&s=F32726E2061A366522238844030070FA'},
]
//web内容对应目录(如果没有children，就不要写children，否则修改程序)
export const contents=[
    {
        title:'Javascript',
        children:[
            {title:'sort排序',type:'html',url:'/htmls/sort.html',time:'2018-1-17',content:'sort()方法使用...'}
        ]
    },
    {
        title:'HTML5',
        children:[
            {title:'Canvas自由粒子效果',type:'html',url:'/htmls/自由粒子.html',time:'2018-1-17',content:'根据HTML5的画布canvas实现自由粒子的效果...'}
        ]
    },
    {
        title:'CSS',
        children:[
            {title:'list-style',type:'md',url:'/mds/css/listStyle.md',time:'2018-01-05',content:'由于它应用到所有 display 为 list-item 的元素，所以在普通的 HTML 和 XHTML 中只能用于 li 元素，不过实际上它可以应用到任何元素，并由 list-item 元素继承...'},
            {title:'css变量',type:'html',url:'/htmls/CSS变量.html',time:'2018-1-17',content:'也称CSS自定义属性，可以通过“--”来声明变量，用“var()”来读取变量，但是IE不支持...'}
        ]
    },
    {
        title:'ES6'
    },
    {
        title:'Jquery'
    },{
        title:'React',
        children:[
            {title:'HTML字符串转为html',type:'md',url:'/mds/react/stringTohtml.md',time:'2018-01-06',content:'react的做法是不直接读取你的html代码，以此来避免cross-site scripting (XSS)攻击，让你的代码更加安全...'},
            {title:'CacheRoute中文说明',type:'md',url:'/mds/react/CacheRoute_CN.md',time:'2018-01-07',content:'Route中配置的组件在路径不匹配时会被卸载（render 方法中 return null），对应的真实节点也将从 dom 树中删除在阅读了Route的源码后我们发现可以将children当作方法来使用，以帮助我们手动控制渲染的行为...'}
        ]
    },{
        title:'Others',
        children:[
            {title:'web中展示Markdown文件',type:'md',url:'/mds/others/markdown.md',time:'2018-02-06',content:'有别于GitHub官方给提供的API（有访问频率限制），使用了一个npm 模块。这个模块可以非常方便的将Markdown语法的字符串直接转化为HTML 代码字符串。然后让某个div元素的innerHTML属性为这个字符串即可显示...'},
            {title:'跨站脚本攻击(XSS)',type:'md',url:'/mds/others/XSS.md',time:'2018-04-05',content:'跨站脚本攻击Cross-site scripting (XSS)是一种安全漏洞，攻击者可以利用这种漏洞在网站上注入恶意的客户端代码...'}
        ]
    }
    
]
//文章模块目录
export const articles=[
    {title:"向往西藏",type:'md',url:'/mds/articles/向往西藏.md',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547444773979&di=1098411d7559f656fcc93f62fd520cb3&imgtype=0&src=http%3A%2F%2Fbpic.ooopic.com%2F15%2F14%2F62%2F15146299-3f41f443c76c2252fed4b41deb874805.jpg',time:'2019-01-16',content:'有一种心情，叫做突然想去西藏'},
    {title:"云南白水台",type:'md',url:'/mds/articles/云南白水台.md',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547785843984&di=b0b39d2048357afd6d4369bcccdd353c&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180826%2F0642568bcc8140a991be9c3648f0da54.jpeg',time:'2019-01-18',content:'由于水中的碳酸氢钙经太阳光照射，水分蒸发后形成碳酸钙白色沉积物，之后又不断覆盖地表而形成的泉华地'},
    {title:"天空之镜——茶卡盐湖",type:'md',url:'/mds/articles/茶卡盐湖.md',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547786244862&di=0148f564346e102f84b6dbd0d46a0739&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fhb%2Fpics%2Fhv1%2F187%2F200%2F2206%2F143496337.jpeg',time:'2019-01-18',content:'别称茶卡或达布逊淖尔，是位于青海省海西蒙古族藏族自治州乌兰县茶卡镇的天然结晶盐湖，是柴达木盆地四大盐湖之一...'},
]
//音乐模块
export const MusicJson=[
    "http://wwwapi.kugou.com/yy/index.php?r=play/getdata&callback=jQuery1910151681780032495_1541658605352&hash=EDAA0AFE0971C7577DF2393322451A0E&album_id=8645856&_=1541658605353",
    "http://wwwapi.kugou.com/yy/index.php?r=play/getdata&callback=jQuery19101415737035988851_1541647800869&hash=B220E829FCE5A235395CCC40AA6578DE&album_id=1867181&_=1541647800871",
    "http://wwwapi.kugou.com/yy/index.php?r=play/getdata&callback=jQuery19105993756019309402_1541658367991&hash=6397780C92D55D7ACB94298EF0801B03&album_id=1995573&_=1541658367992",
    "http://wwwapi.kugou.com/yy/index.php?r=play/getdata&callback=jQuery1910164785022180842_1541659161289&hash=5A6E1EB00111D0331D3AAD21CAB83ABD&album_id=1789940&_=1541659161291",
    "http://wwwapi.kugou.com/yy/index.php?r=play/getdata&callback=jQuery191013032241257134358_1542192721265&hash=AAB36117FA876BA7277DD301F89AE044&album_id=8441395&_=1542192721267",
    "http://wwwapi.kugou.com/yy/index.php?r=play/getdata&callback=jQuery191041036723918871276_1542192820943&hash=79C00BC66D97D2EF177D14EF7ADEFC88&album_id=1597378&_=1542192820944",
    "http://wwwapi.kugou.com/yy/index.php?r=play/getdata&callback=jQuery191029568325680585494_1542355816692&hash=FC67DFD76F53A2F3BE772F7CDA1F7F64&album_id=2785862&_=1542355816694",
    "http://wwwapi.kugou.com/yy/index.php?r=play/getdata&callback=jQuery191016853450637535916_1542356014851&hash=1007801E8D824F696EB127E3B5B1BDAC&album_id=963085&_=1542356014852",
    "http://wwwapi.kugou.com/yy/index.php?r=play/getdata&callback=jQuery19109756531142519955_1542614894344&hash=D50C9BD8F823CCD79C2C320163A0B964&album_id=1942562&_=1542614894345",
    "http://wwwapi.kugou.com/yy/index.php?r=play/getdata&callback=jQuery191010380342338103099_1542615043093&hash=54A947506E98B831E5BF69BB64B20D2F&album_id=1760444&_=1542615043094",
    "http://wwwapi.kugou.com/yy/index.php?r=play/getdata&callback=jQuery19103036728597829872_1542615309214&hash=87D1049EEE8E236836E8340D969D0C0B&album_id=1947052&_=1542615309215",
    
]

