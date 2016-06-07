/*
 * Copyright (C) 2013 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
({
	init: function (cmp) {
		var concrete = cmp.getConcreteComponent(),
			helper = concrete.getDef().getHelper();

		helper.initialize(cmp);
	},

	handleClick: function (cmp, evt, helper) {
		if ($A.util.getBooleanValue(cmp.get("v.disabled"))) {
            event.preventDefault();
            return false;
        }
        helper.toggleSort(cmp);
        return true;
	},
	
	updateNameRef: function(cmp, evt, helper) {
		helper.updateNameRef(cmp);
	},
	
	handleDisabledChange: function(cmp) {
		var disabled = cmp.get("v.disabled");
		
		if (disabled) {
			cmp.set("v.direction", '');
		}
	}
})// eslint-disable-line semi
