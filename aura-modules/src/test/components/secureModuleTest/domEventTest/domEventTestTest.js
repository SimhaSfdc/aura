({
    /**
     * Note that this test file operates in system mode (objects are not Lockerized) so the tests delegate logic and
     * verification to the controller and helper files, which operate in user mode.
     */

    // LockerService not supported on IE
    // TODO(W-3674741): FF browser versions in autobuilds is too far behind
    // TODO W-4446969: LockerService disabled for iOS browser in 212
    browsers: ["-IE8", "-IE9", "-IE10", "-IE11", "-FIREFOX", "-IPHONE", "-IPAD"],

    testClickEvent: {
        test: function(cmp) {
            cmp.domEventTester("testClickEvent");
        }
    },

    testInitEventOnDynamicElement: {
        test: function(cmp) {
            cmp.domEventTester("testInitEventOnDynamicElement");
        }
    },

    // W-4437423
    _testInitEventOnTemplateElement: {
        test: function(cmp) {
            cmp.domEventTester("testInitEventOnTemplateElement");
        }
    },

    // W-4462187
    _testEventView: {
        test: function(cmp) {
            cmp.domEventTester("testEventView");
        }
    },

    testEventTargetOfHtmlElementHandler: {
        test: function(cmp) {
            cmp.domEventTester("testEventTargetOfHtmlElementHandler");
        }
    }
})
