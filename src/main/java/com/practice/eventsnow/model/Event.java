package com.practice.eventsnow.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;


import java.sql.Date;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Event {


    @Id
    private Integer eventsId;

    private String eventName;
    private String eventDetails;

    @JsonFormat
            (shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private Date eventDate;




}
