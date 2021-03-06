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
	select : function(component, event, helper) {
		var current = component.getConcreteComponent().get("v.selected");
		if (current === false) {
			component.getConcreteComponent().set("v.selected", !current);
		} else {
			helper.toggleState(component);
		}

		helper.fireSelectEvent(component, event, { "deselectSiblings": true});
	},

	updateDirection: function(cmp, evt, helper) {
		helper.updateDirection(cmp);
	}
})// eslint-disable-line semi