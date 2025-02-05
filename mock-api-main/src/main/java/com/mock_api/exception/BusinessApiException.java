package com.mock_api.exception;

public class BusinessApiException extends Throwable {
	private String msg;

	public BusinessApiException(String msg) {
		this.msg = msg;
	}

	@Override
	public String toString() {
		return "BusinessApiException : " + this.msg;
	}
}
