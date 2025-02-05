package com.mock_api.service;

import com.mock_api.entity.HeroEntity;
import com.mock_api.repo.HeroRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class HeroService {
	protected final HeroRepository repository;

	protected HeroService(HeroRepository repository) {
		this.repository = repository;
	}

	public HeroEntity addEntity(HeroEntity entity) {
		return repository.save(entity);
	}

	public ResponseEntity<String> deleteEntity(Long id) {
		repository.deleteById(id);

		return new ResponseEntity<>("Entity has been deleted!", HttpStatus.OK);
	}

	public List<HeroEntity> findAllEntities() {
		List<HeroEntity> entities = new ArrayList<>();
		repository.findAll().forEach(entities::add);
		return entities;
	}

	public HeroEntity findEntityById(Long id) {
		Optional<HeroEntity> entity = repository.findById(id);
		return entity.orElse(null);
	}

	public ResponseEntity<HeroEntity> updateEntity(HeroEntity entity) {
		HeroEntity entityData = this.findEntityById(entity.getId());

		if (entityData != null) {
			this.setEntity(entityData, entity);
			return new ResponseEntity<>(this.repository.save(entityData), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	public void setEntity(HeroEntity entity1, HeroEntity entity2) {
		entity1.copy(entity2);
	}
}
