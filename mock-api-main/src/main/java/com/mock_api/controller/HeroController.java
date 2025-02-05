package com.mock_api.controller;

import com.mock_api.entity.HeroEntity;
import com.mock_api.service.HeroService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/hero")
public class HeroController {
	protected HeroService service;

	protected HeroController(HeroService service) {
		this.service = service;
	}

	@GetMapping("list")
	public List<HeroEntity> getAll() {
		return service.findAllEntities();
	}

	@GetMapping("id={id}")
	@PreAuthorize("hasAuthority(@roleProperties.editor)")
	public HeroEntity getById(@PathVariable Long id) {
		return service.findEntityById(id);
	}

	@PostMapping("create")
	@PreAuthorize("hasAuthority(@roleProperties.editor)")
	public void postCreate(@RequestBody HeroEntity entity) {
		HeroEntity _entity = new HeroEntity();
		service.setEntity(_entity, entity);
		service.addEntity(_entity);
	}

	@DeleteMapping("delete/id={id}")
	@PreAuthorize("hasAuthority(@roleProperties.editor)")
	public void deleteById(@PathVariable Long id) {
		service.deleteEntity(id);
	}

	@PutMapping("update")
	@PreAuthorize("hasAuthority(@roleProperties.editor)")
	public void updateById(@RequestBody HeroEntity entity) {
		service.updateEntity(entity);
	}
}
