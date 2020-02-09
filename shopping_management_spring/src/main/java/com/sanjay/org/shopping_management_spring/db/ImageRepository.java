package com.sanjay.org.shopping_management_spring.db;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sanjay.org.shopping_management_spring.model.ImageModel;

public interface ImageRepository extends JpaRepository<ImageModel, Long> {
	Optional<ImageModel> findByName(String name);
}