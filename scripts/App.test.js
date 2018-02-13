import { mount } from '@vue/test-utils';
import App from './App.vue';

describe('App.vue', () => {
  test('should be a vue instance', () => {
    const wrapper = mount(App);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
