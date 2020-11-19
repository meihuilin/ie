<template>
    <div id="transferDetail">
        <div class="container">
            <div class="container-fuild ContactUs-container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="form-group" style="position: relative;">
                            <input type="text" class="form-control"  v-model="search_value" id="name" :placeholder="lang_list.search_msg">
                            <img src="../assets/img/down.png" alt="" class="home-search-img"  @click="toSearch()">
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="home-title">{{ lang_list.title_msg }}</div>
                    </div>
                </div>
                <div class="row" style="margin:0 0 20px;">
                    <div class="col-xs-6 col-sm-3 col-md-3 index-tab-4">
                        <div style="padding: 15px 0;border-right: 1px solid hsla(0,0%,84.7%,.15);">
                            <div class="index-tab-top">{{ info.publishNum||'0' }}</div>
                            <div class="index-tab-bottom">{{ lang_list.total_issue_msg }}</div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-3 col-md-3 index-tab-4">
                        <div style="padding: 15px 0;border-right: 1px solid hsla(0,0%,84.7%,.15);">
                            <div class="index-tab-top" style="color: #f6334e;">{{ info.currencyNum||'0' }}</div>
                            <div class="index-tab-bottom">{{ lang_list.circulation_msg }}</div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-3 col-md-3 index-tab-4">
                        <div style="padding: 15px 0;border-right: 1px solid hsla(0,0%,84.7%,.15);">
                            <div class="index-tab-top" style="color: #a444ff;"> {{ info.totalLvNum||'0' }}</div>
                            <div class="index-tab-bottom">{{ lang_list.stockName }} {{ lang_list.total_msg }}</div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-3 col-md-3 index-tab-4">
                        <div style="padding: 15px 0;">
                            <div class="index-tab-top" style="color: #00b7ff;">{{ info.totalUser||'0' }}</div>
                            <div class="index-tab-bottom">{{ lang_list.account_msg }}</div>
                        </div>
                    </div>
                </div>
                <div style="font-size: 24px;margin-bottom: 10px;">
                    {{ lang_list.transaction_details }}
                </div>
                <div class="row" style="margin:0 0 20px;background: #000;">
                    <div style="    padding: 10px;border-bottom: 1px solid #38393D;">
                        <div class="col-xs-4 col-sm-4 col-md-2">
                            {{ lang_list.hash_msg }}:
                        </div>
                        <div class="col-xs-8 col-sm-8 col-md-10" style="word-break: break-all;"  @click="copyLink(list.tranId)" id="tag">
                            <span>{{ list.tranId }}</span>
                            <img src="../assets/img/fuzhi.png" alt="" style="width: 17px;display: inline-block;">
                        </div>
                        <div style="clear: both;"></div>
                    </div>
                    <div style="    padding: 10px;border-bottom: 1px solid #38393D;">
                        <div class="col-xs-4 col-sm-4 col-md-2">
                            {{ lang_list.status_msg }}:
                        </div>
                        <div class="col-xs-8 col-sm-8 col-md-10">
                            <span>{{ lang_list.confirm_msg }}</span>
                        </div>
                        <div style="clear: both;"></div>
                    </div>
                    <div style="    padding: 10px;">
                        <div class="col-xs-4 col-sm-4 col-md-2">
                            {{ lang_list.time_msg }}:
                        </div>
                        <div class="col-xs-8 col-sm-8 col-md-10">
                            <span>{{ list.createTime }}</span>
                        </div>
                        <div style="clear: both;"></div>
                    </div>
                </div>
                <div style="font-size: 24px;margin-bottom: 10px;">
                    {{ lang_list.transfer_details }}
                </div>
                <div class="row" style="margin:0 0 20px;background: #000;">
                    <div style="    padding: 10px;border-bottom: 1px solid #38393D;">
                        <div class="col-xs-4 col-sm-4 col-md-2">
                            {{ lang_list.send_address }}:
                        </div>
                        <div class="col-xs-8 col-sm-8 col-md-10"  style="word-break: break-all;" >
                            <span>{{ list.fromAddress }}</span>
                        </div>
                        <div style="clear: both;"></div>
                    </div>
                    <div style="    padding: 10px;border-bottom: 1px solid #38393D;">
                        <div class="col-xs-4 col-sm-4 col-md-2">
                            {{ lang_list.accept_address }}:
                        </div>
                        <div class="col-xs-8 col-sm-8 col-md-10"   style="word-break: break-all;" >
                            <span>{{ list.walletAddr }}</span>
                        </div>
                        <div style="clear: both;"></div>
                    </div>
                    <div style="    padding: 10px;border-bottom: 1px solid #38393D;">
                        <div class="col-xs-4 col-sm-4 col-md-2">
                            {{ lang_list.amount_msg }}:
                        </div>
                        <div class="col-xs-8 col-sm-8 col-md-10">
                            <span>{{ list.usdFee }} {{ lang_list.stockName }}</span>
                        </div>
                        <div style="clear: both;"></div>
                    </div>
                    <div style="    padding: 10px;border-bottom: 1px solid #38393D;">
                        <div class="col-xs-4 col-sm-4 col-md-2">
                            {{ lang_list.general_msg }}:
                        </div>
                        <div class="col-xs-8 col-sm-8 col-md-10">
                            <span>{{ lang_list.stockName }}</span>
                        </div>
                        <div style="clear: both;"></div>
                    </div>
                <!--    <div style="    padding: 10px;border-bottom: 1px solid #38393D;">
                        <div class="col-xs-4 col-sm-4 col-md-2">
                            {{ lang_list.request_msg }}:
                        </div>
                        <div class="col-xs-8 col-sm-8 col-md-10">
                            <span style="display: inline-block; padding-bottom: 10px;border-bottom: 1px solid #38393D;width: 100%;">{{ lang_list.methods_msg }}: ["transfer_operation"]</span>
                            <div style="padding-top: 10px;">
                                <div  class="col-xs-2 col-sm-1 col-md-1">
                                    {{ lang_list.parameter_msg }}:
                                </div>
                                <div class="col-xs-10 col-sm-11 col-md-11" style="word-break: break-all;">
                                    [ [ 0, { "amount": { "amount": 10000, "asset_id": "1.3.0" }, "extensions": [], "fee": { "amount": 124, "asset_id": "1.3.0" }, "from": "1.2.1265", "memo": { "from": "DNA65ovcZgpRLMKwwyTzrxQ39jRS8FVK2HtsTw9oTeBxV2EWnH4ys", "message": "7796277bc05ff5888231eaa71103b3c9e5bc1f4d8722bdc8a56ba074f2a881d185de1d662ac46b847a559a0c8bec5f72", "nonce": "6126499876860599693", "to": "DNA5gcUEBsStgYyBvePtwysZZkdJYnZYqv2P6Mg1hj1WXpXwoCs32" }, "to": "1.2.4507" } ] ]
                                </div>
                                <div style="clear: both;"></div>
                             </div>
                        </div>
                        <div style="clear: both;"></div>
                    </div>-->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { apiMoneyDetail,apiIndexInfo } from '@/request/api';
    import Clipboard from 'clipboard'
    export default {
        name: "transferDetail",
        data() {
            return {
                pageNumber: 1,
                total: 0,
                stockName:'',
                tranId:'',
                lang_list:{},
                list:[],
                info:[],
                search_value:'',
            };
        },
        mounted() {
            // var sUserAgent = navigator.userAgent.toLowerCase();
            // if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
            //     //跳转移动端页面
            //     this.$router.push({
            //         path: '/errorPage',
            //         query: {
            //         }
            //     })
            //     return false;
            // }
            this.lang_list = this.en;
            this.tranId = this.$route.query.tranId
            this.getDate();
            var _this = this;
            apiIndexInfo({}).then(res => {
                // 获取数据成功后的其他操作
                _this.info = res.data;
            })
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
            // 获取数据
            getDate(){
                var _this = this;
                apiMoneyDetail({tranId:this.tranId}).then(res => {
                    // 获取数据成功后的其他操作
                    _this.list = res.data
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
                    _this.$toast(_this.lang_list.fuzhi_success);
                    // 释放内存
                    clipboard.destroy()
                })
                clipboard.on('error', e => {
                    _this.$toast(_this.lang_list.fuzhi_error);
                    clipboard.destroy()
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
    #transferDetail {
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

