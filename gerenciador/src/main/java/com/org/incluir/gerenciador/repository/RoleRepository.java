package com.org.incluir.gerenciador.repository;

import com.org.incluir.gerenciador.model.ERole;
import com.org.incluir.gerenciador.model.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RoleRepository extends MongoRepository<Role, String> {

    Optional<Role> findByName(ERole name);
}
