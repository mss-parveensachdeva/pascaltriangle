(function(){
    angular
    .module('testTask', [])
    .controller('contentController', controllerMethod);
    
    controllerMethod.$inject = ['$window'];
    
    function controllerMethod($window){
        var vm = this ;
        vm.colorArray = ['red','blue','orange','green'];
        
        vm.pascalTriangle = function(rows) {
            $window.sessionStorage.removeItem(rows);
            var triangle = [];
            for (var r = 0; r < rows; r++) {
                triangle[r] = [];
                for (var i = 0; i <= r; i++) {
                    if (i === 0 || i === r)
                        triangle[r][i] = 1  ;
                    else
                        triangle[r][i] = triangle[r-1][i-1] + triangle[r-1][i] ;
                }
            }
            $window.sessionStorage.setItem("rows", JSON.stringify({"rows": rows}));
            vm.data = triangle ;
        };
        
        vm.getRowFromSessionStorage = function(){
            var row = $window.sessionStorage.getItem("rows") ;
            if(row !== null){
                vm.rows = JSON.parse(row).rows ;
                vm.pascalTriangle(vm.rows);    
            }
        };
        
    }
    
}());