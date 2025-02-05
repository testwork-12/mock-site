package com.mock_api.exception;

public class FileDoesNotExistsException extends Throwable {
	private String msg;

	public FileDoesNotExistsException(String msg) {
		this.msg = msg;
	}

	@Override
	public String toString() {
		return "FileDoesNotExistsException : " + this.msg;
	}
}
