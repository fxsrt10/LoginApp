angular.module('customLoginApp')
    
    .controller('baseController', ['$scope',  'baseFactory', '$http', '$window', '$state', function($scope, baseFactory,$http, $window, $state){
        
                
        $scope.apitoken = baseFactory.getAPIToken().get(function(response) {
                    $scope.apitoken = response["apptoken"];
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                });
        
        $scope.login = function(){
            postdata = {"op":"cred_submit","credentials": {"authFactor": "USERNAME_PASSWORD", "username": $scope.username,"password": $scope.password, "credType" : "USERNAME_PASSWORD", "scenario" : "/sso/v1/user/login"}};
            // 'Content-Type': 'application/json', 
            postheaders = {'Authorization': 'Bearer ' + $scope.apitoken, 'Access-Control-Allow-Credentials' : 'true'};
            postheaders2 = {'Access-Control-Allow-Credentials' : 'true'};
            
            $http({
              method: 'POST',
              url: 'https://idcs-0c85cc563ce74338a8a0f6a6a2ed5bbd.identity.oraclecloud.com/sso/v1/user/secure/login',
              data: postdata,
              headers: postheaders,
              // withCredentials: true
            }).then(function(response) {
                 data = response.data;
                 console.log(response.data)
                 if(data.nextOp == "postRedirect2"){
                    payload = {
                        "state":data.postParams.state, 
                        "X-HOST-IDENTIFIER-NAME":data.postParams["X-HOST-IDENTIFIER-NAME"], 
                        "id_token":data.postParams.id_token, 
                        "IDCS_CG_ENC":data.postParams["IDCS_CG_ENC"]
                    };
                     console.log(payload);
                        $http({
                          method: 'POST',
                          url: data.redirectUrl,
                          data: payload,
                          // crossDomain: true,
                          // withCredentials: true,
                          // headers: postheaders2
                        }).then(function(response2) {
                             console.log(response2);
                        }, function(error2) {
                                console.log(error2);

                        });
                 }else{
                     console.log("Test123");
                     $window.location = 'https://idcs-0c85cc563ce74338a8a0f6a6a2ed5bbd.identity.oraclecloud.com/ui/v1/myconsole';
                 }
            }, function(error) {
                    console.log(error);
                
            });
        };
        // $scope.login = function(creds, callback){
        //         var postdata = {"op":"cred_submit","credentials": {"authFactor": "USERNAME_PASSWORD", "username": $scope.username,"password": $scope.password, "credType" : "USERNAME_PASSWORD", "scenario" : "/sso/v1/user/login"}};            
        //         $.ajax({
        //             type: "POST",
        //             crossDomain: true,
        //             url: 'https://idcs-0c85cc563ce74338a8a0f6a6a2ed5bbd.identity.oraclecloud.com/sso/v1/user/secure/login',
        //             data: postdata,
        //             contentType: "application/json",
        //             dataType: "json",
        //                                 xhrFields: {
        //                                     withCredentials: true
        //                                 },
        //                                 crossDomain: true,
        //                                 headers: {
        //                                     'Authorization':'Bearer ' + $scope.apitoken,
        //                                     'Access-Control-Allow-Origin' : '*',
        //                                     'Access-Control-Allow-Headers' : 'Origin,X-Requested-With,Content-Type,Accept,Authorization',
        //                                     'Access-Control-Allow-Credentials' : 'true'
        //                                 }
        //         }).done(function(msg) {
        //                                 atToken = msg.authenticationToken;
        //             callback(msg);
        //         }).fail(function(qXHR, ex){
        //             alert(ex);
        //         }); 
        //     };
    }])

    .controller('regController', ['$scope',  'regFactory', function($scope, regFactory){
         $scope.success = false; 
         $scope.register = function(){
             
         };
        
        $scope.clear = function(){
             
             $scope.registerForm.$setPristine();
        }
        
    }])
;

