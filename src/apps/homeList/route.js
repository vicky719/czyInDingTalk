/**
 * Created by WJ on 2018/1/25.
 */
export const name = {
  path: 'homeList',
  name: 'czy-homeList',
  component: r => require.ensure([], () => r(require('./homeList.vue')), 'homeList')
};
