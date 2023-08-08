package com.practice.eventsnow.repository;

import com.practice.eventsnow.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventsRepository extends JpaRepository<Event,Integer> {
}
