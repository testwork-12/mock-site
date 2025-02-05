package com.mock_api.exception;

public class NoImageClassException extends Throwable {
	private Class entity;

	public NoImageClassException(Class entity) {
		this.entity = entity;
	}

	@Override
	public String toString() {
		return "NoImageClassException : " + entity;
	}
}
