package com.example.train_service.controller;

import com.example.train_service.model.Train;
import com.example.train_service.repository.TrainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/train")
public class TrainController {

    @Autowired
    private TrainRepository repo;

    // Add new train
    @PostMapping("/add")
    public Train addTrain(@RequestBody Train train) {
        return repo.save(train);
    }

    // View all trains
    @GetMapping("/all")
    public List<Train> getAllTrains() {
        return repo.findAll();
    }

    // Search by source and destination
    @GetMapping("/search")
    public List<Train> searchTrains(@RequestParam String source, @RequestParam String destination) {
        return repo.findBySourceAndDestination(source, destination);
    }
}