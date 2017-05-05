var thirdComponent = {
    template: '<h1>Hello {{$ctrl.name}}!</h1> <hr /><input ng-model="$ctrl.input"> {{$ctrl.input}}',
          bindings: {
               input:'<', // use in input field data
               name: "@",  // use to string text which is will not modefied
               doSubmit: '&' // callback function use pass a function 
          },
          controller: function() {
               // You can access the bindings here or inside your view
               console.log(this.name) // -> World
          }
}

angular.module("angularComponentExample", [])
    .component("thirdComponent", thirdComponent)
