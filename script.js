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
      // console.log(this.$refs.myButton);
      this.$refs.myButton.innerText = 'Test';
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
});

vm1.$mount('#app1');

console.log(vm1.$data === data);
vm1.$refs.heading.innerText = 'Something else';

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

const vm3 = new Vue({
  el: 'hello',
  template: '<h1>Hello!</h1>',
});

// vm3.$mount();
// document.getElementById('app3').appendChild(vm3.$el);
