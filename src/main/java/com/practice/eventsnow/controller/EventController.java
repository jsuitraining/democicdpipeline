package com.practice.eventsnow.controller;


import com.practice.eventsnow.model.Event;
import com.practice.eventsnow.service.EventsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/eventsnow")
public class EventController {

    @Autowired
    private  EventsService eventsService;

    @PostMapping("/newevent")
     public Event addEvent(@RequestBody Event event){
         return  this.eventsService.addNewEvent(event);
     }

     @GetMapping("/all")
     public List<Event> getAll(){
        return this.eventsService.getAllEvents();
     }

     @DeleteMapping("/delete/{id}")
     public String deleteEvent(@PathVariable Integer id){

        return  this.eventsService.deleteEvent(id);

     }

     @GetMapping("/{myid}")
     public Optional<Event> getSingleEvent(@PathVariable Integer myid){
        return  this.eventsService.getSingleEvent(myid);

     }

     @PutMapping("/update/{id}")
     public Event  updateEventDetails(@PathVariable Integer id,@RequestBody Event latestEvent){

        return  this.eventsService.updateEventDetails(id,latestEvent);

     }

     @PatchMapping("/latest/{id}")
     public Event updateEventInfo(@PathVariable Integer id,@RequestParam String eventDetails){
        return this.eventsService.updateEventInfo(id,eventDetails);
     }


}
