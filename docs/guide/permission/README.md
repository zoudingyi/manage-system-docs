# 权限配置

完整的权限功能需要对接[权限系统](https://auth.mundossp.com/)，此处简单说明权限功能的一些基本配置。

## 配置

在 **store/modules/user.js** 里面进行权限的基本配置。由于权限系统的都是页面级或功能级别的权限设置，所以该系统没用到 roles 去配置权限，全部使用 permissions 进行配置。 permissions 为用户当前拥有的权限，allPermissions 为该系统在[权限系统](https://auth.mundossp.com/)设定的所有权限。

```javascript
// useUserStore
state: () => ({
  token: getToken(),
  name: "",
  roles: [],
  permissions: [], // 用户当前拥有的权限
  allPermissions: [
    {
      id: 0, // 对应权限系统的页面或功能id
      permission: "demo:user:page", // 自定义权限名称
    },
  ],
});
```

**permissions** 既可配置页面级权限，也可配置功能级权限，命名尽量语义化，以便于他人一眼能够认出是什么权限。

```javascript
permissions: ["home:table:add", "home:form:edit"];
```

在路由里面设置对应权限：

```javascript {4,11,18}
// router
{
    path: '/homePage',
    component: Layout,
    permissions: ['home:user:page','home:user:details'],
    meta: { title: '首页', icon: 'home' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/home-page/index'),
        name: 'homePage',
        permissions: ['home:user:page'],
        meta: { title: '首页', icon: '' }
      },
      {
        path: 'details',
        component: () => import('@/views/home-page/details'),
        name: 'homePageDetails',
        permissions: ['home:user:details'],
        hidden: true,
        meta: { title: '详情', icon: '' }
      }
    ]
  }
```

## 示例

假设权限系统在你的管理系统下设置了 **首页(id:11)、任务管理(id:22)、系统设置(id:33)** 三个页面的权限，以及一个 **编辑系统设置(id:44)** 的功能权限。你可以像这样配置：

```javascript
allPermissions: [
  {
    id: 11,
    permission: "home:user:page",
  },
  {
    id: 22,
    permission: "task:manage:page",
  },
  {
    id: 33,
    permission: "system:user:page",
  },,
  {
    id: 44,
    permission: "system:manage:edit",
  },
],
```

登录后会获取用户信息，拿到用户拥有的所有权限 ID 与 allPermissions 进行比对， 把对应的 permission 值存到 **permissions** 里。

::: tip
如果权限系统配置的权限 id 是由后端管理并通过接口返回的，则需要先获取权限对应的 ID 并赋值到 allPermissions 里。
:::
