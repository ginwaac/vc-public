import title from './title.vue'

title.install = function (Vue) {
  Vue.component(title.name, title)
}

export default title
