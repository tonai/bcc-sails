angular.module('templates-dist', ['js/controllers/main/main.html', 'js/controllers/registration-edit/registration-edit.html', 'js/controllers/registration-list/registration-list.html', 'js/directives/messages/messages.html', 'js/directives/nav/nav.html', 'js/directives/pager/pager.html', 'js/directives/registration-counter/registration-counter.html', 'js/directives/registration-form/registration-form.html', 'js/directives/registration-list/registration-list.html']);

angular.module("js/controllers/main/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/controllers/main/main.html",
    "<registration-form></registration-form>\n" +
    "");
}]);

angular.module("js/controllers/registration-edit/registration-edit.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/controllers/registration-edit/registration-edit.html",
    "<registration-form id=\"ctrl.registrationId\"></registration-form>\n" +
    "");
}]);

angular.module("js/controllers/registration-list/registration-list.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/controllers/registration-list/registration-list.html",
    "<registration-list></registration-list>\n" +
    "\n" +
    "");
}]);

angular.module("js/directives/messages/messages.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/directives/messages/messages.html",
    "<div class=\"messages\">\n" +
    "  <div ng-repeat=\"message in ctrl.messages\" class=\"alert alert-{{message.type}}\" role=\"alert\">\n" +
    "    <button type=\"button\" class=\"close\" aria-label=\"Close\" ng-click=\"ctrl.dismiss($index)\">\n" +
    "      <span aria-hidden=\"true\">&times;</span>\n" +
    "    </button>\n" +
    "    {{message.message}}\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("js/directives/nav/nav.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/directives/nav/nav.html",
    "<div class=\"header\">\n" +
    "  <div class=\"navbar navbar-default\" role=\"navigation\">\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"navbar-header\">\n" +
    "        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#js-navbar-collapse\">\n" +
    "          <span class=\"sr-only\">Toggle navigation</span>\n" +
    "          <span class=\"icon-bar\"></span>\n" +
    "          <span class=\"icon-bar\"></span>\n" +
    "          <span class=\"icon-bar\"></span>\n" +
    "        </button>\n" +
    "        <a class=\"navbar-brand\" href=\"index.html\">BCC</a>\n" +
    "      </div>\n" +
    "      <div class=\"collapse navbar-collapse\" id=\"js-navbar-collapse\">\n" +
    "        <ul class=\"nav navbar-nav\">\n" +
    "          <li ng-class=\"{'active': ctrl.currentPath == '/'}\"><a href=\"#/\">Home</a></li>\n" +
    "          <li ng-class=\"{'active': ctrl.currentPath == '/registrations'}\"><a href=\"#/registrations\">Liste</a></li>\n" +
    "          <!--li id=\"login-btn\" class=\"hide\"><a href=\"#\">Login</a></li>\n" +
    "          <li id=\"logout-btn\" class=\"hide\"><a href=\"#\">Logout (<span id=\"login-username\"></span>)</a></li-->\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("js/directives/pager/pager.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/directives/pager/pager.html",
    "<div class=\"btn-group\">\n" +
    "  <button\n" +
    "    class=\"btn btn-default\"\n" +
    "    ng-click=\"ctrl.paginate(ctrl.current - 1)\"\n" +
    "    ng-disabled=\"ctrl.current == 0\"\n" +
    "  >Précédent</button>\n" +
    "  <button\n" +
    "    class=\"btn btn-default\"\n" +
    "    ng-repeat=\"page in ctrl.pages\"\n" +
    "    ng-click=\"ctrl.paginate(page - 1)\"\n" +
    "    ng-class=\"{'active': ctrl.current == page - 1}\"\n" +
    "  >{{::page}}</button>\n" +
    "  <button\n" +
    "    class=\"btn btn-default\"\n" +
    "    ng-click=\"ctrl.paginate(ctrl.current + 1)\"\n" +
    "    ng-disabled=\"ctrl.current == ctrl.totalPage - 1\"\n" +
    "  >Suivant</button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("js/directives/registration-counter/registration-counter.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/directives/registration-counter/registration-counter.html",
    "<div class=\"registration-counter\">\n" +
    "  <formula-datasource formulas=\"ctrl.formulas\" categories=\"ctrl.categories\"></formula-datasource>\n" +
    "  <div class=\"registration-counter__panel\">\n" +
    "    <div class=\"registration-counter__box panel panel-default\" ng-repeat=\"formula in ctrl.formulas | filter:{category:'young'}\" id=\"panel-{{::formula.id}}\">\n" +
    "      <div class=\"panel-heading\">\n" +
    "        <span title=\"{{::formula.label}}\">{{::formula.id}}</span>\n" +
    "      </div>\n" +
    "      <div class=\"panel-body\">\n" +
    "        <div class=\"progress\">\n" +
    "          <span class=\"badge\">{{ctrl.counters[formula.id] || 0}} / {{::formula.limit}}</span>\n" +
    "          <div\n" +
    "            class=\"progress-bar progress-bar-success\"\n" +
    "            ng-class=\"{'progress-bar-warning': (ctrl.counters[formula.id] || 0) / formula.limit > 0.5,\n" +
    "                       'progress-bar-danger': (ctrl.counters[formula.id] || 0) / formula.limit > 0.8}\"\n" +
    "            role=\"progressbar\"\n" +
    "            aria-valuenow=\"{{ctrl.counters[formula.id] || 0}}\"\n" +
    "            aria-valuemin=\"0\"\n" +
    "            aria-valuemax=\"{{::formula.limit}}\"\n" +
    "            style=\"width: {{(ctrl.counters[formula.id] || 0) / formula.limit * 100}}%\"\n" +
    "          ></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"registration-counter__box registration-counter__box--total panel panel-default\">\n" +
    "      <div class=\"panel-heading\">\n" +
    "        <span title=\"Total jeunes\">Total J</span>\n" +
    "      </div>\n" +
    "      <div class=\"panel-body\">\n" +
    "        <div class=\"progress\">\n" +
    "          <span class=\"badge\">{{ctrl.counters.young || 0}} / {{::ctrl.categories.young.limit}}</span>\n" +
    "          <div\n" +
    "            class=\"progress-bar\"\n" +
    "            role=\"progressbar\"\n" +
    "            aria-valuenow=\"{{ctrl.counters.young || 0}}\"\n" +
    "            aria-valuemin=\"0\"\n" +
    "            aria-valuemax=\"{{::ctrl.categories.young.limit}}\"\n" +
    "            style=\"width: {{(ctrl.counters.young || 0) / ctrl.categories.young.limit * 100}}%\"\n" +
    "          ></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"registration-counter__panel\">\n" +
    "    <div class=\"registration-counter__box panel panel-default\" ng-repeat=\"formula in ctrl.formulas | filter:{category:'adult'}\" id=\"panel-{{::formula.id}}\">\n" +
    "      <div class=\"panel-heading\">\n" +
    "        <span title=\"{{::formula.label}}\">{{::formula.id}}</span>\n" +
    "      </div>\n" +
    "      <div class=\"panel-body\">\n" +
    "        <div class=\"progress\">\n" +
    "          <span class=\"badge\">{{ctrl.counters[formula.id] || 0}} / {{::formula.limit}}</span>\n" +
    "          <div\n" +
    "            class=\"progress-bar progress-bar-success\"\n" +
    "            ng-class=\"{'progress-bar-warning': (ctrl.counters[formula.id] || 0) / formula.limit > 0.5,\n" +
    "                       'progress-bar-danger': (ctrl.counters[formula.id] || 0) / formula.limit > 0.8}\"\n" +
    "            role=\"progressbar\"\n" +
    "            aria-valuenow=\"{{ctrl.counters[formula.id] || 0}}\"\n" +
    "            aria-valuemin=\"0\"\n" +
    "            aria-valuemax=\"{{::formula.limit}}\"\n" +
    "            style=\"width: {{(ctrl.counters[formula.id] || 0) / formula.limit * 100}}%\"\n" +
    "          ></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"registration-counter__box registration-counter__box--total panel panel-default\">\n" +
    "      <div class=\"panel-heading\">\n" +
    "        <span title=\"Total adultes\">Total A</span>\n" +
    "      </div>\n" +
    "      <div class=\"panel-body\">\n" +
    "        <div class=\"progress\">\n" +
    "          <span class=\"badge\">{{ctrl.counters.adult || 0}} / {{::ctrl.categories.adult.limit}}</span>\n" +
    "          <div\n" +
    "            class=\"progress-bar\"\n" +
    "            role=\"progressbar\"\n" +
    "            aria-valuenow=\"{{ctrl.counters.adult || 0}}\"\n" +
    "            aria-valuemin=\"0\"\n" +
    "            aria-valuemax=\"{{::ctrl.categories.adult.limit}}\"\n" +
    "            style=\"width: {{(ctrl.counters.adult || 0) / ctrl.categories.adult.limit * 100}}%\"\n" +
    "          ></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("js/directives/registration-form/registration-form.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/directives/registration-form/registration-form.html",
    "<formula-datasource formulas=\"formulas\" categories=\"categories\"></formula-datasource>\n" +
    "<form id=\"registration-form\" ng-submit=\"ctrl.edit(ctrl.registration)\" ng-class=\"{'registration-form--edit': ctrl.registration.id, 'registration-form--add': !ctrl.registration.id}\">\n" +
    "\n" +
    "	<fieldset>\n" +
    "		<legend>Général</legend>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-xs-6 hidden-add\">\n" +
    "				<div class=\"form-group\" show-errors>\n" +
    "			    <label for=\"registerFormYear\">Année d'inscription</label>\n" +
    "					<input type=\"text\" class=\"form-control\" id=\"registerFormYear\" name=\"registerFormYear\" ng-model=\"ctrl.registration.year\">\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"col-xs-6 hidden-add\">\n" +
    "				<div class=\"form-group\" show-errors>\n" +
    "			    <label for=\"registerFormConfirmed\">Inscription confirmée</label>\n" +
    "					<select class=\"form-control\" id=\"registerFormConfirmed\" name=\"registerFormConfirmed\" ng-model=\"ctrl.registration.confirmed\">\n" +
    "			      <option value=\"\">non</option>\n" +
    "				    <option value=\"1\">oui</option>\n" +
    "			    </select>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-xs-6\">\n" +
    "				<div class=\"form-group\" show-errors>\n" +
    "			    <label for=\"registerFormCategory\">Catégorie d'inscription</label>\n" +
    "					<select class=\"form-control\" id=\"registerFormCategory\" name=\"registerFormCategory\" ng-model=\"ctrl.registration.category\" ng-change=\"ctrl.registration.formula = ''\" required>\n" +
    "			      <option></option>\n" +
    "			      <option value=\"young\">Jeune</option>\n" +
    "			      <option value=\"adult\">Adulte</option>\n" +
    "			    </select>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"col-xs-6\">\n" +
    "				<div class=\"form-group\" show-errors>\n" +
    "			    <label for=\"registerFormFormula\">Formule</label>\n" +
    "					<select class=\"form-control\" id=\"registerFormFormula\" name=\"registerFormFormula\" ng-model=\"ctrl.registration.formula\" required>\n" +
    "			      <option></option>\n" +
    "			      <option ng-repeat=\"formula in formulas\" value=\"{{::formula.id}}\" ng-show=\"ctrl.registration.category==formula.category\">\n" +
    "			        {{::formula.id}}: {{::formula.label}}\n" +
    "			      </option>\n" +
    "			    </select>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</fieldset>\n" +
    "\n" +
    "	<fieldset>\n" +
    "		<legend>Informations personnelles</legend>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-xs-6\">\n" +
    "				<div class=\"form-group\" show-errors>\n" +
    "			    <label for=\"registerFormFirstname\">Prénom</label>\n" +
    "					<input type=\"text\" class=\"form-control\" id=\"registerFormFirstname\" name=\"registerFormFirstname\" ng-model=\"ctrl.registration.firstname\" required>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"col-xs-6\">\n" +
    "				<div class=\"form-group\" show-errors>\n" +
    "			    <label for=\"registerFormLastname\">Nom</label>\n" +
    "					<input type=\"text\" class=\"form-control\" id=\"registerFormLastname\" name=\"registerFormLastname\" ng-model=\"ctrl.registration.lastname\" required>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-xs-6\">\n" +
    "				<div class=\"form-group\" show-errors>\n" +
    "			    <label for=\"registerFormEmail\">Email</label>\n" +
    "					<input type=\"text\" class=\"form-control\" id=\"registerFormEmail\" name=\"registerFormEmail\" ng-model=\"ctrl.registration.email\" required>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"col-xs-6\">\n" +
    "				<div class=\"form-group\" show-errors>\n" +
    "			    <label for=\"registerFormPhone\">Téléphone</label>\n" +
    "					<input type=\"text\" class=\"form-control\" id=\"registerFormPhone\" name=\"registerFormPhone\" ng-model=\"ctrl.registration.phone\" required>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-xs-6\">\n" +
    "				<div class=\"form-group\" show-errors>\n" +
    "			    <label for=\"registerFormFirstname\">N° de licence</label>\n" +
    "					<input type=\"text\" class=\"form-control\" id=\"registerFormLicence\" name=\"registerFormLicence\" ng-model=\"ctrl.registration.licence\">\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"col-xs-6\">\n" +
    "		    <label for=\"registerFormFirstname\">Date de naissance</label>\n" +
    "				<!--div class=\"row\">\n" +
    "					<input rsmdatedropdowns ng-model=\"ctrl.registration.birthdate\" />\n" +
    "				</div-->\n" +
    "				<div class=\"row\">\n" +
    "		  		<div class=\"col-xs-3\">\n" +
    "						<div class=\"form-group\" show-errors>\n" +
    "							<select class=\"form-control\" id=\"registerFormBirthday\" name=\"registerFormBirthday\" ng-model=\"ctrl.registration.birthday\">\n" +
    "					      <option></option>\n" +
    "					      <option ng-repeat=\"day in ctrl.days\" value=\"{{::day}}\">{{::day}}</option>\n" +
    "					    </select>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "		  		<div class=\"col-xs-3\">\n" +
    "						<div class=\"form-group\" show-errors>\n" +
    "							<select class=\"form-control\" id=\"registerFormBirthmonth\" name=\"registerFormBirthmonth\" ng-model=\"ctrl.registration.birthmonth\">\n" +
    "					      <option></option>\n" +
    "					      <option ng-repeat=\"month in ctrl.months\" value=\"{{::month}}\">{{::month}}</option>\n" +
    "					    </select>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"col-xs-6\">\n" +
    "						<div class=\"form-group\" show-errors>\n" +
    "							<select class=\"form-control\" id=\"registerFormBirthyear\" name=\"registerFormBirthyear\" ng-model=\"ctrl.registration.birthyear\" required>\n" +
    "					      <option></option>\n" +
    "					      <option ng-repeat=\"year in ctrl.years\" value=\"{{::year}}\">{{::year}}</option>\n" +
    "					    </select>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</fieldset>\n" +
    "\n" +
    "	<fieldset>\n" +
    "		<legend>Adresse</legend>\n" +
    "		<div class=\"form-group\" show-errors>\n" +
    "			<label for=\"registerFormAddressAddress\">Rue et numéro</label>\n" +
    "			<input type=\"text\" class=\"form-control\" id=\"registerFormAddressAddress\" name=\"registerFormAddressAddress\" ng-model=\"ctrl.registration.address.address\" required>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-xs-6\">\n" +
    "				<div class=\"form-group\" show-errors>\n" +
    "			    <label for=\"registerFormAddressPostcode\">Code postal</label>\n" +
    "					<input type=\"text\" class=\"form-control\" id=\"registerFormAddressPostcode\" name=\"registerFormAddressPostcode\" ng-model=\"ctrl.registration.address.postcode\" required>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"col-xs-6\">\n" +
    "				<div class=\"form-group\" show-errors>\n" +
    "			    <label for=\"registerFormAddressCity\">Ville</label>\n" +
    "					<input type=\"text\" class=\"form-control\" id=\"registerFormAddressCity\" name=\"registerFormAddressCity\" ng-model=\"ctrl.registration.address.city\" required>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</fieldset>\n" +
    "\n" +
    "	<fieldset>\n" +
    "		<legend>Contacts</legend>\n" +
    "		<div class=\"form-group\">\n" +
    "			<button type=\"button\" class=\"btn btn-success\" ng-click=\"ctrl.addContact()\">\n" +
    "				<span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Ajouter un contact\n" +
    "			</button>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"thumbnail registration-contact\" ng-repeat=\"(key, contact) in ctrl.registration.contacts\">\n" +
    "		  <button type=\"button\" class=\"btn btn-danger registration-contact__remove\" ng-click=\"ctrl.removeContact(key)\">\n" +
    "				<span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Supprimer ce contact\n" +
    "			</button>\n" +
    "\n" +
    "		  <div class=\"row\">\n" +
    "		    <div class=\"col-xs-6\">\n" +
    "		      <div class=\"form-group\" show-errors>\n" +
    "		        <label for=\"registerFormContatcts{{key}}Label\">Label</label>\n" +
    "		        <input type=\"text\" class=\"form-control\" id=\"registerFormContatcts{{key}}Label\" name=\"registerFormContatcts{{key}}Label\" ng-model=\"contact.label\" required>\n" +
    "		      </div>\n" +
    "		    </div>\n" +
    "		  </div>\n" +
    "\n" +
    "		  <div class=\"row\">\n" +
    "		    <div class=\"col-xs-6\">\n" +
    "		      <div class=\"form-group\" show-errors>\n" +
    "		        <label for=\"registerFormContatcts{{key}}Firstname\">Prénom</label>\n" +
    "		        <input type=\"text\" class=\"form-control\" id=\"registerFormContatcts{{key}}Firstname\" name=\"registerFormContatcts{{key}}Firstname\" ng-model=\"contact.firstname\" required>\n" +
    "		      </div>\n" +
    "		    </div>\n" +
    "		    <div class=\"col-xs-6\">\n" +
    "		      <div class=\"form-group\" show-errors>\n" +
    "		        <label for=\"registerFormContatcts{{key}}Lastname\">Nom</label>\n" +
    "		        <input type=\"text\" class=\"form-control\" id=\"registerFormContatcts{{key}}Lastname\" name=\"registerFormContatcts{{key}}Lastname\" ng-model=\"contact.lastname\" required>\n" +
    "		      </div>\n" +
    "		    </div>\n" +
    "		  </div>\n" +
    "\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col-xs-6\">\n" +
    "					<div class=\"form-group\" show-errors>\n" +
    "				    <label for=\"registerFormContatcts{{key}}Email\">Email</label>\n" +
    "						<input type=\"text\" class=\"form-control\" id=\"registerFormContatcts{{key}}Email\" name=\"registerFormContatcts{{key}}Email\" ng-model=\"contact.email\">\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"col-xs-6\">\n" +
    "					<div class=\"form-group\" show-errors>\n" +
    "				    <label for=\"registerFormContatcts{{key}}Phone\">Téléphone</label>\n" +
    "						<input type=\"text\" class=\"form-control\" id=\"registerFormContatcts{{key}}Phone\" name=\"registerFormContatcts{{key}}Phone\" ng-model=\"contact.phone\">\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</fieldset>\n" +
    "\n" +
    "	<fieldset>\n" +
    "		<legend>Paiement</legend>\n" +
    "		<div class=\"row\">\n" +
    "  		<div class=\"col-xs-6\">\n" +
    "				<div class=\"form-group\" show-errors>\n" +
    "			    <label for=\"registerFormFirstname\">Prénom (si différent)</label>\n" +
    "					<input type=\"text\" class=\"form-control\" id=\"registerFormPaymentFirstname\" name=\"registerFormPaymentFirstname\" ng-model=\"ctrl.registration.payment.firstname\">\n" +
    "				</div>\n" +
    "			</div>\n" +
    "  		<div class=\"col-xs-6\">\n" +
    "				<div class=\"form-group\" show-errors>\n" +
    "			    <label for=\"registerFormFirstname\">Nom (si différent)</label>\n" +
    "					<input type=\"text\" class=\"form-control\" id=\"registerFormPaymentLastname\" name=\"registerFormPaymentLastname\" ng-model=\"ctrl.registration.payment.lastname\">\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "  		<div class=\"col-xs-6\">\n" +
    "				<div class=\"form-group\" show-errors>\n" +
    "			    <label for=\"registerFormFirstname\">Moyen de paiement</label>\n" +
    "					<select class=\"form-control\" id=\"registerFormPaymentMethod\" name=\"registerFormPaymentMethod\" ng-model=\"ctrl.registration.payment.method\" required>\n" +
    "						<option></option>\n" +
    "						<option value=\"check\">Chèque</option>\n" +
    "						<option value=\"cash\">Liquide</option>\n" +
    "					</select>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "  		<div class=\"col-xs-6\">\n" +
    "				<div class=\"form-group\" show-errors>\n" +
    "			    <label for=\"registerFormFirstname\">Avantage</label>\n" +
    "					<select class=\"form-control\" id=\"registerFormPaymentAdvantage\" name=\"registerFormPaymentAdvantage\" ng-model=\"ctrl.registration.payment.advantage\">\n" +
    "						<option></option>\n" +
    "						<option value=\"pass92\">Pass 92</option>\n" +
    "						<option value=\"passsport\">Pass'sport Courbevoie Puteaux</option>\n" +
    "						<option value=\"courbevoie\">Inscrit dans d'autres clubs à Courbevoie</option>\n" +
    "						<option value=\"family\">Plusieurs membre d'une même famille au club</option>\n" +
    "					</select>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</fieldset>\n" +
    "	<button type=\"submit\" class=\"btn btn-primary\">{{::ctrl.labels.submit}}</button>\n" +
    "	<a href=\"#/registrations\" class=\"btn btn-warning\" ng-if=\"ctrl.registration.id\">Retour</a>\n" +
    "</form>\n" +
    "");
}]);

angular.module("js/directives/registration-list/registration-list.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/directives/registration-list/registration-list.html",
    "<div class=\"registration-list\">\n" +
    "  <formula-datasource formulas=\"ctrl.formulas\" categories=\"ctrl.categories\"></formula-datasource>\n" +
    "\n" +
    "  <table class=\"table table-striped table-hover\">\n" +
    "    <thead>\n" +
    "      <tr>\n" +
    "        <th>\n" +
    "          <label for=\"categoryFilter\">Catégorie</label>\n" +
    "      		<select class=\"form-control\" id=\"categoryFilter\" name=\"categoryFilter\" ng-model=\"ctrl.categoryFilter\">\n" +
    "            <option></option>\n" +
    "            <option value=\"young\">Jeune</option>\n" +
    "            <option value=\"adult\">Adulte</option>\n" +
    "          </select>\n" +
    "        </th>\n" +
    "        <th>\n" +
    "          <label for=\"formulaFilter\">Formule</label>\n" +
    "      		<select class=\"form-control\" id=\"formulaFilter\" name=\"formulaFilter\" ng-model=\"ctrl.formulaFilter\">\n" +
    "            <option></option>\n" +
    "            <option ng-repeat=\"formula in ctrl.formulas\" value=\"{{::formula.id}}\">{{::formula.id}}</option>\n" +
    "          </select>\n" +
    "        </th>\n" +
    "        <th>\n" +
    "          <label for=\"firstnameFilter\">Prénom</label>\n" +
    "          <input class=\"form-control\" id=\"firstnameFilter\" name=\"firstnameFilter\" ng-model=\"ctrl.firstnameFilter\" />\n" +
    "        </th>\n" +
    "        <th>\n" +
    "          <label for=\"lastnameFilter\">Nom</label>\n" +
    "          <input class=\"form-control\" id=\"lastnameFilter\" name=\"lastnameFilter\" ng-model=\"ctrl.lastnameFilter\" />\n" +
    "        </th>\n" +
    "        <th>Actions</th>\n" +
    "      </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "      <tr ng-repeat=\"registration in ctrl.registrations\n" +
    "        | filter:{category:ctrl.categoryFilter, formula:ctrl.formulaFilter, firstname:ctrl.firstnameFilter, lastname:ctrl.lastnameFilter}\n" +
    "        | limitTo:ctrl.limit:ctrl.current*ctrl.limit track by registration.id\"\n" +
    "        ng-class=\"{danger: registration.offline}\"\n" +
    "      >\n" +
    "        <td>{{::ctrl.categories[registration.category].label}}</td>\n" +
    "        <td title=\"{{::ctrl.getFormulaLabel(registration.formula)}}\">{{::registration.formula}}</td>\n" +
    "        <td>{{::registration.firstname}}</td>\n" +
    "        <td>{{::registration.lastname}}</td>\n" +
    "        <td>\n" +
    "          <div class=\"btn-group actions\">\n" +
    "            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "              Action <span class=\"caret\"></span>\n" +
    "            </button>\n" +
    "            <ul class=\"dropdown-menu\">\n" +
    "              <li><a href=\"#/registration/{{::registration.id}}\">Modifier</a></li>\n" +
    "              <li><a ng-click=\"ctrl.remove(registration)\">Supprimer</a></li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "        </td>\n" +
    "      </tr>\n" +
    "    </tbody>\n" +
    "  </table>\n" +
    "\n" +
    "  <pager current=\"ctrl.current\" total=\"ctrl.registrations.length\" limit=\"ctrl.limit\"></pager>\n" +
    "</div>\n" +
    "");
}]);
