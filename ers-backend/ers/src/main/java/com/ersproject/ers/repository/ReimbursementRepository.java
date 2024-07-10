package com.ersproject.ers.repository;

import com.ersproject.ers.model.Reimbursement;
import com.ersproject.ers.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ReimbursementRepository extends JpaRepository<Reimbursement,String> {

    List<Reimbursement> findByEmployeeId(String employeeId);


}
