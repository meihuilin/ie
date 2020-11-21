<template>
    <div id="HomePage">
        <div class="container">
            <div class="container-fuild ContactUs-container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="form-group" style="position: relative;">
                            <input type="text" class="form-control" v-model="search_value" id="name" :placeholder="lang_list.search_msg">
                            <img src="../assets/img/down.png" alt="" class="home-search-img" @click="toSearch()">
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="home-title">{{ lang_list.title_msg }}</div>
                    </div>
                </div>
                <div class="row" style="margin:0 0 20px;">
                    <div class="col-xs-6 col-sm-3 col-md-3 index-tab-4">
                        <div style="padding: 15px 0;border-right: 1px solid hsla(0,0%,84.7%,.15);">
                            <div class="index-tab-top">{{ info.publishAll||'0' }}</div>
                            <div class="index-tab-bottom">{{ lang_list.total_issue_msg }}</div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-3 col-md-3 index-tab-4">
                        <div style="padding: 15px 0;border-right: 1px solid hsla(0,0%,84.7%,.15);">
                            <div class="index-tab-top" style="color: #f6334e;">{{ info.publishCirculate||'0' }}</div>
                            <div class="index-tab-bottom">{{ lang_list.circulation_msg }}</div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-3 col-md-3 index-tab-4">
                        <div style="padding: 15px 0;border-right: 1px solid hsla(0,0%,84.7%,.15);">
                            <div class="index-tab-top" style="color: #a444ff;"> {{ info.oreCirculate||'0' }}</div>
                            <div class="index-tab-bottom">{{ lang_list.excavation_total }}</div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-3 col-md-3 index-tab-4">
                        <div style="padding: 15px 0;">
                            <div class="index-tab-top" style="color: #00b7ff;">{{ info.oreRemain||'0' }}</div>
                            <div class="index-tab-bottom">{{ lang_list.excavated_total }}</div>
                        </div>
                    </div>
                </div>
                <div class="row" style="margin:0 0 20px;">
                    <div class="col-xs-12 col-sm-4 col-md-4 index-tab-4">
                        <div style="padding: 5px 30px;border-right: 1px solid rgba(216, 216, 216, 0.15);text-align: left;">
                            <div style="font-size: 18px;">
                                {{ lang_list.price_msg }} $ / {{ lang_list.wave_msg }} %
                            </div>
                            <div style="height:15px;"></div>
                            <div>
                                <span style="display: inline-block;color: #3bd578;line-height: 87px;font-size: 50px;">{{ vo.open||'none' }} </span>
                                <div style="display: inline-block;position: relative;left: 5px;bottom: 5px;">
                                    <div style="opacity: 0.6;">{{ lang_list.stockName }} | USDT</div>
                                    <div style="    padding: 5px 8px;background: #f6334e;border-radius: 5px;">{{ vo.changeRate||'none' }}
                                    </div>
                                </div>
                                <div style="height:20px;"></div>
                                <div style="opacity: 0.5;">1 {{ lang_list.stockName }} ≈ {{ vo.price||'none' }} CNY</div>
                                <div style="height:15px;">
                                    <!-- <div style="float: left;margin-bottom: 30px;">
                                         市值排名
                                     </div>
                                     <div style="float: right;">
                                         <img src="../assets/img/vip.png" style="width: 17px;display: inline-block;margin-right: 10px;" alt="">
                                         <span style="color: #a444ff;font-size: 18px;">NO.95</span>
                                     </div>
                                     <div style="clear: both;"></div>-->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-4 index-tab-4">
                        <div style="padding:0 0;position: relative;">
                            <div class="total-class" id="myChart1" style="width: 100%;height: 192px">

                            </div>
                            <div style="font-size: 18px;position: absolute;top:5%; left: 20%; width: 60%;text-align: center;">
                                <div>{{ lang_list.total_issue_msg }}</div>
                                <div style="color: #00b7ff;font-size: 24px;margin-top:3%;">{{ info.publishAll||'0' }}</div>
                            </div>
                            <div style="position: absolute;bottom:27%;width: 40%;left: 30%;opacity: 0.6;">
                                 {{ lang_list.circulation_msg }}
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-4 index-tab-4">
                        <div style="padding: 0 0;position: relative;">
                            <div class="total-class" id="myChart2" style="width: 100%;height: 192px">

                            </div>
                            <div style="font-size: 18px;position: absolute;top:5%; left: 20%; width: 60%;text-align: center;">
                                <div> {{ lang_list.excavation_total }}</div>
                                <div style="color: #00b7ff;font-size: 24px;margin-top:3%;">{{ info.oreCirculate||'0' }}</div>
                            </div>
                            <div style="position: absolute;bottom:27%;width: 40%;left: 30%;opacity: 0.6;">
                                {{ lang_list.excavated_total }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" style="margin:0 0 20px;">
                    <div class="col-xs-12 col-sm-12 col-md-12" style="padding:0;">
                        <div id="myChart3" style="width: 100%;height: 360px">

                        </div>
                    </div>
                </div>
                <div class="row" style="margin:0 0 20px;background: #000;padding: 10px 15px;">
                    <div class="col-xs-12 col-sm-12 col-md-12" style="padding: 0;">
                        <div style="padding: 10px 0;">{{ lang_list.transfer_msg }}</div>
                        <div id="pcQkList" class="pcTableCls">
                            <div class="table-responsive" style="text-align: center;">
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th>{{ lang_list.hash_msg }}</th>
                                        <th>{{ lang_list.time_msg }}</th>
                                        <th>{{ lang_list.from_msg }}</th>
                                        <th>{{ lang_list.reach_msg }}</th>
                                        <th>{{ lang_list.status_msg }}</th>
                                        <th>{{ lang_list.value_msg }}</th>
                                    </tr>
                                    </thead>
                                    <tbody id="content_list">
                                    <tr v-for="(item,index) in list">
                                        <td><router-link :to="'/transferDetail?tranId='+item.tranId">{{ item.tranId.substr(0,8) }}</router-link></td>
                                        <td>{{ item.createTime }}</td>
                                        <td>
                                            <router-link :to="'/userDetail?fromAddress='+item.fromAddress">{{ item.fromAddress }}</router-link>
                                        </td>
                                        <td>
                                            <router-link :to="'/userDetail?fromAddress='+item.walletAddr">{{ item.walletAddr }}</router-link>
                                        </td>
                                        <td>success</td>
                                        <td>{{ item.usdFee }} {{ lang_list.stockName }}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div id="pages"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { apiIndexInfo,apiTransaction } from '@/request/api';
    export default {
        name: "HomePage",
        data() {
            return {
                search_value:'',
                pageNumber: 1,
                total: 0,
                lang_list:{},
                stockName:'',
                list:[],
                info:{
                    totalLvNum:0,
                    currencyNum:0,
                    totalUser:0,
                    publishNum:0,
                    publishAll:0,
                    publishCirculate:0,
                    oreCirculate:0,
                    oreRemain:0,
                },
                vo:{},
            };
        },
        mounted() {
            this.lang_list = this.en;
            this.getDate();
            this.browserListUserCharges(this.pageNumber)
        },
        methods: {
            toSearch(){
                if(!this.search_value){
                    this.$toast('Search cannot be empty');
                    return false;
                }
                this.$router.push({
                    path: '/userDetail',
                    query: {
                        fromAddress:this.search_value
                    }
                })
            },
            getDate(){
                var _this = this;
                apiIndexInfo({}).then(res => {
                    // 获取数据成功后的其他操作
                    _this.info = res.data;
                    _this.vo = _this.info.vo
                    _this.getline();
                    _this.getXian();
                })
            },
            getline() {
                var echarts = require('echarts');
                let myChart1 = echarts.init(document.getElementById('myChart1'));
                let myChart2 = echarts.init(document.getElementById('myChart2'));
                var data = Math.floor(this.info.publishCirculate/this.info.publishAll*100); //数值大小
                var max = 100; //满刻度大小
                var data1= Math.floor(this.info.oreRemain/this.info.oreCirculate*100); //数值大小
                var max1 = 100; //满刻度大小
                myChart1.setOption(
                    {
                        backgroundColor: '#000',
                        title: {
                            text: data + '%',
                            x: 'center',
                            y: '75%',
                            textStyle: {
                                color: '#00B7FF',
                                fontSize: '30'
                            },
                            subtextStyle: {
                                color: '#999',
                                fontSize: 16
                            }
                        },
                        color: ["#fff", 'rgba(255,255,255,.4)', 'transparent'],
                        series: [{
                            type: "pie",
                            startAngle: 190,
                            center: ["50%", "85%"],
                            radius: ["65%", "80%"],
                            hoverAnimation: false,
                            labelLine: {
                                show: false
                            },
                            data: [{
                                name: "",
                                value: data,
                                itemStyle: {
                                    normal: {
                                        show: true,
                                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                            offset: 0,
                                            color: '#00B7FF'

                                        }, {
                                            offset: 0.5,
                                            color: '#00B7FF'

                                        }, {
                                            offset: 1,
                                            color: '#4C4F65'

                                        }])
                                    },
                                },
                            },
                                { //画中间的图标
                                    name: "",
                                    value: 0,
                                    label: {
                                        position: 'inside',
                                        width: 50,
                                        height: 50,
                                        padding: 50
                                    }
                                }, { //画剩余的刻度圆环
                                    name: "",
                                    value: max - data,

                                }, { //画剩余的刻度圆环
                                    name: "",
                                    value: 80,
                                }
                            ]
                        }]
                    }
                )
                myChart2.setOption(
                    {
                        backgroundColor: '#000',
                        title: {
                            text: data1 + '%',
                            x: 'center',
                            y: '75%',
                            textStyle: {
                                color: '#00B7FF',
                                fontSize: '30'
                            },
                            subtextStyle: {
                                color: '#999',
                                fontSize: 16
                            }
                        },
                        color: ["#fff", 'rgba(255,255,255,.4)', 'transparent'],
                        series: [{
                            type: "pie",
                            startAngle: 190,
                            center: ["50%", "85%"],
                            radius: ["65%", "80%"],
                            hoverAnimation: false,
                            labelLine: {
                                show: false
                            },
                            data: [{
                                name: "",
                                value: data1,
                                itemStyle: {
                                    normal: {
                                        show: true,
                                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                            offset: 0,
                                            color: '#00B7FF'

                                        }, {
                                            offset: 0.5,
                                            color: '#00B7FF'

                                        }, {
                                            offset: 1,
                                            color: '#4C4F65'

                                        }])
                                    },
                                },
                            },
                                { //画中间的图标
                                    name: "",
                                    value: 0,
                                    label: {
                                        position: 'inside',
                                        width: 50,
                                        height: 50,
                                        padding: 50
                                    }
                                }, { //画剩余的刻度圆环
                                    name: "",
                                    value: max1 - data1,

                                }, { //画剩余的刻度圆环
                                    name: "",
                                    value: 80,
                                }
                            ]
                        }]
                    }
                )
            },
            getXian() {
                var echarts = require('echarts');
                let myChart3 = echarts.init(document.getElementById('myChart3'));
                myChart3.setOption(
                    {
                        backgroundColor: '#000',
                        title: {
                            text: 'Transaction / account growth over the past 7 days',
                            textStyle:{
                                fontSize:15,
                                color:'#fff'
                            }
                        },
                        tooltip: {
                            trigger: 'axis',

                        },

                        toolbox: {
                            feature: {
                                saveAsImage: {}
                            }
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis: [
                            {
                                type: 'category',
                                boundaryGap: false,
                                splitLine:{show: false},//去除网格线
                                splitArea : {show : false},//保留网格区域
                                axisLine: {
                                    lineStyle: {
                                        type: 'dashed',
                                        color: '#fff',//左边线的颜色
                                        width:'1'//坐标线的宽度
                                    }
                                },

                                axisLabel: {
                                    textStyle: {
                                        color: '#fff',//坐标值得具体的颜色

                                    }
                                },

                                data: [this.info.sevenDaysAccount[0].days,this.info.sevenDaysAccount[1].days, this.info.sevenDaysAccount[2].days,
                                    this.info.sevenDaysAccount[3].days, this.info.sevenDaysAccount[4].days
                                    ,this.info.sevenDaysAccount[5].days,this.info.sevenDaysAccount[6].days]
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                splitLine:{
                                    show: true,
                                    lineStyle:{
                                        color: ['#323232'],
                                        width: 1,
                                        type: 'dashed'
                                    }

                                },//去除网格线
                                splitArea : {show : false},//保留网格区域
                                axisLine: {
                                    show: false,
                                },
                                axisLabel: {
                                    textStyle: {
                                        color: '#fff',//坐标值得具体的颜色

                                    }
                                }

                            }
                        ],
                        series: [
                            {
                                name: 'Account growth',
                                type: 'line',
                                smooth: true,
                                color:['#28385C'],
                                // symbol: "circle", //拐点的形状
                                lineStyle: {
                                    color: '#00B7FF',
                                    width: 2
                                },
                                stack: 'total',
                                areaStyle: {},
                                data: [this.info.sevenDaysAccount[0].count,this.info.sevenDaysAccount[1].count, this.info.sevenDaysAccount[2].count,
                                    this.info.sevenDaysAccount[3].count, this.info.sevenDaysAccount[4].count
                                    ,this.info.sevenDaysAccount[5].count,this.info.sevenDaysAccount[6].count]
                            },
                            {
                                name: 'Transaction growth',
                                type: 'line',
                                smooth: true,
                                lineStyle: {
                                    color: '#A444FF',
                                    width: 2
                                },
                                color:['#2F2341'],
                                // symbol: "circle", //拐点的形状
                                stack: 'total',
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'top'
                                    }
                                },
                                areaStyle: {
                                    backgroundColor:'#2F2341'
                                },

                                data: [this.info.sevenDaysTransaction[0].count,this.info.sevenDaysTransaction[1].count, this.info.sevenDaysTransaction[2].count,
                                    this.info.sevenDaysTransaction[3].count, this.info.sevenDaysTransaction[4].count
                                    ,this.info.sevenDaysTransaction[5].count,this.info.sevenDaysTransaction[6].count]
                            }
                        ]
                    }
                );
            },
            browserListUserCharges() {
                var _this = this;
                apiTransaction({pageNumber:this.pageNumber,pageSize:15}).then(res => {
                    // 获取数据成功后的其他操作

                    _this.list = res.data.transaction.list;
                    _this.total = res.data.transaction.total;
                    // _this.total = 100;
                    _this.pageList()
                })
            },
            pageList() {
                var _this = this;
                new Pagination({
                    element: '#pages',  // 渲染的容器  [必填]
                    type: 1,  // 样式类型，默认1 ，目前可选 [1,2] 可自行增加样式   [非必填]
                    layout: 'total,pageSize, prev, pager, next',  // [必填]
                    pageIndex: _this.pageNumber, // 当前页码 [非必填]
                    pageSize: 15, // 每页显示条数   TODO: 如果使用了sizes这里就无须传参，传了也无效 [必填]
                    pageCount: 5, // 页码显示数量，页码必须大于等于5的奇数，默认页码9  TODO:为了样式美观，参数只能为奇数， 否则会报错 [非必填]
                    total:  _this.total, // 数据总条数 [必填]
                    singlePageHide: false,  // 单页隐藏， 默认true  如果为true页码少于一页则不会渲染 [非必填]
                    pageSizes: [9, 15, 25, 35], // 选择每页条数  TODO: layout的sizes属性存在才生效
                    // prevText: 'previous', // 上一页文字，不传默认为箭头图标  [非必填]
                    // nextText: 'next', // 下一页文字，不传默认为箭头图标 [非必填]
                    ellipsis: true, // 页码显示省略符 默认false  [非必填]
                    disabled: true, // 显示禁用手势 默认false  [非必填]
                    currentChange: function (index, pageSize) {  // 页码改变时回调  TODO:第一个参数是当前页码，第二个参数是每页显示条数数量，需使用sizes第二参数才有值。
                  /*      $("#content_list").empty();*/
                        _this.pageNumber = index;
                        _this.browserListUserCharges();
                    }
                });
            }
        }
    };
</script>
<style scoped>
    #pcQkList th {
        text-align: center;
    }

    .table > thead > tr > th {
        border-top: 1px solid #38393D !important;
    }

    .table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td, .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {
        border: 1px solid #38393D;
    }

    #pcQkList tr {
        border: none;
    }

    /* 整体盒子 */
    #HomePage {
        width: 100%;
        color: #fff;
        font-size: 14px;
    }

    .form-control {
        margin: 20px 0px;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #1c1d22;
        padding: 16px 32px;
        border: 1px solid #2e303c;
        border-radius: 4px;
        font-size: 16px;
        height: auto;
    }

    .home-search-img {
        position: absolute;
        right: 3%;
        width: 25px;
        top: 30%;
    }

    .home-title {
        margin-bottom: 20px;
        display: block;
        height: 50px;
        line-height: 50px;
        -webkit-box-align: center;
        align-items: center;
        padding: 0 32px;
        box-sizing: border-box;
        position: relative;
        overflow-x: hidden;
        color: #fff;
        text-align: center;
        background: #1c1d22;
    }

    .index-tab-4 {
        text-align: center;
        background: #000;
        padding: 15px 0;
    }

    .index-tab-top {
        color: #fc7204;
        font-size: 30px;
        margin-bottom: 10px;
        overflow: auto;
        padding: 0 5px;
    }

    #myChart3 canvas {
        width: 100% !important;
    }
</style>

