<template>
    <div id="userDetail">
        <div class="container">
            <div class="container-fuild ContactUs-container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="form-group" style="position: relative;">
                            <input type="text" class="form-control" v-model="search_value"  id="name" :placeholder="lang_list.search_msg">
                            <img src="../assets/img/down.png" alt="" @click="toSearch()" class="home-search-img">
                        </div>
                    </div>
                </div>
                <div style="font-size: 24px;margin-bottom: 10px;">
                    {{ lang_list.account_msg }}
                </div>
                <div class="row" style="margin:0 0 20px;background: #000;">
                    <div style="    padding: 10px;border-bottom: 1px solid #38393D;">
                        <div class="col-xs-4 col-sm-4 col-md-2">
                            {{ lang_list.address_msg }}:
                        </div>
                        <div class="col-xs-8 col-sm-8 col-md-10" style="word-break: break-all;"  @click="copyLink(list.address)" id="tag">
                            <span>{{ list.address }}</span>
                            <img src="../assets/img/fuzhi.png" alt="" style="width: 17px;display: inline-block;">
                        </div>
                        <div style="clear: both;"></div>
                    </div>
                   <!-- <div style="    padding: 10px;border-bottom: 1px solid #38393D;">
                        <div class="col-xs-4 col-sm-4 col-md-2">
                            {{ lang_list.username_msg }}:
                        </div>
                        <div class="col-xs-8 col-sm-8 col-md-10">
                            <span>{{ list.userName }}</span>
                        </div>
                        <div style="clear: both;"></div>
                    </div>-->
                    <div style="    padding: 10px;border-bottom: 1px solid #38393D;">
                        <div class="col-xs-4 col-sm-4 col-md-2">
                            {{ lang_list.transaction_msg }}:
                        </div>
                        <div class="col-xs-8 col-sm-8 col-md-10">
                            <span>{{ list.transactionNum }}</span>
                        </div>
                        <div style="clear: both;"></div>
                    </div>
                    <div style="    padding: 10px;">
                        <div class="col-xs-4 col-sm-4 col-md-2">
                            {{ stockName }} {{ lang_list.balance_msg }}:
                        </div>
                        <div class="col-xs-8 col-sm-8 col-md-10">
                            <span>{{ list.lvUsdFee }} {{ lang_list.stockName }}</span>
                        </div>
                        <div style="clear: both;"></div>
                    </div>
                </div>
                <div class="row" style="margin:0 0 20px;background: #000;padding: 10px 15px;">
                    <div class="col-xs-12 col-sm-12 col-md-12">
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
                                    <tbody>
                                    <tr  v-for="(item,index) in list.list">
                                        <td>{{ item.tranId.substr(0,8) }}</td>
                                        <td>{{ item.createTime }}</td>
                                        <td>{{ item.fromAddress }}</td>
                                        <td>{{ item.walletAddr }}</td>
                                        <td>success</td>
                                        <td>{{ item.usdFee }} {{ lang_list.stockName }}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Clipboard from 'clipboard'
    import { apiStockInfo } from '@/request/api';
    export default {
        name: "userDetail",
        data() {
            return {
                pageNumber: 1,
                total: 0,
                stockName:'',
                lang_list:{
                },
                list:[],
                fromAddress:'',
                search_value:'',
            };
        },
        mounted() {
            var sUserAgent = navigator.userAgent.toLowerCase();
            if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
                //跳转移动端页面
                this.$router.push({
                    path: '/errorPage',
                    query: {
                    }
                })
                return false;
            }
            this.lang_list = this.en;
            this.fromAddress = this.$route.query.fromAddress
            this.browserListUserCharges()
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
            //复制
            copyLink(data){
                var _this = this;
                let clipboard = new Clipboard('#tag', {
                    text: function () {
                        return data
                    }
                })
                clipboard.on('success', e => {
                    _this.$toast('复制成功');
                    // 释放内存
                    clipboard.destroy()
                })
                clipboard.on('error', e => {
                    _this.$toast('复制失败');
                    clipboard.destroy()
                })
            },
            browserListUserCharges() {
                var _this = this;
                apiStockInfo({fromAddress:this.fromAddress}).then(res => {
                    // 获取数据成功后的其他操作
                    _this.list = res.data
                    console.log( _this.list)
                })
            },
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
    #userDetail {
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
    }

    #myChart3 canvas {
        width: 100% !important;
    }
</style>

