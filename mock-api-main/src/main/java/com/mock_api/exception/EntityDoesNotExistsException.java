package com.mock_api.exception;

public class EntityDoesNotExistsException extends Exception {
	private Object entity;

	public EntityDoesNotExistsException(Object entity) {
		this.entity = entity;
	}

	@Override
	public String toString() {
		return "EntityDoesNotExistsException : " + entity;
	}
}
