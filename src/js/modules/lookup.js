App.Modules = App.Modules || {};
App.Modules.Lookup = function () {
   var o = {
      titles: [
         {value: "truck driver", data: "truck-driver"},
         {value: "computer programmer", data: "programmer"},
         {value: "computer engineer", data: "CE"},
         {value: "web developer", data: "web dev"},
         {value: "event planner", data: "event-planner"},
      ]
   };

   return {
      init: function() {
         // TODO: modify when you're ready to grab data from a URL
         // https://www.devbridge.com/sourcery/components/jquery-autocomplete/

         $('.js-lookup').autocomplete({
            lookup: o.titles,
            onSelect: function(suggestion) {
               Events.publish("bt/gotTitle", suggestion);
            }
         });
         return this;
      },
      events: function() { return this; }
   };

}();

