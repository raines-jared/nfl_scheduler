package com.example.springtemplate.nfl.daos;

import com.example.springtemplate.nfl.models.Game;
import com.example.springtemplate.nfl.models.Player;
import com.example.springtemplate.nfl.models.Stat;
import com.example.springtemplate.nfl.repositories.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class GameDao {
    @Autowired
    GameRepository gameRepository;

    @GetMapping("/api/players/{gmid}/games")
    public List<Game>findGameForPlayer(@PathVariable("gmid") Integer gmid) {
        return gameRepository.findGameForPlayer(gmid);
    }

    @PostMapping("/api/games")
    public Game createGame(@RequestBody Game game) {
        return gameRepository.save(game);
    }

    @GetMapping("/api/games")
    public List<Game> findAllGames() {
        return (List<Game>) gameRepository.findAll();
    }

    @GetMapping("/api/games/{gameId}")
    public Game findGameById(
            @PathVariable("gameId") Integer id) {
        return gameRepository.findById(id).get();
    }

    @PutMapping("/api/games/{gameId}")
    public Game updateGame(
            @PathVariable("gameId") Integer id,
            @RequestBody() Game newGame) {
        Game game = this.findGameById(id);
        game.setGameDate(newGame.getGameDate());
        game.setGameTime(newGame.getGameTime());
        game.setOpponent(newGame.getOpponent());
        game.setInjuredPlayers(newGame.getInjuredPlayers());
        return gameRepository.save(game);
    }

    @DeleteMapping("/api/games/{gameId}")
    public void deleteGame(
            @PathVariable("gameId") Integer id) {
        gameRepository.deleteById(id);
    }
}