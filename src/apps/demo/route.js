/**
 * Created by WJ on 2018/1/25.
 */
export const name = {
  path: 'demo',
  name: 'demo',
  mode: 'abstract',
  component: r => require.ensure([], () => r(require('./index')), 'demo'),
  redirect: {name: 'demo-child'},
  children: [
    {
      path: 'child',
      name: 'demo-child',
      component: r => require.ensure([], () => r(require('./child.vue')), 'demo'),
    }
  ]
};
