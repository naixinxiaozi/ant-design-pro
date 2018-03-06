import { isUrl } from '../utils/utils';

const menuData = [{
  name: 'dashboard',
  icon: 'dashboard',
  path: 'dashboard',
  children: [{
    name: '分析页',
    path: 'analysis',
  }, {
    name: '监控页',
    path: 'monitor',
  }, {
    name: '工作台',
    path: 'workplace',
    // hideInMenu: true,
  }],
}, {
  name: '客户管理',
  icon: 'form',
  path: 'custom',
  children: [{
    name: '用户管理',
    path: 'user-list',
  }, {
    name: '编辑管理',
    path: 'editor-list',
  }, {
    name: '编辑队伍',
    path: 'editor-team',
  }],
}, {
  name: '业务管理',
  icon: 'form',
  path: 'order',
  children: [{
    name: '订单管理',
    path: 'order-list',
  }, {
    name: '用户交易记录',
    path: 'user-trans',
  }, {
    name: '编辑交易记录',
    path: 'editor-trans',
  }, {
    name: '发票管理',
    path: 'invoice',
  }],
}, {
  name: '活动管理',
  icon: 'form',
  path: 'coupon',
  children: [{
    name: '优惠卡管理',
    icon: 'form',
    path: 'coupon',
  }],
}, {
  name: '系统管理',
  icon: 'form',
  path: 'form',
  children: [{
    name: '管理员管理',
    authority: 'admin',
    path: 'basic-form',
  }, {
    name: '角色管理',
    authority: 'admin',
    path: 'step-form',
  }],
},
// {
//   name: '表单页',
//   icon: 'form',
//   path: 'form',
//   children: [{
//     name: '基础表单',
//     path: 'basic-form',
//   }, {
//     name: '分步表单',
//     path: 'step-form',
//   }, {
//     name: '高级表单',
//     authority: 'admin',
//     path: 'advanced-form',
//   }],
// }, {
//   name: '列表页',
//   icon: 'table',
//   path: 'list',
//   children: [{
//     name: '查询表格',
//     path: 'table-list',
//   }, {
//     name: '标准列表',
//     path: 'basic-list',
//   }, {
//     name: '卡片列表',
//     path: 'card-list',
//   }, {
//     name: '搜索列表',
//     path: 'search',
//     children: [{
//       name: '搜索列表（文章）',
//       path: 'articles',
//     }, {
//       name: '搜索列表（项目）',
//       path: 'projects',
//     }, {
//       name: '搜索列表（应用）',
//       path: 'applications',
//     }],
//   }],
// }, {
//   name: '详情页',
//   icon: 'profile',
//   path: 'profile',
//   children: [{
//     name: '基础详情页',
//     path: 'basic',
//   }, {
//     name: '高级详情页',
//     path: 'advanced',
//     authority: 'admin',
//   }],
// }
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map((item) => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
