/**
 * FileName: BaseException.java
 * extends RunctimeException
 */
package com.mobilesoft.smarttaxi.common.exception;

public class BaseException extends RuntimeException
{
	public BaseException()
	{
		super();
	}
	
	public BaseException(String message)
	{
		super(message);
	}
	
	public BaseException(String message, Throwable cause)
	{
		super(message, cause);
	}
	
	public BaseException(Throwable cause)
	{
		super(cause);
	}
}
