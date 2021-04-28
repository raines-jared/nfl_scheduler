package com.example.springtemplate.nfl.daos;

import com.example.springtemplate.nfl.models.Player;
import com.example.springtemplate.nfl.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PlayerDao {
    @Autowired
    PlayerRepository playerRepository;

    @GetMapping("/api/games/{pid}/players")
    public List<Player>findPlayerForGame(@PathVariable("pid") Integer pid) {
        return playerRepository.findPlayerForGame(pid);
   }

    @PostMapping("/api/players")
    public Player createPlayer(@RequestBody Player player) {
        return playerRepository.save(player);
    }

    @GetMapping("/api/players")
    public List<Player> findAllPlayers() {
        return (List<Player>) playerRepository.findAll();
    }

    @GetMapping("/api/players/{playerId}")
    public Player findPlayerById(
            @PathVariable("playerId") Integer id) {
        return playerRepository.findById(id).get();
    }

    @PutMapping("/api/players/{playerId}")
    public Player updatePlayer(
            @PathVariable("playerId") Integer id,
            @RequestBody() Player newPlayer) {
        Player player = this.findPlayerById(id);
        player.setFirstName(newPlayer.getFirstName());
        player.setLastName(newPlayer.getLastName());
        player.setUsername(newPlayer.getUsername());
        player.setPassword(newPlayer.getPassword());
        player.setEmail(newPlayer.getEmail());
        player.setDateOfBirth(newPlayer.getDateOfBirth());
        player.setTeam(newPlayer.getTeam());
        player.setPosition(newPlayer.getPosition());
        player.setJerseyNumber(newPlayer.getJerseyNumber());
        return playerRepository.save(player);
    }

    @DeleteMapping("/api/players/{playerId}")
    public void deletePlayer(
            @PathVariable("playerId") Integer id) {
        playerRepository.deleteById(id);
    }
}