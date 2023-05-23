# 权限配置

完整的权限功能需要对接[权限系统](https://auth.mundossp.com/)，此处简单说明权限功能的一些基本配置。

## 配置

在 **store/modules/user.js** 里面进行权限的基本配置。由于权限系统的都是页面或功能级别的权限设置，所以该系统没用到 roles 去配置权限，全部使用的 permissions 进行配置。 permissions 为用户当前拥有的权限，allPermissions 为[权限系统](https://auth.mundossp.com/)设定的该系统所有权限。

```javascript
// useUserStore
state: () => ({
  token: getToken(),
  name: "",
  roles: [],
  permissions: [],
  allPermissions: [
    {
      id: 0, // 对应权限系统的页面或功能id
      permission: "demo:user:page", // 自定义权限名称
    },
  ],
});
```
