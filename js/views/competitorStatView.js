Vs.CompetitorStatView = Backbone.View.extend({

    template : _.template($('#playerPageTemplate').html()),
    navbarTemplate : _.template($('#navbarTemplate').html()),
	statRowTemplate : _.template($('#playerStatRowTemplate').html()),
	competitorGameRowTemplate : _.template($('#competitorGameRowTemplate').html()),
	
    initialize: function () {
        $mainPage = $("#mainContainer");
    },

    render: function() {
        var self = this;
        console.dir(this.model.toJSON());
        $("#mainContainer").html(this.navbarTemplate(this.competition.toJSON()));
        $("#mainContainer").append(this.template(this.model.toJSON()));
        $.each(this.model.attributes.stat_details.stat_array,this.renderPlayerStatRow);
        $.each(this.model.attributes.gameHistory, function(index, curGame) {
            self.renderGameHistory(self.model.attributes, curGame);
        });        
        mainGraph = $("#playerGraph").get(0).getContext("2d");
		data = {
			labels : this.model.attributes.labels,
			datasets : this.model.attributes.data
		};
        options = {'pointDot' : false };
		myNewChart = new Chart(mainGraph).Line(data,options);
        
        return this;
    },
    renderPlayerStatRow: function() {
    	$("#playerStats").append(Vs.competitorStatView.statRowTemplate(this));
    },
    renderGameHistory: function(model, game) {
        game.vsPlayer = game.loser_name !== model.playerName ? game.loser_name : game.winner_name;
        game.vsScore = game.loser_name !== model.playerName ? game.loser_score : game.winner_score;
        game.playerScore = game.loser_name !== model.playerName ? game.winner_score : game.loser_score;
        game.playerElo = game.loser_name !== model.playerName ? game.winner_elo_change : game.loser_elo_change;
        //console.dir(model);
    	$("#playerHistory").append(Vs.competitorStatView.competitorGameRowTemplate(game));
    }
});

/*
   this.collection.each(function(game) {
            if (lastGame && lastGame.get('game_id') == game.get('game_id')) {
                self._renderRow({game1: lastGame.attributes, game2: game.attributes});
            } else {
                lastGame = game;
            }
        });
        return this;
    },

    _renderRow: function(gamePair) {
        $mainPage.append(this.gamePairTemplate(gamePair));
    }
 */