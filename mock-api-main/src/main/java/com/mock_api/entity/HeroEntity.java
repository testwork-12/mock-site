package com.mock_api.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "hero")
public class HeroEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;

	public HeroEntity() {
	}

	public HeroEntity(String name) {
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Hero{" +
			this.id +
			";" + this.name +
			'}';
	}

	public void copy(HeroEntity entity) {
		this.setName(entity.getName());
	}
}
