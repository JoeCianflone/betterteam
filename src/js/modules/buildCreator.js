App.Modules = App.Modules || {};
App.Modules.BuildCreator = function () {
   var o = {
      "truck-driver": {
         "name": "Truck Driver",
         "skills": [
            {text:"Over 25 years old", type: "over-25-years-old"},
            {text: "Driver license", type: "drivers-license"},
            {text: "Clean driving record", type: "clean-driving-record"},
            {text: "Flexible availability", type: "flexible-availability"},
            {text: "Heavy Rigid License", type: "heavy-rigid-license"},
            {text: "Presentable", type: "presentable"},
            {text: "Punctual", type: "punctual"},
            {text: "Friendly", type: "friendly"},
            {text: "'Can do' attitude", type: "can-do-attitude"},
            {text: "Excellent Presentation", type: "excellent-presentation"}
         ],
         "benefits": [
            {text:"401k", type: "401k"},
            {text: "Medical Insurance", type: "medical-insurance"},
            {text: "Dental Insurance", type: "dental-insurance"},
            {text: "Day shift", type: "day-shift"},
            {text: "Long Term Care Insurance", type: "long-term-care-insurance"},
            {text: "Paid Sick Leave", type: "paid-sick-leave"},
            {text: "Paid Military Leave", type: "paid-military-leave"},
            {text: "Paid holidays", type: "paid-holidays"},
         ]
      },
      "CE": {
         "name": "Computer Engineer",
         "skills": [
            {text:"Over 25 years old", type: "over-25-years-old"},
            {text: "Driver license", type: "drivers-license"},
            {text: "Clean driving record", type: "clean-driving-record"},
            {text: "Flexible availability", type: "flexible-availability"},
            {text: "Heavy Rigid License", type: "heavy-rigid-license"},
            {text: "Presentable", type: "presentable"},
            {text: "Punctual", type: "punctual"},
            {text: "Friendly", type: "friendly"},
            {text: "'Can do' attitude", type: "can-do-attitude"},
            {text: "Excellent Presentation", type: "excellent-presentation"}
         ],
         "benefits": [
            {text:"401k", type: "401k"},
            {text: "Medical Insurance", type: "medical-insurance"},
            {text: "Dental Insurance", type: "dental-insurance"},
            {text: "Day shift", type: "day-shift"},
            {text: "Long Term Care Insurance", type: "long-term-care-insurance"},
            {text: "Paid Sick Leave", type: "paid-sick-leave"},
            {text: "Paid Military Leave", type: "paid-military-leave"},
            {text: "Paid holidays", type: "paid-holidays"},
         ]
      }
   };

   var generateSkills = function(data) {
      $(".js-skills").html(Handlebars.templates.skills({skills: o[data.type].skills}));
   };

   var generateBenefits = function(data) {
      $(".js-benefits").html(Handlebars.templates.benefits({benefits: o[data.type].benefits}));
   };

   return {
      init: function() { return this; },

      events: function() {
         Events.subscribe('bt/gotTitle', generateSkills);
         Events.subscribe('bt/gotTitle', generateBenefits);
         return this;
      }
   };
}();

