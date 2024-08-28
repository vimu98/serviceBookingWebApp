package com.vimuSystems.ServiceBookingSystem.services.client;

import com.vimuSystems.ServiceBookingSystem.dto.AdDTO;
import com.vimuSystems.ServiceBookingSystem.dto.AdDetailsForClientDTO;
import com.vimuSystems.ServiceBookingSystem.dto.ReservationDTO;
import com.vimuSystems.ServiceBookingSystem.dto.ReviewDTO;

import java.util.List;

public interface ClientService {

    List<AdDTO> getAllAds();

    List<AdDTO> searchAdByName(String name);

    boolean bookService(ReservationDTO reservationDTO);

    AdDetailsForClientDTO getAdDetailsByAdId(Long adId);

    List<ReservationDTO> getAllBookingsByUserId(Long userId);

    Boolean giveReview(ReviewDTO reviewDTO);
}
