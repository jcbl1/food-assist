import { ElNotification } from "element-plus";

export function useNotifyDeveloping() {
    ElNotification({
        title: "开发中",
        message: "该功能正在开发中，敬请期待",
        type: "info",
    })
}