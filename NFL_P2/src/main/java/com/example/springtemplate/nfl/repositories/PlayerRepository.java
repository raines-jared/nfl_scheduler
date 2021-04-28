package com.example.springtemplate.nfl.repositories;

import com.example.springtemplate.nfl.models.Player;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PlayerRepository
    extends CrudRepository<Player, Integer> {
    @Query(value = "SELECT * FROM player",
            nativeQuery = true)
    public List<Player> findAllPlayers();
    @Query(value = "SELECT * FROM player WHERE id=:playerId",
            nativeQuery = true)
    public Player findPlayerById(@Param("playerId") Integer id);

    @Query(value = "select * from player where game_game_id=:pid", nativeQuery = true)
    public List<Player> findPlayerForGame(@Param("pid") Integer pid);
    List<Player> findByIdContaining(Integer id);
}
