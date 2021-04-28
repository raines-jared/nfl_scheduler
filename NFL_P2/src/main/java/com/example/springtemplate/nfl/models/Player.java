package com.example.springtemplate.nfl.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
@Table(name="player")
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String email;
    private Date dateOfBirth = new Date();
    @Enumerated(EnumType.STRING)
    private NFLTeams.Teams team;
    private String position;
    private Integer jerseyNumber;

//    @ManyToMany
//    @JoinTable(
//            name = "starting_players",
//            joinColumns = @JoinColumn(name = "player_id_id"),
//            inverseJoinColumns = @JoinColumn(name = "game_id_id"))
//    private List<Game> schedule;

    @OneToMany (mappedBy="player")
    private List<Game> schedule;

    @ManyToOne
    @JsonIgnore
    private Game game;

    public List<Game> getSchedule() {
        return schedule;
    }

    public void setSchedule(List<Game> schedule) {
        this.schedule = schedule;
    }

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public Date getDateOfBirth() { return dateOfBirth; }
    public void setDateOfBirth(Date dateOfBirth) { this.dateOfBirth = dateOfBirth; }
    public NFLTeams.Teams getTeam() { return team; }
    public void setTeam(NFLTeams.Teams team) { this.team = team; }
    public String getPosition() { return position; }
    public void setPosition(String position) { this.position = position; }
    public Integer getJerseyNumber() { return jerseyNumber; }
    public void setJerseyNumber(Integer jerseyNumber) { this.jerseyNumber = jerseyNumber; }

    public Player(String first_name, String last_name, String username, String password, String email, Date dob, NFLTeams.Teams team, String pos, Integer jers) {
        this.firstName = first_name;
        this.lastName = last_name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.dateOfBirth = dob;
        this.team = team;
        this.position = pos;
        this.jerseyNumber = jers;
    }

    public Player() {}
}
