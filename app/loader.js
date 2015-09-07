﻿define(['Q'], function (Q) {
    "use strict";

    return {
        loadModule: loadModule
    };

    function loadModule(modulePath) {
        var defer = Q.defer();
        
        require([modulePath],
            function (module) {
                defer.resolve(module);
            },
            function (error) {
                defer.reject({ modulePath: error.requireModules && error.requireModules[0], message: error.message });
            });

        return defer.promise;
    }
});
