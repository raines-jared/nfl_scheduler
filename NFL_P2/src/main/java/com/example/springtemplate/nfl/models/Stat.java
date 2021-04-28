package com.example.springtemplate.nfl.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="stats")
public class Stat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer playId;
    private Integer playToGame;
    private Integer playNumber;
    private Integer runningYards;
    private Boolean touchdown;
    private Integer flags;

    public Integer getId() {
        return playId;
    }

    public void setId(Integer playId) {
        this.playId = playId;
    }

    public Integer getPlayToGame() {
        return playToGame;
    }

    public void setPlayToGame(Integer playToGame) {
        this.playToGame = playToGame;
    }

    public Integer getPlayNumber() {
        return playNumber;
    }

    public void setPlayNumber(Integer playNumber) {
        this.playNumber = playNumber;
    }

    public Integer getRunningYards() { return runningYards; }

    public void setRunningYards(Integer runningYards) {
        this.runningYards = runningYards;
    }

    public Boolean getTouchdown() { return touchdown;}

    public void setTouchdown(Boolean touchdown) { this.touchdown = touchdown; }

    public Integer getFlags() { return flags; }

    public void setFlags(Integer flags) { this.flags = flags; }
}
