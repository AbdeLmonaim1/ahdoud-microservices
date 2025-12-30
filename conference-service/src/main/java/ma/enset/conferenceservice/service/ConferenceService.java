package ma.enset.conferenceservice.service;

import ma.enset.conferenceservice.dtos.ConferenceDTO;
import java.util.List;

public interface ConferenceService {
    ConferenceDTO saveConference(ConferenceDTO conferenceDTO);

    ConferenceDTO updateConference(ConferenceDTO conferenceDTO);

    ConferenceDTO getConference(Long id);

    List<ConferenceDTO> getAllConferences();

    void deleteConference(Long id);
}
