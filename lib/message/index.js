var message = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vc-message"},[_vm._v("\n  message组件："+_vm._s(_vm.message)+"\n")])},
staticRenderFns: [],
  name: 'vc-message', // 需要声明组件名称
  props: {
    message: {
      type: String,
      required: true,
      default: 'message'
    }
  }
};

message.install = function (Vue) {
  Vue.component(message.name, message);
};

export default message;
//# sourceMappingURL=index.js.map
