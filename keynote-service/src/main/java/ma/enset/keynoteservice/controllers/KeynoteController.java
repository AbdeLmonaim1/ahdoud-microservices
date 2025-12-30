package ma.enset.keynoteservice.controllers;

import ma.enset.keynoteservice.dtos.KeynoteDTO;
import ma.enset.keynoteservice.service.KeynoteService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/keynotes")
@AllArgsConstructor
@CrossOrigin("*")
public class KeynoteController {
    private KeynoteService keynoteService;

    @GetMapping
    public List<KeynoteDTO> getAllKeynotes() {
        return keynoteService.getAllKeynotes();
    }

    @GetMapping("/{id}")
    public KeynoteDTO getKeynote(@PathVariable Long id) {
        return keynoteService.getKeynote(id);
    }

    @PostMapping
    public KeynoteDTO saveKeynote(@RequestBody KeynoteDTO keynoteDTO) {
        return keynoteService.saveKeynote(keynoteDTO);
    }

    @PutMapping("/{id}")
    public KeynoteDTO updateKeynote(@PathVariable Long id, @RequestBody KeynoteDTO keynoteDTO) {
        keynoteDTO.setId(id);
        return keynoteService.updateKeynote(keynoteDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteKeynote(@PathVariable Long id) {
        keynoteService.deleteKeynote(id);
    }
}
