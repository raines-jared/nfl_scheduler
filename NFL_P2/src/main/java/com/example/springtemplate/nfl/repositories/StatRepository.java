package com.example.springtemplate.nfl.repositories;

import com.example.springtemplate.nfl.models.Game;
import com.example.springtemplate.nfl.models.Player;
import com.example.springtemplate.nfl.models.Stat;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StatRepository
        extends CrudRepository<Stat, Integer> {
    @Query(value = "SELECT * FROM stats",
            nativeQuery = true)
    public List<Stat> findAllStats();
    @Query(value = "SELECT * FROM stats WHERE id=:playId",
            nativeQuery = true)
    public Stat findStatById(@Param("playId") Integer id);
    @Query(value = "SELECT * FROM stats WHERE play_to_game=:gameId", nativeQuery = true)
    public List<Stat> findStatsForGame(@Param("gameId") Integer gameId);
}


