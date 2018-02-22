'use strict';

angular.module('customLoginApp')

    .factory('regFactory', ['$resource', function($resource) {
    
            var regfac = {};
     
            regfac.initRegistration = function(){
                return $resource("/api/register", null, {'update':{method:'PUT' }});
            };
    
            return regfac;
    
        }])


    .service('baseFactory', ['$resource', function($resource) {
    
                this.getAPIToken = function(){
                    
                    return $resource("/api/apptoken",null, null);
                    
                };
                        
        }]) 

   
;
