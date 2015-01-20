angular.module('MyApp', ['ionic'])


.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('eventmenu', {
      url: "/event",
      abstract: true,
      templateUrl: "templates/event-menu.html"
    })
    .state('eventmenu.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html"
        }
      }
    })
    .state('eventmenu.perfil', {
      url: "/perfil",
      views: {
        'menuContent' :{
          templateUrl: "templates/perfil.html"
        }
      }
    })
    .state('eventmenu.recados-escola', {
      url: "/recados-escola",
      views: {
        'menuContent' :{
          templateUrl: "templates/recados-escola.html"
        }
      }
    })
    .state('eventmenu.fotos', {
      url: "/fotos",
      views: {
        'menuContent' :{
          templateUrl: "templates/fotos.html"
        }
      }
    })
    .state('eventmenu.noticias', {
      url: "/noticias",
      views: {
        'menuContent' :{
          templateUrl: "templates/noticias.html"
        }
      }
    })
  
  $urlRouterProvider.otherwise("/event/home");
})

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate, $ionicPopover) {
	
////////// POPOVER ///////////////	
  $ionicPopover.fromTemplateUrl('templates/calendario.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.calendario = popover;
  });
  
  $ionicPopover.fromTemplateUrl('templates/recado.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.recado = popover;
  });

  $ionicPopover.fromTemplateUrl('templates/user-filho.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.UserFilho = popover;
  });
  
  $scope.scrap = [
    {
      id: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	  image:[{
		  	thumb:'img/filho-01.jpg'
		  }],
    },
    {
      id: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];
  
  $scope.userfilho = [
    {
      id: 'Nome do primero filho nome nome nome',
	  images:[{
		  	thumb:'img/filho-01.jpg'
		  }],
    },
    {
      id: 'Nome do segundo filho',
	  images:[{
		  	thumb:'img/filho-02.jpg'
		  }],
    }
  ];
  
////////// FINAL DO POPOVER ///////////////	


////////// ACORDION RECADOS ESCOLA ///////////////	


  $scope.groups = [
    {
      name: "Medicamento",
	  url: "templates/recados-medicamentos.html"
    },
    {
      name: "Disposição",
	  url: "templates/recados-disposicao.html"
    },
    {
      name: "Recado",
	  url: "templates/recados-recado.html"
    }
	
  ];
  
	$scope.group = $scope.groups[0];
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };



  
////////// FINAL ACORDION RECADOS ESCOLA ///////////////	


  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

  $scope.demo = 'ios';
  $scope.setPlatform = function(p) {
    document.body.classList.remove('platform-ios');
    document.body.classList.remove('platform-android');
    document.body.classList.add('platform-' + p);
    $scope.demo = p;
  }
	
  $scope.attendees = [
    { firstname: 'Nicolas', lastname: 'Cage' },
    { firstname: 'Jean-Claude', lastname: 'Van Damme' },
    { firstname: 'Keanu', lastname: 'Reeves' },
    { firstname: 'Steven', lastname: 'Seagal' }
  ];
  
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('CheckinCtrl', function($scope, $ionicPopover) {
  $scope.showForm = true;
  
  $scope.shirtSizes = [
    { text: 'Large', value: 'L' },
    { text: 'Medium', value: 'M' },
    { text: 'Small', value: 'S' }
  ];
  
  $scope.attendee = {};
  $scope.submit = function() {
    if(!$scope.attendee.firstname) {
      alert('Info required');
      return;
    }
    $scope.showForm = false;
    $scope.attendees.push($scope.attendee);
  };
  
  
})




.controller('AttendeesCtrl', function($scope) {
  
  $scope.activity = [];
  $scope.arrivedChange = function(attendee) {
    var msg = attendee.firstname + ' ' + attendee.lastname;
    msg += (!attendee.arrived ? ' has arrived, ' : ' just left, '); 
    msg += new Date().getMilliseconds();
    $scope.activity.push(msg);
    if($scope.activity.length > 3) {
      $scope.activity.splice(0, 1);
    }
  };
  
  
});





