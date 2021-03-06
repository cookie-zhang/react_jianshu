import { combineReducers } from 'redux-immutable'; //将每个页面的store整合到一个总的里面，像极了vue中的moduleA  moudleB那种整合vuex数据；
import { reducer as HeaderRaducer} from '../common/header/store/index.js'
import { reducer as HomeReducer } from '../pages/home/store/index.js'
import { reducer as DetailReducer } from '../pages/detail/store/index.js'
import { reducer as LoginReducer } from '../pages/login/store/index.js'
const reducer = combineReducers({
    header: HeaderRaducer,
    home: HomeReducer,
    detail: DetailReducer,
    login: LoginReducer
})

export default reducer;