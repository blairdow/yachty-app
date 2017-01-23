(function() {
    'use strict'
    
    angular
        .module('YachtyApp')
        .controller('MainController', MainController)
    
    MainController.$inject = ['$http']
    
    function MainController($http) {
        var vm = this
        
        vm.all = []
        vm.getContent = getContent
        
        getContent()
        
        function getContent() {
            $http.get('/api')
            .then(function(res) {
                vm.all = res.data
            }, function(err) {
                console.log(err)
            })
        }
    }
})()