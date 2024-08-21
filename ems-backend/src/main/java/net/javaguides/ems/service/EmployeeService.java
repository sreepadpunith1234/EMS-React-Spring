package net.javaguides.ems.service;

import net.javaguides.ems.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto getEmployeeById(long employeeId );
    List<EmployeeDto> getAllEmployees();
    EmployeeDto updateEmployee(Long employeeid ,EmployeeDto updateEmployee );

    void deleteEmployee(Long employeeId);


}
