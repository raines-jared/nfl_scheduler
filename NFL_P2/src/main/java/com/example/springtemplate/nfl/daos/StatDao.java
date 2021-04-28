package com.example.springtemplate.nfl.daos;

import com.example.springtemplate.nfl.models.Game;
import com.example.springtemplate.nfl.models.Stat;
import com.example.springtemplate.nfl.repositories.StatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class StatDao {
    @Autowired
    StatRepository statRepository;

    @PostMapping("/api/stats")
    public Stat createStat(@RequestBody Stat stat) {
        return statRepository.save(stat);
    }

    @GetMapping("/api/stats")
    public List<Stat> findAllStats() {
        return (List<Stat>) statRepository.findAll();
    }

    @GetMapping("/api/stats/{playId}")
    public Stat findStatById(
            @PathVariable("playId") Integer id) {
        return statRepository.findById(id).get();
    }

    @GetMapping("/api/games/{gameId}/stats")
    public List<Stat> findStatsForGame(
            @PathVariable("gameId") Integer id) {
        return statRepository.findStatsForGame(id);
    }

    @PutMapping("/api/stats/{playId}")
    public Stat updateStat(
            @PathVariable("playId") Integer id,
            @RequestBody() Stat newStat) {
        Stat stat = this.findStatById(id);
        stat.setPlayNumber(newStat.getPlayNumber());
        stat.setRunningYards(newStat.getRunningYards());
        stat.setTouchdown(newStat.getTouchdown());
        stat.setFlags(newStat.getFlags());
        return statRepository.save(stat);
    }

    @DeleteMapping("/api/stats/{playId}")
    public void deleteStat(
            @PathVariable("playId") Integer id) {
        statRepository.deleteById(id);
    }
}