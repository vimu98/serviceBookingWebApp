package com.vimuSystems.ServiceBookingSystem.services.authentication;

import com.vimuSystems.ServiceBookingSystem.dto.SignupRequestDTO;
import com.vimuSystems.ServiceBookingSystem.dto.UserDto;

public interface AuthService {

    UserDto signupClient(SignupRequestDTO signupRequestDTO);

    Boolean presentByEmail(String email);

    UserDto signupCompany(SignupRequestDTO signupRequestDTO);
}
