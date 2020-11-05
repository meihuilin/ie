<template>
    <div id="footer" class="container-fluid">
        <div class="logo">
            <img src="@/assets/img/logo_white.png" alt="logo图">
        </div>
        <p class="copy">Copyright © 2020 Metaverse {{ lang_list.stockName }}. All rights reserved.</p>
    </div>
</template>
<script>
    export default {
        name: "Footer",
        data() {
            return {
                lang_list:{},
            };
        },
        mounted() {
            this.lang_list = this.en;
        },
    };
</script>
<style scoped>
    #footer {
        width: 100%;
        height: 100%;
        color: #fff;
        background: #000;
        overflow: hidden;
        text-align: center;
    }

    .logo {
        width: 95px;
        height: 45px;
        margin: 50px auto 20px;
    }

    .copy {
        color: #d3d3d3;
        font-size: 14px;
        margin: 50px 0 10px;
    }

    @media screen and (max-width: 997px) {
        .copy {
            font-size: 12px;
            margin: 30px 0 10px;
        }
    }
</style>

