package ma.enset.conferenceservice.service;

import ma.enset.conferenceservice.dtos.ConferenceDTO;
import ma.enset.conferenceservice.entities.Conference;
import ma.enset.conferenceservice.mappers.ConferenceMapper;
import ma.enset.conferenceservice.repositories.ConferenceRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@AllArgsConstructor
public class ConferenceServiceImpl implements ConferenceService {
    private ConferenceRepository conferenceRepository;
    private ConferenceMapper conferenceMapper;

    @Override
    public ConferenceDTO saveConference(ConferenceDTO conferenceDTO) {
        Conference conference = conferenceMapper.fromConferenceDTO(conferenceDTO);
        Conference savedConference = conferenceRepository.save(conference);
        return conferenceMapper.fromConference(savedConference);
    }

    @Override
    public ConferenceDTO updateConference(ConferenceDTO conferenceDTO) {
        Conference conference = conferenceMapper.fromConferenceDTO(conferenceDTO);
        Conference savedConference = conferenceRepository.save(conference);
        return conferenceMapper.fromConference(savedConference);
    }

    @Override
    public ConferenceDTO getConference(Long id) {
        Conference conference = conferenceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Conference not found"));
        return conferenceMapper.fromConference(conference);
    }

    @Override
    public List<ConferenceDTO> getAllConferences() {
        return conferenceRepository.findAll().stream().map(conferenceMapper::fromConference)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteConference(Long id) {
        conferenceRepository.deleteById(id);
    }
}
