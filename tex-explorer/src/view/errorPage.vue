<template>
    <div id="errorPage">
        <div class="container">
            <div class="container-fuild ContactUs-container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="my-empty-apply">
                            <p>Non mobile access to websites</p>
                            <p>Please use the computer to open the website</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "errorPage",
        data() {
            return {

            };
        },
        mounted() {
            $('#footer').hide();
            $('#GoTop').hide();
            $('#header').hide();
            var sUserAgent = navigator.userAgent.toLowerCase();
            if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {

            }else{
                this.$router.push({
                    path: '/home',
                    query: {
                    }
                });
                return false;
            }
        },
        methods: {
        }
    };
</script>
<style scoped>
    .my-empty-apply{
        text-align: center;
        color: #fff;
        margin-top: 200px;
    }
</style>

