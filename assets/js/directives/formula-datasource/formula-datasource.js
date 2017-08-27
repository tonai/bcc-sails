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
          counter: 0
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
          counter: 0
        },
        {
          id: 'JL2',
          category: 'young',
          label: 'Loisirs 14-18',
          limit: 30,
          counter: 0
        },
        {
          id: 'JC1',
          category: 'young',
          label: 'Compétiteurs 9-13 ans',
          limit: 30,
          counter: 0
        },
        {
          id: 'JC2',
          category: 'young',
          label: 'Compétiteurs 14-18',
          limit: 30,
          counter: 0
        },
        {
          id: 'FA1',
          category: 'adult',
          label: 'Adultes AS 19h30',
          limit: 50,
          counter: 53
        },
        {
          id: 'FA2',
          category: 'adult',
          label: 'Adultes AS 21h',
          limit: 50,
          counter: 36
        },
        {
          id: 'FB1',
          category: 'adult',
          label: 'Adultes JPR 19h30',
          limit: 25,
          counter: 14
        },
        {
          id: 'FB2',
          category: 'adult',
          label: 'Adultes JPR 21h',
          limit: 25,
          counter: 9
        },
        {
          id: 'FC1',
          category: 'adult',
          label: 'Adultes CD 19h30',
          limit: 50,
          counter: 19
        },
        {
          id: 'FC2',
          category: 'adult',
          label: 'Adultes CD 21h',
          limit: 50,
          counter: 6
        },
        {
          id: 'FD',
          category: 'adult',
          label: 'Adultes compétiteurs',
          limit: 50,
          counter: 0
        },
        {
          id: 'FE',
          category: 'adult',
          label: 'Adultes week-end',
          limit: 30,
          counter: 4
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
