/**
 * DomainSwitch - 智能域名跳转系统配置文件
 * Telegram群组: https://t.me/htpnu
 *
 * 本文件包含系统所有核心配置项，包括：
 * - 域名列表及测速参数
 * - 界面主题配置
 * - 系统默认参数
 */

const config = {
    /**
     * 域名配置列表
     * @type {Array<Object>}
     * @property {string} name - 域名显示名称
     * @property {string} url - 域名完整URL
     */
    domains: [
        {name: "主域名", url: "https://www.badiu.com"},
        {name: "镜像一", url: "https://google.com"},
        {name: "镜像二", url: "https://azure.microsoft.com"},
        {name: "镜像三", url: "https://aws.amazon.com"}
    ],

    /**
     * 默认倒计时秒数
     * @type {number}
     * @default 5
     */
    defaultCountdown: 5,
    
    /**
     * 测速图片路径
     * 用于域名测速的小图片路径(建议使用网站favicon)
     * @type {string}
     * @default "/favicon.ico"
     */
    testImagePath: "/favicon.ico",
    
    /**
     * 系统主题配置
     * @type {Array<Object>}
     * @property {string} name - 主题名称
     * @property {string} primary - 主色调
     * @property {string} secondary - 辅助色调
     * @property {string} text - 文字颜色
     * @property {string} bg - 背景颜色
     * @property {string} card - 卡片背景色
     */
    themes: [
        /**
         * 默认主题 - 蓝色系
         * @type {Object}
         * @property {string} primary - 主色调: 蓝色 (#3498db)
         * @property {string} secondary - 辅助色调: 深蓝色 (#2980b9)
         * @property {string} text - 文字颜色: 深灰 (#2c3e50)
         * @property {string} bg - 背景色: 浅灰 (#ecf0f1)
         * @property {string} card - 卡片背景: 白色 (#ffffff)
         */
        {
            name: "default",
            primary: "#3498db",
            secondary: "#2980b9",
            text: "#2c3e50",
            bg: "#ecf0f1",
            card: "#ffffff"
        },

        /**
         * 暗黑主题 - 紫色系
         * @type {Object}
         * @property {string} primary - 主色调: 紫色 (#9b59b6)
         * @property {string} secondary - 辅助色调: 深紫色 (#8e44ad)
         * @property {string} text - 文字颜色: 浅灰 (#ecf0f1)
         * @property {string} bg - 背景色: 深蓝灰 (#2c3e50)
         * @property {string} card - 卡片背景: 深灰 (#34495e)
         */
        {
            name: "dark",
            primary: "#9b59b6",
            secondary: "#8e44ad",
            text: "#ecf0f1",
            bg: "#2c3e50",
            card: "#34495e"
        },

        /**
         * 温暖主题 - 橙色系
         * @type {Object}
         * @property {string} primary - 主色调: 橙色 (#e67e22)
         * @property {string} secondary - 辅助色调: 深橙色 (#d35400)
         * @property {string} text - 文字颜色: 深蓝灰 (#34495e)
         * @property {string} bg - 背景色: 浅黄 (#fde3a7)
         * @property {string} card - 卡片背景: 黄色 (#f5d76e)
         */
        {
            name: "warm",
            primary: "#e67e22",
            secondary: "#d35400",
            text: "#34495e",
            bg: "#fde3a7",
            card: "#f5d76e"
        }
    ],

    /**
     * 默认主题名称
     * 必须与themes中的某个主题name一致
     * @type {string}
     * @default "default"
     */
    defaultTheme: "warm"
};

// 配置验证
if (!config.themes.some(theme => theme.name === config.defaultTheme)) {
    console.error('错误：默认主题不存在于主题列表中');
    config.defaultTheme = config.themes[0].name;
}