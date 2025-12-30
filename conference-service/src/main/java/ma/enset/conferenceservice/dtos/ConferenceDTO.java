package ma.enset.conferenceservice.dtos;

import ma.enset.conferenceservice.entities.ConferenceType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ConferenceDTO {
    private Long id;
    private String titre;
    private ConferenceType type;
    private Date date;
    private double duree;
    private int inscrit;
    private double score;
}
