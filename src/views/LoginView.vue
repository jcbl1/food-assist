<script setup lang="ts">
import { useLogin } from '@/api/auth';
import axios from 'axios';
import { ElNotification } from 'element-plus';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

const login = async () => {
    console.log('logging in...')
    try {
        const token = await useLogin('user', 'password')
        if (token) {
            console.log('got token: ', token)
            sessionStorage.setItem('token', token)
            ElNotification({
                title: '登录成功',
                message: '欢迎回来！',
                type: 'success',
                duration: 2000,
            })
            if (route.redirectedFrom) router.push(route.redirectedFrom.path)
            else router.push('/')
        } else {
            ElNotification({
                title: '登录失败',
                message: '请检查用户名和密码',
                type: 'error',
                duration: 2000,
            })
        }
    } catch (err) {
        if (axios.isAxiosError(err)) {
            console.error('登录失败: ', err.response?.data)
            ElNotification({
                title: '登录失败',
                message: err.response?.data,
                type: 'error',
                duration: 2000,
            })
        }
    }
}
</script>
<template>
    <div class="fillView">
        <el-card shadow="hover" class="loginWrap">
            <template #header>
                <h3 style="margin: 0; text-align: center;">登录</h3>
            </template>
            <template #default>
                <el-button round type="primary" @click="login">
                    <el-icon>
                        <SwitchFilled />
                    </el-icon>
                    智能验证并登录</el-button>
            </template>
        </el-card>
    </div>
</template>
<style scoped>
.fillView {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.loginWrap {
    width: fit-content;
    height: fit-content;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>