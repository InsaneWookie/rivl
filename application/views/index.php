<!doctype html>
<html class="no-js">
  <head>
    <meta charset="utf-8">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    <!-- build:css(.) styles/vendor.css -->
    <!-- bower:css -->
    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css" />
    <!-- endbower -->
    <!-- endbuild -->
    <!-- build:css(.tmp) styles/main.css -->
    <link rel="stylesheet" href="app/styles/main.css">
    <!-- endbuild -->
  </head>

  <body ng-app="rivlApp">
    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Home</a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><a href="#/competition/1">Leaderboard</a></li>
            <li><a href="#/competition/1/game">Enter result</a></li>
            <li><a href="#/competition/1/tournament">Tournament</a></li>
            <!--<li><a href="#">Compare rivls</a></li>-->
            <li><a href="#/competition_graph/1">Graph</a></li>
            <li id="notifications" class="hide"><a href="#/competitor_home/<%=id%>">Notifications <span class="badge">4</span></a></li>
            <li id="login" class="hide"><a>Login</a></li>
            <li id="logout" class="hide"><a>Logout</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>
    <div class="container" style="padding-top: 70px;">
      <div ng-view></div>
    </div>

    <!-- build:js(.) scripts/oldieshim.js -->
    <!--[if lt IE 9]>
    <script src="bower_components/es5-shim/es5-shim.js"></script>
    <script src="bower_components/json3/lib/json3.js"></script>
    <![endif]-->
    <!-- endbuild -->

    <!-- build:js(.) scripts/vendor.js -->
    <!-- bower:js -->
    <script src="bower_components/jquery/dist/jquery.js"></script>
    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/angular-route/angular-route.js"></script>
    <script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
    <script src="bower_components/angular-bootstrap/ui-bootstrap.js"></script>
    <script src="bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>
    <!-- endbower -->
    <!-- endbuild -->

        <!-- build:js({.tmp,app}) scripts/scripts.js -->
        <script src="app/scripts/app.js"></script>
        <script src="app/scripts/controllers/main.js"></script>
        <script src="app/scripts/controllers/competition.js"></script>
        <script src="app/scripts/controllers/competitiondetail.js"></script>
        <script src="app/scripts/controllers/game.js"></script>
        <script src="app/scripts/controllers/game-create.js"></script>
        <!-- endbuild -->
</body>
</html>
