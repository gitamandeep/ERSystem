package com.ersproject.ers.servics;

import com.ersproject.ers.dto.ReimbursementDTO;
import com.ersproject.ers.model.Expense;
import com.ersproject.ers.model.Reimbursement;
import com.ersproject.ers.model.User;
import com.ersproject.ers.repository.ExpenseRepository;
import com.ersproject.ers.repository.ReimbursementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ReimbuursementService {
    @Autowired
    private ReimbursementRepository reimbursementRepository;

    @Autowired
    private ExpenseRepository expenseRepository;
    public List<Reimbursement> getReimbursementsByEmployee(User employee) {
        return reimbursementRepository.findByEmployeeId(employee.getId());
    }
    public Reimbursement saveReimbursement(ReimbursementDTO reimbursementDTO, User employee) {
        Expense expense = new Expense();
        expense.setItemName(reimbursementDTO.getItemName());
        expense.setAmount(reimbursementDTO.getAmount());
        expense.setMerchantName(reimbursementDTO.getMerchantName());
        expense.setCategory(reimbursementDTO.getCategory());
        expense.setDescription(reimbursementDTO.getDescription());
        expense.setPdfUrl(reimbursementDTO.getPdfUrl());
        expense.setExpenseDate(reimbursementDTO.getExpenseDate());

        Expense savedExpense = expenseRepository.save(expense);

        Reimbursement reimbursement = new Reimbursement();
        reimbursement.setExpense(savedExpense);
        reimbursement.setEmployee(employee);
        reimbursement.setStatus("PENDING");
        reimbursement.setDate(LocalDate.now());

        return reimbursementRepository.save(reimbursement);
    }

    public List<Reimbursement> getAllReimbursement(){
        return reimbursementRepository.findAll();
    }
}
