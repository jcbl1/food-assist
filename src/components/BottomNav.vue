<script setup lang="ts">
import { useNotifyDeveloping } from './notifyDeveloping';
</script>
<template>
    <el-row justify="space-around" align="bottom" class="textCenter paddingBottomSmall">
        <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="2" class="topDash">
            <!-- <router-link to="/"> -->
                <el-button text class="width-100">首页</el-button>
            <!-- </router-link> -->
        </el-col>
        <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="2">
            <!-- <router-link to="/"> -->
                <el-button text class="width-100" @click="useNotifyDeveloping">发现</el-button>
                <!-- <el-button circle>
                    <el-icon>

                    </el-icon>
                </el-button> -->
            <!-- </router-link> -->
        </el-col>
        <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="2">
            <!-- <router-link to="/dev"> -->
                <el-button text class="width-100" @click="useNotifyDeveloping">我的</el-button>
            <!-- </router-link> -->
        </el-col>
    </el-row>
</template>
<style scoped>
.textCenter {
    text-align: center;
}
.color111 {
    color: #111;
}
.width-100 {
    width: 100%;
}
.bottomDash {
    border-bottom: 2px solid #ccc;
}
.topDash {
    border-top: 2px solid #aaa;
}
.marginBottomSmall {
    margin-bottom: 0.4em;
}
.paddingBottomSmall {
    padding-bottom: 0.4em;
}
/* .blur {
    backdrop-filter: blur(10px);
} */
</style>