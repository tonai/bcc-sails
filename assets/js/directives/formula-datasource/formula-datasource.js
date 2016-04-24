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
          id: 'JL',
          category: 'young',
          label: 'Jeunes loisirs',
          limit: 2
        },
        {
          id: 'JC1',
          category: 'young',
          label: 'Jeunes compétiteurs 1',
          limit: 3
        },
        {
          id: 'JC2',
          category: 'young',
          label: 'Jeunes compétiteurs 2',
          limit: 5
        },
        {
          id: '1A',
          category: 'adult',
          label: 'Adultes AS 19h30',
          limit: 6
        },
        {
          id: '1B',
          category: 'adult',
          label: 'Adultes AS 21h',
          limit: 3
        },
        {
          id: '2A',
          category: 'adult',
          label: 'Adultes JPR 19h30',
          limit: 6
        },
        {
          id: '2B',
          category: 'adult',
          label: 'Adultes JPR 21h',
          limit: 7
        },
        {
          id: '3A',
          category: 'adult',
          label: 'Adultes CD intermédiaires à confirmés',
          limit: 6
        },
        {
          id: '3B',
          category: 'adult',
          label: 'Adultes CD débutants à intermédiaires',
          limit: 4
        },
        {
          id: '4',
          category: 'adult',
          label: 'Adultes compétiteurs',
          limit: 2
        }
      ];

      this.categories = [];
      this.formulas.forEach(function(formula){
        this.categories[formula.category] = this.categories[formula.category] || {
          limit: 0,
          label: labels[formula.category]
        };
        this.categories[formula.category].limit += formula.limit;
      }.bind(this));
		}
	};
});
