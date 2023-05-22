# 简介

<h1 align="center">
Vue3 System Template
</h1>

<p align="center">
🎉 Vue3 & Vite、Pinia、Element Plus 的前后端分离权限管理系统
</p>

<p align="center"><img src="https://img.shields.io/github/license/mashape/apistatus.svg"> <a href="https://github.com/zoudingyi/RuoYi-Vue3"><img src="https://img.shields.io/badge/RuoYi-v4.7.4-brightgreen.svg"></a></p>

::: tip
公司以前用的管理系统模板是 [vue admin template](https://github.com/PanJiaChen/vue-admin-template)。 vue3 发布正式版后就打算找一款适用于我们公司的 vue3 后台管理系统。看了很多优秀的开源项目，再结合我们公司实际开发情况最终决定使用 [RuoYi-Vue3](https://github.com/yangzongzhuan/RuoYi-Vue3)。
:::

**RuoYi** 有许多内置的功能，这里删除了大部分平时用不到的功能，只保留了一些基础功能，像是配置系统菜单、操作权限、按钮权限标识等。登录也调整为 OAUTH2 登录，优化部分代码逻辑，精简成一套系统模板。之所以选择这套系统，除了它本身优异、作者更新频率高、用户多社区活跃以外，更主要还是由于他是基于 [Element Plus UI](https://element-plus.org/zh-CN/) 框架开发，没有使用 TS，从 [vue admin template](https://github.com/PanJiaChen/vue-admin-template) 过渡到这套管理系统会很快适应，降低 vue2 到 vue3 过渡的上手难度。

值得注意的是，这套系统原本就没有使用 [ESLint](https://eslint.org/)。经过一段时间的使用，我们一致决定弃用 **ESLint** ，改为使用 [Prettier](https://prettier.io/) 来统一代码风格。你也许会有疑问为什么不使用 **ESLint + Prettier**。 那的确更好，但我们认为在中小型项目开发中，把更多精力放到业务开发中才能达到快速迭代的目的。毕竟每个人都有自己的代码风格，我们接受大致的风格统一，不想花更多时间去解决麻烦的<span style="text-decoration: red wavy underline">红色波浪线</span>。

**总的来说，主要目的是让开发者注重专注业务，降低技术难度，从而节省人力成本，缩短项目周期，提高软件安全质量。**
