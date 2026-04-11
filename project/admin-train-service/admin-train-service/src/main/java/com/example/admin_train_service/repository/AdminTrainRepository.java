package com.example.admin_train_service.repository;

import com.example.admin_train_service.model.AdminTrain;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminTrainRepository extends JpaRepository<AdminTrain, String> {
	AdminTrain findByTrainNumber(String trainNumber);
}