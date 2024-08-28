package com.vimuSystems.ServiceBookingSystem.services.company;

import com.vimuSystems.ServiceBookingSystem.dto.AdDTO;
import com.vimuSystems.ServiceBookingSystem.dto.ReservationDTO;

import java.io.IOException;
import java.util.List;

public interface CompanyService {

    boolean postAd(Long userId, AdDTO adDTO) throws IOException;

    List<AdDTO> getAllAds(Long userId);

    AdDTO getAdById(Long adId);

    boolean updateAd(Long adId, AdDTO adDTO) throws IOException;

    boolean deleteAd(Long adId);

    List<ReservationDTO> getAllBookings(Long companyId);

    boolean changeBookingStatus(Long bookingId, String status);
}
