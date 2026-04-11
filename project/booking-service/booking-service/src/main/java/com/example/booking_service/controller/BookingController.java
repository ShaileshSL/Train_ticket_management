package com.example.booking_service.controller;

import com.example.booking_service.model.Booking;
import com.example.booking_service.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/booking")
public class BookingController {

    @Autowired
    private BookingRepository repo;

    // Book a ticket
    @PostMapping("/book")
    public ResponseEntity<Booking> book(@RequestBody Booking booking) {
        booking.setStatus("BOOKED");
        booking.setBookingDate(new Date().toString());
        Booking saved = repo.save(booking);
        return ResponseEntity.ok(saved);
    }

    // Get bookings by user ID
    @GetMapping("/user/{userId}")
    public List<Booking> getUserBookings(@PathVariable Long userId) {
        return repo.findByUserId(userId);
    }

    // Cancel a ticket by booking ID
    @DeleteMapping("/cancel/{id}")
    public ResponseEntity<String> cancel(@PathVariable Long id) {
        Optional<Booking> opt = repo.findById(id);
        if (opt.isPresent()) {
            Booking b = opt.get();
            b.setStatus("CANCELLED");
            repo.save(b);
            return ResponseEntity.ok("Ticket cancelled");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Booking not found");
    }
}
