package ma.enset.conferenceservice.mappers;

import ma.enset.conferenceservice.dtos.ConferenceDTO;
import ma.enset.conferenceservice.entities.Conference;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class ConferenceMapper {
    public ConferenceDTO fromConference(Conference conference) {
        ConferenceDTO conferenceDTO = new ConferenceDTO();
        BeanUtils.copyProperties(conference, conferenceDTO);
        return conferenceDTO;
    }

    public Conference fromConferenceDTO(ConferenceDTO conferenceDTO) {
        Conference conference = new Conference();
        BeanUtils.copyProperties(conferenceDTO, conference);
        return conference;
    }
}
