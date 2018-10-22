let data = {
  title: 'The VueJS Instance',
  showParagraph: false,
};

const vm1 = new Vue({
  data: data,
  methods: {
    show() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
    },
    updateTitle(title) {
      this.title = title;
    },
  },
  computed: {
    lowercaseTitle() {
      return this.title.toLowerCase();
    },
  },
  watch: {
    title(value) {
      alert(`Title changed, new value: ${value}`);
    },
  },
}).$mount('#app1');

console.log(vm1.$data === data);

setTimeout(() => {
  vm1.title = 'Changed by timer';
  vm1.show();
}, 3000);

const vm2 = new Vue({
  data: {
    title: 'The second Instance',
  },
  methods: {
    onChange() {
      vm1.title = 'Changed!';
    },
  },
}).$mount('#app2');
