var secondComponent = {
    template:"<h3 class='text-center'> my second '{{$ctrl.name}}'</h3>",
    controller: function(){
        this.name= "component with adding controller with name variable"
    }
}


angular.module("angularComponentExample",[])
    .component("secondComponent", secondComponent)