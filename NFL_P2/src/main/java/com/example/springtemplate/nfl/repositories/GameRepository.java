package com.example.springtemplate.nfl.repositories;

import com.example.springtemplate.nfl.models.Game;
import com.example.springtemplate.nfl.models.Player;
import com.example.springtemplate.nfl.models.Stat;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface GameRepository
    extends CrudRepository<Game, Integer> {
    @Query(value = "SELECT * FROM game",
            nativeQuery = true)
    public List<Game> findAllGames();
    @Query(value = "SELECT * FROM game WHERE id=:gameId",
            nativeQuery = true)
    public Game findGameById(@Param("gameId") Integer id);
    @Query(value = "select * from game where player_id=:gmid", nativeQuery = true)
    public List<Game> findGameForPlayer(@Param("gmid") Integer gmid);
}
