package ma.enset.keynoteservice.mappers;

import ma.enset.keynoteservice.dtos.KeynoteDTO;
import ma.enset.keynoteservice.entities.Keynote;
import org.springframework.stereotype.Service;
import org.springframework.beans.BeanUtils;

@Service
public class KeynoteMapper {
    public KeynoteDTO fromKeynote(Keynote keynote) {
        KeynoteDTO keynoteDTO = new KeynoteDTO();
        BeanUtils.copyProperties(keynote, keynoteDTO);
        return keynoteDTO;
    }

    public Keynote fromKeynoteDTO(KeynoteDTO keynoteDTO) {
        Keynote keynote = new Keynote();
        BeanUtils.copyProperties(keynoteDTO, keynote);
        return keynote;
    }
}
