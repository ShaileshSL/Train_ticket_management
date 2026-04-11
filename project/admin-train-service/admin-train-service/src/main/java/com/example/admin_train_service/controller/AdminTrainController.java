package com.example.admin_train_service.controller;

import com.example.admin_train_service.model.AdminTrain;
import com.example.admin_train_service.repository.AdminTrainRepository; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController @RequestMapping("/api/admin/train") public class AdminTrainController {

@Autowired
private AdminTrainRepository trainRepository;

@PostMapping("/add")
public AdminTrain addTrain(@RequestBody AdminTrain train) {
    return trainRepository.save(train);
}

@PutMapping("/update/{trainNumber}")
public AdminTrain updateTrain(@PathVariable String trainNumber, @RequestBody AdminTrain updatedTrain) {
    AdminTrain train = trainRepository.findByTrainNumber(trainNumber);
    if (train != null) {
        train.setTrainName(updatedTrain.getTrainName());
        train.setRoute(updatedTrain.getRoute());
        train.setOrigin(updatedTrain.getOrigin());
        train.setDestination(updatedTrain.getDestination());
        train.setSchedule(updatedTrain.getSchedule());
        return trainRepository.save(train);
    }
    return null;
}

@DeleteMapping("/delete/{trainNumber}")
public String deleteTrain(@PathVariable String trainNumber) {
    trainRepository.deleteById(trainNumber);
    return "Train deleted";
}

@GetMapping("/search/{trainNumber}")
public AdminTrain searchTrain(@PathVariable String trainNumber) {
    return trainRepository.findByTrainNumber(trainNumber);
}

@GetMapping("/all")
public List<AdminTrain> getAllTrains() {
    return trainRepository.findAll();
}

}