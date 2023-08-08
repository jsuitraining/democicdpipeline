package com.practice.eventsnow.service;

import com.practice.eventsnow.model.Event;
import com.practice.eventsnow.repository.EventsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventsService {

    @Autowired
    private EventsRepository eventsRepository;


    // add a new event

    public Event addNewEvent(Event event){
        this.eventsRepository.save(event);
        return  event;
    }


    public List<Event> getAllEvents(){
        return  this.eventsRepository.findAll();
    }


    public String deleteEvent(Integer selectedEventId){

        this.eventsRepository.deleteById(selectedEventId);
        return "deleted "+selectedEventId+ "event successfully";

    }

    public Optional<Event> getSingleEvent(Integer eventId){

        return  this.eventsRepository.findById(eventId);
    }

    public Event updateEventDetails(Integer id,Event updatedEvent){

        Event oldEvent = this.eventsRepository.findById(id).get();

        // this.eventsRepository.save(updatedEvent);
        oldEvent.setEventName(updatedEvent.getEventName());
        oldEvent.setEventDetails(updatedEvent.getEventDetails());
        oldEvent.setEventDate(updatedEvent.getEventDate());

        this.eventsRepository.save(oldEvent);
        return updatedEvent;

    }

    public Event updateEventInfo(Integer id,String eventDetails){

        Event oldEvent = this.eventsRepository.findById(id).get();

        oldEvent.setEventDetails(eventDetails);
        this.eventsRepository.save(oldEvent);
        return oldEvent;
    }


}
