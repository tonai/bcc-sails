angular.module('bcc').directive('formulaDatasource', function(){
  'use strict';

	return {
		restrict: 'E',
		scope: {
			formulas: '=',
  		categories: '='
		},
		bindToController: true,
		controllerAs: 'ctrl',
		controller: function(){
      var labels = {
        young: 'Jeune',
        adult: 'Adulte'
      };

      this.formulas = [
        {
          id: 'MB1',
          category: 'young',
          label: 'Mini bad mercredi',
          limit: 16,
          counter: 4
        },
        {
          id: 'MB2',
          category: 'young',
          label: 'Mini bad samedi',
          limit: 16,
          counter: 2
        },
        {
          id: 'JL1',
          category: 'young',
          label: 'Loisirs 9-13 ans',
          limit: 30,
          counter: 10
        },
        {
          id: 'JL2',
          category: 'young',
          label: 'Loisirs 14-18',
          limit: 30,
          counter: 17
        },
        {
          id: 'JC1',
          category: 'young',
          label: 'Compétiteurs 9-13 ans',
          limit: 21,
          counter: 19
        },
        {
          id: 'JC2',
          category: 'young',
          label: 'Compétiteurs 14-18',
          limit: 21,
          counter: 18
        },
        {
          id: 'F1A',
          category: 'adult',
          label: 'Adultes AS 19h30',
          limit: 56,
          counter: 52
        },
        {
          id: 'F1B',
          category: 'adult',
          label: 'Adultes AS 21h',
          limit: 56,
          counter: 29
        },
        {
          id: 'F0A',
          category: 'adult',
          label: 'Adultes JPR 19h30',
          limit: 24,
          counter: 24
        },
        {
          id: 'F0B',
          category: 'adult',
          label: 'Adultes JPR 21h',
          limit: 24,
          counter: 12
        },
        {
          id: 'F0C',
          category: 'adult',
          label: 'Adultes CD 19h30',
          limit: 50,
          counter: 25
        },
        {
          id: 'F0D',
          category: 'adult',
          label: 'Adultes CD 21h',
          limit: 50,
          counter: 5
        },
        {
          id: 'F2',
          category: 'adult',
          label: 'Adultes compétiteurs',
          limit: 46,
          counter: 46
        },
        {
          id: 'FWE',
          category: 'adult',
          label: 'Adultes week-end',
          limit: 30,
          counter: 7
        }
      ];

      this.categories = [];
      this.formulas.forEach(function(formula){
        this.categories[formula.category] = this.categories[formula.category] || {
          limit: 0,
          label: labels[formula.category],
          counter: 0
        };
        this.categories[formula.category].limit += formula.limit;
        this.categories[formula.category].counter += formula.counter;
      }.bind(this));
		}
	};
});
