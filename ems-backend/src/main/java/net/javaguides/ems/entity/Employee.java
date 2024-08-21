package net.javaguides.ems.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName;  // Changed to follow naming conventions

    @Column(name = "last_name")
    private String lastName;  // Changed to follow naming conventions

    @Column(name = "email_id", nullable = false, unique = true)
    private String email;
    @Column(name = "gender", nullable = false)
    private String gender;  // New field
    @Column(name = "age" , nullable = false)
    private Integer age;    // New field
}
