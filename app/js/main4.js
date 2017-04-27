//1. 准备一个根组件
var App = Vue.extend();

//2. Home News组件都准备
//查询组件

var Home = Vue.extend({
    data() {
        return {

        }
    },
    template: "#home",
    methods: {
        homepage: function () {
            // this.$router.go('homepage');
        },
        homecenter: function () {
            // this.$router.go('homecenter');
        }
    }
});
const xiangqing = {
    template: '<div><p>列表详情展示</p>你现在的详情页为 {{ $route.params.author}}</div>'
}
var Seek = Vue.extend({
    data() {
        return {
            msg: "submit",
            user: "",
            password: "",
            sdActivel: true,
            sdActiver: false,
            sdActivel1: true,
            sdActiver1: false,
            dui1: false,
            abc: false,
            citynameone: "北京",
            citynametwo: "武汉"
        }
    },
    props: {
        // city1:"河南",
        // city1:"河动",
    },
    template: "#seek",
    methods: {
        grabble: function () {
            // 响应成功回调
            this.$http.post("http://192.168.3.109:8081/server/PtOrderTFlightFindListA", {
                    "departDate": "2017-4-28",
                    "departAirport": "PEK",
                    "empRank": "1",
                    "tripType": "1",
                    "arriveAirport": "WUH",
                    "corpId": "ZJKYQY"
                })
                /*this.$http.get("js/list.json")*/
                .then(
                    function (res) {
                        // 处理成功的结果
                        this.$router.replace('/list1/flightList?cityone=' + this.citynameone + '&citytwo=' + this.citynametwo);
                        console.log(res);
                    },
                    function (res) {
                        // 处理失败的结果
                        alert(res.status);
                    }
                );

            // 响应错误回调

        },
        ticInquires: function () {
            this.$router.replace('/home/homepage');

        },
        oneway: function () {
            this.sdActivel = true;
            this.sdActiver = false;
            this.sdActivel1 = true;
            this.sdActiver1 = false;
            this.dui1 = false;
        },
        goback: function () {
            this.sdActivel = false;
            this.sdActiver = true;
            this.sdActivel1 = true;
            this.sdActiver1 = false;
            this.dui1 = false;

        },
        business: function () {
            this.sdActivel1 = true;
            this.sdActiver1 = false;
            this.dui1 = false;

        },
        privately: function () {
            this.sdActivel1 = false;
            this.sdActiver1 = true;
            this.dui1 = false;

        },
        dui: function () {
            this.dui1 = !this.dui1;
        },
        top1: function () {
            this.abc = !this.abc;

        },
        transitions: { //定义所有动画名称
            bounce: {
                enterClass: 'bounceInDown',
                leaveClass: 'zoomOutRight'
            }
        }

    }
});
//机票列表组件
var List1 = Vue.extend({
    data() {
        return {
            listActive1: true,
            listActive2: false,
            listActive3: false,

            todos: [{
                    a: "从早到晚",
                    p: "flightList"
                },
                {
                    a: "价格",
                    p: "cost"
                },
                {
                    a: "航班筛选",
                    p: "filtrate"
                }
            ],
            clic: "aa"
        }
    },
    template: "#list1",
    methods: {
        prev: function () {
            this.$router.go('/seek');
        },
        funs1: function ($index, $todo) {
            this.listActive1 = true;
            this.listActive2 = false;
            this.listActive3 = false;


        },

        funs2: function ($index, $todo) {
            this.listActive1 = false;
            this.listActive2 = true;
            this.listActive3 = false;

        },
        funs3: function ($index, $todo) {
            //    this.listFooterActive =! this.listFooterActive;
            this.listActive1 = false;
            this.listActive2 = false;
            this.listActive3 = true;

        }

    }
});
var Indent = Vue.extend({
    template: "#indent",
    data() {
        return {
            jpmsgs: [{
                    jpname: "张三",
                    identity: "xxx20300xxx43",
                    number: "13810730043"
                },
                {
                    jpname: "李四",
                    identity: "xxx20600xxx56",
                    number: "15610730049"
                }
            ]
        }
    },
    methods: {
        fun: function () {
            console.log(1)
        },
        prev: function () {
            this.$router.replace('/list1/flightList');
        },
        jpsubmit: function () {
            this.$http.post("http://192.168.3.109:8081/server/PtOrderTPtOrderSaveA", {
                "sendMode": "配送方式",
                "rangeList": [{
                    "cabin": "舱位",
                    "cabinName": "舱位名称",
                    "model": "机型",
                    "arriveTerminal": "到达航站楼",
                    "departAirportName": "首都国际机场",
                    "flightNo": "航班号",
                    "maxStandardPrice": 1.00,
                    "departAirport": "PEK",
                    "saleDiscount": 9,
                    "arriveCity": "武汉",
                    "arriveCityName": "到达城市名称",
                    "departTermina": "起飞航站楼",
                    "flightTime": 24,
                    "sn": "12",
                    "yPrice": 22.00,
                    "departTime": "2017-04-28",
                    "departCity": "北京",
                    "arriveAirportName": "天河机场",
                    "arriveTime": "到达时间",
                    "standardPrice": 22.00,
                    "minPriceV": 22.00,
                    "departCityName": "出发城市名称",
                    "arriveAirport": "WUH",
                    "minPrice": 22.00
                }],
                "supplierId": "111",
                "linkTel": "13810730042",
                "linkMobile": "13810730042",
                "tripType": "1",
                "linkMan": "张",
                "psgList": [{
                    "idType": "身份证",
                    "sn": 22,
                    "psgType": "1",
                    "phoneNumber": "13810730043",
                    "idno": "110222199010484587",
                    "psgName": this.jpmsgs[0].jpname
                }]
            }).then(function (res) {
                // 处理成功的结果
                console.log(res)
                alert("请求成功订单编号为：" + res.bodyText.content)
                console.log(res.bodyText)

                // alert("订票信息已经发出")
                // console.log(this.jpmsgs[0].jpname)
            }, function (res) {
                // 处理失败的结果
                alert(res);
            });
        }
    }
})
//机票详情组件
var Listsub = Vue.extend({
    template: "#listsub",
    methods: {
        fun: function () {
            console.log(this)
        }
    }
});
//3. 准备路由
var router = new VueRouter();
//4. 关联
router.map({
    'home': {
        data() {
            return {}
        },
        component: Home,
        subRoutes: {
            'homepage': {
                component: {
                    template: '#homepage',
                    data() {
                        return {
                            sd: ["单程", "往返"]
                        }
                    },
                    methods: {
                        domAirTic: function () {
                            this.$router.replace('/seek');
                        },
                        scli: function () {
                            // alert(1)
                        },
                        dcli: function () {
                            console.log(this.$router)
                        }
                    }
                }
            },
            'homecenter': {
                component: {
                    data() {
                        return {
                            msg: "111"
                        }
                    },
                    template: '#homecenter',
                    methods: {
                        fun: function () {
                            this.$router.replace('/list1/flightList');
                        }
                    }
                }
            }
        }

    },
    'seek': {
        data() {
            return {
                sdActive: true
            }
        },
        component: Seek
    },
    'list1': {
        component: List1,

        subRoutes: {
            'flightList': {
                component: {
                    template: '#flightList',
                    data() {
                        return {
                            todos: []
                        }
                    },
                    creaded: function () {
                        this.urlfunction();
                    },
                    compiled: function () {
                        //在编译结束后调用。此时所有的指令已生效，因而数据的变化将触发 DOM 更新。但是不担保 $el 已插入文档。
                        this.urlfunction();
                    },
                    methods: {

                        clic: function ($index) {


                        },
                        urlfunction: function () {
                            console.log(this.$route.query.citytwo)
                            this.$http.post("http://192.168.3.109:8081/server/PtOrderTFlightFindListA", {
                                "departDate": "2017-4-28",
                                "departAirport": "PEK",
                                "empRank": "1",
                                "tripType": "1",
                                "arriveAirport": "WUH",
                                "corpId": "ZJKYQY"
                            }).then(
                                function (res) {
                                    // 处理成功的结果
                                    console.log(res);
                                    this.todos = res.data.content.flightList

                                    console.log(this.todos);
                                    if (window.localStorage) {
                                        window.localStorage.setItem("localPrizeData", JSON.stringify(this.todos));
                                    }
                                },
                                function (res) {
                                    // 处理失败的结果
                                    // alert(1);
                                })
                        }
                    }
                }
                /*,
                                subRoutes: {
                		            '/:flightNo': {
                		                component: {
                		                    data() {
                		                        return {
                		                            msg: "111"
                		                        }
                		                    },
                		                    template: '#serviceProvider',
                		                    methods: {
                		                        indent: function () {
                		                            this.$router.replace('/indent');
                		                        }
                		                    }
                		                }
                		            }
                		       }*/
            },
            '/:flightNo': {
                component: {
                    data() {
                        return {
                            tamas: []
                        }
                    },
                    compiled: function () {
                        //在编译结束后调用。此时所有的指令已生效，因而数据的变化将触发 DOM 更新。但是不担保 $el 已插入文档。
                        this.cokie();
                    },
                    template: '#serviceProvider',
                    methods: {
                        indent: function () {
                            this.$router.replace('/indent');
                        },
                        cokie: function () {
                            // alert()
                            if (window.localStorage) {
                                this.qtodos = JSON.parse(window.localStorage.getItem("localPrizeData"));
                            }
                            console.log(this.qtodos);

                            for (var i = 0; i < this.qtodos.length; i++) {
                                if (this.qtodos[i].flightNo == this.$route.params.flightNo) {
                                    this.tamas = this.qtodos[i]
                                }
                            }
                            console.log(this.tamas);
                            console.log(this.$route.params.flightNo);
                        }
                    }

                }
            },
            'cost': {
                component: {
                    data() {
                        return {
                            msg: ""
                        }
                    },
                    template: '#cost',
                    methods: {
                        fun: function () {
                            // alert(1)
                        }
                    }
                }
            },
            'filtrate': {
                component: {
                    data() {
                        return {
                            msg: ""
                        }
                    },
                    template: '#filtrate'
                }

            }
        }
    },
    'indent': {
        component: Indent

    },
    'listsub': {
        component: Listsub
    }
});
//5. 启动路由
router.start(App, '#app');
//6. 跳转
router.redirect({
    '/': 'home/homepage'
});