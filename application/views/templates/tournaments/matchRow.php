<script id="tournamentMatchTemplate" type="text/template">

    <div class="matchMain">
        <% if (nick1 && rivlId1 != 0) { %>
            <div class="matchPlayer" data-id=<%=rivlId1 %>>
                <img src="img/avatars/2_<%=rivlId1%>_1.png?ver=<?=IMAGE_VERSION?>" class="matchAvatar" />
                <a href="javascript:void(0);" data-id=<%=rivlId1 %> class="playerLink matchPlayerName"><%=nick1%></a>
            </div>
        <% } else if (nick1) { %>
            <div class="matchPlayer" data-id=<%=nick1 %>>
                <img src="img/avatars/anonymous.png?ver=<?=IMAGE_VERSION?>" class="matchAvatar" />
                <span data-id=<%=nick1 %> class="matchPlayerName"><%=nick1%></a>
            </div>
        <% } else { %>
            <div class="matchPlayer">
                <img src="img/avatars/anonymous.png?ver=<?=IMAGE_VERSION?>" class="matchAvatar" />
                <span class="matchPlayerName"><em><%=prereq1%></em></span>
            </div>
        <% } %>
        <% if (nick2 && rivlId2 != 0) { %>
            <div class="matchPlayer" data-id=<%=rivlId2 %>>
                <img src="img/avatars/2_<%=rivlId2%>_1.png?ver=<?=IMAGE_VERSION?>" class="matchAvatar" />
                <a href="javascript:void(0);" data-id=<%=rivlId2 %> class="matchPlayerName playerLink"><%=nick2%></a>
            </div>
        <% } else if (nick2) { %>
            <div class="matchPlayer" data-id=<%=nick2 %>>
                <img src="img/avatars/anonymous.png?ver=<?=IMAGE_VERSION?>" class="matchAvatar" />
                <span data-id=<%=nick2 %> class="matchPlayerName"><%=nick2%></a>
            </div>
        <% } else { %>
            <div class="matchPlayer noPlayer">
                <img src="img/avatars/anonymous.png?ver=<?=IMAGE_VERSION?>" class="matchAvatar" />
                <span class="matchPlayerName"><em><%=prereq2%></em></span>
            </div>
        <% } %>
    </div>
    <div class="matchResults">
        <% if (!complete) { %>
            <a class='enterChallongeResult' data-p1=<%=rivlId1 %> data-p2=<%=rivlId2 %> data-matchid=<%=id %>>?</a>
        <% } else { %>
            <div class="matchResult matchResultP1"><% if (winner === rivlId1) { %>W<% } %></div>
            <div class="matchResult matchResultP2"><% if (winner === rivlId2) { %>W<% } %></div>
        <% } %>
    </div>
</script>