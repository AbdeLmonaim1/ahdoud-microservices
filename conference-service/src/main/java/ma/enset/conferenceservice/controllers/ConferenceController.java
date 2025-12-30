package ma.enset.conferenceservice.controllers;

import ma.enset.conferenceservice.dtos.ConferenceDTO;
import ma.enset.conferenceservice.service.ConferenceService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/conferences")
@AllArgsConstructor
public class ConferenceController {
    private ConferenceService conferenceService;

    @GetMapping
    public List<ConferenceDTO> getAllConferences() {
        return conferenceService.getAllConferences();
    }

    @GetMapping("/{id}")
    public ConferenceDTO getConference(@PathVariable Long id) {
        return conferenceService.getConference(id);
    }

    @PostMapping
    public ConferenceDTO saveConference(@RequestBody ConferenceDTO conferenceDTO) {
        return conferenceService.saveConference(conferenceDTO);
    }

    @PutMapping("/{id}")
    public ConferenceDTO updateConference(@PathVariable Long id, @RequestBody ConferenceDTO conferenceDTO) {
        conferenceDTO.setId(id);
        return conferenceService.updateConference(conferenceDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteConference(@PathVariable Long id) {
        conferenceService.deleteConference(id);
    }
}
