module.exports = {
  'Default': {
    'IS_USE_LOCAL_AJAX': false,
    'GLB_WEBROOT': '/etms',
    'PROXY_TABLE_TARGET': ''
  },
  'dev': {
    'IS_USE_LOCAL_AJAX': true,
    'GLB_WEBROOT': '/etms',
    'PROXY_TABLE_TARGET': 'http://172.16.18.119:8080'
    // 'PROXY_TABLE_TARGET': 'http://172.16.16.240:8080'
  }
}
