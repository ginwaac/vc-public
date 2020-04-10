var title = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vc-title"},[_vm._v("\n  title组件："+_vm._s(_vm.title)+"\n")])},
staticRenderFns: [],
  name: 'vc-title', // 需要声明组件名称
  props: {
    title: {
      type: String,
      required: true,
      default: 'title'
    }
  }
};

title.install = function (Vue) {
  Vue.component(title.name, title);
};

export default title;
//# sourceMappingURL=index.js.map
