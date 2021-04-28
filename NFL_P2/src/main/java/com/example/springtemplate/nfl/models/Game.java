package com.example.springtemplate.nfl.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="game")
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer gameId;
    private Date gameDate = new Date();
    private Time gameTime;
    @Enumerated(EnumType.STRING)
    private NFLTeams.Teams opponent;
    private Integer injuredPlayers;

//    @ManyToMany (mappedBy = "schedule")
//    private List<Player> lineup;

    @OneToMany (mappedBy="game")
    @JsonIgnore
    private List<Player> lineup;

    @ManyToOne
    @JsonIgnore
    private Player player;

    public List<Player> getLineup() {
        return lineup;
    }

    public void setLineup(List<Player> lineup) {
        this.lineup = lineup;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    public Integer getId() { return gameId; }

    public void setId(Integer gameId) { this.gameId = gameId; }

    public Date getGameDate() {
        return gameDate;
    }

    public void setGameDate(Date gameDate) {
        this.gameDate = gameDate;
    }

    public Time getGameTime() {
        return gameTime;
    }

    public void setGameTime(Time gameTime) {
        this.gameTime = gameTime;
    }

    public NFLTeams.Teams getOpponent() { return opponent; }

    public void setOpponent(NFLTeams.Teams opponent) {
        this.opponent = opponent;
    }

    public Integer getInjuredPlayers() { return injuredPlayers;}

    public void setInjuredPlayers(Integer injuredPlayers) { this.injuredPlayers = injuredPlayers; }
}
