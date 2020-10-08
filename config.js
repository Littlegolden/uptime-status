// 配置
window.Config = {

  // 站点名
  SiteName: 'CSUR站点状态',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两种 Api Key
  ApiKeys: [
    'ur881962-f648ba3b9ca8657fc0c412a2'
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '项目主页',
      url: 'https://github.com/Littlegolden/uptime-status'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/Littlegolden/'
    },
    {
      text: '博客',
      url: 'https://www.csur.fun'
    }
  ]
};
