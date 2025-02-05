package com.mock_api.repo;

import com.mock_api.entity.HeroEntity;
import org.springframework.data.repository.CrudRepository;

public interface HeroRepository extends CrudRepository<HeroEntity, Long> {
}
