App.Modules = App.Modules || {};
App.Modules.ButtonSelector = function () {
   var o = { };

   var addToJD = function(data) {
      data.eventElement.toggleClass('selected');


   };

   return {
      init: function() { return this; },

      events: function() {
         Events.bind("click", ".js-select").to(addToJD, this);
         return this;
      }
   };
}();

