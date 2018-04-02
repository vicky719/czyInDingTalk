import {czyFooter} from './apps/public'
import {InputAutoclear, SearchAutoclear, Swipe, Select, Alert, Confirm, Mtswipe, MtswipeItem, RequireFor} from 'rap-vue-ui'
export default (Vue) => {
  Vue.component('czy-footer', czyFooter)
  Vue.component(InputAutoclear.name, InputAutoclear)
  Vue.component(SearchAutoclear.name, SearchAutoclear)
  Vue.component(Swipe.name, Swipe)
  Vue.component(Select.name, Select)
  Vue.component(Alert.name, Alert)
  Vue.component(Confirm.name, Confirm)
  Vue.component(Mtswipe.name, Mtswipe)
  Vue.component(MtswipeItem.name, MtswipeItem)
  Vue.directive(RequireFor.name, RequireFor)
}
