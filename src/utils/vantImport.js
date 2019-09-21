import Vue from 'vue'
import 'vant/lib/button/style';

import {Button} from 'vant';
Vue.use(Button)

import {NavBar} from 'vant'

Vue.use(NavBar)
import {Cell, CellGroup} from 'vant';

Vue.use(Cell).use(CellGroup);

import {Collapse, CollapseItem} from 'vant';

Vue.use(Collapse).use(CollapseItem);

import {RadioGroup, Radio} from 'vant';

Vue.use(RadioGroup);
Vue.use(Radio);

import {Checkbox, CheckboxGroup} from 'vant';

Vue.use(Checkbox).use(CheckboxGroup);