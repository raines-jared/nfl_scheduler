package com.example.springtemplate.nfl.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="starting_players")
public class StartingPlayers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer rosterId;
    private Integer playerId;
    private Integer gameId;


    public Integer getId() {
        return rosterId;
    }

    public void setId(Integer rosterId) {
        this.rosterId = rosterId;
    }

    public Integer getPlayerId() {
        return playerId;
    }

    public void setPlayerId(Integer playerId) {
        this.playerId = playerId;
    }

    public Integer getGameId() {
        return gameId;
    }

    public void setGameId(Integer gameId) {
        this.gameId = gameId;
    }

}
